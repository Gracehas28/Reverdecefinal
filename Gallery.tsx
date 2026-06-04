import React, { useState } from 'react';
import { Eye, Users, Bed, Scale, HelpCircle, Check, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { APARTMENTS_DATA, ADDITIONAL_IMAGES } from '../data';
import { Apartment } from '../types';

interface GalleryProps {
  onSelectApartmentToBook: (apartmentId: string) => void;
}

export default function Gallery({ onSelectApartmentToBook }: GalleryProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'ocean_view' | 'two_bedroom' | 'three_bedroom' | 'pool'>('all');
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const tabs = [
    { value: 'all', label: 'Todos' },
    { value: 'ocean_view', label: 'Vistas al Mar' },
    { value: 'two_bedroom', label: '2 Habitaciones' },
    { value: 'three_bedroom', label: '3 Habitaciones' },
    { value: 'pool', label: 'Piscina / Áreas Comunes' },
  ] as const;

  const filteredApartments = APARTMENTS_DATA.filter((apt) => {
    if (activeTab === 'all') return true;
    return apt.category === activeTab;
  });

  // Supporting auxiliary images for the lightbox carousel
  const getApartmentPhotos = (apt: Apartment) => {
    return [
      apt.image,
      ADDITIONAL_IMAGES.bedroom,
      ADDITIONAL_IMAGES.kitchen,
      ADDITIONAL_IMAGES.balcony
    ];
  };

  const openLightbox = (apt: Apartment) => {
    setSelectedApartment(apt);
    setActivePhotoIdx(0);
  };

  const closeLightbox = () => {
    setSelectedApartment(null);
  };

  const handlePrevPhoto = (e: React.MouseEvent, photosCount: number) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev === 0 ? photosCount - 1 : prev - 1));
  };

  const handleNextPhoto = (e: React.MouseEvent, photosCount: number) => {
    e.stopPropagation();
    setActivePhotoIdx((prev) => (prev === photosCount - 1 ? 0 : prev + 1));
  };

  const formatCOP = (num: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(num);
  };

  return (
    <section id="apartamentos" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-sans font-bold text-3xl sm:text-4xl text-black tracking-tight leading-tight">
            Nuestros Apartamentos Disponibles
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Explora las diferentes configuraciones en el mismo edificio. Ideales para acomodar a toda tu comitiva.
          </p>
          <div className="h-1 w-16 bg-[#556B2F] mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeTab === tab.value
                  ? 'bg-[#556B2F] text-white shadow-md shadow-[#556B2F]/25'
                  : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Apartments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredApartments.map((apt) => (
            <div
              key={apt.id}
              id={`apt-card-${apt.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/80 flex flex-col justify-between"
            >
              {/* Image & Price Tag */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer" onClick={() => openLightbox(apt)}>
                <img
                  src={apt.image}
                  alt={apt.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-[#4169E1] transition-transform duration-350 scale-90 group-hover:scale-100">
                    <Eye className="h-6 w-6" />
                  </div>
                </div>

                {apt.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 text-[10px] font-bold tracking-widest px-3 py-1 rounded-full shadow-md uppercase">
                    MÁS SOLICITADO
                  </div>
                )}

                <div className="absolute bottom-4 left-4 bg-gray-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-white font-mono text-sm border border-white/10">
                  <span className="text-[10px] text-gray-300 block leading-none">Desde</span>
                  <span className="font-bold text-[#FFD700]">{formatCOP(apt.pricePerNight)}</span>
                  <span className="text-[10px] text-gray-300"> / noche</span>
                </div>
              </div>

              {/* Apartment description */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-[10px] uppercase font-bold text-[#556B2F] tracking-wider mb-2">
                    <span>{apt.view}</span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-gray-900 group-hover:text-[#4169E1] transition-colors duration-300 mb-3 leading-snug">
                    {apt.name}
                  </h3>

                  {/* Highlights */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-gray-100 mb-4 text-xs text-gray-600 font-medium">
                    <div className="flex items-center space-x-1.5 justify-center bg-gray-50 p-1.5 rounded-lg">
                      <Bed className="h-4 w-4 text-[#556B2F]" />
                      <span>{apt.bedrooms} Hab</span>
                    </div>
                    <div className="flex items-center space-x-1.5 justify-center bg-gray-50 p-1.5 rounded-lg">
                      <Users className="h-4 w-4 text-[#556B2F]" />
                      <span>Hasta {apt.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 justify-center bg-gray-50 p-1.5 rounded-lg">
                      <Scale className="h-4 w-4 text-[#556B2F]" />
                      <span>{apt.bathrooms} Baños</span>
                    </div>
                  </div>

                  {/* List of benefits */}
                  <ul className="space-y-1.5 mb-6 text-xs text-gray-500">
                    {apt.benefits.slice(0, 3).map((b, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="h-1.5 w-1.5 bg-[#556B2F] rounded-full flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100 gap-3">
                  <button
                    onClick={() => openLightbox(apt)}
                    className="flex-1 text-center py-2.5 px-4 rounded-xl text-xs font-bold text-[#4169E1] hover:bg-[#4169E1]/5 border border-[#4169E1]/20 transition-all cursor-pointer"
                  >
                    Detalles y Fotos
                  </button>

                  <button
                    onClick={() => onSelectApartmentToBook(apt.id)}
                    className="flex-1 text-center py-2.5 px-4 bg-[#556B2F] hover:bg-[#4169E1] text-white text-xs font-bold rounded-xl transition-all shadow-sm hover:shadow cursor-pointer flex items-center justify-center space-x-1.5"
                  >
                    <span>Reservar</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedApartment && (
            <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
              <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                {/* Backdrop overlay */}
                <div 
                  className="fixed inset-0 bg-gray-900/90 backdrop-blur-md transition-opacity" 
                  onClick={closeLightbox}
                />

                {/* Center alignment trick */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                {/* Modal panel */}
                <div className="inline-block align-middle transform transition-all sm:my-8 max-w-4xl w-full bg-white rounded-3xl text-left shadow-2xl overflow-hidden border border-gray-100">
                  
                  {/* Photo Slider */}
                  <div className="relative aspect-[16/9] w-full bg-gray-950">
                    <img
                      src={getApartmentPhotos(selectedApartment)[activePhotoIdx]}
                      alt={`${selectedApartment.name} - Foto ${activePhotoIdx + 1}`}
                      className="w-full h-full object-cover transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />

                    {/* Left/Right Arrow controls */}
                    <button
                      onClick={(e) => handlePrevPhoto(e, getApartmentPhotos(selectedApartment).length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                      onClick={(e) => handleNextPhoto(e, getApartmentPhotos(selectedApartment).length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Exit Button */}
                    <button
                      onClick={closeLightbox}
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    {/* Slider Indicator */}
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm shadow text-white font-mono text-xs px-2.5 py-1 rounded-full">
                      {activePhotoIdx + 1} / {getApartmentPhotos(selectedApartment).length}
                    </div>
                  </div>

                  {/* Thumbnail Selector */}
                  <div className="flex border-b border-gray-100 p-3 bg-gray-50 overflow-x-auto gap-2">
                    {getApartmentPhotos(selectedApartment).map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActivePhotoIdx(index)}
                        className={`relative flex-shrink-0 w-20 aspect-[4/3] rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                          activePhotoIdx === index ? 'border-[#556B2F] scale-95 shadow-md' : 'border-transparent opacity-60'
                        }`}
                      >
                        <img src={img} alt="Miniatura" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </button>
                    ))}
                  </div>

                  {/* Modal Content Details */}
                  <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Left detailed information */}
                    <div className="md:col-span-8 space-y-6">
                      <div>
                        <div className="inline-flex py-1 px-2.5 bg-[#4169E1]/10 rounded-full text-[#4169E1] font-bold text-xs uppercase tracking-wide mb-2">
                          {selectedApartment.view}
                        </div>
                        <h3 className="font-sans font-bold text-2xl text-gray-900">
                          {selectedApartment.name}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 font-medium">
                        <span className="flex items-center space-x-1.5 py-1 px-3 bg-gray-100 rounded-lg">
                          <Bed className="h-4 w-4 text-[#556B2F]" />
                          <span>{selectedApartment.bedrooms} Dormitorios</span>
                        </span>
                        <span className="flex items-center space-x-1.5 py-1 px-3 bg-gray-100 rounded-lg">
                          <Users className="h-4 w-4 text-[#556B2F]" />
                          <span>Hasta {selectedApartment.capacity} Huéspedes</span>
                        </span>
                        <span className="flex items-center space-x-1.5 py-1 px-3 bg-gray-100 rounded-lg">
                          <Scale className="h-4 w-4 text-[#556B2F]" />
                          <span>{selectedApartment.bathrooms} Baños privados</span>
                        </span>
                      </div>

                      <div>
                        <h4 className="font-sans font-bold text-gray-900 text-sm uppercase tracking-wider mb-2">Todo lo que incluye:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <span className="text-[#556B2F] font-bold">✓</span>
                            <span>Aires acondicionados nuevos</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[#556B2F] font-bold">✓</span>
                            <span>Internet Fibra Óptica 300Mb</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[#556B2F] font-bold">✓</span>
                            <span>Cocina completamente dotada</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[#556B2F] font-bold">✓</span>
                            <span>Acceso a piscina & áreas comunes</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[#556B2F] font-bold">✓</span>
                            <span>Smart TV + Netflix & Canales</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-[#556B2F] font-bold">✓</span>
                            <span>Soporte conserjería 24/7</span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-150 pt-4">
                        <h4 className="font-sans font-bold text-gray-900 text-sm uppercase tracking-wider mb-2">Bonificación Especial:</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          La reserva de esta suite te otorga de manera inmediata **City Tour en Chiva GRATIS** para todo tu grupo y traslado de cortesía desde el aeropuerto de Cartagena si te hospedas más de 4 noches.
                        </p>
                      </div>
                    </div>

                    {/* Right Booking Call Card */}
                    <div className="md:col-span-4 bg-[#F5F5F5] rounded-2xl p-6 border border-gray-200 flex flex-col justify-between">
                      <div className="space-y-4">
                        <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">COTIZACIÓN POR NOCHE</span>
                        
                        <div>
                          <span className="block text-3xl font-extrabold text-[#556B2F]">
                            {formatCOP(selectedApartment.pricePerNight)}
                          </span>
                          <span className="text-xs text-gray-500 block">Tarifa garantizada sin cargos ocultos</span>
                        </div>

                        {/* Price match compare */}
                        <div className="bg-white/70 p-3 rounded-lg border border-gray-150 text-xs text-gray-600">
                          <span className="block font-semibold">Garantía REVERDECE:</span>
                          <span className="line-through text-red-500 block">Hotel similar: {formatCOP(selectedApartment.competitorPrice)}</span>
                          <span className="text-[#556B2F] font-bold">¡Ahorras un {Math.round((1 - selectedApartment.pricePerNight / selectedApartment.competitorPrice) * 100)}% directo!</span>
                        </div>
                      </div>

                      <div className="space-y-3 pt-6">
                        <button
                          onClick={() => {
                            const aptId = selectedApartment.id;
                            closeLightbox();
                            onSelectApartmentToBook(aptId);
                          }}
                          className="w-full text-center bg-[#556B2F] hover:bg-[#4169E1] text-white font-bold py-3.5 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center space-x-2 text-sm"
                        >
                          <span>RESERVAR ESTE APTO</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>

                        <button
                          onClick={closeLightbox}
                          className="w-full text-center bg-white hover:bg-gray-100 text-gray-600 border border-gray-300 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer"
                        >
                          Volver a la Galería
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
