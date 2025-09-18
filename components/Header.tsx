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
    { name: "E&C", path: "/exames-cirurgias", icon: Activity },
    { name: "Equipe", path: "/equipe", icon: Users },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          isScrolled
            ? "bg-primary-950/90 backdrop-blur-md border-b border-primary-800/50"
            : "bg-primary-950/70 backdrop-blur-md border-b border-primary-800/30"
        }`}
      >
        <div className="container mx-auto container-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200">
              <img
                src="/logo-visual-branca.png"
                alt="Visual Laser"
                className="h-12 w-auto"
              />
              <div className="hidden sm:block sr-only">
                <h1 className="text-white text-xl font-bold">Visual Laser</h1>
                <p className="text-accent-300 text-sm">Clínica Oftalmológica</p>
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

            {/* CTA Buttons */}
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

            {/* Mobile Menu Button - Hidden on mobile, shown on tablet */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hidden md:flex lg:hidden w-10 h-10 bg-accent-500 hover:bg-accent-600 rounded-lg items-center justify-center transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Tablet Menu - Instagram/Facebook Style */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="hidden md:block lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-200"
            >
              <div className="px-4 py-6">
                {/* Navigation Items */}
                <nav className="space-y-2">
                  {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.path}
                        href={item.path}
                        className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                          isActivePage(item.path)
                            ? "bg-primary-50 text-primary-600"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <IconComponent className={`w-6 h-6 ${isActivePage(item.path) ? "text-primary-600" : "text-gray-500"}`} />
                        <span className="font-medium text-lg">{item.name}</span>
                        {isActivePage(item.path) && (
                          <div className="ml-auto w-2 h-2 bg-primary-600 rounded-full"></div>
                        )}
                      </a>
                    );
                  })}
                </nav>

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  {/* Agendar Consulta - Destacado */}
                  <button
                    onClick={() => {
                      setIsAppointmentModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
                  >
                    <Calendar className="w-6 h-6" />
                    <span className="text-lg">Agendar Consulta</span>
                  </button>

                  {/* Contato */}
                  <a
                    href="/contato"
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Contato</span>
                  </a>
                </div>

                {/* Footer Info */}
                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <p className="text-gray-500 text-sm">
                    Visual Laser - Clínica Oftalmológica
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Belém - Pará
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Bottom Navigation Bar - Instagram/Facebook Style */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary-950/90 backdrop-blur-md border-t border-primary-800/50 md:hidden">
        <div className="flex items-center justify-between py-1.5 px-1">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.path}
                href={item.path}
                className={`flex flex-col items-center justify-center py-1 px-1 rounded-lg transition-all duration-200 ${
                  isActivePage(item.path)
                    ? "text-accent-400"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <IconComponent className="w-5 h-5 text-white" />
                <span className="text-xs font-medium mt-0.5">{item.name}</span>
                {isActivePage(item.path) && (
                  <div className="w-1 h-1 bg-accent-400 rounded-full mt-0.5"></div>
                )}
              </a>
            );
          })}
          
          {/* Agendar Consulta - Destacado */}
          <button
            onClick={() => setIsAppointmentModalOpen(true)}
            className="flex flex-col items-center justify-center py-1 px-1 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-white transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-xs font-bold mt-0.5">Agendar</span>
          </button>
        </div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
};

export default Header;
