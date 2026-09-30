import './globals.css';

export const metadata={
 metadataBase:new URL('https://www.equirental.cl'),
 title:{
  default:'EquiRental | Arriendo de Plataformas Elevadoras en Chile',
  template:'%s | EquiRental'
 },
 description:'Arriendo de plataformas elevadoras eléctricas en Chile. Plataformas de tijera de 8, 10 y 12 metros y brazos articulados de 12 y 16 metros para obras, mantenimiento e industria.',
 keywords:['arriendo plataforma tijera','arriendo plataforma elevadora','arriendo alza hombre','arriendo brazo articulado','plataformas eléctricas','trabajo en altura','arriendo maquinaria Chile','Santiago'],
 alternates:{canonical:'/'},
 robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}},
 openGraph:{
  title:'EquiRental | Arriendo de Plataformas Elevadoras',
  description:'Arriendo de plataformas de tijera y brazos articulados eléctricos para trabajos en altura en Chile.',
  url:'https://www.equirental.cl',
  siteName:'EquiRental',
  images:[{url:'/LOGOTIPO.png',alt:'EquiRental - Arriendo de plataformas elevadoras'}],
  locale:'es_CL',
  type:'website'
 },
 twitter:{card:'summary_large_image',title:'EquiRental | Arriendo de Plataformas Elevadoras',description:'Plataformas de tijera y brazos articulados eléctricos para arriendo en Chile.',images:['/LOGOTIPO.png']},
 icons:{icon:'/icon.svg'},
 category:'Arriendo de maquinaria y equipos'
};

const organization={
 '@context':'https://schema.org',
 '@type':'Organization',
 name:'EquiRental',
 url:'https://www.equirental.cl',
 logo:'https://www.equirental.cl/LOGOTIPO.png',
 email:'contacto@equirental.cl',
 telephone:'+56233247534',
 description:'Arriendo de plataformas elevadoras eléctricas, plataformas de tijera y brazos articulados para trabajos en altura en Chile.',
 areaServed:{'@type':'Country',name:'Chile'}
};

export default function RootLayout({children}){return <html lang="es-CL"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}} />{children}</body></html>}
