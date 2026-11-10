import {execFileSync} from 'node:child_process';
import {readFileSync} from 'node:fs';

// Scan the exact staged snapshot so later working-tree edits cannot hide a staged leak.
const staged = process.argv.includes('--staged');
const files = execFileSync('git', ['ls-files', '-z'], {encoding:'utf8'}).split('\0').filter(Boolean);
const privateTerms = (process.env.PRIVACY_DENY_TERMS || '').split(',').map(x=>x.trim()).filter(x=>x.length>2);
const roots = ['Users','home','private','var'].join('|');
const absolutePath = new RegExp('/(?:'+roots+')/(?:[^\\s"\'<>]+)', 'i');
const windowsPath = new RegExp('[A-Z]:[\\\\/]'+'Users[\\\\/]', 'i');
const email = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
const credential = /(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|AKIA[A-Z0-9]{16}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|sk-[A-Za-z0-9_-]{32,})/;
const forbidden = /(?:^|\/)(?:node_modules|dist|qa(?:-[^/]*)?|\.audit|\.private|\.git|\.codex|\.agents|\.aws|\.ssh)(?:\/|$)|(?:^|\/)(?:\.env(?:\..*)?|\.npmrc|\.netrc|id_rsa|id_ed25519|\.DS_Store)$|\.(?:zip|pem|key|p12|pfx|log)$/i;
const textTypes = /\.(?:md|json|mjs|js|jsx|ts|tsx|css|html|yml|yaml|toml|txt|svg)$/i;
const issues=[];
for (const file of files) {
 if (forbidden.test(file) && !file.endsWith('/.env.example') && file!=='.env.example') issues.push([file,'forbidden file']);
 const b=staged ? execFileSync('git',['show',':'+file],{maxBuffer:32*1024*1024}) : readFileSync(file);
 if (b.length>50*1024*1024) issues.push([file,'oversized file']);
 const raw=b.toString('utf8');
 for(const term of privateTerms) if(raw.toLowerCase().includes(term.toLowerCase())||file.toLowerCase().includes(term.toLowerCase())) issues.push([file,'private identifier']);
 if(textTypes.test(file)) {
  if(absolutePath.test(raw)||windowsPath.test(raw))issues.push([file,'absolute personal filesystem path']);
  if(email.test(raw))issues.push([file,'email address requiring review']);
  if(credential.test(raw))issues.push([file,'credential pattern']);
  if(/"generationId"\s*:/.test(raw))issues.push([file,'internal generation identifier']);
 }
}
if(issues.length){for(const [file,rule]of issues)console.error(`${file}: ${rule}`);process.exitCode=1;}
else console.log(`PASS: privacy policy checked ${files.length} ${staged?'staged':'tracked'} files. No matched values are logged.`);
