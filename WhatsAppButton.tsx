import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltips briefly on load to catch attention
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    const closeTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(closeTimer);
    };
  }, []);

  const handleClick = () => {
    const defaultText = encodeURIComponent(
      'Hola Reverdece Amoblados Cartagena. Quisiera cotizar y consultar disponibilidad para un grupo de viaje.'
    );
    window.open(`https://wa.me/573245916576?text=${defaultText}`, '_blank');
  };

  return (
    <div id="whatsapp-floating-container" className="fixed bottom-6 right-6 z-45 flex flex-col items-end pointer-events-none">
      
      {/* Tooltip message bubble */}
      {showTooltip && (
        <div 
          onClick={handleClick}
          className="bg-white text-gray-800 text-xs font-semibold p-4 rounded-2xl shadow-xl border border-gray-100 max-w-xs mb-3 bubble-anim pointer-events-auto cursor-pointer flex items-start space-x-2 animate-fade-in relative transition-all"
        >
          {/* Closer cross */}
          <button 
            onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
            className="absolute top-1 right-2.5 text-gray-400 hover:text-gray-600 text-[10px] font-bold"
          >
            ×
          </button>
          
          <div className="w-2 h-2 rounded-full bg-green-500 mt-1 animate-ping flex-shrink-0" />
          <div>
            <span className="block font-black text-[#556B2F] text-[10px] uppercase tracking-wider">Anfitrión Reverdece</span>
            <span className="block text-gray-600 mt-0.5 leading-snug">¡Hola! 🌴 ¿Planeas viajar a Cartagena? Consúltame disponibilidad aquí ahora mismo.</span>
          </div>
        </div>
      )}

      {/* Main floating button */}
      <button
        id="whatsapp-trigger"
        onClick={handleClick}
        className="pointer-events-auto bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center animate-bounce-slow relative group cursor-pointer"
        title="¡Consulta disponibilidad ahora!"
      >
        <MessageSquare className="h-7 w-7 fill-current text-white" />
        
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1.5 rounded-full border-2 border-[#25D366]/40 animate-ping opacity-60 pointer-events-none" />
        
        {/* Hover tag */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-950 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Directo
        </span>
      </button>
    </div>
  );
}
