"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
} from "lucide-react";
import AppointmentModal from "@/components/AppointmentModal";

const ContactInfo = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefones",
      description:
        "Entre em contato por telefone para agendamentos e informações",
      contacts: [
        {
          label: "Telefone Principal",
          value: "(91) 3241-0000",
          type: "phone",
        },
        {
          label: "WhatsApp",
          value: "(91) 98896-8201",
          type: "whatsapp",
        },
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Envie suas dúvidas e solicitações por e-mail",
      contacts: [
        {
          label: "Contato Geral",
          value: "contato@visuallaser.med.br",
          type: "email",
        },
        {
          label: "Marketing",
          value: "marketing@visuallaser.com.br",
          type: "email",
        },
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Endereço",
      description: "Visite nossa clínica em Belém, Pará",
      contacts: [
        {
          label: "Endereço",
          value: "Tv. 14 de Março, 1622",
          type: "address",
        },
        {
          label: "Bairro",
          value: "Nazaré, Belém - PA, 66055-490",
          type: "address",
        },
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      description: "Confira nossos horários de atendimento",
      contacts: [
        {
          label: "Segunda a Sexta",
          value: "8h às 18h",
          type: "time",
        },
        {
          label: "Sábado",
          value: "8h às 12h",
          type: "time",
        },
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Agendar Consulta",
      description: "Agende sua consulta de forma rápida e fácil",
      action: "Agendar",
      color: "from-accent-500 to-accent-600",
      onClick: () => setIsAppointmentModalOpen(true),
    },
    {
      icon: MessageCircle,
      title: "Tirar Dúvidas",
      description: "Entre em contato para esclarecer suas dúvidas",
      action: "Contatar",
      color: "from-primary-600 to-primary-700",
      onClick: () => (window.location.href = "#contact-form"),
    },
  ];

  return (
    <>
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
              Informações de <span className="text-primary-600">Contato</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Escolha a forma mais conveniente para entrar em contato conosco.
              Nossa equipe está pronta para atender você.
            </p>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {method.description}
                    </p>
                    <div className="space-y-3">
                      {method.contacts.map((contact, contactIndex) => (
                        <div
                          key={contactIndex}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
                        >
                          <span className="text-sm font-medium text-gray-500 mb-1 sm:mb-0">
                            {contact.label}:
                          </span>
                          <span className="text-lg font-semibold text-gray-900">
                            {contact.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Ações Rápidas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${action.color} rounded-2xl p-8 text-white text-center hover:scale-105 transition-transform duration-300 cursor-pointer`}
                  onClick={action.onClick}
                >
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <action.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{action.title}</h4>
                  <p className="text-lg mb-6 opacity-90">
                    {action.description}
                  </p>
                  <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300">
                    {action.action}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
};

export default ContactInfo;
