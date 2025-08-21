"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Target, Users, Award, Zap } from "lucide-react";

const CompanyValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Empatia",
      description:
        "Colocamos-nos no lugar do paciente, entendendo suas necessidades e preocupações.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Segurança",
      description:
        "Priorizamos a segurança em todos os procedimentos, utilizando protocolos rigorosos.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Excelência",
      description:
        "Buscamos constantemente a perfeição técnica e o melhor resultado para cada paciente.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Humanização",
      description:
        "Tratamos cada paciente como único, com respeito, dignidade e atenção personalizada.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Award,
      title: "Profissionalismo",
      description:
        "Mantemos os mais altos padrões éticos e profissionais em todas as nossas ações.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Inovação",
      description:
        "Sempre atentos aos avanços tecnológicos para oferecer o que há de melhor.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const commitments = [
    "Investir continuamente em tecnologia de ponta",
    "Manter equipe médica atualizada e capacitada",
    "Oferecer atendimento humanizado e personalizado",
    "Garantir segurança em todos os procedimentos",
    "Contribuir para a melhoria da qualidade de vida dos pacientes",
    "Ser referência em oftalmologia na região Norte",
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
            Nossos <span className="text-accent-400">Valores</span>
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
            Os valores que guiam nossa missão e definem como tratamos cada
            paciente, sempre com empatia, profissionalismo e compromisso com a
            excelência.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-accent-200 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-primary-200 leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitments Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-accent-200 mb-6">
              Nossos Compromissos
            </h3>
            <p className="text-primary-200 text-xl max-w-3xl mx-auto">
              Comprometemo-nos a manter os mais altos padrões de qualidade e
              excelência em tudo que fazemos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex items-center space-x-4 bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                <span className="text-primary-100 font-medium">
                  {commitment}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-3xl p-12">
            <h3 className="text-3xl font-bold mb-6">Nossa Visão de Futuro</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Continuar sendo referência em oftalmologia na região Norte,
              expandindo nossos serviços e tecnologia para atender cada vez mais
              famílias com excelência e humanização.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyValues;
