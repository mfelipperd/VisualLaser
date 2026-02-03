"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, Calendar, MessageCircle } from "lucide-react";

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
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl rounded-2xl ${
          isScrolled
            ? "bg-primary-950/80 backdrop-blur-lg border border-primary-800/50 shadow-2xl py-2"
            : "bg-primary-950/20 backdrop-blur-md border border-white/5 py-3"
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
                className="flex items-center hover:opacity-80 transition-opacity duration-200"
              >
                <img
                  src="/logo-visual-branca.png"
                  alt="Visual Laser"
                  className="h-7 sm:h-8 lg:h-9 w-auto"
                />
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm md:text-base font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? "text-accent-400"
                        : "text-white/90 hover:text-accent-300"
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
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={handleCTAClick}
                className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agendar</span>
              </button>
              <a
                href="tel:+559132254422"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 border border-white/20 text-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Ligar</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-9 h-9 bg-accent-500/90 hover:bg-accent-500 rounded-lg flex items-center justify-center transition-all duration-200"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Full Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 top-20 z-50 lg:hidden"
          >
            <div className="bg-primary-950/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-6 space-y-4">
                {/* Navigation Items */}
                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-accent-500/20 text-accent-400"
                          : "text-white/80 hover:bg-white/5"
                      }`}
                    >
                      <span className="font-semibold text-lg">{item.label}</span>
                      {activeSection === item.id && (
                        <div className="ml-auto w-1.5 h-1.5 bg-accent-400 rounded-full" />
                      )}
                    </motion.button>
                  ))}
                </nav>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <button
                    onClick={handleCTAClick}
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg shadow-accent-500/20"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Agendar Consulta</span>
                  </button>
                  
                  <a
                    href="tel:+559132254422"
                    className="w-full bg-white/5 hover:bg-white/10 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 border border-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="w-5 h-5 text-accent-400" />
                    <span>Ligar Agora</span>
                  </a>

                  <a
                    href="https://wa.me/5591988968201?text=Olá!%20Vim%20através%20da%20landing%20page%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta%20gratuita."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600/20 hover:bg-green-600/30 text-green-400 font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 border border-green-500/20"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="text-center pt-2">
                  <p className="text-white/40 text-xs font-medium uppercase tracking-widest">
                    Visual Laser • Agendamento
                  </p>
                </div>
              </div>
            </div>

            {/* Backdrop for closing */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 -z-10 bg-black/40 backdrop-blur-sm h-screen w-screen -m-4"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingHeader;
