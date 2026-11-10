import {build} from 'esbuild';
import {mkdir,copyFile,writeFile,cp,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
await build({entryPoints:['client.tsx'],bundle:true,outdir:'dist',entryNames:'app',minify:true,sourcemap:false,jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},nodePaths:process.env.BITCOIN_BUILD_MODULES?[process.env.BITCOIN_BUILD_MODULES]:[]});
await copyFile('public/favicon.svg','dist/favicon.svg');
await cp('public/assets','dist/assets',{recursive:true});
await writeFile('dist/index.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#10120f"><title>Bitcoin — The Human Story</title><meta name="description" content="An independent interactive story of Bitcoin, its history and its effects on society. No price predictions. No taking sides."><link rel="icon" href="./favicon.svg"><link rel="stylesheet" href="./app.css"></head><body><div id="root"></div><script type="module" src="./app.js"></script></body></html>`);
console.log('Built Bitcoin — The Human Story');
