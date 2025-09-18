"use client";

import { motion } from "framer-motion";
import { Eye, Activity, Microscope, Stethoscope } from "lucide-react";

const ExamesHero = () => {
  const features = [
    {
      icon: Eye,
      title: "Exames Precisos",
      description: "Tecnologia de última geração para diagnósticos precisos",
    },
    {
      icon: Activity,
      title: "Cirurgias Avançadas",
      description: "Procedimentos cirúrgicos com equipamentos modernos",
    },
    {
      icon: Microscope,
      title: "Análise Detalhada",
      description: "Exames especializados para cada condição ocular",
    },
    {
      icon: Stethoscope,
      title: "Atendimento Personalizado",
      description: "Cuidado individualizado para cada paciente",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/exame_pagina_fundo.jpg)`,
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
                  Exames e <span className="text-accent-400">Cirurgias</span>
                </h1>

                <p className="text-xl md:text-2xl text-primary-200 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Oferecemos uma ampla gama de exames oftalmológicos e
                  procedimentos cirúrgicos com tecnologia de última geração para
                  cuidar da sua saúde visual.
                </p>

                <div className="text-lg text-primary-100 max-w-3xl mx-auto">
                  <p className="mb-4">
                    Nossa equipe médica especializada utiliza equipamentos de
                    ponta para realizar diagnósticos precisos e tratamentos
                    eficazes, sempre com foco na segurança e bem-estar dos
                    nossos pacientes.
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

export default ExamesHero;
