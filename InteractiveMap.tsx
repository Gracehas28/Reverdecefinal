import { useState } from 'react';
import { MapPin, Compass, Info, Navigation, Waves, Building2, Palmtree, Plane, Landmark, Utensils } from 'lucide-react';
import { MAP_LOCATIONS } from '../data';
import { Attraction } from '../types';

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<Attraction>(MAP_LOCATIONS[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'home':
        return <Building2 className="h-5 w-5" />;
      case 'waves':
        return <Waves className="h-5 w-5" />;
      case 'landmark':
        return <Landmark className="h-5 w-5" />;
      case 'plane':
        return <Plane className="h-5 w-5" />;
      case 'utensils':
        return <Utensils className="h-5 w-5" />;
      default:
        return <MapPin className="h-5 w-5" />;
    }
  };

  return (
    <section id="mapa-ubicacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#556B2F] mb-3">
            EXPLORA TU ENTORNO
          </h2>
          <p className="font-sans font-bold text-3xl sm:text-4xl text-black tracking-tight leading-tight">
            Ubicación Estratégica Real
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            No solo "cerca del mar". Estamos a minutos de la brisa, de la historia y del sabor cartagenero.
          </p>
          <div className="h-1.5 w-16 bg-[#556B2F] mx-auto mt-4 rounded-full" />
        </div>

        {/* Dynamic map board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left vector visualization map */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-6 text-white relative overflow-hidden flex flex-col justify-between shadow-lg min-h-[400px]">
            {/* Background design grids */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_40%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

            <div>
              <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-teal-400 uppercase mb-4">
                <Compass className="h-4 w-4 animate-spin-slow" />
                <span>MAPA DE CONEXIONES TURÍSTICAS</span>
              </div>

              <h3 className="text-xl font-bold tracking-tight mb-2">
                Haz clic en los puntos clave
              </h3>
              <p className="text-xs text-gray-300">
                Selecciona cualquier nodo costero o cultural para calcular las distancias inmediatas desde el edificio REVERDECE.
              </p>
            </div>

            {/* Vector Map Simulation Canvas */}
            <div className="relative w-full aspect-video bg-white/5 rounded-2xl border border-white/10 my-6 overflow-hidden">
              {/* Simulated Coastline waves */}
              <div className="absolute left-0 bottom-0 top-1/2 right-1/4 bg-blue-500/10 rounded-tr-full blur-sm" />
              <div className="absolute left-0 bottom-0 top-2/3 right-1/3 bg-teal-500/15 rounded-tr-full blur-md" />
              <div className="absolute top-1/4 right-0 bottom-0 left-2/3 bg-slate-950/40 rounded-tl-full" />

              {/* Styled labels */}
              <span className="absolute left-8 bottom-6 text-[10px] uppercase font-black tracking-widest text-[#93c5fd]">Mar Caribe</span>
              <span className="absolute right-12 top-6 text-[10px] uppercase font-black tracking-widest text-gray-500">Bahía de las Ánimas</span>

              {/* Dynamic Marker nodes */}
              {MAP_LOCATIONS.map((loc) => {
                const isActive = selectedLocation.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className="absolute cursor-pointer transition-all duration-300"
                    style={{ left: `${loc.coords.x}%`, top: `${loc.coords.y}%` }}
                  >
                    <div className="relative group/pin">
                      <div className={`p-2.5 rounded-full transition-transform duration-300 shadow-md ${
                        isActive 
                          ? 'bg-[#FFD700] text-gray-950 scale-125 z-20 stroke-[3]' 
                          : 'bg-[#556B2F] text-white hover:scale-110 hover:bg-yellow-400/90 hover:text-black z-10'
                      }`}>
                        {loc.id === 'edificio' ? (
                          <Building2 className="h-4 w-4" />
                        ) : loc.id === 'playa' ? (
                          <Waves className="h-4 w-4" />
                        ) : loc.id === 'centro' ? (
                          <Landmark className="h-4 w-4" />
                        ) : loc.id === 'aeropuerto' ? (
                          <Plane className="h-4 w-4" />
                        ) : (
                          <Utensils className="h-4 w-4" />
                        )}
                      </div>

                      {/* Ripple pulse active circle */}
                      {isActive && (
                        <div className="absolute -inset-1.5 rounded-full border-2 border-[#FFD700] animate-ping opacity-75 pointer-events-none" />
                      )}

                      {/* Tooltip labels */}
                      <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-gray-950/95 text-[9px] font-bold text-white px-2 py-0.5 rounded shadow border border-white/15 opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300 whitespace-nowrap z-30">
                        {loc.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Location Details Panel */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-yellow-400 text-gray-950 rounded-xl flex-shrink-0">
                  {getIcon(selectedLocation.icon)}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-sm text-white">{selectedLocation.name}</span>
                    <span className="bg-teal-400/20 text-teal-300 text-[9px] font-black tracking-widest px-1.5 py-0.5 rounded">
                      {selectedLocation.distance}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    {selectedLocation.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right standard iframe maps */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-250 rounded-3xl p-4 flex flex-col justify-between shadow-sm min-h-[400px]">
            <div className="rounded-2xl overflow-hidden flex-1 relative bg-gray-200 border border-gray-200">
              <iframe
                title="Torre Primi Cartagena Mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.1685603417725!2d-75.5297371!3d10.4475459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f1efdf4ef1f%3A0xc5ce1a546d1bfbb2!2sTorre%20Primi!5e0!3m2!1ses!2sco!4v1714578168000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 font-medium gap-2">
              <div className="flex items-center space-x-2">
                <Navigation className="h-4 w-4 text-[#556B2F]" />
                <span>
                  Dirección anfitriona: Cra. 14 #48 - 13, Torices, Cartagena de Indias, Bolívar.
                </span>
              </div>
              <a
                href="https://google.com/maps?sca_esv=a82350b6429375af&output=search&q=torre+primi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#556B2F] hover:text-[#4169E1] font-bold underline flex items-center gap-1 cursor-pointer"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
