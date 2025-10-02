"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Users } from "lucide-react";
import { useState } from "react";

const LandingHero = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleCTAClick = () => {
    // Rastrear evento de clique no CTA principal
    if (typeof window !== 'undefined' && window.trackConversion) {
      window.trackConversion('Lead');
    }
    
    // Scroll para o formulário
    const formElement = document.getElementById('landing-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] bg-repeat"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-accent-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-accent-400/30"
              >
                <Clock className="w-5 h-5 text-accent-400" />
                <span className="text-sm font-medium text-accent-300">
                  Agendamento Online - Fácil e Rápido!
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient bg-gradient-to-r from-white to-accent-300 bg-clip-text text-transparent">
                    Agende sua
                  </span>
                  <br />
                  <span className="text-white">Consulta</span>
                  <br />
                  <span className="text-accent-400">Oftalmológica</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-primary-200 leading-relaxed max-w-2xl">
                  👁️ <strong>Agende agora</strong> sua consulta oftalmológica com especialistas experientes e tecnologia de última geração em Belém.
                </p>
              </motion.div>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-white">✅ Agendamento online fácil</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-white">✅ Oftalmologistas especializados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-white">✅ Tecnologia de última geração</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-white">✅ Atendimento humanizado</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <button
                  onClick={handleCTAClick}
                  className="group inline-flex items-center justify-center space-x-3 bg-accent-500 hover:bg-accent-600 text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  <span className="text-xl">🎯 Agendar Consulta</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button
                  onClick={() => window.open('https://wa.me/5591988968201?text=Quero%20agendar%20uma%20consulta%20oftalmológica', '_blank')}
                  className="inline-flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 text-white font-semibold py-6 px-8 rounded-2xl transition-all duration-300 border border-white/30 hover:border-white/50 backdrop-blur-sm"
                >
                  <span className="text-lg">💬 Falar no WhatsApp</span>
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap items-center gap-6 pt-8"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-accent-400" />
                  <span className="text-sm text-primary-200">Dados Seguros</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-accent-400" />
                  <span className="text-sm text-primary-200">50.000+ Pacientes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-accent-400" />
                  <span className="text-sm text-primary-200">+25 Anos Experiência</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/landing-hero.jpg"
                    alt="Agende sua Consulta Oftalmológica - Visual Laser"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent"></div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-accent-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Equipe Especializada</h3>
                      <p className="text-sm text-gray-600">Médicos experientes</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Nossa equipe de oftalmologistas possui mais de 25 anos de experiência em Belém.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Tecnologia Avançada</h3>
                      <p className="text-sm text-gray-600">Equipamentos modernos</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Utilizamos os mais modernos equipamentos para diagnósticos precisos.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default LandingHero;
