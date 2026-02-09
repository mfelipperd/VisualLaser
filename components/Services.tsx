"use client";

import { motion } from "framer-motion";
import { Eye, Activity, Microscope, Stethoscope } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import AppointmentModal from "./AppointmentModal";

const Services = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const services = [
    {
      icon: Eye,
      title: "Exames Oftalmológicos",
      description:
        "Realizamos mais de 37 tipos de exames oftalmológicos com equipamentos de última geração para diagnósticos precisos.",
      features: [
        "Exames Básicos (Acuidade Visual, Refratometria)",
        "Exames de Córnea (Topografia, Paquimetria)",
        "Exames de Retina (Mapeamento, OCT, Angiografia)",
        "Exames de Glaucoma (Campimetria, Gonioscopia)",
        "Exames de Superfície Ocular",
        "Exames Especializados (Aberrometria, Biometria)",
      ],
      color: "from-primary-950 to-primary-800",
      link: "/exames-cirurgias",
    },
    {
      icon: Activity,
      title: "Cirurgias e Procedimentos",
      description:
        "Realizamos mais de 22 tipos de cirurgias e procedimentos oftalmológicos com tecnologia avançada e equipe especializada.",
      features: [
        "Cirurgia de Catarata (Facoemulsificação)",
        "Cirurgia Refrativa (PRK, Crosslinking)",
        "Cirurgias de Glaucoma",
        "Transplante de Córnea",
        "Cirurgias de Retina (Fotocoagulação a Laser)",
        "Cirurgias de Pálpebras (Blefaroplastia)",
      ],
      color: "from-secondary-950 to-accent-500",
      link: "/exames-cirurgias",
    },
    {
      icon: Microscope,
      title: "Tratamento de Catarata",
      description:
        "Especialistas em tratamento de catarata com as técnicas mais modernas e lentes intraoculares de alta qualidade.",
      features: [
        "Facoemulsificação com Lente Intraocular",
        "Capsulotomia posterior com YAG Laser",
        "Lentes Intraoculares Premium",
        "Implante de Lente Intraocular Fácica",
        "Avaliação Completa Pré-Operatória",
        "Acompanhamento Pós-Cirúrgico",
      ],
      color: "from-accent-500 to-accent-600",
      link: "/servicos/tratamento-catarata",
    },
    {
      icon: Stethoscope,
      title: "Consultas Especializadas",
      description:
        "Consultas com oftalmologistas especialistas em diferentes áreas da oftalmologia para um atendimento completo e personalizado.",
      features: [
        "Oftalmologia Geral",
        "Retina e Vítreo",
        "Glaucoma",
        "Córnea e Refrativa",
        "Plástica Ocular",
        "Harmonização Facial",
      ],
      color: "from-primary-800 to-primary-600",
      link: "/equipe",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white overflow-x-hidden">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-accent-400">Serviços</span>
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços oftalmológicos, desde
            exames preventivos até cirurgias complexas, sempre com tecnologia de
            ponta e equipe especializada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group h-full"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-accent-200 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-primary-200 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 flex-grow">
                  <h4 className="text-lg font-semibold text-accent-300 mb-4">
                    Principais Procedimentos:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-accent-400 rounded-full flex-shrink-0"></div>
                        <span className="text-primary-200 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <Link 
                    href={service.link}
                    className="text-accent-400 hover:text-accent-300 font-medium transition-all duration-200 group-hover:translate-x-2 transform inline-flex items-center space-x-2"
                  >
                    <span>Saiba Mais</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Precisa de um Exame ou Consulta?
            </h3>
            <p className="text-primary-200 mb-6">
              Entre em contato conosco e agende sua consulta. Nossa equipe está
              pronta para cuidar da sua saúde visual com excelência e
              profissionalismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setIsAppointmentModalOpen(true)}
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Agendar Consulta
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </section>
  );
};

export default Services;
