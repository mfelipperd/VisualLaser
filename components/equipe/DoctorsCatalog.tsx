"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Stethoscope, Eye, Shield } from "lucide-react";

const DoctorsCatalog = () => {
  const doctors = [
    {
      name: "Dr. Roberto Carlei Lima",
      specialty: "Especialista em Catarata, Córnea e Cirurgia Refrativa",
      crm: "CRM-PA 5071",
      image:
        "/images/doctors/roberto_carlei.png",
      description:
        "Especialista em oftalmologia com vasta experiência em cirurgias de catarata, transplantes de córnea e cirurgias refrativas. Reconhecido por sua excelência técnica e resultados excepcionais.",
      expertise: ["Catarata", "Córnea", "Cirurgia Refrativa"],
    },
    {
      name: "Dra. Rosamélia Lima",
      specialty: "Oftalmologia Clínica e Cirúrgica",
      crm: "CRM-PA 5937",
      image:
        "/images/doctors/rosa.png",
      description:
        "Especialista em oftalmologia clínica e cirúrgica com ampla experiência no diagnóstico e tratamento de doenças oculares. Reconhecida por sua dedicação ao cuidado integral do paciente.",
      expertise: ["Oftalmologia Clínica", "Cirurgia Oftalmológica"],
    },
    {
      name: "Dr. José Guilherme",
      specialty: "Especialista em Glaucoma",
      crm: "CRM-PA 6502",
      image:
        "/images/doctors/joseguilherme.png",
      description:
        "Especialista em glaucoma com vasta experiência no diagnóstico e tratamento desta condição. Reconhecido por sua expertise em técnicas avançadas de tratamento do glaucoma.",
      expertise: ["Glaucoma"],
    },
    {
      name: "Dr. Armando Vidonho",
      specialty: "Especialista em Transplante de Córnea, Catarata e Cirurgia Refrativa",
      crm: "CRM-PA 4665",
      image:
        "/images/doctors/armandovidonho.png",
      description:
        "Especialista em transplante de córnea, catarata e cirurgia refrativa com vasta experiência em procedimentos complexos. Reconhecido por sua expertise em técnicas avançadas de transplante e cirurgias refrativas.",
      expertise: ["Transplante de Córnea", "Catarata", "Cirurgia Refrativa"],
    },
    {
      name: "Dr. Otávio Solano",
      specialty: "Oftalmologia Clínica e Cirúrgica",
      crm: "CRM-PA 5464",
      image:
        "/images/doctors/otaviosolano.png",
      description:
        "Especialista em oftalmologia clínica e cirúrgica com ampla experiência no diagnóstico e tratamento de doenças oculares. Reconhecido por sua dedicação ao cuidado integral do paciente e excelência técnica.",
      expertise: ["Oftalmologia Clínica", "Cirurgia Oftalmológica"],
    },
    {
      name: "Dra. Ana Paula",
      specialty: "Especialista em Glaucoma",
      crm: "CRM-PA 8278",
      image:
        "/images/doctors/anapaula.png",
      description:
        "Especialista em glaucoma com vasta experiência no diagnóstico e tratamento desta condição. Reconhecida por sua expertise em técnicas avançadas de tratamento do glaucoma e cuidado especializado dos pacientes.",
      expertise: ["Glaucoma"],
    },
    {
      name: "Dr. Carlos Lima",
      specialty: "Especialista em Catarata, Plástica e Vias Lacrimais e Glaucoma",
      crm: "CRM-PA 7967",
      image:
        "/images/doctors/carloslima.png",
      description:
        "Especialista em catarata, cirurgia plástica ocular, vias lacrimais e glaucoma com ampla experiência em procedimentos complexos. Reconhecido por sua expertise em múltiplas áreas da oftalmologia e excelência técnica.",
      expertise: ["Catarata", "Plástica Ocular", "Vias Lacrimais", "Glaucoma"],
    },
    {
      name: "Dr. Geraldo Carvalho",
      specialty: "Especialista em Retina e Vítreo e Ultrassom Ocular",
      crm: "CRM-PA 9692",
      image:
        "/images/doctors/geraldocarvalho.png",
      description:
        "Especialista em retina e vítreo com vasta experiência em ultrassom ocular e diagnóstico de doenças retinianas complexas. Reconhecido por sua expertise em técnicas avançadas de diagnóstico e tratamento da retina.",
      expertise: ["Retina", "Vítreo", "Ultrassom Ocular"],
    },
    {
      name: "Dr. Joacy David",
      specialty: "Especialista em Retina Clínica, Uveíte e Oncologia Ocular",
      crm: "CRM-PA 14662",
      image:
        "/images/doctors/joacydavid.png",
      description:
        "Especialista em retina clínica, uveíte e oncologia ocular com vasta experiência no diagnóstico e tratamento de doenças retinianas complexas e tumores oculares. Reconhecido por sua expertise em casos raros e complexos.",
      expertise: ["Retina Clínica", "Uveíte", "Oncologia Ocular"],
    },
    {
      name: "Dr. João Paulo Bezerra",
      specialty: "Especialista em Glaucoma e Catarata",
      crm: "CRM-PA 12997",
      image:
        "/images/doctors/joaopaulo.png",
      description:
        "Especialista em glaucoma e catarata com vasta experiência no diagnóstico e tratamento dessas condições. Reconhecido por sua expertise em técnicas avançadas de cirurgia de catarata e tratamento do glaucoma.",
      expertise: ["Glaucoma", "Catarata"],
    },
    {
      name: "Dr. José Afonso",
      specialty: "Oftalmologia Clínica e Cirúrgica",
      crm: "CRM-PA 4503",
      image:
        "/images/doctors/joseafonso.png",
      description:
        "Especialista em oftalmologia clínica e cirúrgica com ampla experiência no diagnóstico e tratamento de doenças oculares. Reconhecido por sua dedicação ao cuidado integral do paciente e excelência técnica em procedimentos cirúrgicos.",
      expertise: ["Oftalmologia Clínica", "Cirurgia Oftalmológica"],
    },
    {
      name: "Dra. Juliana Meschede",
      specialty: "Glaucoma Clínico e Cirurgia de Catarata",
      crm: "CRM-PA 11702",
      image:
        "/images/doctors/julianameschede.png",
      description:
        "Especialista em glaucoma clínico e cirurgia de catarata com vasta experiência no diagnóstico e tratamento dessas condições. Reconhecida por sua expertise em técnicas avançadas de cirurgia de catarata e manejo clínico do glaucoma.",
      expertise: ["Glaucoma Clínico", "Cirurgia de Catarata"],
    },
    {
      name: "Dr. Taurino Rodrigues",
      specialty: "Especialista em Doenças da Retina e Vítreo",
      crm: "CRM-PA 11098",
      image:
        "/images/doctors/taurinorodrigues.png",
      description:
        "Especialista em doenças da retina e vítreo com vasta experiência no diagnóstico e tratamento de condições retinianas complexas. Reconhecido por sua expertise em técnicas avançadas de diagnóstico e tratamento da retina.",
      expertise: ["Doenças da Retina", "Vítreo"],
    },
  ];

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
            Nossos <span className="text-primary-600">Médicos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça nossa equipe médica especializada, cada um com sua área de
            expertise para oferecer o melhor tratamento oftalmológico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden h-full flex flex-col">
                {/* Doctor Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Doctor Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-lg font-semibold text-primary-600 mb-2">
                    {doctor.specialty}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">{doctor.crm}</p>

                  <p className="text-gray-600 leading-relaxed mb-4 flex-grow">
                    {doctor.description}
                  </p>

                  {/* Expertise */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Especialidades:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.expertise.map((exp, expIndex) => (
                        <span
                          key={expIndex}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full font-medium"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Equipe Completa e Especializada
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
              Nossa equipe médica é composta por especialistas em diferentes
              áreas da oftalmologia, garantindo um atendimento completo e
              especializado para todas as necessidades oftalmológicas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 bg-white/10 rounded-xl p-4">
                <Stethoscope className="w-6 h-6 text-accent-400" />
                <span className="font-medium">Consultas Especializadas</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 rounded-xl p-4">
                <Eye className="w-6 h-6 text-accent-400" />
                <span className="font-medium">Exames Oftalmológicos</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 rounded-xl p-4">
                <Shield className="w-6 h-6 text-accent-400" />
                <span className="font-medium">Cirurgias Oftalmológicas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorsCatalog;
