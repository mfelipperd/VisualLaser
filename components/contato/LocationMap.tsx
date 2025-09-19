"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

const LocationMap = () => {
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
            Nossa <span className="text-primary-600">Localização</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visite nossa clínica em Belém, Pará. Estamos localizados em uma
            região de fácil acesso com estacionamento disponível para sua
            comodidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.540759359148!2d-48.480729600000004!3d-1.4499849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e8191012757%3A0x8eca8a1e0508b6eb!2sVisual%20Laser!5e0!3m2!1spt-BR!2sbr!4v1755712656992!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Visual Laser - Localização"
              />
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Endereço
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="text-lg">Tv. 14 de Março, 1622</p>
                    <p className="text-lg">Nazaré, Belém - PA</p>
                    <p className="text-lg">CEP: 66055-490</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Como Chegar
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p className="text-lg">
                      <strong>De ônibus:</strong> Linhas que passam pela
                      Travessa 14 de Março
                    </p>
                    <p className="text-lg">
                      <strong>De carro:</strong> Estacionamento disponível na
                      clínica
                    </p>
                    <p className="text-lg">
                      <strong>De táxi/Uber:</strong> Fácil acesso pela região
                      central
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Horário de Funcionamento
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Segunda a Quinta:</span>
                      <span className="text-lg font-semibold">08h às 18h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Sexta:</span>
                      <span className="text-lg font-semibold">08h às 17h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Sábado e Domingo:</span>
                      <span className="text-lg font-semibold text-red-500">
                        Fechado
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 text-white">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Atendimento de Emergência
                  </h3>
                  <p className="text-lg opacity-90 mb-4">
                    Para casos de emergência oftalmológica, entre em contato
                    imediatamente.
                  </p>
                  <div className="space-y-2">
                    <p className="text-xl font-semibold">(91) 98896-8201</p>
                    <p className="text-lg opacity-90">
                      WhatsApp disponível 24h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
