import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {subsidySats,scheduledSatsThrough} from '../app/issuance.mjs';
const d=JSON.parse(readFileSync('app/timeline-data.json','utf8')),ev=d.events,ids=new Set(ev.map(e=>e.id)),src=new Set(d.sources.map(s=>s.id));
assert.equal(ids.size,ev.length);assert.equal(ev.filter(e=>e.kind==='history').length,117);assert.equal(ev.filter(e=>e.main&&e.kind==='history').length,26);assert.equal(ev.filter(e=>e.kind==='milestone').length,2);assert.equal(ev.filter(e=>e.kind==='proposal').length,6);
let last='',phase=0;for(const e of ev){let n=['history','milestone','proposal'].indexOf(e.kind);assert(n>=phase);phase=n;if(!n){assert(e.sortDate>=last);last=e.sortDate;}else{assert(e.assumption);assert(e.datePrecision==='estimate'||e.datePrecision==='none');}assert(e.sections.length>=2);assert(e.sources.length&&e.sources.every(x=>src.has(x)));assert(e.reviewed===d.metadata.reviewedAt);assert(e.art>=0&&(e.art<=37||e.art>=100));for(const ph of e.photos){assert(existsSync('public'+ph.src));assert(ph.credit&&ph.licenseUrl);}}
for(const p of d.paths){assert(p.members.every(id=>ids.has(id)));assert.equal(new Set(p.members).size,p.members.length);}for(const s of d.sources)assert(new URL(s.url).protocol==='https:');
assert.equal(subsidySats(1049999),312500000);assert.equal(subsidySats(1050000),156250000);assert.equal(subsidySats(6929999),1);assert.equal(subsidySats(6930000),0);assert.equal(scheduledSatsThrough(6929999),2099999997690000n);assert.equal(scheduledSatsThrough(6930000),scheduledSatsThrough(6929999));
assert(existsSync('dist/app.js'));console.log('PASS: 125 records, distinct temporal categories, valid sources/paths/assets, sorted history, exact subsidy boundaries and theoretical sum.');
