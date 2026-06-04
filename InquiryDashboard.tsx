import { X, Calendar, Users, Building2, TicketCheck, MessageCircle, RefreshCw, Printer, Trash2 } from 'lucide-react';
import { Inquiry } from '../types';

interface InquiryDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  inquiries: Inquiry[];
  onClearAll: () => void;
  onRemoveInquiry: (id: string) => void;
}

export default function InquiryDashboard({
  isOpen,
  onClose,
  inquiries,
  onClearAll,
  onRemoveInquiry
}: InquiryDashboardProps) {
  if (!isOpen) return null;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <span className="px-2.5 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-wider">Confirmado</span>;
      case 'cancelled':
        return <span className="px-2.5 py-1 bg-red-100 text-red-700 text-[10px] font-bold rounded-full uppercase tracking-wider">Cancelado</span>;
      default:
        return <span className="px-2.5 py-1 bg-yellow-100 text-yellow-800 text-[10px] font-bold rounded-full uppercase tracking-wider animate-pulse">Pendiente Verificación</span>;
    }
  };

  const formatCOP = (num?: number) => {
    if (!num) return 'Cotizando...';
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(num);
  };

  const handlePrint = (inq: Inquiry) => {
    alert(
      `--- COMPROBANTE DE SOLICITUD REVERDECE ---\n` +
      `ID Consulta: ${inq.id}\n` +
      `Cliente: ${inq.name}\n` +
      `Hospedaje: ${inq.apartmentName}\n` +
      `Fechas: ${inq.checkIn} al ${inq.checkOut}\n` +
      `Estimación: ${formatCOP(inq.totalPrice)}\n` +
      `Estado: Pendiente de Confirmación Final\n` +
      `WhatsApp de Soporte: +57 324 591 6576`
    );
  };

  return (
    <div id="inquiry-dashboard-overlay" className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div className="absolute inset-0 overflow-hidden">
        {/* Backdrop overlay background noise */}
        <div 
          className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
          onClick={onClose}
        />

        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-2xl border-l border-gray-150">
              
              {/* Header */}
              <div className="bg-[#4169E1] px-6 py-5 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-sans tracking-tight">Mi Historial de Cotizaciones</h3>
                  <p className="text-xs text-blue-100">Consulta el estado de tus apartasuites en REVERDECE</p>
                </div>
                
                <button
                  onClick={onClose}
                  className="rounded-lg p-1 hover:bg-white/10 text-white transition-colors cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Main Contents */}
              <div className="flex-1 py-6 px-4 sm:px-6">
                {inquiries.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <div className="p-4 bg-gray-100 text-gray-400 rounded-full">
                      <TicketCheck className="h-10 w-10 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-gray-800 text-base">Aún no tienes cotizaciones</h4>
                      <p className="text-xs text-gray-500 max-w-xs mt-1 leading-relaxed">
                        Completa el formulario de reserva con tus datos y suites elegidas para simular una consulta inmediata.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <span className="text-xs font-mono font-bold text-[#808080] uppercase">
                        {inquiries.length} {inquiries.length === 1 ? 'Consulta registrada' : 'Consultas registradas'}
                      </span>
                      
                      <button
                        onClick={onClearAll}
                        className="text-xs font-semibold text-red-600 hover:text-red-700 cursor-pointer flex items-center space-x-1"
                        title="Limpiar historial"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span>Limpiar todo</span>
                      </button>
                    </div>

                    {/* Inquiry list maps */}
                    <div className="space-y-4">
                      {inquiries.map((inq) => (
                        <div
                          key={inq.id}
                          className="bg-gray-50 p-5 rounded-2xl border border-gray-150 hover:border-[#556B2F] transition-all relative group shadow-xs"
                        >
                          <button
                            onClick={() => onRemoveInquiry(inq.id)}
                            className="absolute top-4 right-4 text-gray-300 hover:text-red-600 transition-colors cursor-pointer p-0.5 rounded"
                            title="Eliminar consulta"
                          >
                            <X className="h-4 w-4" />
                          </button>

                          <div className="space-y-3">
                            {/* status */}
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono text-[#808080]">{inq.id}</span>
                              {getStatusBadge(inq.status)}
                            </div>

                            {/* suite name */}
                            <div>
                              <span className="text-[10px] uppercase font-bold text-[#556B2F] tracking-wide block">APARTAMENTO SELECCIONADO</span>
                              <span className="font-bold text-sm text-gray-900 font-sans block mt-0.5">{inq.apartmentName}</span>
                            </div>

                            {/* dates & people */}
                            <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 py-2 border-y border-dashed border-gray-200">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-3.5 w-3.5 text-gray-400" />
                                <span>Ingreso: {inq.checkIn}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users className="h-3.5 w-3.5 text-gray-400" />
                                <span>Personas: {inq.guests}</span>
                              </div>
                            </div>

                            {/* Client particulars */}
                            <div className="text-[11px] text-gray-500">
                              <span className="block font-medium">Cliente: {inq.name}</span>
                              <span className="block">WhatsApp: {inq.phone}</span>
                            </div>

                            {/* Pricing & Voucher download */}
                            <div className="flex items-center justify-between pt-2">
                              <div>
                                <span className="text-[9px] uppercase tracking-wider text-[#808080] block">Estimación aproximativa</span>
                                <span className="font-bold text-[#556B2F] text-base">{formatCOP(inq.totalPrice)}</span>
                              </div>

                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => handlePrint(inq)}
                                  className="p-2 border border-gray-200 rounded-lg bg-white text-gray-600 hover:bg-[#F5F5F5] cursor-pointer"
                                  title="Ver comprobante turístico"
                                >
                                  <Printer className="h-3.5 w-3.5" />
                                </button>
                                
                                <a
                                  href={`https://wa.me/573245916576?text=${encodeURIComponent(`Hola, quisiera validar el estado de mi consulta ID: ${inq.id} para la suite ${inq.apartmentName}.`)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-[#25D366] hover:bg-[#128C7E] text-white py-1.5 px-3 rounded-lg text-xs font-bold flex items-center space-x-1"
                                >
                                  <MessageCircle className="h-3.5 w-3.5 fill-current" />
                                  <span>Validar</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer inside drawer */}
              <div className="border-t border-gray-150 p-6 bg-gray-50">
                <div className="bg-white p-3.5 rounded-xl border border-gray-150 text-xs text-gray-600 flex items-start space-x-2.5">
                  <RefreshCw className="h-4 w-4 text-[#556B2F] flex-shrink-0 animate-spin-slow mt-0.5" />
                  <p>
                    <strong>Nota de simulación:</strong> Estas consultas se almacenan localmente en tu navegador. Puedes editarlas o vaciarlas en cualquier momento.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
