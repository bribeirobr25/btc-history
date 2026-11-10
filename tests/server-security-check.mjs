import assert from 'node:assert/strict';
import {mkdtemp, mkdir, writeFile, symlink, rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import http from 'node:http';
import {createStaticServer} from '../serve.mjs';
const base = await mkdtemp(path.join(tmpdir(), 'btc-server-test-'));
const root = path.join(base, 'dist');
await mkdir(root); await mkdir(path.join(base, 'dist-private'));
await writeFile(path.join(root,'index.html'), 'public page');
await writeFile(path.join(base,'dist-private','fixture.txt'), 'outside canary');
await symlink(path.join(base,'dist-private','fixture.txt'),path.join(root,'linked.txt'));
const server=createStaticServer(root);
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
function request(url, method='GET') {
 return new Promise((resolve,reject)=>{
  const req=http.request({hostname:'127.0.0.1',port:server.address().port,path:url,method},res=>{
   let body='';res.on('data',d=>body+=d);res.on('end',()=>resolve({status:res.statusCode,body,headers:res.headers}));
  });req.on('error',reject);req.end();
 });
}
try {
 assert.equal((await request('/')).body,'public page');
 assert.equal((await request('/','HEAD')).body,'');
 assert.equal((await request('/','POST')).status,405);
 assert.equal((await request('/missing')).status,404);
 assert.equal((await request('/%invalid')).status,404);
 for(const u of ['/..%2fdist-private%2ffixture.txt','/linked.txt']) {
  const r=await request(u);assert.equal(r.status,403);assert(!r.body.includes('outside canary'));
 }
 assert.equal((await request('/')).headers['x-content-type-options'],'nosniff');
 console.log('PASS: static server blocks traversal, sibling-directory prefixes and symlink escapes.');
} finally {await new Promise(resolve=>server.close(resolve));await rm(base,{recursive:true,force:true});}
