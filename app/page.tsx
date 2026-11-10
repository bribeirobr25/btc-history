"use client";
import {useEffect,useState} from 'react';
import Timeline from './Timeline';
import './timeline-only.css';

export default function Home(){
 const [paused,setPaused]=useState(false);
 useEffect(()=>{setPaused(matchMedia('(prefers-reduced-motion: reduce)').matches);},[]);
 return <main className={`site timeline-only${paused?' paused':''}`}>
  <h1 className="sr-only">Bitcoin — The Human Story</h1>
  <Timeline paused={paused} onToggleMotion={()=>setPaused(value=>!value)}/>
 </main>;
}
