import { ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-16 bg-white flex flex-col items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center">
        
        {/* Main Badge Container */}
        <div className="relative group inline-block">
          {/* Golden background aura */}
          <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          
          <div className="relative flex flex-col items-center bg-[#556B2F] border-4 border-[#FFD700] rounded-full w-56 h-56 justify-center text-white px-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            {/* Crown sparkles */}
            <div className="absolute -top-3 text-yellow-400">
              <Sparkles className="h-6 w-6 fill-current" />
            </div>

            <ShieldCheck className="h-10 w-10 text-[#FFD700] mb-2 stroke-[2]" />
            
            <span className="block text-[9px] font-black uppercase tracking-widest text-yellow-300 leading-none">
              GARANTÍA DE SATISFACCIÓN
            </span>
            
            <span className="block font-sans font-black text-xs uppercase tracking-tight text-center my-1.5 text-white">
              Soporte 24/7 de Conserjería
            </span>
            
            <span className="block text-[8px] text-gray-300 uppercase tracking-widest">
              WhatsApp Directo
            </span>
          </div>
        </div>

        {/* Informative text below the badge */}
        <div className="mt-8 space-y-2">
          <h4 className="font-sans font-extrabold text-lg text-gray-950">
            Respaldo Incondicional Durante tu Estadía
          </h4>
          <p className="text-sm text-gray-650 max-w-sm mx-auto leading-relaxed">
            No estarás solo en ningún momento. Estamos dedicados a resolver dudas, recomendar tours, o gestionar cualquier novedad técnica por WhatsApp en tiempo récord.
          </p>
        </div>

      </div>
    </section>
  );
}
