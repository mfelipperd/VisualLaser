"use client";

import { motion } from "framer-motion";
import { Eye, Zap, Shield, Target } from "lucide-react";

const Technology = () => {
  const technologies = [
    {
      icon: Eye,
      title: "Facoemulsificação de Fluídica Ativa",
      description:
        "Equipamento de última geração para cirurgia de catarata com pressão intraocular fisiológica, resultando em mais conforto e segurança.",
      features: [
        "Pressão intraocular fisiológica",
        "Recuperação mais rápida",
        "Maior precisão no implante de LIOs premium",
      ],
    },
    {
      icon: Zap,
      title: "Biômetro OCT Swept Source",
      description:
        "Utiliza os algoritmos mais recentes e registra com grande precisão as medidas oculares até mesmo nas cataratas mais difíceis.",
      features: [
        "Algoritmos mais recentes",
        "Precisão excepcional",
        "Medidas oculares detalhadas",
      ],
    },
    {
      icon: Shield,
      title: "Aberraômetro Ocular de Frente de Onda Total",
      description:
        "Avalia e demonstra de forma objetiva como o paciente enxerga, baseado no comportamento da luz da córnea até a retina.",
      features: [
        "Avaliação objetiva da visão",
        "Análise completa da óptica ocular",
        "Diagnóstico preciso de aberrações",
      ],
    },
    {
      icon: Target,
      title: "Laser Micropulsado Avançado",
      description:
        "Para tratamentos de glaucoma, doenças da retina e tumores oculares com máxima precisão e segurança.",
      features: [
        "Tratamento de glaucoma",
        "Doenças da retina",
        "Tumores oculares",
      ],
    },
  ];

  const partnerships = [
    "Femto-LASIK (LASIK todo a laser)",
    "Trans-PRK (PRK todo a laser)",
    "PRK Topoguiado (PRK para irregularidades)",
    "Tratamento de aberrações corneanas",
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tecnologia de{" "}
            <span className="text-accent-400">Última Geração</span>
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
            A Visual Laser continua sempre atenta aos avanços tecnológicos para
            oferecer maior segurança e melhores resultados em todos os
            procedimentos.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <tech.icon className="w-8 h-8 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent-200 mb-3">
                    {tech.title}
                  </h3>
                  <p className="text-primary-200 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span className="text-primary-100 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnerships Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <h3 className="text-3xl font-bold text-accent-200 mb-6 text-center">
            Parcerias de Valor Agregado
          </h3>
          <p className="text-primary-200 text-center mb-8 max-w-3xl mx-auto">
            Possuímos importantes parcerias que nos permitem oferecer acesso às
            mais modernas tecnologias oftalmológicas disponíveis no mercado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex items-center space-x-3 bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                <span className="text-primary-100 font-medium">
                  {partnership}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
