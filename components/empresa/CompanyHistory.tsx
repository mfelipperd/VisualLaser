"use client";

import { motion } from "framer-motion";
import { Calendar, TrendingUp, Building2, ArrowUpRight, Radio, Heart, Award, Trophy, Zap } from "lucide-react";

const CompanyHistory = () => {
  const milestones = [
    {
      year: "1997",
      title: "Fundação da Visual Laser",
      description: "Fundação da Visual Laser na Travessa Curuzú no Bairro do Marco, como Centro Pioneiro de Cirurgia Refrativa, com o 1º equipamento de Excimer Laser a realizar PRK e LASIK no Pará.",
      icon: Calendar,
    },
    {
      year: "1999",
      title: "1000 Cirurgias Refrativas",
      description: "Realização de 1000 cirurgias refrativas (PRK e LASIK).",
      icon: Award,
    },
    {
      year: "2000",
      title: "2000 Cirurgias Refrativas",
      description: "Marco na Realização de 2000 cirurgias refrativas (PRK e LASIK); ampliação de consultórios e implantação de sistemas de gerenciamento de qualidade total.",
      icon: TrendingUp,
    },
    {
      year: "2003",
      title: "Nova Sede e Expansão",
      description: "Mudança de endereço para a travessa 14 de Março e ampliação da estrutura para Clínica Oftalmológica com consultórios e centro cirúrgico.",
      icon: Building2,
    },
    {
      year: "2010",
      title: "Ampliação das Instalações",
      description: "Ampliação das instalações e dos recursos diagnósticos, terapêuticos e de gestão.",
      icon: ArrowUpRight,
    },
    {
      year: "2012",
      title: "15 Anos de História",
      description: "Campanha Publicitária comemorando 15 anos de excelência em oftalmologia.",
      icon: Radio,
    },
    {
      year: "2016",
      title: "Criação do PSVL",
      description: "Criação do PSVL (Programa Solidário Visual Laser).",
      icon: Heart,
    },
    {
      year: "2017",
      title: "20 Anos de Excelência",
      description: "Comemoração de 20 anos com Ação Solidária.",
      icon: Trophy,
    },
    {
      year: "2022",
      title: "25 Anos de Dedicação",
      description: "Comemoração de 25 anos com Ação Solidária.",
      icon: Award,
    },
    {
      year: "2024",
      title: "Tecnologia de Ponta",
      description: "Instalação do 1º aberrômetro raytracing da Região Norte (equipamento de análise avançada da qualidade visual para planejamento cirúrgico); instalação de equipamentos de última geração para cirurgia de catarata (facoemulsificação) com pressão fisiológica, marcação digital de lentes intraoculares na correção de astigmatismo e laser subliminar para tratamentos de glaucoma.",
      icon: Zap,
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
            Nossa <span className="text-primary-600">História</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma jornada de mais de 27 anos dedicada à excelência em oftalmologia,
            sempre inovando e servindo com empatia e profissionalismo.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600"></div>

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  } text-center md:text-left`}
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-3 md:mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center -top-3 md:top-1/2 md:-translate-y-1/2">
                  <milestone.icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Nossa Maior Satisfação</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              É poder contribuir de forma significativa para melhorar sua
              excelência visual e sua qualidade de vida! Continuamos focados em
              todos os aspectos no constante processo de aperfeiçoamento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyHistory;
