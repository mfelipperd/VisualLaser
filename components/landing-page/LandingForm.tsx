"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, CheckCircle } from "lucide-react";
import AppointmentModal from "@/components/AppointmentModal";

const LandingForm = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (typeof window !== 'undefined' && window.trackConversion) {
      window.trackConversion('Lead');
    }
    setIsAppointmentModalOpen(true);
  };

  return (
    <section id="landing-form" className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-accent-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-accent-400/30">
              <Calendar className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-medium text-accent-300">
                Agendamento Online - Fácil e Rápido!
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient bg-gradient-to-r from-white to-accent-300 bg-clip-text text-transparent">
                Agende Sua
              </span>
              <br />
              <span className="text-accent-400">Consulta</span>
            </h2>

            <p className="text-xl text-primary-200 max-w-2xl mx-auto leading-relaxed mb-10">
              Marque direto no nosso sistema de agendamento online. Escolha o dia e o
              horário que preferir e receba a confirmação na hora.
            </p>

            <button
              id="btn-abrir-agendamento-landing"
              onClick={handleOpenModal}
              className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-6 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
            >
              <Calendar className="w-6 h-6" />
              <span>Agendar Consulta</span>
            </button>

            <div className="flex items-center justify-center space-x-2 mt-6 text-primary-200">
              <CheckCircle className="w-5 h-5 text-accent-400" />
              <span className="text-sm">Confirmação imediata, sem compromisso</span>
            </div>
          </motion.div>
        </div>
      </div>

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </section>
  );
};

export default LandingForm;
