import { Home, Snowflake, Tv, ChefHat, Wifi, Trees } from 'lucide-react';

export default function Deliverables() {
  const items = [
    {
      id: 'del-1',
      icon: Home,
      title: 'Apartamento Amoblado Completamente',
      desc: 'Con 2 o 3 espaciosas habitaciones con colchones ortopédicos de alto confort, closets amplios y elegante decoración moderna tropical.'
    },
    {
      id: 'del-2',
      icon: Snowflake,
      title: 'Climatización Total de Alta Eficiencia',
      desc: 'Aires acondicionados tipo inverter nuevos y silenciosos instalados en absolutamente todas las habitaciones y áreas de sala común.'
    },
    {
      id: 'del-3',
      icon: Tv,
      title: 'Dispositivo Smart TV & Streaming',
      desc: 'Pantallas UHD en la sala con perfiles activos de Netflix, YouTube Premium y una parrilla completa de canales internacionales.'
    },
    {
      id: 'del-4',
      icon: ChefHat,
      title: 'Cocina Integral de Dotación Completa',
      desc: 'Nevera de gran tamaño, estufa, microondas, licuadora, cafetera, sartenes antiadherentes y juego completo de cubiertos y platos.'
    },
    {
      id: 'del-5',
      icon: Wifi,
      title: 'Conexión de Fibra Óptica Segura',
      desc: 'WiFi de altísima velocidad y baja latencia. Ideal tanto para trabajo remoto continuo, reuniones de Zoom o streaming paralelo.'
    },
    {
      id: 'del-6',
      icon: Trees,
      title: 'Piscina Recreativa & Zonas Comunes',
      desc: 'Acceso total y libre a la piscina cristalina del edificio, terrazas de asoleamiento y un moderno lobby de ingreso con vigilancia.'
    }
  ];

  return (
    <section id="deliverables" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#556B2F] tracking-tight">
            Tu Apartamento Incluye:
          </h2>
          <div className="h-1.5 w-16 bg-[#556B2F] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-[#556B2F] text-white p-8 rounded-3xl border border-[#556B2F]/20 shadow-lg hover:shadow-[0_20px_40px_rgba(85,107,47,0.35)] transition-all duration-300 transform hover:-translate-y-2.5 hover:scale-[1.03] flex flex-col space-y-4 cursor-pointer relative overflow-hidden group"
              >
                {/* Subtle light reflections for 3D depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="inline-flex items-center justify-center p-3.5 bg-white/15 rounded-2xl text-white w-14 h-14 shadow-md group-hover:bg-white/20 transition-all duration-300">
                  <IconComponent className="h-7 w-7" />
                </div>
                
                <h3 className="font-sans font-black text-lg text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-sm text-[#F0F5EB]/90 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
