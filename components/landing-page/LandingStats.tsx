"use client";

import { motion } from "framer-motion";
import { Users, Award, Clock, Shield, Eye, Heart, Star, CheckCircle } from "lucide-react";

const LandingStats = () => {
  const mainStats = [
    {
      icon: Users,
      number: "50.000+",
      label: "Pacientes Atendidos",
      description: "Mais de 50 mil pessoas já confiaram na Visual Laser",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Award,
      number: "25+",
      label: "Anos de Experiência",
      description: "Mais de duas décadas cuidando da saúde ocular",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Avaliação Média",
      description: "Nota baseada em centenas de avaliações",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: CheckCircle,
      number: "98%",
      label: "Taxa de Satisfação",
      description: "Pacientes satisfeitos com nossos serviços",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const features = [
    {
      icon: Eye,
      title: "Tecnologia Avançada",
      description: "Equipamentos de última geração para diagnósticos precisos"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Oftalmologistas experientes e altamente qualificados"
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Consultas rápidas e resultados em até 48 horas"
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Protocolos rigorosos de segurança e higiene"
    },
    {
      icon: Heart,
      title: "Cuidado Humanizado",
      description: "Atendimento personalizado e acolhedor"
    },
    {
      icon: Award,
      title: "Reconhecimento",
      description: "Clínica de referência em oftalmologia na região Norte"
    }
  ];

  return (
    <section id="stats" className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-accent-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-accent-400/30">
              <Award className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-medium text-accent-300">
                Números que Comprovam Nossa Excelência
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient bg-gradient-to-r from-white to-accent-300 bg-clip-text text-transparent">
                Por Que Somos
              </span>
              <br />
              <span className="text-accent-400">Referência em Belém</span>
            </h2>
            
            <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
              Mais de 25 anos de experiência, milhares de pacientes atendidos e resultados comprovados 
              fazem da Visual Laser a escolha certa para sua saúde ocular.
            </p>
          </motion.div>

          {/* Main Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {mainStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 h-full">
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-3">
                    {stat.number}
                  </div>

                  {/* Label */}
                  <div className="text-xl font-semibold text-white mb-3">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <p className="text-primary-200 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 h-full">
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-primary-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Faça Parte Dessa História de Sucesso
              </h3>
              <p className="text-accent-100 mb-6 max-w-2xl mx-auto">
                Junte-se a mais de 50.000 pacientes que já confiaram na Visual Laser 
                para cuidar da sua saúde ocular. Agende sua consulta gratuita hoje mesmo!
              </p>
              
              <button
                onClick={() => {
                  const formElement = document.getElementById('landing-form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                  }
                  // Rastrear evento de interesse
                  if (typeof window !== 'undefined' && window.trackConversion) {
                    window.trackConversion('ViewContent');
                  }
                }}
                className="inline-flex items-center space-x-3 bg-white hover:bg-gray-50 text-accent-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="text-lg">🎯 Garantir Minha Vaga</span>
                <CheckCircle className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingStats;
