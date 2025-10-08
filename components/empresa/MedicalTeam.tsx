"use client";

import { motion } from "framer-motion";
import { UserCheck, Award, Heart, Shield, ArrowRight, Users } from "lucide-react";
import Link from "next/link";

const MedicalTeam = () => {
  const teamQualities = [
    {
      icon: UserCheck,
      title: "Equipe Diversificada",
      description:
        "Profissionais com diferentes especialidades e experiências para atender todas as necessidades oftalmológicas.",
    },
    {
      icon: Award,
      title: "Atualizada e Capacitada",
      description:
        "Constantemente em busca de conhecimento e técnicas mais avançadas para oferecer o melhor tratamento.",
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description:
        "Cortesia e competência em todos os momentos, tratando cada paciente com o cuidado que merece.",
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description:
        "Protocolos rigorosos e equipamentos de última geração para garantir a máxima segurança em todos os procedimentos.",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossa <span className="text-primary-600">Equipe Médica</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Temos uma equipe médica diversificada, atualizada e capacitada
            tecnicamente para atendê-lo com toda a cortesia e competência que
            você deseja e merece.
          </p>
        </motion.div>

        {/* Team Qualities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {teamQualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full flex flex-col justify-center"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <quality.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {quality.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {quality.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Estrutura Completa e Acolhedora
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Nossa estrutura é completa e acolhedora, projetada para oferecer
              conforto e tranquilidade durante todo o processo de atendimento.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Seguimos focados em todos os aspectos no constante processo de
              aperfeiçoamento, sempre buscando a excelência em tudo que fazemos.
            </p>
            <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
              <h4 className="text-lg font-semibold text-primary-800 mb-3">
                🎯 Nossa Missão
              </h4>
              <p className="text-primary-700">
                Proporcionar o melhor atendimento oftalmológico com tecnologia
                de ponta, equipe qualificada e um ambiente acolhedor para todos
                os nossos pacientes.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6 text-center">
                Por que Escolher a Visual Laser?
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                  <span>27 anos de experiência e confiança</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                  <span>Tecnologia de última geração</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                  <span>Equipe médica especializada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                  <span>Atendimento humanizado e personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                  <span>Estrutura completa e acolhedora</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Link para Equipe Médica */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-12 h-12 text-white mr-4" />
              <h3 className="text-3xl md:text-4xl font-bold">
                Conheça Nossa Equipe
              </h3>
            </div>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Descubra mais sobre nossos oftalmologistas especializados, suas qualificações 
              e áreas de expertise. Uma equipe dedicada ao cuidado da sua visão.
            </p>
            <Link
              href="/equipe"
              className="inline-flex items-center space-x-3 bg-white hover:bg-gray-100 text-primary-700 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="text-lg">Ver Equipe Médica</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MedicalTeam;
