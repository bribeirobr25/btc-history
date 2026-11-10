import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {periodNavigation,periodForIndex} from '../app/timeline-periods.mjs';
const {events}=JSON.parse(readFileSync('app/timeline-data.json'));
const anchors=periodNavigation.map(p=>events.findIndex(e=>e.id===p.eventId));
assert.equal(events.length,125);
assert(anchors.every((n,i)=>n>=0&&(i===0||n>anchors[i-1])));
anchors.forEach((index,i)=>{
 assert.equal(periodForIndex(events,index).id,periodNavigation[i].id);
 if(i)assert.equal(periodForIndex(events,index-1).id,periodNavigation[i-1].id);
});
assert.equal(periodForIndex(events,124).id,'future');
assert.equal(events[anchors[4]].kind,'milestone');
console.log('PASS: all five period anchors, every boundary, and undated proposals in Future.');
