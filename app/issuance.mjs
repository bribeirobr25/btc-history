export const INTERVAL=210000;
export function subsidySats(height){return Number(5000000000n >> BigInt(Math.min(64,Math.floor(height/INTERVAL))));}
export function scheduledSatsThrough(height){let total=0n;for(let era=0;era<=Math.min(32,Math.floor(height/INTERVAL));era++){const blocks=Math.min(INTERVAL,height-era*INTERVAL+1);total+=BigInt(blocks)*(5000000000n>>BigInt(era));}return total;}
