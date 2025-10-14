"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Heart,
  Shield,
  Zap,
  Target,
  Activity,
} from "lucide-react";
import { cirurgiasProcedimentos } from "@/data/exames-procedimentos";

const CirurgiasSection = () => {
  // Organizar cirurgias por categoria
  const cirurgiasCatarata = cirurgiasProcedimentos.filter(c => 
    c.nome.includes("Facoemulsificação") || c.nome.includes("lente intraocular fácica")
  );
  
  const cirurgiasRefrativas = cirurgiasProcedimentos.filter(c => 
    c.nome.includes("Ceratectomia fotoablativa") || c.nome.includes("Crosslinking")
  );
  
  const cirurgiasGlaucoma = cirurgiasProcedimentos.filter(c => 
    c.nome.includes("Iridotomia") || c.nome.includes("Iridectomia") || 
    c.nome.includes("Trabeculectomia") || c.nome.includes("Ciclofotocoagulação")
  );
  
  const cirurgiasRetina = cirurgiasProcedimentos.filter(c => 
    c.nome.includes("Fotocoagulação a laser na retina") || 
    c.nome.includes("Termofotocoagulação") || 
    c.nome.includes("Vitreólise") ||
    c.nome.includes("antiangiogênico")
  );
  
  const cirurgiasCornea = cirurgiasProcedimentos.filter(c => 
    c.nome.includes("Transplante") || 
    c.nome.includes("corpo estranho") || 
    c.nome.includes("Sutura de córnea")
  );
  
  const cirurgiasPalpebras = cirurgiasProcedimentos.filter(c => 
    c.nome.includes("Blefaroplastia") || c.nome.includes("Pterígio") || 
    c.nome.includes("tumor palpebral") || c.nome.includes("Ptose palpebral")
  );
  
  const procedimentosEspecializados = cirurgiasProcedimentos.filter(c => 
    c.nome.includes("Capsulotomia") || c.nome.includes("Harmonização")
  );

  const cirurgias = [
    {
      category: "Cirurgias de Catarata",
      icon: Eye,
      items: cirurgiasCatarata.map(c => c.nome),
    },
    {
      category: "Cirurgias Refrativas",
      icon: Target,
      items: cirurgiasRefrativas.map(c => c.nome),
    },
    {
      category: "Cirurgias de Glaucoma",
      icon: Activity,
      items: cirurgiasGlaucoma.map(c => c.nome),
    },
    {
      category: "Cirurgias de Retina",
      icon: Target,
      items: cirurgiasRetina.map(c => c.nome),
    },
    {
      category: "Cirurgias de Córnea",
      icon: Shield,
      items: cirurgiasCornea.map(c => c.nome),
    },
    {
      category: "Cirurgias de Pálpebras",
      icon: Heart,
      items: cirurgiasPalpebras.map(c => c.nome),
    },
    {
      category: "Procedimentos Especializados",
      icon: Zap,
      items: procedimentosEspecializados.map(c => c.nome),
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
            Nossas <span className="text-accent-400">Cirurgias</span>
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
            Realizamos procedimentos cirúrgicos com tecnologia de ponta e equipe
            médica altamente especializada, sempre priorizando a segurança e o
            bem-estar dos nossos pacientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cirurgias.map((categoria, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <categoria.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-accent-200">
                  {categoria.category}
                </h3>
              </div>

              <div className="space-y-3">
                {categoria.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-primary-200 leading-relaxed">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
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
