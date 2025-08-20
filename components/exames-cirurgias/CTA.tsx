"use client";

import { motion } from "framer-motion";
import { Calendar, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Agende Sua Consulta Hoje Mesmo!
            </h2>

            <p className="text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
              Descubra a importância de cuidar da sua saúde. Nossos
              especialistas estão prontos para oferecer o melhor atendimento,
              com exames precisos e diagnósticos rápidos. Não deixe para depois,
              sua saúde é prioridade!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/agendamento"
                className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Consulta Agora</span>
              </Link>

              <Link
                href="/contato"
                className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 text-white font-medium py-4 px-8 rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>Falar com Especialista</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-accent-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Agendamento Rápido
                </h3>
                <p className="text-sm text-primary-100">
                  Agende sua consulta de forma simples e rápida
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-accent-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Atendimento Personalizado
                </h3>
                <p className="text-sm text-primary-100">
                  Nossa equipe está pronta para atender você
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-accent-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Suporte Completo</h3>
                <p className="text-sm text-primary-100">
                  Tire todas as suas dúvidas sobre exames e cirurgias
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
