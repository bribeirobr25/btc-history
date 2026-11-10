import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
const read=p=>JSON.parse(readFileSync(p));
const d=read('app/timeline-data.json'),complete=read('app/complete-images.json'),doc=read('app/documentary-images.json'),pilot=read('app/pilot-images.json');
const hashes=new Set();
for(const e of d.events){
 const image=complete[e.art]||doc[e.art]||pilot[e.art];
 assert(image?.src,`No image for ${e.id}`);assert.equal(image.id,e.id);
 assert(existsSync('public'+image.src),`Missing ${image.src}`);
 const hash=createHash('sha256').update(readFileSync('public'+image.src)).digest('hex');
 assert(!hashes.has(hash),`Duplicate image: ${e.id}`);hashes.add(hash);
 if(complete[e.art]){assert(image.alt&&image.caption&&image.note&&image.credit,e.id);if(image.type==='generated')assert(image.label.includes('AI-GENERATED'));}
}
assert.equal(hashes.size,125);
console.log('PASS: all 125 events have unique, local raster images and descriptive metadata.');
