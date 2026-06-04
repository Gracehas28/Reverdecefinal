import { Check, Flame } from 'lucide-react';

export default function Benefits() {
  const benefitsList = [
    {
      title: 'Despierta cerca al mar',
      desc: 'Disfruta de vistas idílicas al océano Caribe sin pagar tarifas infladas de hoteles 5 estrellas.'
    },
    {
      title: 'Privacidad absoluta para todos',
      desc: 'Mantén a tu grupo unido en el mismo bloque residencial, asignando a cada familia su propio apartamento independiente.'
    },
    {
      title: 'Gran ahorro en comidas',
      desc: 'Ahorra un dineral cocinando de manera cómoda en cocinas integrales completamente equipadas con utensilios y vajilla.'
    },
    {
      title: 'Seguridad y soporte continuo',
      desc: 'Vigilancia permanente en el lobby del edificio y un canal prioritario de WhatsApp para atender consultas de inmediato.'
    },
    {
      title: 'Ubicación 100% transitable',
      desc: 'Olvida depender de vehículos; camina a pie a supermercados, una variada oferta gastronómica y playas emblemáticas.'
    },
    {
      title: 'Tours locales garantizados',
      desc: 'Accede a pasadías y recorridos turísticos premium con tarifas exclusivas y operadores locales calificados de total confianza.'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Side visual mockup */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Decorative block */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#556B2F]/10 rounded-3xl -z-10" />
              <img
                src="https://i.imgur.com/UzsrBOa.jpeg"
                alt="Apartamento Premium Reverdece Cartagena"
                className="w-full h-auto object-cover rounded-3xl shadow-xl border border-gray-150"
                referrerPolicy="no-referrer"
              />
              {/* Real-time floating review */}
              <div className="absolute -bottom-6 right-4 sm:-right-6 bg-[#556B2F] text-white p-4 rounded-2xl shadow-lg border border-[#556B2F]/30 max-w-xs">
                <div className="flex items-center space-x-1 text-yellow-300 text-sm mb-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-xs font-semibold leading-relaxed">
                  "Apartamentos muy cómodos cerca de toda la parte turística, en la zona encuentras restaurantes y tiendas. Nos encanto"
                </p>
                <span className="block text-[10px] text-[#99B882] mt-2 text-right">— Familia Medellín</span>
              </div>
            </div>
          </div>

          {/* Benefits bullets content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center space-x-1 bg-[#556B2F]/10 text-[#556B2F] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Flame className="h-3.5 w-3.5 fill-[#556B2F]" />
              <span>LO MEJOR DE DOS MUNDOS</span>
            </div>

            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight leading-tight">
              Beneficios diseñados para unas vacaciones sin preocupaciones
            </h2>
            
            <p className="text-gray-600">
              Ofrecemos todo lo necesario para que tu viaje grupal a Cartagena se traduzca en diversión y recuerdos imborrables, evitando los altos costos y la rigidez de un hotel convencional.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-4">
              {benefitsList.map((ben, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1 p-1 bg-[#556B2F]/15 text-[#556B2F] rounded-full">
                    <Check className="h-4 w-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-base text-gray-900 tracking-tight">
                      {ben.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      {ben.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
