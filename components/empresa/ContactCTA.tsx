"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Phone, ArrowRight, Star } from "lucide-react";

const ContactCTA = () => {
  const benefits = [
    "Consulta com especialistas experientes",
    "Avaliação completa da sua saúde visual",
    "Tecnologia de última geração",
    "Atendimento personalizado e humanizado",
    "Ambiente acolhedor e confortável",
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Agende uma <span className="text-accent-400">Experiência</span>{" "}
              Hoje Mesmo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Venha comprovar nossos diferenciais e descubra como a Visual Laser
              pode transformar sua visão e qualidade de vida.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-accent-300">
                Por que Escolher a Visual Laser?
              </h3>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-200">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-accent-500/20 rounded-xl p-6 border border-accent-500/30">
                <h4 className="text-lg font-semibold text-accent-300 mb-3">
                  🎯 Nossa Promessa
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Oferecer o melhor atendimento oftalmológico com tecnologia de
                  ponta, equipe qualificada e um ambiente acolhedor para todos
                  os nossos pacientes.
                </p>
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-accent-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Agende sua Consulta
                </h3>
                <p className="text-gray-300">
                  Venha conhecer nossa estrutura e equipe médica especializada
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <Link
                  href="/agende-sua-consulta"
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105"
                >
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/contato"
                  className="w-full bg-white/10 hover:bg-white/20 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 border border-white/20"
                >
                  <Phone className="w-5 h-5" />
                  <span>Falar Conosco</span>
                </Link>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-400 mb-3">
                  Atendimento de Segunda a Sexta: 8h às 18h
                </p>
                <p className="text-sm text-gray-400">Sábado: 8h às 12h</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Sua Visão Merece o Melhor
              </h3>
              <p className="text-lg text-primary-100 max-w-3xl mx-auto">
                Há 27 anos cuidando da saúde visual da sua família. Agende sua
                consulta e venha comprovar por que somos referência em
                oftalmologia em Belém.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

