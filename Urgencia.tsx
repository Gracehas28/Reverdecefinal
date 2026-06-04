import { useState, useEffect } from 'react';
import { Timer, AlertTriangle } from 'lucide-react';

export default function Urgencia() {
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 15 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to create infinite FOMO effect
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatUnit = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section id="urgencia" className="py-12 bg-amber-50/50 border-l-8 border-[#556B2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Urgent warnings and explanations */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-3.5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">
              <AlertTriangle className="h-4 w-4 animate-bounce" />
              <span>ALTA DEMANDA RECIENTE</span>
            </div>

            <h3 className="font-sans font-black text-2xl sm:text-3xl text-gray-900 leading-tight">
              Solo quedan <span className="text-red-600 underline">4 apartamentos disponibles</span> para las próximas 2 semanas
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              Las fechas más solicitadas (puentes festivos, diciembre-enero, Semana Santa) se agotan rápidamente. Cartagena es uno de los destinos vacacionales más populares de Colombia. Gracias a nuestra ubicación privilegiada y amenidades, los apartamentos de REVERDECE son los primeros en reservarse.
            </p>


          </div>

          {/* Sizzling ticking alarm countdown box */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-amber-200 shadow-md flex flex-col items-center justify-center text-center space-y-4">
            <div className="p-3 bg-red-100 text-red-600 rounded-full animate-pulse">
              <Timer className="h-6 w-6" />
            </div>

            <div className="bg-[#556B2F] text-white font-extrabold px-4 py-1.5 rounded-full text-xs sm:text-sm tracking-wide animate-pulse">
              Obtén un 10% de descuento reservando ahora
            </div>

            <div>
              <span className="block text-xs uppercase font-extrabold tracking-widest text-[#808080]">
                La oferta de reserva anticipada expira en:
              </span>
              
              {/* Digit indicators */}
              <div className="flex items-center justify-center space-x-3 mt-3 font-mono">
                <div className="flex flex-col">
                  <span className="bg-gray-900 text-white text-3xl font-black py-2 px-3.5 rounded-xl shadow">
                    {formatUnit(timeLeft.hours)}
                  </span>
                  <span className="text-[10px] text-gray-400 mt-1 uppercase font-bold">Horas</span>
                </div>
                <span className="text-2xl font-black text-gray-900 animate-pulse">:</span>
                <div className="flex flex-col">
                  <span className="bg-gray-900 text-white text-3xl font-black py-2 px-3.5 rounded-xl shadow">
                    {formatUnit(timeLeft.minutes)}
                  </span>
                  <span className="text-[10px] text-gray-400 mt-1 uppercase font-bold">Minutos</span>
                </div>
                <span className="text-2xl font-black text-gray-900 animate-pulse">:</span>
                <div className="flex flex-col">
                  <span className="bg-red-600 text-white text-3xl font-black py-2 px-3.5 rounded-xl shadow">
                    {formatUnit(timeLeft.seconds)}
                  </span>
                  <span className="text-[10px] text-red-500 mt-1 uppercase font-bold">Segundos</span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-[#808080] font-mono leading-none">
              *Tarifas promocionales sujetas a disponibilidad del edificio.
            </p>

            <button
              onClick={() => {
                const el = document.getElementById('contacto');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full text-center py-3 px-5 bg-red-600 hover:bg-[#556B2F] text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
            >
              APLICAR MI DESCUENTO YA
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
