import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const d=JSON.parse(readFileSync('app/timeline-data.json')),by=Object.fromEntries(d.events.map(e=>[e.id,e]));
const dates={'spending-can-create-paperwork':'2014-03-25','does-an-incentive-become-a-habit':'2022-04-25','the-wider-crypto-crisis-reaches-users':'2023-02-20','a-legal-tender-decision-is-reversed':'2023-04-06','an-account-balance-is-a-promise':'2022-11-11','a-decade-later-repayment-begins':'2024-07-05','mica-moves-into-application':'2024-12-30','brazil-s-framework-reaches-supervision':'2026-02-02','csv':'2016-07-04','a-serious-bug-is-disclosed':'2018-09-20'};
for(const [id,date] of Object.entries(dates))assert.equal(by[id].sortDate,date,id);
assert.match(by['an-account-balance-is-a-promise'].summary,/2 November 2023.*28 March 2024/);
assert.match(by['el-salvador-changes-the-terms'].summary,/1 May/);
assert.match(JSON.stringify(by.bip324.sections),/disabled by default/);
for(const e of d.events){assert.equal(new Set(e.sources).size,e.sources.length);if(e.kind==='history')assert.equal(e.year,e.sortDate.slice(0,4));if(e.sortBasis==='period_end')assert(e.sections.some(s=>/date|retrospective/i.test(s[0])));}
for(const id of ['dollar-parity','ghash','funding-when-banking-access-is-blocked','terra-reserves'])assert.match(by[id].evidenceStatus,/Attributed/);
assert.notEqual(d.metadata.cutoff,d.metadata.reviewedAt);
console.log('PASS: corrected legal/research/incident dates, verdict vs sentence, attribution limits, unique source references and review/cutoff separation.');
