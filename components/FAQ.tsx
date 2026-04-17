"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Onde encontrar um oftalmologista Unimed em Belém (Nazaré/Umarizal)?",
    answer: "A Visual Laser é a clínica oftalmológica de referência para pacientes Unimed em Belém. Localizada na Tv. 14 de Março (Nazaré), atendemos moradores do Umarizal, Batista Campos e Marco. Oferecemos o corpo clínico mais completo da região para consultas, exames e cirurgias complexas pelo seu plano de saúde.",
  },
  {
    question: "A Visual Laser utiliza tecnologia Zeiss ou Alcon em suas cirurgias?",
    answer: "Sim. A Visual Laser investe no que há de mais moderno no mundo. Utilizamos sistemas de diagnóstico e cirurgia de padrão mundial (padrão Zeiss e Alcon), incluindo a tecnologia para cirurgia refrativa SMILE, LASIK e PRK, além de facoemulsificadores de última geração para cirurgias de catarata com implante de lentes premium.",
  },
  {
    question: "Qual o diferencial da cirurgia de catarata na Visual Laser Belém?",
    answer: "Nossa cirurgia de catarata utiliza microincisões (sem pontos) e implantes de lentes intraoculares multifocais e tóricas de alta tecnologia. O procedimento é realizado por cirurgiões especialistas como o Dr. Roberto Carlei e Dr. Armando Vidonho, garantindo segurança e recuperação rápida para o paciente.",
  },
  {
    question: "A clínica realiza exames de alta complexidade como Mapeamento de Retina?",
    answer: "Sim, realizamos uma gama completa de exames diagnósticos em Belém, incluindo Mapeamento de Retina, Campimetria Computadorizada, OCT e Ultrassom Ocular. Nossa infraestrutura permite um diagnóstico preciso para patologias de retina, glaucoma e córnea em um único local.",
  },
  {
    question: "Como funciona o atendimento para cirurgia refrativa a laser?",
    answer: "O paciente passa por uma avaliação rigorosa com exames de topografia e paquimetria de córnea. A Visual Laser é pioneira em Belém no uso de lasers de alta precisão que corrigem miopia, astigmatismo e hipermetropia em poucos minutos, com altíssimos índices de satisfação e segurança.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">
                Dúvidas Frequentes
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tudo o que você precisa saber sobre nossos atendimentos, convênios e tecnologia em Belém.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all hover:border-primary-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-lg font-bold text-gray-800 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-primary-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Ainda tem dúvidas?</p>
            <a
              href="https://wa.me/5591988968201"
              target="_blank"
              className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors"
            >
              Fale com nossa equipe pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
