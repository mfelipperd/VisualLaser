"use client";

import { motion } from "framer-motion";
import { Heart, Users, Award, Star } from "lucide-react";

const PSVL = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description:
        "Cuidamos de cada paciente com dedicação, respeito e profissionalismo.",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description:
        "Profissionais experientes e capacitados para oferecer o melhor tratamento.",
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description:
        "Mantemos os mais altos padrões de qualidade em todos os procedimentos.",
    },
    {
      icon: Star,
      title: "Tecnologia Avançada",
      description:
        "Utilizamos equipamentos de última geração para resultados excepcionais.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
                  <Heart className="w-5 h-5 text-accent-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Programa Solidário
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  PSVL -{" "}
                  <span className="text-gradient">
                    Programa Solidário Visual Laser
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  O PSVL é nosso programa de responsabilidade social que visa
                  proporcionar atendimento oftalmológico de qualidade para
                  pessoas em situação de vulnerabilidade social.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Acreditamos que a saúde visual é um direito de todos, e por
                  isso desenvolvemos este programa para atender comunidades que
                  necessitam de cuidados oftalmológicos especializados.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-950 to-accent-500 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4"
              >
                <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Saiba Mais Sobre o PSVL
                </button>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://visuallaser.med.br/wp-content/uploads/2023/09/Screenshot-from-2023-09-21-16-02-05-e1695323161519.png"
                  alt="PSVL - Programa Solidário Visual Laser"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent"></div>

                {/* Floating Info Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Compromisso Social
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    O PSVL representa nosso compromisso com a comunidade,
                    oferecendo atendimento oftalmológico de qualidade para
                    todos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-br from-primary-950 to-primary-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Como Funciona o PSVL?</h3>
              <p className="text-primary-200 mb-6 max-w-3xl mx-auto">
                O programa funciona através de parcerias com organizações
                sociais, igrejas e entidades comunitárias, que indicam pacientes
                que necessitam de atendimento oftalmológico. Nossa equipe avalia
                cada caso e oferece o tratamento adequado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                  Seja um Parceiro
                </button>
                <button className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-6 rounded-lg border border-white/30 hover:border-accent-400 transition-all duration-300">
                  Solicitar Atendimento
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PSVL;
