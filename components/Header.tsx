"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, Home, Building2, Activity, Users, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import AppointmentModal from "@/components/AppointmentModal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePage = (path: string) => {
    return pathname === path;
  };

  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Empresa", path: "/empresa", icon: Building2 },
    { name: "Procedimentos", path: "/exames-cirurgias", icon: Activity },
    { name: "Equipe", path: "/equipe", icon: Users },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary-950/95 backdrop-blur-md border-b border-primary-800/50"
            : "bg-primary-950/90 backdrop-blur-md border-b border-primary-800/30"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition-opacity duration-200">
              <img
                src="/logo-visual-branca.png"
                alt="Visual Laser"
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-white text-lg sm:text-xl font-bold">Visual Laser</h1>
                <p className="text-accent-300 text-xs sm:text-sm">Clínica Oftalmológica</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.path} className="relative">
                  <a
                    href={item.path}
                    className={`text-lg font-medium transition-colors duration-200 ${
                      isActivePage(item.path)
                        ? "text-accent-400 font-semibold"
                        : "text-white hover:text-accent-300"
                    }`}
                  >
                    {item.name}
                  </a>
                  {isActivePage(item.path) && (
                    <motion.div
                      layoutId="activePage"
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
                onClick={() => setIsAppointmentModalOpen(true)}
                className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta</span>
              </button>
              <a
                href="/contato"
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>Contato</span>
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
                    <p className="text-accent-300 text-base">Clínica Oftalmológica</p>
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
                  {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.path}
                        href={item.path}
                        className={`flex items-center space-x-6 px-6 py-6 rounded-2xl transition-all duration-200 ${
                          isActivePage(item.path)
                            ? "bg-accent-500 text-white"
                            : "text-white hover:bg-white/10"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <IconComponent className={`w-8 h-8 ${isActivePage(item.path) ? "text-white" : "text-white/70"}`} />
                        <span className="font-bold text-2xl">{item.name}</span>
                        {isActivePage(item.path) && (
                          <div className="ml-auto w-4 h-4 bg-white rounded-full"></div>
                        )}
                      </a>
                    );
                  })}
                </nav>

                {/* Action Buttons */}
                <div className="px-6 mt-12 space-y-6">
                  {/* Agendar Consulta - DESTACADO */}
                  <button
                    onClick={() => {
                      setIsAppointmentModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-4"
                  >
                    <Calendar className="w-8 h-8" />
                    <span className="text-2xl">Agendar Consulta</span>
                  </button>

                  {/* Contato */}
                  <a
                    href="/contato"
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-5 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-4 border border-white/20"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageCircle className="w-7 h-7" />
                    <span className="text-xl">Contato</span>
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
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
};

export default Header;
