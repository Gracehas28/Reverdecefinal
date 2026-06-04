import { useState, useEffect } from 'react';
import { ArrowLeft, Award, Landmark, ShieldCheck, HeartHandshake } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import UVP from './components/UVP';
import Story from './components/Story';
import Benefits from './components/Benefits';
import Gallery from './components/Gallery';
import Deliverables from './components/Deliverables';
import InteractiveMap from './components/InteractiveMap';
import Urgencia from './components/Urgencia';
import FAQ from './components/FAQ';
import Guarantee from './components/Guarantee';
import InquiryForm from './components/InquiryForm';
import WhatsAppButton from './components/WhatsAppButton';
import InquiryDashboard from './components/InquiryDashboard';
import Footer from './components/Footer';
import { Inquiry } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'quienes-somos' | 'preguntas'>('home');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedApartmentId, setSelectedApartmentId] = useState<string>('1');
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [sessionInquirySubmitted, setSessionInquirySubmitted] = useState<boolean>(false);

  // Sync inquiries with localStorage for lightweight persistence
  useEffect(() => {
    try {
      const stored = localStorage.getItem('reverdece_inquiries');
      if (stored) {
        setInquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failure reading inquiries from localStorage:', e);
    }
  }, []);

  const saveInquiries = (updatedList: Inquiry[]) => {
    setInquiries(updatedList);
    try {
      localStorage.setItem('reverdece_inquiries', JSON.stringify(updatedList));
    } catch (e) {
      console.error('Failure writing inquiries to localStorage:', e);
    }
  };

  const handleInquirySubmitted = (newInquiry: Inquiry) => {
    const updated = [newInquiry, ...inquiries];
    saveInquiries(updated);
    setSessionInquirySubmitted(true);
    
    // Automatically trigger history cabinet view after a quick delay so they see their simulated booking receipt!
    setTimeout(() => {
      setIsDashboardOpen(true);
      setSessionInquirySubmitted(false);
    }, 1200);
  };

  const handleRemoveInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    saveInquiries(updated);
  };

  const handleClearAllInquiries = () => {
    if (window.confirm('¿Estás seguro de que deseas vaciar tu historial de cotizaciones locales?')) {
      saveInquiries([]);
    }
  };

  const handleSelectApartmentToBook = (apartmentId: string) => {
    setSelectedApartmentId(apartmentId);
    
    // Smoothly scroll down to reservation form anchor
    const el = document.getElementById('contacto');
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLearnMoreHero = () => {
    const el = document.getElementById('apartamentos');
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased selection:bg-[#556B2F] selection:text-white">
      {/* Dynamic Header */}
      <Header
        onOpenInquiries={() => setIsDashboardOpen(true)}
        inquiryCount={inquiries.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Floating Success Notification */}
      {sessionInquirySubmitted && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#556B2F] border-2 border-yellow-400 text-white font-sans font-bold px-6 py-3.5 rounded-full shadow-2xl flex items-center space-x-2 animate-bounce">
          <span className="text-xl">🎉</span>
          <span>¡Consulta enviada! Redirigiendo a tu historial...</span>
        </div>
      )}

      {/* Main Structural Page Sections flow */}
      <main>
        {currentPage === 'home' ? (
          <>
            {/* Section 1: Hero Banner */}
            <Hero onLearnMoreClick={handleLearnMoreHero} />

            {/* Section 2: Unique Value Proposition (UVP) */}
            <UVP />

            {/* Section 4: Benefits Grid */}
            <Benefits />

            {/* Section 5: Apartment Suite Visualizer & Lightbox Gallery */}
            <Gallery onSelectApartmentToBook={handleSelectApartmentToBook} />

            {/* Section 6: Standard Deliverables */}
            <Deliverables />

            {/* Section 9: Interactive simulated map outline & location highlights */}
            <InteractiveMap />

            {/* Section 10: Digital Countdown Urgencia banner */}
            <Urgencia />

            {/* Section 13: Centered 24/7 Whatsapp backup Guarantee block */}
            <Guarantee />

            {/* Section 15: Fast inquiry registration form */}
            <InquiryForm
              selectedApartmentId={selectedApartmentId}
              onInquirySubmitted={handleInquirySubmitted}
            />
          </>
        ) : currentPage === 'quienes-somos' ? (
          <div className="pt-24 min-h-screen bg-[#FDFBF7] text-gray-800">
            {/* Breadcrumb / Page Header */}
            <div className="bg-gradient-to-b from-[#556B2F]/10 to-transparent py-14 border-b border-[#556B2F]/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center text-sm font-semibold text-[#556B2F] hover:text-[#4169E1] transition-colors mb-4 group cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                  Regresar al Inicio
                </button>
                <h1 className="font-sans font-bold text-4xl sm:text-5xl text-[#556B2F] tracking-tight leading-none mb-3">
                  Quiénes Somos
                </h1>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl font-light">
                  Nuestra vocación es cuidar cada detalle de tu estadía para que vivas Cartagena como un local privilegiado.
                </p>
              </div>
            </div>

            {/* Story Component */}
            <Story />

            {/* Expanded Corporate details (Mission, Vision, Values) */}
            <section className="py-16 bg-white border-b border-gray-100">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-[#556B2F]/5 p-8 rounded-2xl border border-[#556B2F]/15 space-y-4">
                    <h3 className="font-sans font-bold text-xl text-[#556B2F] flex items-center space-x-2">
                      <Landmark className="h-5 w-5" />
                      <span>Nuestra Misión</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Ofrecer soluciones de hospedaje amoblado premium que unan a grupos y familias numerosas en un confort inigualable, preservando la privacidad de cada viajero mediante edificios con piscina privada y soporte continuo las 24 horas.
                    </p>
                  </div>

                  <div className="bg-[#556B2F]/5 p-8 rounded-2xl border border-[#556B2F]/15 space-y-4">
                    <h3 className="font-sans font-bold text-xl text-[#556B2F] flex items-center space-x-2">
                      <ShieldCheck className="h-5 w-5" />
                      <span>Nuestra Visión y Promesa</span>
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Consolidarnos como el referente número uno de arriendo vacacional libre de estrés en Cartagena, combinando la flexibilidad de un departamento propio, el respaldo operativo de un hotel cinco estrellas y el diseño estético de vanguardia.
                    </p>
                  </div>
                </div>

                {/* Core Pillars Grid */}
                <div className="mt-16 text-center space-y-8">
                  <div>
                    <span className="text-xs font-bold text-[#556B2F] uppercase tracking-widest block mb-2">PILILARES DE EXCELENCIA</span>
                    <h3 className="font-sans font-bold text-2xl text-gray-900">Nuestros Tres Valores Fundamentales</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 text-center space-y-3">
                      <div className="inline-flex p-3 bg-stone-100 rounded-full text-[#556B2F]">
                        <HeartHandshake className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-base">Hospitalidad Caribeña</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Atención cálida, respetuosa y oportuna desde el primer saludo hasta tu check-out, con asistencia por WhatsApp las 24 horas.
                      </p>
                    </div>

                    <div className="p-6 text-center space-y-3">
                      <div className="inline-flex p-3 bg-stone-100 rounded-full text-[#556B2F]">
                        <Award className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-base">Diseño REVERDECE</h4>
                      <p className="text-xs text-gray-500 leading-relaxed flex flex-col items-center">
                        Espacios con luz natural, amoblados elegantes, aire acondicionado óptimo y cocinas completamente dotadas.
                      </p>
                    </div>

                    <div className="p-6 text-center space-y-3">
                      <div className="inline-flex p-3 bg-stone-100 rounded-full text-[#556B2F]">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-base">Garantía de Confianza</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Más de 4 años de trayectoria intachable y registro nacional de turismo certificado para tu total tranquilidad legal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer CTA specifically for subpage */}
            <div className="py-16 text-center bg-stone-50 border-b border-gray-100">
              <div className="max-w-2xl mx-auto px-4 space-y-4">
                <h3 className="font-sans font-bold text-2xl text-gray-900">¿Listo para vivir Cartagena como un local?</h3>
                <p className="text-sm text-gray-600">
                  Descubre nuestros 15 cómodos apartamentos amoblados y asegura las mejores tarifas del año reservando directamente hoy.
                </p>
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    setTimeout(() => {
                      document.getElementById('apartamentos')?.scrollIntoView({ behavior: 'smooth' });
                    }, 150);
                  }}
                  className="inline-block bg-[#556B2F] hover:bg-[#4169E1] text-white font-bold px-8 py-3 rounded-xl shadow-md transition-all uppercase tracking-wide text-xs cursor-pointer"
                >
                  Ver Apartamentos Disponibles
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-24 min-h-screen bg-[#FDFBF7] text-gray-800">
            {/* Breadcrumb / Page Header */}
            <div className="bg-gradient-to-b from-[#556B2F]/10 to-transparent py-14 border-b border-[#556B2F]/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center text-sm font-semibold text-[#556B2F] hover:text-[#4169E1] transition-colors mb-4 group cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                  Regresar al Inicio
                </button>
                <h1 className="font-sans font-bold text-4xl sm:text-5xl text-[#556B2F] tracking-tight leading-none mb-3">
                  Preguntas Frecuentes
                </h1>
                <p className="text-gray-600 text-base sm:text-lg max-w-2xl font-light">
                  Aclara tus dudas sobre las condiciones de reserva, servicios incluidos y normas de convivencia de nuestros apartamentos.
                </p>
              </div>
            </div>

            <div className="py-12 bg-white">
              <FAQ onContactClick={() => {
                setCurrentPage('home');
                setTimeout(() => {
                  const el = document.getElementById('contacto');
                  if (el) {
                    const headerOffset = 80;
                    const elementPosition = el.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }, 150);
              }} />
            </div>

            {/* Footer CTA specifically for subpage */}
            <div className="py-16 text-center bg-stone-50 border-b border-gray-100">
              <div className="max-w-2xl mx-auto px-4 space-y-4">
                <h3 className="font-sans font-bold text-2xl text-gray-900">¿Tienes todo claro para tu viaje?</h3>
                <p className="text-sm text-gray-600">
                  Reserva hoy mismo tu apartamento amoblado y asegura un 10% de descuento directo en tus reservas anticipadas.
                </p>
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    setTimeout(() => {
                      document.getElementById('apartamentos')?.scrollIntoView({ behavior: 'smooth' });
                    }, 150);
                  }}
                  className="inline-block bg-[#556B2F] hover:bg-[#4169E1] text-white font-bold px-8 py-3 rounded-xl shadow-md transition-all uppercase tracking-wide text-xs cursor-pointer"
                >
                  Reservar Ahora
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footers of the company */}
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Bottom Floating Interactive Assistant */}
      <WhatsAppButton />

      {/* Historic consultation slide cabinet drawer */}
      <InquiryDashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        inquiries={inquiries}
        onClearAll={handleClearAllInquiries}
        onRemoveInquiry={handleRemoveInquiry}
      />
    </div>
  );
}
