import images from './pilot-images.json';
import './pilot-images.css';
const entries=images as Record<string,{id:string;src:string;scene:boolean;alt:string}>;
export function hasPilot(index:number){return !!entries[index]}
export function PilotVisual({index}:{index:number}){const image=entries[index];return <div className={`pilot-art${image.scene?' pilot-scene':''}`}><img src={image.src} alt={image.alt} draggable={false} onLoad={async ev=>{const img=ev.currentTarget;try{await img.decode();}catch{}img.dataset.ready="true";}} decoding="async"/></div>}
