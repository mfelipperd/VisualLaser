"use client";

import { motion } from "framer-motion";
import { Eye, Focus, Scan, Activity, Droplet, Microscope } from "lucide-react";
import { 
  examesBasicos, 
  examesCornea, 
  examesRetina, 
  examesGlaucoma, 
  examesSuperficieOcular, 
  examesEspecializados 
} from "@/data/exames-procedimentos";

const ExamesSection = () => {
  const exames = [
    {
      category: "Exames Básicos",
      icon: Eye,
      items: examesBasicos.map(e => e.nome),
    },
    {
      category: "Exames de Córnea",
      icon: Focus,
      items: examesCornea.map(e => e.nome),
    },
    {
      category: "Exames de Retina",
      icon: Scan,
      items: examesRetina.map(e => e.nome),
    },
    {
      category: "Exames de Glaucoma",
      icon: Activity,
      items: examesGlaucoma.map(e => e.nome),
    },
    {
      category: "Exames de Superfície Ocular",
      icon: Droplet,
      items: examesSuperficieOcular.map(e => e.nome),
    },
    {
      category: "Exames Especializados",
      icon: Microscope,
      items: examesEspecializados.map(e => e.nome),
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
            Nossos <span className="text-primary-600">Exames e Procedimentos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de exames oftalmológicos com tecnologia de
            última geração para diagnósticos precisos e tratamentos eficazes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {exames.map((categoria, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <categoria.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {categoria.category}
                </h3>
              </div>

              <div className="space-y-3">
                {categoria.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
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
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Tecnologia de Última Geração
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Todos os nossos exames são realizados com equipamentos de ponta,
              garantindo diagnósticos precisos e resultados confiáveis para o
              melhor tratamento da sua saúde visual.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExamesSection;
