"use client";

import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

const convenios = [
  { name: "Unimed", logo: "/images/convenios/unimed.svg" },
  { name: "Bradesco Saúde", logo: "/images/convenios/bradesco.png" },
  { name: "SulAmérica", logo: null },
  { name: "CASSI", logo: "/images/convenios/cassi.webp" },
  { name: "Petrobras", logo: "/images/convenios/petrobras.svg" },
  { name: "Eletronorte", logo: "/images/convenios/eletronorte_new.png" },
  { name: "Correios", logo: "/images/convenios/correios.png" },
  { name: "Amil", logo: "/images/convenios/amil.svg" },
  { name: "Vale (PASA)", logo: null },
  { name: "Saúde Caixa", logo: null }
];

const ConveniosHighlight = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-2 mb-6 border border-gray-100 shadow-sm">
              <Shield className="w-5 h-5 text-accent-500" />
              <span className="text-sm font-medium text-gray-600">
                Planos de Saúde
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Convênios <span className="text-gradient">Atendidos</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Trabalhamos com os principais planos de saúde para garantir 
              que você tenha acesso ao melhor atendimento oftalmológico.
            </p>
          </motion.div>

          {/* Grid Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12"
          >
            {convenios.map((convenio, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center border border-gray-100 shadow-sm hover:shadow-md hover:border-accent-200 transition-all duration-300 group h-32"
              >
                  {convenio.logo ? (
                    <div className="w-20 h-10 relative mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                      <Image 
                        src={convenio.logo}
                        alt={`Logo ${convenio.name}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-2 group-hover:bg-accent-50 transition-colors">
                        <Shield className="w-5 h-5 text-gray-400 group-hover:text-accent-500 transition-colors" />
                    </div>
                  )}
                <span className="text-sm font-medium text-gray-700 group-hover:text-accent-900">
                  {convenio.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link
              href="/convenios"
              className="inline-flex items-center space-x-2 text-accent-600 font-semibold hover:text-accent-700 hover:translate-x-1 transition-all"
            >
              <span>Ver lista completa de convênios</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConveniosHighlight;
