"use client";

import { motion } from "framer-motion";

const PSVL = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
                  <span className="text-sm font-medium text-gray-700">
                    Programa Solidário
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  PSVL -{" "}
                  <span className="text-gradient">
                    Programa Solidário Visual Laser
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  O PSVL é um programa de inclusão criado pela Visual Laser,
                  pensando em atender a necessidade de pacientes que estão sem
                  um plano de saúde suplementar conveniado com a clínica e
                  desejam atendimento oftalmológico de qualidade.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Quais os benefícios do PSVL?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Os clientes do PSVL podem realizar consultas,
                    exames e procedimentos clínicos ou cirúrgicos na Visual
                    Laser com um valor diferenciado e acessível (estabelecido em
                    tabela de preços específica) e condições facilitadas.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Existe a necessidade de Taxa de Adesão ou Pagamento de
                    Mensalidade?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Não há necessidade de pagar taxa de adesão ou mensalidades,
                    pois o PSVL não é um plano de saúde suplementar. Trata-se de
                    um programa de inclusão no qual o cliente apto* pode realizar consultas, exames e
                    procedimentos clínicos ou cirúrgicos, mediante o pagamento
                    do valor diferenciado no momento do atendimento.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Como fazer para participar do PSVL?
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    O cliente apto* pode participar do PSVL. Para
                    isso, basta agendar sua consulta e, no dia do seu
                    atendimento, dirigir-se à recepção da clínica e apresentar o
                    documento de identidade com foto e a carteirinha do plano de
                    saúde, para comprovação.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="pt-4"
              >
                <a
                  href="https://wa.me/5591988968201?text=Quero%20saber%20mais%20sobre%20o%20PSVL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Saiba Mais Sobre o PSVL
                </a>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://visuallaser.med.br/wp-content/uploads/2023/09/Screenshot-from-2023-09-21-16-02-05-e1695323161519.png"
                  alt="PSVL - Programa Solidário Visual Laser"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent"></div>

                {/* Floating Info Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Compromisso Social
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    O PSVL representa nosso compromisso com a comunidade,
                    oferecendo atendimento oftalmológico de qualidade para
                    todos.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-br from-primary-950 to-primary-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Quem pode participar do PSVL?
              </h3>
              <p className="text-primary-200 mb-6 max-w-3xl mx-auto">
                • Pacientes que possuem um plano de saúde suplementar não
                conveniado com a Visual Laser
                <br />
                • Pacientes que já tiveram um plano de saúde suplementar
                conveniado com a Visual Laser
                <br />• Pacientes que já tiveram um plano de saúde suplementar
                não conveniado com a Visual Laser
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5591988968201?text=Quero%20saber%20mais%20sobre%20o%20PSVL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PSVL;
