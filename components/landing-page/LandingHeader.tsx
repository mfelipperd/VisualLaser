"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, ArrowRight } from "lucide-react";

const LandingHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detectar seção ativa
      const sections = ['hero', 'benefits', 'stats', 'testimonials', 'form', 'faq'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleCTAClick = () => {
    scrollToSection('form');
    // Rastrear evento de clique no CTA
    if (typeof window !== 'undefined' && window.trackConversion) {
      window.trackConversion('Lead');
    }
  };

  const navItems = [
    { id: 'benefits', label: 'Benefícios' },
    { id: 'stats', label: 'Sobre Nós' },
    { id: 'testimonials', label: 'Depoimentos' },
    { id: 'faq', label: 'Dúvidas' },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary-950/95 backdrop-blur-md border-b border-primary-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200"
              >
                <img
                  src="/logo-visual-branca.png"
                  alt="Visual Laser"
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                />
                <div className="hidden sm:block">
                  <h1 className="text-white text-lg sm:text-xl font-bold">Visual Laser</h1>
                  <p className="text-accent-300 text-xs sm:text-sm">Agende sua Consulta</p>
                </div>
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-lg font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? "text-accent-400 font-semibold"
                        : "text-white hover:text-accent-300"
                    }`}
                  >
                    {item.label}
                  </button>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent-400"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={handleCTAClick}
                className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta</span>
              </button>
              <a
                href="tel:+559132254422"
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Ligar</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 bg-accent-500 hover:bg-accent-600 rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Full Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-primary-950 lg:hidden z-50"
          >
            <div className="flex flex-col h-full">
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-primary-800/50">
                <div className="flex items-center space-x-3">
                  <img
                    src="/logo-visual-branca.png"
                    alt="Visual Laser"
                    className="h-12 w-auto"
                  />
                  <div>
                    <h2 className="text-white font-bold text-2xl">Visual Laser</h2>
                    <p className="text-accent-300 text-base">Agende sua Consulta</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 bg-accent-500 hover:bg-accent-600 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-7 h-7 text-white" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 overflow-y-auto py-8">
                <nav className="space-y-4 px-6">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center space-x-6 px-6 py-6 rounded-2xl transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-accent-500 text-white"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <span className="font-bold text-2xl">{item.label}</span>
                      {activeSection === item.id && (
                        <div className="ml-auto w-4 h-4 bg-white rounded-full"></div>
                      )}
                    </button>
                  ))}
                </nav>

                {/* Action Buttons */}
                <div className="px-6 mt-12 space-y-6">
                  {/* Agendar Consulta - DESTACADO */}
                  <button
                    onClick={handleCTAClick}
                    className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-4"
                  >
                    <Calendar className="w-8 h-8" />
                    <span className="text-2xl">Agendar Consulta</span>
                  </button>

                  {/* Telefone */}
                  <a
                    href="tel:+559132254422"
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-4 border border-white/20"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="w-7 h-7" />
                    <span className="text-xl">Ligar Agora</span>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/5591988968201?text=Olá!%20Vim%20através%20da%20landing%20page%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta%20gratuita."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-4"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-xl">💬 WhatsApp</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="p-8 border-t border-primary-800/50 text-center">
                <p className="text-white text-xl font-medium">
                  Visual Laser - Clínica Oftalmológica
                </p>
                <p className="text-accent-300 text-lg mt-2">
                  Belém - Pará
                </p>
                <p className="text-primary-200 text-sm mt-2">
                  Agendamento Fácil • Tecnologia de Ponta • 25+ Anos
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingHeader;
