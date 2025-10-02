"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, CheckCircle, Clock, Shield, Users } from "lucide-react";

const LandingFAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Como funciona o agendamento da consulta?",
      answer: "O agendamento é simples e rápido. Preencha o formulário e nossa equipe entrará em contato em até 24 horas para confirmar sua consulta. Você também pode agendar pelo WhatsApp ou telefone.",
      category: "Agendamento"
    },
    {
      question: "Quanto tempo demora a consulta?",
      answer: "A consulta completa dura aproximadamente 45 minutos a 1 hora. Isso inclui a anamnese (histórico do paciente), exame de acuidade visual, refração, tonometria (pressão intraocular), fundoscopia e orientações médicas. Nosso objetivo é oferecer um atendimento completo e detalhado.",
      category: "Consulta"
    },
    {
      question: "Preciso de encaminhamento médico?",
      answer: "Não é necessário encaminhamento médico para a consulta oftalmológica. Você pode agendar diretamente conosco. Porém, se você já possui exames recentes ou laudos de outros médicos, traga-os para uma avaliação mais completa.",
      category: "Agendamento"
    },
    {
      question: "Quais exames estão incluídos na consulta?",
      answer: "A consulta inclui: exame de acuidade visual, refração (para prescrição de óculos), tonometria (pressão intraocular), biomicroscopia (exame das estruturas oculares) e fundoscopia (exame do fundo do olho). Exames complementares como tomografia, campimetria ou retinografia podem ser solicitados conforme a necessidade.",
      category: "Exames"
    },
    {
      question: "Vocês atendem convênios médicos?",
      answer: "Sim, atendemos diversos convênios médicos. Se você possui convênio, podemos verificar a cobertura para sua consulta e exames complementares. Entre em contato conosco para verificar se seu convênio está em nossa rede credenciada.",
      category: "Convênios"
    },
    {
      question: "Como funciona o agendamento?",
      answer: "O agendamento é simples e rápido. Você pode agendar através do formulário em nossa landing page, pelo WhatsApp (91) 98896-8201 ou telefone (91) 3225-4422. Nossa equipe entrará em contato em até 24 horas para confirmar sua consulta e fornecer todas as orientações necessárias.",
      category: "Agendamento"
    },
    {
      question: "Qual o horário de funcionamento?",
      answer: "Funcionamos de segunda a quinta-feira das 08:00 às 18:00 e sexta-feira das 08:00 às 17:00. As consultas gratuitas são oferecidas em horários específicos durante a semana. Nossa equipe informará os horários disponíveis no momento da confirmação do agendamento.",
      category: "Horários"
    },
    {
      question: "Onde fica a clínica?",
      answer: "Estamos localizados na Travessa 14 de Março, 1622, no bairro Nazaré, em Belém-PA. A clínica fica em uma região de fácil acesso, próxima ao centro da cidade, com estacionamento disponível e transporte público nas proximidades.",
      category: "Localização"
    },
    {
      question: "Posso agendar para toda a família?",
      answer: "Sim! Podemos agendar consultas para toda a família. Cada pessoa deve preencher o formulário individualmente ou você pode entrar em contato conosco pelo WhatsApp para agendar múltiplas consultas. Temos especialistas em oftalmologia pediátrica para atender crianças.",
      category: "Família"
    },
    {
      question: "E se eu precisar de tratamento após a consulta?",
      answer: "Caso seja necessário algum tratamento após a consulta gratuita, nossos médicos explicarão todas as opções disponíveis, incluindo custos, procedimentos e prazos. Oferecemos diversas formas de pagamento e podemos verificar a cobertura do seu convênio. Nossa prioridade é sempre o bem-estar do paciente.",
      category: "Tratamento"
    }
  ];

  const categories = [
    { name: "Consulta", icon: CheckCircle, count: faqs.filter(faq => faq.category === "Consulta").length },
    { name: "Agendamento", icon: Clock, count: faqs.filter(faq => faq.category === "Agendamento").length },
    { name: "Exames", icon: Shield, count: faqs.filter(faq => faq.category === "Exames").length },
    { name: "Convênios", icon: Users, count: faqs.filter(faq => faq.category === "Convênios").length }
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-accent-500/10 rounded-full px-6 py-3 mb-6">
              <CheckCircle className="w-5 h-5 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">Dúvidas Frequentes</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">Perguntas</span>
              <br />
              <span className="text-gray-700">Frequentes</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tire suas dúvidas sobre nossas consultas oftalmológicas. Selecionamos as perguntas mais comuns 
              para você se sentir mais confiante ao agendar sua consulta.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {category.name}
                </div>
                <div className="text-xs text-gray-600">
                  {category.count} perguntas
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">
                        {faq.category.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <Minus className="w-6 h-6 text-accent-600" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openItems.includes(index) ? "auto" : 0,
                    opacity: openItems.includes(index) ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-primary-950 to-primary-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ainda Tem Dúvidas?
              </h3>
              <p className="text-primary-200 mb-6 max-w-2xl mx-auto">
                Nossa equipe está pronta para esclarecer todas as suas dúvidas. 
                Entre em contato conosco ou agende sua consulta gratuita agora mesmo!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/5591988968201?text=Olá!%20Tenho%20algumas%20dúvidas%20sobre%20a%20consulta%20gratuita.', '_blank')}
                  className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  <span>💬 Falar no WhatsApp</span>
                </button>
                
                <button
                  onClick={() => {
                    const formElement = document.getElementById('landing-form');
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center space-x-3 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  <span>🎯 Agendar Consulta</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
