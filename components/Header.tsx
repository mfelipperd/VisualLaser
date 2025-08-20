"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar } from "lucide-react";
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
    { name: "Home", path: "/" },
    { name: "Empresa", path: "/empresa" },
    { name: "Exames e Cirurgias", path: "/exames-cirurgias" },
    { name: "Equipe", path: "/equipe" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary-950/90 backdrop-blur-md border-b border-primary-800/50"
            : "bg-primary-950/70 backdrop-blur-md border-b border-primary-800/30"
        }`}
      >
        <div className="container mx-auto container-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img
                src="/logo-visual-branca.png"
                alt="Visual Laser"
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-white text-xl font-bold">Visual Laser</h1>
                <p className="text-accent-300 text-sm">Clínica Oftalmológica</p>
              </div>
            </div>

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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 bg-accent-500 hover:bg-accent-600 rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-primary-950/95 backdrop-blur-md border-t border-primary-800/50"
            >
              <div className="container mx-auto container-padding py-6">
                <nav className="space-y-4">
                  {menuItems.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      className={`block text-lg font-medium transition-colors duration-200 ${
                        isActivePage(item.path)
                          ? "text-accent-400 font-semibold"
                          : "text-white hover:text-accent-300"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="pt-4 border-t border-primary-800/50 space-y-3">
                    <button
                      onClick={() => {
                        setIsAppointmentModalOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full justify-center"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Agendar Consulta</span>
                    </button>
                    <a
                      href="/contato"
                      className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 w-full justify-center"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Contato</span>
                    </a>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
};

export default Header;
