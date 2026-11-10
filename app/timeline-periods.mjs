// Navigation anchors only: every record stays in the same chronological sequence.
export const periodNavigation = [
 {id:'origins',label:'2008–2012',eventId:'bitcoin-domain'},
 {id:'first-halving',label:'2012–2016',eventId:'new-issuance-is-cut-in-half'},
 {id:'second-halving',label:'2016–2024',eventId:'the-second-halving'},
 {id:'fourth-halving',label:'2024–2028',eventId:'the-fourth-halving'},
 {id:'future',label:'Future',eventId:'fifth-halving'}
];
export function periodForIndex(events,index){
 return periodNavigation.reduce((active,period)=>{
  const anchor=events.findIndex(event=>event.id===period.eventId);
  return anchor>=0&&index>=anchor?period:active;
 },periodNavigation[0]);
}
