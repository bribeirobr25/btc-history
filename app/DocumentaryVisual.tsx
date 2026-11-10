import data from './documentary-images.json';
import './documentary-images.css';
type Entry={id:string;src:string;label:string;caption:string;note:string;credit:string;page:string;kind:string;author?:string;license?:string;licenseUrl?:string};
const entries=data as Record<string,Entry>;
export const documentaryEntry=(index:number)=>entries[index];
export function DocumentaryVisual({index}:{index:number}){const d=entries[index];return <figure className={`documentary-art documentary-${d.kind}`}>{["document","portrait","atm","notice","order"].includes(d.kind)?<div className="documentary-zoom"><img src={d.src} alt={`${d.caption}. ${d.note}`} draggable={false} onLoad={async ev=>{const img=ev.currentTarget;try{await img.decode();}catch{}img.dataset.ready="true";}}/></div>:<img src={d.src} alt={`${d.caption}. ${d.note}`} draggable={false} onLoad={async ev=>{const img=ev.currentTarget;try{await img.decode();}catch{}img.dataset.ready="true";}}/>}<figcaption>{d.caption}</figcaption></figure>}
