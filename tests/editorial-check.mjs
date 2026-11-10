import assert from 'node:assert/strict';
import {readFileSync,existsSync,mkdtempSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
import {build} from 'esbuild';
const root=process.cwd(),data=JSON.parse(readFileSync('app/timeline-data.json')),scenes=JSON.parse(readFileSync('app/editorial-scenes.json'));
for(const [id,s] of Object.entries(scenes)){assert(data.events.some(e=>e.art===Number(id)),`Orphan artwork ${id}`);assert(s.title&&s.note&&Array.isArray(s.labels));}
const tmp=mkdtempSync(path.join(tmpdir(),'btc-editorial-'));
try{
 const output=path.join(tmp,'render.cjs');
 await build({stdin:{contents:`import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';import {TimelineObject} from './app/TimelineObjects';import d from './app/timeline-data.json';console.log(JSON.stringify(d.events.map(e=>({id:e.id,html:renderToStaticMarkup(<TimelineObject index={e.art}/>)}))));`,resolveDir:root,loader:'tsx'},outfile:output,bundle:true,platform:'node',format:'cjs',jsx:'automatic',loader:{'.css':'empty'},logLevel:'silent'});
 const rendered=JSON.parse(execFileSync(process.execPath,[output],{encoding:'utf8',maxBuffer:8*1024*1024}));
 assert.equal(rendered.length,125);const distinct=new Set();let refs=0;
 for(const {id,html} of rendered){assert(html.length>100,id);assert(html.includes('<img'),`No raster image: ${id}`);assert(!html.includes('<svg'),`SVG event artwork: ${id}`);assert(!/NaN|undefined|null/.test(html),`Invalid rendering: ${id}`);distinct.add(html);for(const m of html.matchAll(/(?:src|href)="(\/assets\/[^"#]+)"/g)){assert(existsSync(path.join(root,'public',m[1])),`Missing image ${m[1]} in ${id}`);refs++;}}
 assert.equal(distinct.size,125,'Each event should render a distinct composition');
 const byId=Object.fromEntries(rendered.map(r=>[r.id,r.html]));
 assert(data.events.find(e=>e.id==='issuance-ends').summary.includes('blocks can still carry transactions'));
 const pilot=JSON.parse(readFileSync('app/pilot-images.json'));
 assert.equal(Object.keys(pilot).length,12);
 for(const image of Object.values(pilot).filter(i=>![...Object.values(JSON.parse(readFileSync('app/documentary-images.json'))),...Object.values(JSON.parse(readFileSync('app/complete-images.json')))].some(d=>d.id===i.id))){assert(byId[image.id].includes(image.src));assert(!byId[image.id].includes('<svg'));assert(byId[image.id].includes('AI-generated'));}
 assert(data.events.find(e=>e.id==='bip39').summary.includes('recovery phrase'));
 assert(data.events.find(e=>e.id==='a-familiar-wrapper-arrives').summary.includes('custodians'));
 assert(byId['bitcoin-joins-a-corporate-treasury'].includes('Michael Saylor'));
 assert(!byId['donations-cross-borders-during-war'].includes('m258 87'));
 console.log(`PASS: ${rendered.length} actual artwork renders; 125 raster artworks; ${refs} local image references; issuance, backup, custody and donation semantics.`);
}finally{rmSync(tmp,{recursive:true,force:true})}
