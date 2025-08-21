"use client";

import { motion } from "framer-motion";
import { Calendar, Target, Users, Award } from "lucide-react";

const CompanyHistory = () => {
  const milestones = [
    {
      year: "1997",
      title: "Fundação da Visual Laser",
      description: "Nascimento com espírito de inovação e empatia",
      icon: Calendar,
    },
    {
      year: "2000",
      title: "Primeira Expansão",
      description: "Ampliação da estrutura e equipe médica",
      icon: Users,
    },
    {
      year: "2010",
      title: "Tecnologia Avançada",
      description: "Investimento em equipamentos de última geração",
      icon: Target,
    },
    {
      year: "2024",
      title: "Referência Regional",
      description: "25+ anos de excelência em oftalmologia",
      icon: Award,
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
            Uma jornada de 25+ anos dedicada à excelência em oftalmologia,
            sempre inovando e servindo com empatia e profissionalismo.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                  }`}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div className="text-4xl font-bold text-primary-600 mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <milestone.icon className="w-4 h-4 text-white" />
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
