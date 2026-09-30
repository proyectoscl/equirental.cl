export default function sitemap(){
 const base='https://www.equirental.cl';
 return [
  {url:base,lastModified:new Date(),changeFrequency:'weekly',priority:1},
  {url:`${base}/equipos/tijera-8m`,lastModified:new Date(),changeFrequency:'monthly',priority:0.9},
  {url:`${base}/equipos/tijera-10m`,lastModified:new Date(),changeFrequency:'monthly',priority:0.9},
  {url:`${base}/equipos/tijera-12m`,lastModified:new Date(),changeFrequency:'monthly',priority:0.9},
  {url:`${base}/equipos/articulada-12m`,lastModified:new Date(),changeFrequency:'monthly',priority:0.9},
  {url:`${base}/equipos/articulada-16m`,lastModified:new Date(),changeFrequency:'monthly',priority:0.9}
 ];
}
