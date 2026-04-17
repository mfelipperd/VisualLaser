"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Onde encontrar um oftalmologista Unimed em Belém (Nazaré/Umarizal)?",
    answer: "A Visual Laser é referência no atendimento a pacientes Unimed em Belém. Localizada estrategicamente no bairro de Nazaré, atendemos moradores do Umarizal, Batista Campos e região metropolitana, oferecendo desde consultas de rotina até exames e cirurgias complexas pelo seu plano de saúde.",
  },
  {
    question: "A Visual Laser realiza cirurgia de catarata e refrativa (SMILE)?",
    answer: "Sim, somos especialistas em cirurgias de alta tecnologia. Oferecemos as técnicas mais modernas do mundo, como a cirurgia refrativa SMILE (Small Incision Lenticule Extraction), LASIK e PRK, além de cirurgia de catarata com implante de lentes premium para recuperação total da visão.",
  },
  {
    question: "Quais são os principais convênios atendidos pela clínica?",
    answer: "Aceitamos os principais planos de saúde do Pará e do Brasil, incluindo Unimed, Bradesco Saúde, Amil, Cassi, SulAmérica, IPEP, TRT, entre outros. Verifique a lista completa em nossa página de convênios.",
  },
  {
    question: "A clínica possui tecnologia de padrão mundial (Zeiss/Alcon)?",
    answer: "A Visual Laser investe constantemente em tecnologia de ponta, utilizando equipamentos e sistemas que seguem os padrões mundiais de excelência (similares aos sistemas Zeiss e Alcon). Nossa infraestrutura permite diagnósticos precisos e procedimentos cirúrgicos extremamente seguros.",
  },
  {
    question: "Como agendar uma consulta de urgência ou rotina?",
    answer: "Você pode agendar sua consulta de forma rápida através do nosso WhatsApp (91) 98896-8201 ou telefone (91) 3225-4422. Oferecemos horários flexíveis para melhor atender sua rotina no centro de Belém.",
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
