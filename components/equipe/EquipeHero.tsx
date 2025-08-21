"use client";

import { motion } from "framer-motion";
import { Users, Award, Heart, Shield } from "lucide-react";

const EquipeHero = () => {
  const features = [
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais com diferentes especialidades oftalmológicas",
    },
    {
      icon: Award,
      title: "Experiência Comprovada",
      description: "Anos de prática e formação continuada",
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado para cada paciente",
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Protocolos rigorosos e equipamentos modernos",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/equipe%20medica_pagina_fundo.png)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/70 to-primary-700/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-shadow-lg leading-tight">
                  Nossa <span className="text-accent-400">Equipe Médica</span>
                </h1>

                <p className="text-xl md:text-2xl text-primary-200 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Temos uma equipe médica diversificada, atualizada e capacitada
                  tecnicamente para atendê-lo com toda a cortesia e competência
                  que você deseja e merece.
                </p>

                <div className="text-lg text-primary-100 max-w-3xl mx-auto">
                  <p className="mb-4">
                    Nossos oftalmologistas são especialistas em diferentes áreas
                    da oftalmologia, oferecendo um atendimento completo e
                    personalizado para cada paciente.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 mt-16 mb-16"
      >
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-accent-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary-200">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EquipeHero;
