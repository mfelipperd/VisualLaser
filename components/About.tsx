"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Award, Clock, Heart } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "50.000+",
      label: "Pacientes Atendidos",
      description: "Mais de 50 mil pacientes já confiaram na Visual Laser",
    },
    {
      icon: Award,
      number: "+25",
      label: "Anos de Experiência",
      description: "Mais de 25 anos de excelência em oftalmologia",
    },
    {
      icon: Clock,
      number: "Seg-Sex",
      label: "Horário de Funcionamento",
      description: "Segunda a quinta: 08h às 18h | Sexta: 08h às 17h",
    },
    {
      icon: Heart,
      number: "100%",
      label: "Compromisso",
      description: "Dedicação total ao bem-estar dos pacientes",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch mb-20 max-w-6xl mx-auto">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Conheça a <span className="text-gradient">Visual Laser</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Há quase 30 anos, somos referência em oftalmologia avançada e
                  humanizada na região Norte. Nossa clínica oferece
                  infraestrutura completa, tecnologia de última geração e uma
                  equipe médica altamente especializada.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nosso compromisso é proporcionar o melhor atendimento
                  oftalmológico, sempre com foco na qualidade de vida dos nossos
                  pacientes. Utilizamos as mais avançadas técnicas e
                  equipamentos para garantir resultados excepcionais.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">
                    Equipe médica especializada e experiente
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">
                    Tecnologia de última geração
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">
                    Atendimento humanizado e personalizado
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                  <span className="text-gray-700 font-medium">
                    Infraestrutura completa e moderna
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Clinic Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://visuallaser.med.br/wp-content/uploads/2024/07/DSC7103-2-2.jpg"
                  alt="Clínica Visual Laser"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent"></div>

                {/* Floating Info Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Clínica de Referência
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nossa clínica possui infraestrutura completa e moderna,
                    projetada para oferecer conforto e segurança aos pacientes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 h-full flex flex-col justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-950 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-950 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
