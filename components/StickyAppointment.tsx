"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import AppointmentModal from "./AppointmentModal";

const StickyAppointment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-40 p-4 pb-6 sm:hidden"
          >
            <button
              id="btn-sticky-agendamento-mobile"
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-6 rounded-xl shadow-2xl flex items-center justify-center space-x-3 transform active:scale-95 transition-all duration-200 border border-white/20 backdrop-blur-sm"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-lg">Agendar Consulta</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default StickyAppointment;
