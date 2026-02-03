"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, Calendar, MessageCircle, Home, Building2, Activity, Users } from "lucide-react";
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
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-7xl rounded-2xl ${
          isScrolled
            ? "bg-primary-950/80 backdrop-blur-lg border border-primary-800/50 shadow-2xl py-2"
            : "bg-primary-950/40 backdrop-blur-md border border-white/10 py-3"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 md:h-14">
            {/* Logo */}
            <a href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
              <img
                src="/logo-visual-branca.png"
                alt="Visual Laser"
                className="h-7 sm:h-8 lg:h-9 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.path} className="relative">
                  <a
                    href={item.path}
                    className={`text-sm md:text-base font-medium transition-all duration-200 ${
                      isActivePage(item.path)
                        ? "text-accent-400"
                        : "text-white/90 hover:text-accent-300"
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
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => setIsAppointmentModalOpen(true)}
                className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Agendar</span>
              </button>
              <a
                href="/contato"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 border border-white/20 text-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Contato</span>
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
                  {menuItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.a
                        key={item.path}
                        href={item.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 ${
                          isActivePage(item.path)
                            ? "bg-accent-500/20 text-accent-400"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className={`p-2 rounded-lg ${isActivePage(item.path) ? "bg-accent-500/20" : "bg-white/5"}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="font-semibold text-lg">{item.name}</span>
                        {isActivePage(item.path) && (
                          <div className="ml-auto w-1.5 h-1.5 bg-accent-400 rounded-full" />
                        )}
                      </motion.a>
                    );
                  })}
                </nav>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => {
                      setIsAppointmentModalOpen(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg shadow-accent-500/20"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Agendar Consulta</span>
                  </button>
                  <a
                    href="/contato"
                    className="w-full bg-white/5 hover:bg-white/10 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 border border-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <MessageCircle className="w-5 h-5 text-accent-400" />
                    <span>Falar Conosco</span>
                  </a>
                </div>

                <div className="text-center pt-2">
                  <p className="text-white/40 text-xs font-medium uppercase tracking-widest">
                    Visual Laser • Clínica Oftalmológica
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

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
};

export default Header;
