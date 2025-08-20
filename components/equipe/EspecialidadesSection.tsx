"use client";

import { motion } from "framer-motion";
import { Eye, Target, Heart, Shield, Zap, Users } from "lucide-react";

const EspecialidadesSection = () => {
  const especialidades = [
    {
      icon: Eye,
      title: "Oftalmologia Geral",
      description:
        "Atendimento completo para todas as idades, desde consultas de rotina até diagnósticos complexos.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Retina e Vítreo",
      description:
        "Especialistas em doenças da retina, vítreo e mácula, com tecnologia de ponta para diagnósticos precisos.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Glaucoma",
      description:
        "Diagnóstico precoce e tratamento avançado do glaucoma, uma das principais causas de cegueira.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Córnea e Refrativa",
      description:
        "Especialistas em cirurgias refrativas, transplantes de córnea e tratamento de doenças corneanas.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Zap,
      title: "Oftalmopediatria",
      description:
        "Cuidado especializado para crianças, com abordagem lúdica e equipamentos adaptados para pequenos pacientes.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Neuro-oftalmologia",
      description:
        "Diagnóstico e tratamento de doenças neurológicas que afetam a visão e os movimentos oculares.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossas <span className="text-accent-400">Especialidades</span>
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
            Nossa equipe médica é composta por especialistas em diferentes áreas
            da oftalmologia, garantindo um atendimento completo e especializado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {especialidades.map((especialidade, index) => (
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
                  className={`w-20 h-20 bg-gradient-to-br ${especialidade.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <especialidade.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-accent-200 mb-4 text-center">
                  {especialidade.title}
                </h3>
                <p className="text-primary-200 leading-relaxed text-center">
                  {especialidade.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold text-accent-200 mb-6">
              Formação Continuada
            </h3>
            <p className="text-primary-200 text-xl max-w-3xl mx-auto mb-8">
              Nossa equipe médica está constantemente se atualizando através de
              congressos, cursos e especializações para oferecer o que há de
              mais moderno em oftalmologia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                <span className="text-primary-100 font-medium">
                  Participação em congressos internacionais
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                <span className="text-primary-100 font-medium">
                  Especializações em centros de referência
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                <span className="text-primary-100 font-medium">
                  Pesquisas e publicações científicas
                </span>
              </div>
              <div className="flex items-center space-x-4 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-3 h-3 bg-accent-400 rounded-full"></div>
                <span className="text-primary-100 font-medium">
                  Treinamentos com novas tecnologias
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EspecialidadesSection;
