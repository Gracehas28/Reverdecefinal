import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  currentPage: 'home' | 'quienes-somos' | 'preguntas';
  setCurrentPage: (page: 'home' | 'quienes-somos' | 'preguntas') => void;
}

export default function Footer({ currentPage, setCurrentPage }: FooterProps) {
  const handleScrollToBooking = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById('contacto');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('contacto');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#111827] text-white border-t-4 border-[#556B2F]">
      
      {/* Persuasive Call To Action Closing Banner */}
      <div className="relative py-16 bg-gradient-to-r from-slate-900 via-[#111827] to-indigo-950 overflow-hidden">
        {/* Background visual water mark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 font-sans font-black text-7xl sm:text-9xl pointer-events-none select-none tracking-widest uppercase">
          Cartagena
        </div>

        <div className="relative max-w-5xl mx-auto px-4 text-center space-y-6 z-10 flex flex-col items-center">
          <span className="text-xs font-black tracking-widest text-white uppercase block">
            🌴 NO DEJES TU EXPERIENCIA EN CARTAGENA AL AZAR
          </span>

          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight max-w-3xl">
            Tus próximas vacaciones merecen la calidez de un hogar y el confort de un hotel 5 estrellas
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Más de 2,000 familias e incansables comitivas turísticas de amigos ya confiaron en nuestro bloque de suites REVERDECE para crear memorias eternas.
          </p>

          <div className="pt-4">
            <button
              onClick={handleScrollToBooking}
              className="px-8 py-4 bg-[#556B2F] hover:bg-[#4169E1] text-white text-base font-extrabold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer uppercase tracking-wide"
            >
              RESERVAR MI APARTAMENTO - ÚLTIMAS DISPONIBILIDADES
            </button>
          </div>

          <p className="text-[#93c5fd] font-serif italic text-sm pt-2">
            "Tu aventura caribeña perfecta está a un clic de distancia"
          </p>
        </div>
      </div>

      {/* Main Corporate Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start border-b border-gray-800 pb-12">
          
          {/* Logo brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <Logo variant="footer" />
            </div>
            
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Somos especialistas líderes en dotación y arriendo vacacional premium por días en Cartagena de Indias, Colombia. Ideado para hospedar comitivas numerosas unidas bajo el mismo bloque residencial con amparos de portería y atención continua.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a href="https://instagram.com" className="p-2 bg-gray-800 hover:bg-[#556B2F] text-white rounded-full transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" className="p-2 bg-gray-800 hover:bg-[#556B2F] text-white rounded-full transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Useful Anchor links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Navegación</h4>
            <div className="flex flex-col space-y-2 text-xs text-gray-300">
              <button 
                onClick={() => {
                  setCurrentPage('quienes-somos');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="text-left hover:text-[#556B2F] transition-colors cursor-pointer"
              >
                Quiénes Somos
              </button>
              <button onClick={() => handleScrollToSection('apartamentos')} className="text-left hover:text-[#556B2F] transition-colors cursor-pointer">Nuestras Suites amobladas</button>
              <button 
                onClick={() => {
                  setCurrentPage('preguntas');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="text-left hover:text-[#556B2F] transition-colors cursor-pointer"
              >
                Preguntas Frecuentes
              </button>
            </div>
          </div>

          {/* Contact Direct coords */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Canales de Atención</h4>
            
            <div className="space-y-2.5 text-xs text-gray-300">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-[#556B2F] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold">Celular / Reservaciones Directas:</span>
                  <span className="text-gray-400">+57 324 591 6576</span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-[#556B2F] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold">Correo de cotizaciones corporativas:</span>
                  <span className="text-gray-400">reverdeceteamhouse@gmail.com</span>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#556B2F] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold">Oficina de Recepción:</span>
                  <span className="text-gray-400">Cra. 14 #48 - 13, Torices, Cartagena de Indias, Bolívar.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Legal & Trademark */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 font-mono">
          <div className="space-y-1 text-center sm:text-left">
            <span>&copy; {currentYear} REVERDECE Amoblados SAS. Todos los derechos reservados.</span>
            <span className="block text-gray-600">Registro Nacional de Turismo RNT: #451298 • Alojamiento seguro y certificado.</span>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <a href="#footer" className="hover:underline hover:text-white">Políticas de Privacidad</a>
            <span>•</span>
            <a href="#footer" className="hover:underline hover:text-white">Términos del Arrendamiento</a>
            <span>•</span>
            <a href="#footer" className="hover:underline hover:text-white">Normatividad Antitransporte</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
