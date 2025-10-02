"use client";

import { motion } from "framer-motion";
import { 
  Eye, 
  Clock, 
  Shield, 
  Award, 
  Users, 
  CheckCircle,
  Star,
  Heart,
  Zap,
  ArrowRight
} from "lucide-react";

const LandingBenefits = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Consulta Completa",
      description: "Exame oftalmológico completo incluindo avaliação de acuidade visual, pressão intraocular e fundo de olho.",
      features: ["Exame de refração", "Tonometria", "Fundoscopia", "Avaliação completa"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Oftalmologistas com mais de 25 anos de experiência, especializados em diferentes áreas da oftalmologia.",
      features: ["Oftalmologia Geral", "Retina", "Glaucoma", "Refrativa"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Zap,
      title: "Tecnologia de Ponta",
      description: "Equipamentos modernos e técnicas avançadas para diagnósticos precisos e tratamentos eficazes.",
      features: ["Tomografia", "Campimetria", "Retinografia", "Laser"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Clock,
      title: "Resultados Rápidos",
      description: "Diagnóstico imediato e encaminhamento para tratamento quando necessário, sem demora.",
      features: ["Diagnóstico imediato", "Encaminhamento rápido", "Acompanhamento", "Suporte contínuo"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Protocolos rigorosos de segurança e higiene, garantindo um ambiente seguro para todos os pacientes.",
      features: ["Protocolos de segurança", "Higienização", "Equipamentos esterilizados", "Ambiente controlado"],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cuidado personalizado e acolhedor, com foco no bem-estar e conforto de cada paciente.",
      features: ["Atendimento personalizado", "Ambiente acolhedor", "Profissionais atenciosos", "Suporte emocional"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    }
  ];

  const stats = [
    {
      number: "50.000+",
      label: "Pacientes Atendidos",
      icon: Users
    },
    {
      number: "25+",
      label: "Anos de Experiência",
      icon: Award
    },
    {
      number: "100%",
      label: "Gratuito",
      icon: CheckCircle
    },
    {
      number: "4.9",
      label: "Avaliação dos Pacientes",
      icon: Star
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            <div className="inline-flex items-center space-x-2 bg-accent-500/10 rounded-full px-6 py-3 mb-6">
              <CheckCircle className="w-5 h-5 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">Por que escolher a Visual Laser?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Benefícios Exclusivos</span>
              <br />
              <span className="text-gray-700">da Visual Laser</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubra todos os benefícios que você terá ao agendar sua consulta na Visual Laser, 
              a clínica oftalmológica mais confiável de Belém há mais de 25 anos.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className={`${benefit.bgColor} rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100`}>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-primary-950 to-primary-900 rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Números que Comprovam Nossa Excelência
              </h3>
              <p className="text-xl text-primary-200 max-w-2xl mx-auto">
                Mais de duas décadas cuidando da saúde ocular dos paraenses com resultados comprovados.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <stat.icon className="w-10 h-10 text-accent-400" />
                  </div>
                  
                  <div className="text-4xl md:text-5xl font-bold text-accent-400 mb-2">
                    {stat.number}
                  </div>
                  
                  <div className="text-lg text-primary-200">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pronto para Cuidar da Sua Visão?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Agende agora sua consulta gratuita e garante sua vaga limitada. 
                Nossa equipe está pronta para oferecer o melhor atendimento oftalmológico.
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
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="text-lg">🎯 Agendar Consulta Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingBenefits;
