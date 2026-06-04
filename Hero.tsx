import { Waves, Sparkles, Award, UserCheck, ChevronDown } from 'lucide-react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onLearnMoreClick: () => void;
}

export default function Hero({ onLearnMoreClick }: HeroProps) {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Banner with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-scale duration-1000 scale-105"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/60 to-gray-950/80" />
      </div>

      {/* Decorative Wave Design / Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(85,107,47,0.15),transparent_40%)]" />

      {/* Floating Sparkles and Background Accents */}
      <div className="absolute top-1/4 left-10 text-white/5 animate-pulse hidden md:block">
        <Waves className="h-40 w-40" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 z-10 text-center py-20 flex flex-col items-center">
        {/* Headline */}
        <h1 
          id="hero-headline"
          className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mb-6"
        >
          Vive Cartagena <span className="text-[#99B882]">Como un Local</span>: Cómodos apartamentos cerca al mar.
        </h1>



        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md mb-16">
          <button
            id="hero-cta-apartments"
            onClick={onLearnMoreClick}
            className="w-full sm:w-auto bg-[#556B2F] hover:bg-[#6b8243] hover:scale-105 active:scale-95 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all duration-300 transform cursor-pointer"
          >
            VER APARTAMENTOS DISPONIBLES
          </button>
          
          <button
            id="hero-cta-secondary"
            onClick={() => {
              const el = document.getElementById('contacto');
              el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 hover:scale-105 backdrop-blur-md border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-md transition-all duration-300 transform cursor-pointer"
          >
            Consultar Disponibilidad
          </button>
        </div>

        {/* Trust Badges / Floatings */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl">
          <div className="bg-white/5 backdrop-blur-md hover:bg-white/15 border border-white/10 p-4 rounded-2xl flex items-center space-x-3 text-left transition-colors duration-300">
            <div className="p-2 bg-[#556B2F]/30 rounded-xl text-yellow-400">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <span className="block font-bold text-lg text-white leading-none">4 Años</span>
              <span className="block text-xs text-gray-300">de Operación Local</span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md hover:bg-white/15 border border-white/10 p-4 rounded-2xl flex items-center space-x-3 text-left transition-colors duration-300">
            <div className="p-2 bg-[#556B2F]/30 rounded-xl text-yellow-400">
              <UserCheck className="h-6 w-6" />
            </div>
            <div>
              <span className="block font-bold text-lg text-white leading-none">+2,000</span>
              <span className="block text-xs text-gray-300">Huéspedes Felices</span>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 bg-white/5 backdrop-blur-md hover:bg-white/15 border border-white/10 p-4 rounded-2xl flex items-center space-x-3 justify-center md:justify-start text-left transition-colors duration-300">
            <div className="p-2 bg-[#556B2F]/30 rounded-xl text-yellow-400">
              <span className="font-bold text-base">⭐️⭐️⭐️⭐️⭐️</span>
            </div>
            <div>
              <span className="block font-bold text-sm text-white leading-none">9.8/10</span>
              <span className="block text-xs text-gray-300">Booking & Airbnb</span>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <button
          onClick={onLearnMoreClick}
          className="absolute bottom-6 flex flex-col items-center text-white/50 hover:text-white transition-colors cursor-pointer animate-bounce group"
        >
          <span className="text-xs font-mono tracking-widest uppercase mb-1">Descubrir</span>
          <ChevronDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
