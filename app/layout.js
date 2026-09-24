import './globals.css';
export const metadata={
 title:'EquiRental | Arriendo de Plataformas Eléctricas en Chile',
 description:'Arriendo de plataformas de tijera eléctricas de 8, 10 y 12 metros y brazos articulados eléctricos de 12 y 15 metros para obras, mantenimiento e industria.',
 keywords:['arriendo plataforma tijera','arriendo alza hombre','plataformas eléctricas','brazo articulado','trabajo en altura','Chile'],
 robots:{index:true,follow:true},
 openGraph:{title:'EquiRental | Equipos para trabajo en altura',description:'Plataformas de tijera y brazos articulados eléctricos para arriendo en Chile.',type:'website',locale:'es_CL'}
};
export default function RootLayout({children}){return <html lang="es"><body>{children}</body></html>}