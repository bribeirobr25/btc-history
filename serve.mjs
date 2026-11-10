import http from 'node:http';
import {readFile, stat, realpath} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.woff2':'font/woff2'};
const inside = (root, file) => {
  const relative = path.relative(root, file);
  return relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative);
};

export function createStaticServer(directory) {
  const root = path.resolve(directory);
  return http.createServer(async (req, res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'no-referrer');
    try {
      if (!['GET', 'HEAD'].includes(req.method)) {
        res.writeHead(405, {Allow:'GET, HEAD'}); res.end(); return;
      }
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
      // Check path boundaries, not string prefixes (e.g. dist versus dist-private).
      if (!inside(root, file)) { res.writeHead(403); res.end('Forbidden'); return; }
      const [realRoot, realFile] = await Promise.all([realpath(root), realpath(file)]);
      // A symlink in the served folder must not expose a file outside that folder.
      if (!inside(realRoot, realFile)) { res.writeHead(403); res.end('Forbidden'); return; }
      if (!(await stat(realFile)).isFile()) throw new Error('Not a file');
      const data = await readFile(realFile);
      res.writeHead(200, {'Content-Type':mime[path.extname(realFile)] || 'application/octet-stream','Content-Length':data.length,'Cache-Control':'no-cache'});
      res.end(req.method === 'HEAD' ? undefined : data);
    } catch {
      res.writeHead(404, {'Content-Type':'text/plain'}); res.end('Not found');
    }
  });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const directory = fileURLToPath(new URL('./dist/', import.meta.url));
  try {
    if (!(await stat(path.join(directory, 'index.html'))).isFile()) throw new Error('Missing build');
  } catch {
    console.error('The site has not been built. Run npm ci, then npm start.');
    process.exit(1);
  }
  const server = createStaticServer(directory);
  const port = Number(process.env.PORT || 4173);
  server.on('error', error => {
    console.error(error.code === 'EADDRINUSE' ? `Port ${port} is busy. Try: PORT=4174 npm start` : 'Unable to start the local server.');
    process.exitCode = 1;
  });
  server.listen(port, '127.0.0.1', () => console.log(`Bitcoin — The Human Story\nOpen http://127.0.0.1:${server.address().port}\nPress Ctrl+C to stop.`));
}
