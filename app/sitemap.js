export default function sitemap(){
 const base='https://www.equirental.cl';
 return [
  {url:base,lastModified:new Date(),changeFrequency:'weekly',priority:1},
  {url:`${base}/arriendo-alza-hombre-santiago`,lastModified:new Date(),changeFrequency:'weekly',priority:0.95},
  {url:`${base}/arriendo-plataformas-elevadoras`,lastModified:new Date(),changeFrequency:'weekly',priority:0.95},
  {url:`${base}/arriendo-plataforma-tijera`,lastModified:new Date(),changeFrequency:'weekly',priority:0.95},
  {url:`${base}/arriendo-brazo-articulado`,lastModified:new Date(),changeFrequency:'weekly',priority:0.95},
  {url:`${base}/equipos/tijera-8m`,lastModified:new Date(),changeFrequency:'monthly',priority:0.9},
  {url:`${base}/equipos/tijera-10m`,lastModified:new Date(),changeFrequency:'monthly',priority:0.9},
  {url:`${base}/equipos/tijera-12m`,lastModified:new Date(),changeFrequency:'monthly',priority:0.9},
  {url:`${base}/equipos/articulada-12m`,lastModified:new Date(),changeFrequency:'monthly',priority:0.9},
  {url:`${base}/equipos/articulada-16m`,lastModified:new Date(),changeFrequency:'monthly',priority:0.9}
  {url:`${base}/arriendo-plataforma-tijera-8-metros`,lastModified:new Date(),changeFrequency:'weekly',priority:0.9},
  {url:`${base}/arriendo-plataforma-tijera-10-metros`,lastModified:new Date(),changeFrequency:'weekly',priority:0.9},
  {url:`${base}/arriendo-plataforma-tijera-12-metros`,lastModified:new Date(),changeFrequency:'weekly',priority:0.9},
  {url:`${base}/arriendo-brazo-articulado-12-metros`,lastModified:new Date(),changeFrequency:'weekly',priority:0.9},
  {url:`${base}/arriendo-brazo-articulado-16-metros`,lastModified:new Date(),changeFrequency:'weekly',priority:0.9},
  {url:`${base}/trabajos`,lastModified:new Date(),changeFrequency:'monthly',priority:0.8},
  {url:`${base}/trabajos/mantenimiento-industrial-altura`,lastModified:new Date(),changeFrequency:'monthly',priority:0.8},
  {url:`${base}/trabajos/instalacion-luminarias-altura`,lastModified:new Date(),changeFrequency:'monthly',priority:0.8},
  {url:`${base}/trabajos/trabajos-electricos-altura`,lastModified:new Date(),changeFrequency:'monthly',priority:0.8},
  {url:`${base}/trabajos/climatizacion-hvac-altura`,lastModified:new Date(),changeFrequency:'monthly',priority:0.8},
  {url:`${base}/trabajos/construccion-montaje-altura`,lastModified:new Date(),changeFrequency:'monthly',priority:0.8},
  {url:`${base}/trabajos/mantenimiento-bodegas-centros-logisticos`,lastModified:new Date(),changeFrequency:'monthly',priority:0.8},
  {url:`${base}/trabajos/pintura-terminaciones-altura`,lastModified:new Date(),changeFrequency:'monthly',priority:0.8},
  {url:`${base}/trabajos/instalacion-senaletica-letreros`,lastModified:new Date(),changeFrequency:'monthly',priority:0.8},
  {url:`${base}/trabajos/mantenimiento-fachadas-altura`,lastModified:new Date(),changeFrequency:'monthly',priority:0.8},
  {url:`${base}/trabajos/trabajos-altura-con-obstaculos`,lastModified:new Date(),changeFrequency:'monthly',priority:0.8},
 ];
}
