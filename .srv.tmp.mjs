import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';
const ROOT = new URL('./out/', import.meta.url).pathname;
const MIME={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.txt':'text/plain','.xml':'application/xml','.pdf':'application/pdf','.woff2':'font/woff2','.ico':'image/x-icon'};
const exists=async p=>{try{return (await stat(p)).isFile()}catch{return false}};
createServer(async (req,res)=>{
  const url=decodeURIComponent(req.url.split('?')[0]);
  // Emula el .htaccess: prueba el fichero, luego .html, luego 404.html
  const candidates=[join(ROOT,url), join(ROOT,url+'.html'), join(ROOT,url,'index.html')];
  for(const c of candidates){
    if(await exists(c)){
      res.writeHead(200,{'content-type':MIME[extname(c)]||'application/octet-stream'});
      return res.end(await readFile(c));
    }
  }
  res.writeHead(404,{'content-type':'text/html'});
  res.end(await readFile(join(ROOT,'404.html')));
}).listen(4321,()=>console.log('sirviendo out/ en :4321'));
