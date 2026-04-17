"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, X, MapPin, MessageSquare, Heart } from "lucide-react";

const ReviewModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen and closed the modal in the last 30 days
    const lastClosed = localStorage.getItem("google_review_modal_closed");
    const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;

    if (lastClosed) {
      const timeSinceClosed = Date.now() - parseInt(lastClosed);
      if (timeSinceClosed < thirtyDaysInMs) {
        return; // Don't show if closed recently
      }
    }

    // Set a timer to show the modal after 45 seconds of navigation
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 45000); // 45 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("google_review_modal_closed", Date.now().toString());
  };

  const handleReviewClick = () => {
    // Correct link to Visual Laser's Google Maps profile
    window.open("https://www.google.com/maps/search/?api=1&query=Visual+Laser+Belém+Travessa+14+de+Março", "_blank");
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-lg bg-white rounded-[2rem] shadow-2xl shadow-primary-900/20 overflow-hidden relative border border-white/20"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-primary-600 transition-colors z-10"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content Top Gradient */}
            <div className="bg-gradient-to-br from-primary-950 to-primary-800 p-8 text-white relative overflow-hidden">
               <div className="absolute -right-6 -bottom-6 opacity-10">
                  <Star className="w-32 h-32 rotate-12" />
               </div>
               
               <div className="inline-flex items-center space-x-2 bg-accent-500/20 rounded-full px-4 py-1 mb-4 border border-accent-400/30">
                  <Heart className="w-4 h-4 text-accent-400" fill="currentColor" />
                  <span className="text-xs font-bold text-accent-300 uppercase tracking-tighter">Sua opinião importa</span>
               </div>
               
               <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  Como foi sua experiência na <span className="text-accent-400">Visual Laser?</span>
               </h2>
            </div>

            {/* Body */}
            <div className="p-8 bg-white">
              <p className="text-gray-600 leading-relaxed mb-8">
                 Trabalhamos incansavelmente para oferecer o melhor cuidado para sua visão em Belém. Ficamos imensamente felizes em saber o que você achou do nosso atendimento tecnológico e humanizado!
              </p>

              <div className="space-y-4">
                <button
                  onClick={handleReviewClick}
                  className="w-full flex items-center justify-center space-x-3 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-2xl transition-all transform hover:scale-[1.02] shadow-lg shadow-accent-500/30"
                >
                  <Star className="w-5 h-5 fill-current" />
                  <span>Avaliar no Google</span>
                </button>
                
                <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-50">
                   <div className="flex flex-col items-center">
                      <div className="flex -space-x-1 mb-2">
                         {[1, 2, 3, 4, 5].map((s) => (
                           <Star key={s} className="w-4 h-4 text-yellow-500 fill-current" />
                         ))}
                      </div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Nota 4.8+</span>
                   </div>
                   <div className="h-8 w-px bg-gray-100"></div>
                   <div className="flex flex-col items-center">
                      <MessageSquare className="w-5 h-5 text-gray-300 mb-1" />
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">+1k Avaliações</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-4 flex items-center justify-center space-x-2 opacity-60">
               <MapPin className="w-3 h-3 text-gray-400" />
               <span className="text-[10px] text-gray-500 uppercase font-medium">Nazaré, Belém - Pará</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ReviewModal;
