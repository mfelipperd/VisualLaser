"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { cirurgiasProcedimentos } from "@/data/exames-procedimentos";

const CirurgiasSection = () => {
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
            <span className="text-accent-400">Cirurgias e Procedimentos</span>
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
            Realizamos procedimentos cirúrgicos com tecnologia de ponta e equipe
            médica altamente especializada, sempre priorizando a segurança e o
            bem-estar dos nossos pacientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {cirurgiasProcedimentos.map((cirurgia, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-400 rounded-full flex-shrink-0 mt-2"></div>
                <span className="text-primary-100 leading-relaxed">
                  {cirurgia.nome}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-accent-200 mb-6">
              Segurança e Qualidade
            </h3>
            <p className="text-xl text-primary-200 leading-relaxed max-w-4xl mx-auto">
              Todas as nossas cirurgias seguem rigorosos protocolos de
              segurança, utilizando equipamentos de última geração e técnicas
              cirúrgicas avançadas para garantir os melhores resultados.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CirurgiasSection;
