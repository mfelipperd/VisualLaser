"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Heart,
  Shield,
  Zap,
  Users,
  Award,
  Stethoscope,
} from "lucide-react";

const DoctorsCatalog = () => {
  const doctors = [
    {
      name: "Dr. João Silva",
      specialty: "Oftalmologia Geral e Catarata",
      crm: "CRM-PA 1234",
      image:
        "https://images.unsplash.com/photo-1559839734-2e71debbd8b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description:
        "Especialista em oftalmologia geral com mais de 15 anos de experiência. Especializado em cirurgias de catarata e tratamento de doenças oculares.",
      expertise: ["Catarata", "Glaucoma", "Retina", "Córnea"],
      education: "Universidade Federal do Pará",
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Dra. Maria Santos",
      specialty: "Retina e Vítreo",
      crm: "CRM-PA 5678",
      image:
        "https://images.unsplash.com/photo-1594824475545-3a9abb74ae4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description:
        "Especialista em retina e vítreo com formação em centros de referência. Experiência em tratamentos complexos de doenças retinianas.",
      expertise: ["Retina", "Vítreo", "Mácula", "Diabetes Ocular"],
      education: "Universidade de São Paulo",
      icon: Target,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Dr. Carlos Oliveira",
      specialty: "Glaucoma",
      crm: "CRM-PA 9012",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description:
        "Especialista em glaucoma com mais de 20 anos de experiência. Especializado em diagnóstico precoce e tratamento avançado do glaucoma.",
      expertise: [
        "Glaucoma",
        "Pressão Ocular",
        "Cirurgias de Glaucoma",
        "Laser",
      ],
      education: "Universidade Federal de Minas Gerais",
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      name: "Dra. Ana Costa",
      specialty: "Córnea e Cirurgia Refrativa",
      crm: "CRM-PA 3456",
      image:
        "https://images.unsplash.com/photo-1559839734-2e71debbd8b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description:
        "Especialista em córnea e cirurgias refrativas. Experiência em LASIK, PRK e transplantes de córnea com tecnologia de ponta.",
      expertise: ["LASIK", "PRK", "Transplante de Córnea", "Doenças Corneanas"],
      education: "Universidade Federal de Pernambuco",
      icon: Shield,
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Dr. Roberto Lima",
      specialty: "Oftalmopediatria",
      crm: "CRM-PA 7890",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description:
        "Especialista em oftalmopediatria com abordagem lúdica e equipamentos adaptados para crianças. Experiência em diagnóstico precoce de problemas visuais infantis.",
      expertise: [
        "Oftalmopediatria",
        "Estrabismo",
        "Amblyopia",
        "Erros Refrativos",
      ],
      education: "Universidade Federal do Rio de Janeiro",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Dra. Lucia Ferreira",
      specialty: "Neuro-oftalmologia",
      crm: "CRM-PA 2345",
      image:
        "https://images.unsplash.com/photo-1594824475545-3a9abb74ae4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      description:
        "Especialista em neuro-oftalmologia com formação em neurologia. Experiência em diagnóstico e tratamento de doenças neurológicas que afetam a visão.",
      expertise: [
        "Neuro-oftalmologia",
        "Nervo Óptico",
        "Movimentos Oculares",
        "Doenças Neurológicas",
      ],
      education: "Universidade Federal de São Paulo",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
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
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                {/* Doctor Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${doctor.color} rounded-xl flex items-center justify-center mb-3`}
                    >
                      <doctor.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-lg font-semibold text-primary-600 mb-2">
                    {doctor.specialty}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">{doctor.crm}</p>

                  <p className="text-gray-600 leading-relaxed mb-4">
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

                  {/* Education */}
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Award className="w-4 h-4 text-accent-500" />
                    <span>{doctor.education}</span>
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
