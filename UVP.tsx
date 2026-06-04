import { MapPin, Building2, Eye, Droplet, ShieldCheck } from 'lucide-react';

export default function UVP() {
  const values = [
    {
      id: 'uvp-1',
      icon: MapPin,
      title: 'UBICACIÓN PRIVILEGIADA',
      desc: 'Nuestros apartamento estan ubicados a pocas cuadras del mar caribe, en zonas turisticas a pocos minutos del centro amurallado.',
      tag: 'Cercanía Total'
    },
    {
      id: 'uvp-2',
      icon: Building2,
      title: 'CAPACIDAD GRUPAL',
      desc: 'Hasta 15 apartamentos completamente amoblados en el mismo edificio. Juntos pero con privacidad.',
      tag: '100% Flexibilidad'
    },
    {
      id: 'uvp-3',
      icon: Eye,
      title: 'VISTAS AL MAR',
      desc: 'Despierta cada mañana contemplando los atardeceres y el esplendor del océano desde tu balcón.',
      tag: 'Paisaje Único'
    },
    {
      id: 'uvp-4',
      icon: Droplet,
      title: 'PISCINA & AMENIDADES',
      desc: 'Disfruta de la piscina privada del edificio y cómodas áreas comunes diseñadas para tu descanso.',
      tag: 'Relax Asegurado'
    }
  ];

  return (
    <section id="uvp" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#556B2F] mb-3">
            Nuestros Pilares de Servicio
          </h2>
          <p className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
            La diferencia de hospedarte con REVERDECE
          </p>
          <div className="h-1.5 w-20 bg-[#556B2F] mx-auto mt-4 rounded-full" />
        </div>

        {/* Horizontal & Card Layout (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val) => {
            const IconComponent = val.icon;
            return (
              <div
                key={val.id}
                id={val.id}
                className="group relative bg-[#556B2F] hover:bg-[#475b28] p-6 rounded-2xl border-b-[6px] border-r-[2px] border-[#37451e] hover:border-b-[8px] hover:border-r-[3px] hover:translate-y-[-4px] active:translate-y-[2px] active:border-b-[2px] active:border-r-[1px] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="inline-flex p-3 bg-white/10 group-hover:bg-white/20 rounded-xl text-white mb-6 shadow-sm transition-colors duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <h3 className="font-sans font-bold text-lg text-white tracking-tight mb-2">
                    {val.title}
                  </h3>
                  
                  <p className="text-sm text-stone-100/90 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-[10px] font-semibold tracking-wider text-stone-200 uppercase">
                  {val.tag}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
