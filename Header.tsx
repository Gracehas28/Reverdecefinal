import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface HeaderProps {
  onOpenInquiries: () => void;
  inquiryCount: number;
  currentPage: 'home' | 'quienes-somos' | 'preguntas';
  setCurrentPage: (page: 'home' | 'quienes-somos' | 'preguntas') => void;
}

export default function Header({ onOpenInquiries, inquiryCount, currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    if (id === 'quienes-somos') {
      setCurrentPage('quienes-somos');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    if (id === 'preguntas') {
      setCurrentPage('preguntas');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const menuItems = [
    { label: 'Quiénes Somos', sectionId: 'quienes-somos' },
    { label: 'Apartamentos', sectionId: 'apartamentos' },
    { label: 'Preguntas', sectionId: 'preguntas' },
    { label: 'Contacto', sectionId: 'contacto' }
  ];

  const showScrolledStyles = scrolled || currentPage !== 'home';

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showScrolledStyles
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="logo-button"
            onClick={() => {
              if (currentPage !== 'home') {
                setCurrentPage('home');
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center text-left group cursor-pointer"
          >
            <Logo scrolled={showScrolledStyles} variant="header" />
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.sectionId}
                id={`nav-link-${item.sectionId}`}
                onClick={() => scrollToSection(item.sectionId)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                  showScrolledStyles
                    ? 'text-gray-700 hover:text-[#556B2F]'
                    : 'text-white drop-shadow-md hover:text-[#556B2F]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              id="header-cta"
              onClick={() => scrollToSection('contacto')}
              className="bg-[#556B2F] hover:bg-[#4169E1] text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              Reservar Ahora
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                showScrolledStyles ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.sectionId}
                  id={`mobile-nav-link-${item.sectionId}`}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block w-full text-left py-2.5 px-3 rounded-lg text-base font-semibold text-gray-800 hover:text-[#556B2F] hover:bg-[#F5F5F5] transition-all cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3 px-3">
                <button
                  id="mobile-drawer-cta"
                  onClick={() => scrollToSection('contacto')}
                  className="w-full text-center bg-[#556B2F] hover:bg-[#4169E1] text-white font-bold py-3 rounded-lg shadow-md transition-all cursor-pointer"
                >
                  Reservar Apartamento Premium
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
