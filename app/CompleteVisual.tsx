import data from './complete-images.json';
import './complete-images.css';
type Entry={id:string;src:string;type:string;label:string;alt:string;caption:string;note:string;credit:string;page?:string;license?:string;licenseUrl?:string;position?:string;fit?:string;width?:number;height?:number};
const entries=data as Record<string,Entry>;
export const completeEntry=(index:number)=>entries[index];
export function CompleteVisual({index}:{index:number}){const d=entries[index];return <figure className={`complete-art complete-${d.type} image-${d.id} ${d.fit==='cover'?'complete-crop':''}`}><img width={d.width} height={d.height} src={d.src} alt={d.alt} draggable={false} onLoad={async ev=>{const img=ev.currentTarget;try{await img.decode();}catch{}img.dataset.ready='true';}} style={{objectPosition:d.position||'center',objectFit:(d.fit||'contain') as 'contain'|'cover'}}/><figcaption>{d.caption}</figcaption></figure>}
