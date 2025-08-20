"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, Phone } from "lucide-react";
import { useState } from "react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 z-[10000] bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Agende sua Consulta</h2>
                    <p className="text-primary-100">
                      Sistema de Agendamento Visual Laser
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 relative">
              {/* Loading State */}
              {isLoading && (
                <div className="absolute inset-0 bg-gray-50 flex items-center justify-center z-10">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">
                      Carregando sistema de agendamento...
                    </p>
                  </div>
                </div>
              )}

              {/* Iframe */}
              <iframe
                src="https://visuallaser.agendamento.medplusweb.com.br/agendamento"
                className="w-full h-full min-h-[600px] border-0"
                onLoad={handleIframeLoad}
                title="Sistema de Agendamento Visual Laser"
                allow="fullscreen"
              />
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-accent-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Agendamento Online
                  </span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    24h por dia
                  </span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    Suporte disponível
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
