import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';

interface FAQProps {
  onContactClick?: () => void;
}

export default function FAQ({ onContactClick }: FAQProps = {}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIdx((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#556B2F] mb-3">
            ❓ ACLARA TUS DUDAS
          </h2>
          <p className="font-sans font-bold text-3xl sm:text-4xl text-[#4169E1] tracking-tight leading-tight">
            Preguntas Frecuentes
          </p>
          <div className="h-1.5 w-16 bg-[#556B2F] mx-auto mt-4 rounded-full" />
        </div>

        {/* Accordion container */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-250 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Trigger heading */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors duration-300 ${
                    isOpen ? 'bg-[#556B2F]/5' : 'hover:bg-gray-50'
                  }`}
                >
                  <span className="font-sans font-bold text-base text-gray-900 pr-4 leading-tight group-hover:text-[#4169E1]">
                    {faq.question}
                  </span>
                  
                  {/* Circular icon indicator */}
                  <div className={`p-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-[#556B2F] text-white' : 'bg-gray-100 text-[#556B2F]'
                  }`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {/* Animated expand paragraph body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-sm text-gray-600 leading-relaxed bg-[#556B2F]/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Extra question helper */}
        <div className="mt-12 text-center p-6 bg-[#F5F5F5] rounded-3xl border border-gray-200">
          <p className="text-sm text-gray-600">
            ¿Tienes otra pregunta que no está listada aquí?
          </p>
          <button
            onClick={() => {
              if (onContactClick) {
                onContactClick();
              } else {
                const el = document.getElementById('contacto');
                el?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="mt-3 inline-flex items-center space-x-2 text-[#556B2F] font-bold text-sm hover:text-[#4169E1] transition-colors cursor-pointer"
          >
            <span>Preguntar a un asesor por WhatsApp</span>
            <span className="text-xs">➔</span>
          </button>
        </div>

      </div>
    </section>
  );
}
