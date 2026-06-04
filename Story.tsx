import { CalendarDays, Flag, Sparkles } from 'lucide-react';

export default function Story() {
  return (
    <section id="quienes-somos" className="py-20 bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text/Content block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-1.5 bg-[#556B2F]/10 text-[#556B2F] px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider">
              <CalendarDays className="h-3.5 w-3.5" />
              <span>NUESTRA HISTORIA</span>
            </div>

            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#556B2F] tracking-tight leading-tight">
              ¿Te imaginas despertar con la brisa del Caribe y caminar 5 minutos hasta las murallas históricas?
            </h2>

            <p className="text-lg font-sans font-medium text-gray-700 leading-relaxed italic">
              "Regresa de tus recorridos de compra o de playa a un apartamento completamente equipado donde tu grupo puede relajarse en una preciosa piscina privada..."
            </p>

            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <p>
                Durante <strong>4 años</strong> hemos ayudado a más de <strong>2,000 viajeros</strong> a vivir Cartagena no como turistas tradicionales, sino como locales privilegiados. Entendemos que las vacaciones perfectas requieren un balance entre aventuras compartidas y descanso autónomo.
              </p>
              <p>
                Somos la <strong>única empresa</strong> que te ofrece hasta <strong>15 cómodos apartamentos en el mismo edificio</strong>. Esta propuesta única es ideal para bodas, retiros corporativos, vacaciones familiares numerosas o grupos de amigos que anhelan compartir experiencias inolvidables en grupo, disfrutando siempre de su propio apartamento y privacidad al final del día.
              </p>
            </div>

            {/* Micro milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 p-4 bg-white/60 rounded-xl border border-gray-200">
                <div className="p-2 bg-[#556B2F] text-white rounded-lg">
                  <Flag className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#556B2F] text-sm">Privacidad sin aislamiento</h4>
                  <p className="text-xs text-gray-500">Unidos en un mismo edificio, independientes en cada suite.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-white/60 rounded-xl border border-gray-200">
                <div className="p-2 bg-[#556B2F] text-white rounded-lg">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#556B2F] text-sm">Alojamiento Todo Incluido</h4>
                  <p className="text-xs text-gray-500">Todo listo: desde menaje de cocina hasta WiFi veloz.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual block with image container and details overlay */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#556B2F]/20 to-transparent rounded-3xl -rotate-2 transform scale-105" />
            <div className="relative bg-white p-3 rounded-3xl shadow-xl border border-gray-200/55 overflow-hidden group">
              <div className="overflow-hidden rounded-2xl aspect-[4/5] relative">
                <img
                  src="https://i.imgur.com/qHy7cUx.jpeg"
                  alt="Piscina del edificio REVERDECE Cartagena"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating pill overlays on the image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-gray-100 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-bold text-[#556B2F] tracking-widest uppercase">EDIFICIO ANFITRIÓN</span>
                    <span className="block font-sans font-bold text-sm text-gray-900">Piscina Privada & Áreas Comunes</span>
                  </div>
                  <span className="bg-[#556B2F] text-white text-[10px] font-bold py-1 px-2.5 rounded-full">
                    Sello Premium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
