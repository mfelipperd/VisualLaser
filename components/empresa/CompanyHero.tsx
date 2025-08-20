"use client";

import { motion } from "framer-motion";
import { Building2, Users, Award, Heart } from "lucide-react";

const CompanyHero = () => {
  const stats = [
    {
      icon: Building2,
      value: "27",
      label: "Anos de Experiência",
      description: "Tradição e confiança",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Pacientes Atendidos",
      description: "Famílias cuidadas",
    },
    {
      icon: Award,
      value: "100%",
      label: "Compromisso",
      description: "Com a excelência",
    },
    {
      icon: Heart,
      value: "24/7",
      label: "Suporte",
      description: "Sempre disponível",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/70 to-primary-700/50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-shadow-lg leading-tight">
                  Nós Somos a{" "}
                  <span className="text-accent-400">Visual Laser</span>
                </h1>

                <p className="text-xl md:text-2xl text-primary-200 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Nascemos há 27 anos com o espírito de inovar e servir com
                  empatia e profissionalismo, conquistando a cada dia o
                  reconhecimento e preferência de nossos clientes.
                </p>

                <div className="text-lg text-primary-100 max-w-3xl mx-auto">
                  <p className="mb-4">
                    Nos tornamos referência em Oftalmologia de excelência na
                    grande Belém, sempre atentos aos avanços tecnológicos para
                    oferecer maior segurança e melhores resultados.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Grid - Reposicionado com espaçamento adequado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 mt-16 mb-16"
      >
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-accent-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-primary-200">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CompanyHero;

