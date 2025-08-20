"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactHero = () => {
  const contactQuick = [
    {
      icon: Phone,
      title: "Telefones",
      info: ["(91) 3241-0000", "(91) 98896-8201"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: ["contato@visuallaser.med.br", "marketing@visuallaser.com.br"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: ["Travessa 14 de Março, 1622", "Belém - Pará, 66055-490"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      info: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 12h"],
      color: "from-orange-500 to-red-500",
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
                  Entre em <span className="text-accent-400">Contato</span>
                </h1>

                <p className="text-xl md:text-2xl text-primary-200 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Estamos aqui para ajudar! Entre em contato conosco para
                  agendar sua consulta, tirar dúvidas ou conhecer nossa clínica.
                </p>

                <div className="text-lg text-primary-100 max-w-3xl mx-auto">
                  <p className="mb-4">
                    Nossa equipe está pronta para oferecer o melhor atendimento
                    oftalmológico com tecnologia de ponta e profissionais
                    especializados.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Contact Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 mt-16 mb-16"
      >
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactQuick.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <div className="space-y-2">
                  {item.info.map((info, infoIndex) => (
                    <p key={infoIndex} className="text-sm text-primary-200">
                      {info}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
