import React, { useState, useEffect } from 'react';
import { Calendar, Users, Phone, Mail, User, ShieldCheck, TicketCheck, MessageSquare, ClipboardList } from 'lucide-react';
import { APARTMENTS_DATA } from '../data';
import { Inquiry } from '../types';

interface InquiryFormProps {
  selectedApartmentId: string;
  onInquirySubmitted: (inquiry: Inquiry) => void;
}

export default function InquiryForm({ selectedApartmentId, onInquirySubmitted }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    apartmentId: selectedApartmentId || '1',
    checkIn: '',
    checkOut: '',
    guests: 4,
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [datesCalculated, setDatesCalculated] = useState({ nights: 0, totalPrice: 0 });

  // Keep state updated in case we trigger selectedApartmentId override from gallery
  useEffect(() => {
    if (selectedApartmentId) {
      setFormData((prev) => ({ ...prev, apartmentId: selectedApartmentId }));
    }
  }, [selectedApartmentId]);

  // Calculate dynamic pricing estimate on field changes
  useEffect(() => {
    const { checkIn, checkOut, apartmentId } = formData;
    if (checkIn && checkOut && apartmentId) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const timeDiff = end.getTime() - start.getTime();
      const nights = Math.max(0, Math.ceil(timeDiff / (1000 * 3600 * 24)));
      
      const selectedApt = APARTMENTS_DATA.find((a) => a.id === apartmentId);
      if (selectedApt && nights > 0) {
        setDatesCalculated({
          nights,
          totalPrice: selectedApt.pricePerNight * nights
        });
      } else {
        setDatesCalculated({ nights: 0, totalPrice: 0 });
      }
    } else {
      setDatesCalculated({ nights: 0, totalPrice: 0 });
    }
  }, [formData.checkIn, formData.checkOut, formData.apartmentId]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El formato del correo es inválido';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono / WhatsApp es obligatorio';
    } else if (formData.phone.length < 8) {
      newErrors.phone = 'Introduce un WhatsApp válido con código';
    }
    if (!formData.checkIn) newErrors.checkIn = 'Fecha de check-in requerida';
    if (!formData.checkOut) {
      newErrors.checkOut = 'Fecha de check-out requerida';
    } else if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      newErrors.checkOut = 'Debe ser posterior a la fecha de ingreso';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      const selectedApt = APARTMENTS_DATA.find((a) => a.id === formData.apartmentId);
      const newInquiry: Inquiry = {
        id: `inq-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        apartmentId: formData.apartmentId,
        apartmentName: selectedApt ? selectedApt.name : 'Apartamento Reverdece',
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        guests: formData.guests,
        notes: formData.notes,
        createdAt: new Date().toISOString(),
        status: 'pending',
        totalPrice: datesCalculated.totalPrice > 0 ? datesCalculated.totalPrice : undefined
      };

      onInquirySubmitted(newInquiry);
      setIsSubmitting(false);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        apartmentId: '1',
        checkIn: '',
        checkOut: '',
        guests: 4,
        notes: ''
      });
      setDatesCalculated({ nights: 0, totalPrice: 0 });
    }, 1500);
  };

  const handleWhatsAppDirect = () => {
    const selectedApt = APARTMENTS_DATA.find((a) => a.id === formData.apartmentId);
    const message = `Hola Reverdece Amoblados. Quisiera consultar disponibilidad para:\n` +
      `- Apartamento: ${selectedApt ? selectedApt.name : 'Frente al Mar'}\n` +
      `- Nombre: ${formData.name || 'Interesado'}\n` +
      `- Check-In: ${formData.checkIn || 'Sin definir'}\n` +
      `- Check-Out: ${formData.checkOut || 'Sin definir'}\n` +
      `- Huéspedes: ${formData.guests} personas.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/573245916576?text=${encoded}`, '_blank');
  };

  const formatCOP = (num: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(num);
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left instructions block */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#556B2F] block mb-2">
                RESERVA SEGURA
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-black leading-tight">
                🌴 Reserva tu Apartamento Ahora
              </h2>
              
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                Rellena el formulario de cotización rápida. Nuestro equipo de anfitriones validará la disponibilidad en tiempo real del bloque habitacional de REVERDECE Cartagena y te contactará con un presupuesto personalizado con el descuento aplicable.
              </p>

              {/* Badges of guarantee */}
              <div className="space-y-3.5 pt-6">
                <div className="flex items-center space-x-3 text-xs font-semibold text-gray-700 bg-white p-3 rounded-xl border border-gray-150">
                  <ShieldCheck className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span>Reserva directa garantizada al 100% sin intermediarios</span>
                </div>
                <div className="flex items-center space-x-3 text-xs font-semibold text-gray-700 bg-white p-3 rounded-xl border border-gray-150">
                  <TicketCheck className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span>Confirmación al instante y contrato de arrendamiento turístico</span>
                </div>
                <div className="flex items-center space-x-3 text-xs font-semibold text-gray-700 bg-white p-3 rounded-xl border border-gray-150">
                  <MessageSquare className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span>Atención continuada vía chat durante cualquier fase del viaje</span>
                </div>
              </div>
            </div>

            {/* Quick backup phone */}
            <div className="pt-8 border-t border-gray-200">
              <span className="block text-xs uppercase font-extrabold text-[#808080]">O consulta al celular de emergencias:</span>
              <button
                onClick={handleWhatsAppDirect}
                className="mt-2 text-lg font-bold text-[#556B2F] hover:text-[#4169E1] transition-colors flex items-center space-x-2 cursor-pointer"
              >
                <span>Celular / WhatsApp: +57 324 591 6576</span>
              </button>
              <span className="block text-[11px] text-gray-400 mt-1">Soporte inmediato • Asesoría de viaje • Gestión en 5 minutos</span>
            </div>
          </div>

          {/* Right form box */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-xl border border-gray-200/55">
            <h3 className="font-sans font-bold text-xl text-gray-900 mb-6 flex items-center space-x-2 border-b border-gray-100 pb-4">
              <ClipboardList className="h-5 w-5 text-[#556B2F]" />
              <span>Formulario de Consulta Técnica</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="form-name" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Nombre Completo
                  </label>
                  <div className="relative rounded-lg shadow-xs">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="form-name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Juan Pérez"
                      className={`block w-full rounded-xl border pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-2 ${
                        errors.name 
                          ? 'border-red-400 focus:ring-red-300' 
                          : 'border-gray-250 focus:border-[#556B2F] focus:ring-[#556B2F]/20'
                      }`}
                    />
                  </div>
                  {errors.name && <span className="text-[11px] font-semibold text-red-500 block">{errors.name}</span>}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="form-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Correo Electrónico
                  </label>
                  <div className="relative rounded-lg shadow-xs">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="form-email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="juan@email.com"
                      className={`block w-full rounded-xl border pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-2 ${
                        errors.email 
                          ? 'border-red-400 focus:ring-red-300' 
                          : 'border-gray-250 focus:border-[#556B2F] focus:ring-[#556B2F]/20'
                      }`}
                    />
                  </div>
                  {errors.email && <span className="text-[11px] font-semibold text-red-500 block">{errors.email}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Whatsapp */}
                <div className="space-y-1">
                  <label htmlFor="form-phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    WhatsApp (con código de país)
                  </label>
                  <div className="relative rounded-lg shadow-xs">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Phone className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="form-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej. +57 300 123 4567"
                      className={`block w-full rounded-xl border pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-2 ${
                        errors.phone 
                          ? 'border-red-400 focus:ring-red-300' 
                          : 'border-gray-250 focus:border-[#556B2F] focus:ring-[#556B2F]/20'
                      }`}
                    />
                  </div>
                  {errors.phone && <span className="text-[11px] font-semibold text-red-500 block">{errors.phone}</span>}
                </div>

                {/* Apartment Select */}
                <div className="space-y-1">
                  <label htmlFor="form-apartment" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Excelente Suite Seleccionada
                  </label>
                  <select
                    id="form-apartment"
                    name="apartmentId"
                    value={formData.apartmentId}
                    onChange={(e) => setFormData({ ...formData, apartmentId: e.target.value })}
                    className="block w-full rounded-xl border border-gray-250 bg-white px-3 py-3.5 text-sm focus:border-[#556B2F] focus:outline-none focus:ring-2 focus:ring-[#556B2F]/20"
                  >
                    {APARTMENTS_DATA.map((apt) => (
                      <option key={apt.id} value={apt.id}>
                        {apt.name} ({formatCOP(apt.pricePerNight)}/n)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Check In */}
                <div className="space-y-1 col-span-1">
                  <label htmlFor="form-checkin" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Fecha de Ingreso
                  </label>
                  <input
                    type="date"
                    id="form-checkin"
                    name="checkIn"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className={`block w-full rounded-xl border px-3 py-3 text-sm focus:outline-none focus:ring-2 bg-white ${
                      errors.checkIn 
                        ? 'border-red-400 focus:ring-red-300' 
                        : 'border-gray-250 focus:border-[#556B2F] focus:ring-[#556B2F]/20'
                    }`}
                  />
                  {errors.checkIn && <span className="text-[11px] font-semibold text-red-500 block">{errors.checkIn}</span>}
                </div>

                {/* Check Out */}
                <div className="space-y-1 col-span-1">
                  <label htmlFor="form-checkout" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Fecha de Salida
                  </label>
                  <input
                    type="date"
                    id="form-checkout"
                    name="checkOut"
                    min={formData.checkIn || new Date().toISOString().split('T')[0]}
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className={`block w-full rounded-xl border px-3 py-3 text-sm focus:outline-none focus:ring-2 bg-white ${
                      errors.checkOut 
                        ? 'border-red-400 focus:ring-red-300' 
                        : 'border-gray-250 focus:border-[#556B2F] focus:ring-[#556B2F]/20'
                    }`}
                  />
                  {errors.checkOut && <span className="text-[11px] font-semibold text-red-500 block">{errors.checkOut}</span>}
                </div>

                {/* Guests count */}
                <div className="space-y-1 col-span-1">
                  <label htmlFor="form-guests" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                    Nº de Personas
                  </label>
                  <div className="relative rounded-lg shadow-xs">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Users className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      id="form-guests"
                      name="guests"
                      min="1"
                      max="15"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                      className="block w-full rounded-xl border pl-10 pr-3 py-3 text-sm focus:border-[#556B2F] focus:outline-none focus:ring-2 focus:ring-[#556B2F]/20 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Remarks */}
              <div className="space-y-1">
                <label htmlFor="form-notes" className="block text-xs font-bold text-gray-700 uppercase tracking-wide">
                  Requerimientos Especiales o Comentarios (Opcional)
                </label>
                <textarea
                  id="form-notes"
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Ej. Requiero cuna para bebé o viajo con personas de movilidad reducida..."
                  className="block w-full rounded-xl border border-gray-250 px-4 py-3 text-sm focus:border-[#556B2F] focus:outline-none focus:ring-2 focus:ring-[#556B2F]/20 bg-white"
                />
              </div>

              {/* Estimate Dynamic pricing visual feedback */}
              {datesCalculated.nights > 0 && (
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-150 flex items-center justify-between animate-fade-in">
                  <div>
                    <span className="block text-[10px] text-emerald-800 font-bold uppercase tracking-wider">COTIZACIÓN PRELIMINAR ESTIMADA</span>
                    <span className="block font-sans font-medium text-xs text-emerald-700 mt-1">
                      {datesCalculated.nights} Noches x {formData.guests} Huéspedes
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block font-black text-[#556B2F] text-lg leading-none">
                      {formatCOP(datesCalculated.totalPrice)} COP
                    </span>
                    <span className="text-[9px] text-[#808080] uppercase tracking-wide block mt-1">Con bonificaciones incluidas</span>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 bg-[#556B2F] hover:bg-[#4169E1] text-white font-extrabold text-sm py-4 rounded-xl shadow-md transition-all sm:order-2 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Procesando Consulta...</span>
                  ) : (
                    <span>RESERVAR AHORA - PAGO SEGURO 🔒</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs px-6 py-4 rounded-xl flex items-center justify-center space-x-1.5 cursor-pointer sm:order-1 transition-all"
                >
                  <MessageSquare className="h-4 w-4 fill-current text-white" />
                  <span>Consultar por WhatsApp</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[10px] text-[#808080] font-mono select-none pt-2 border-t border-gray-100">
                <span>✓ Reserva inmediata</span>
                <span>•</span>
                <span>✓ Confirmación al instante</span>
                <span>•</span>
                <span>✓ Pago seguro cifrado SSL</span>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
