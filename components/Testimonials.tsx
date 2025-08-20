"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Paciente",
      content:
        "Excelente atendimento! A equipe da Visual Laser é muito profissional e atenciosa. Minha cirurgia de catarata foi um sucesso e hoje vejo perfeitamente.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "João Santos",
      role: "Paciente",
      content:
        "Fui muito bem atendido desde a primeira consulta. A tecnologia é de última geração e os médicos são extremamente competentes. Recomendo a todos!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Ana Costa",
      role: "Paciente",
      content:
        "A Visual Laser superou todas as minhas expectativas. O atendimento é humanizado e a infraestrutura é impecável. Minha família toda é paciente da clínica.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Carlos Oliveira",
      role: "Paciente",
      content:
        "Profissionais excelentes e equipamentos modernos. Minha cirurgia refrativa foi perfeita e a recuperação foi muito rápida. Estou muito satisfeito!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Lucia Ferreira",
      role: "Paciente",
      content:
        "Atendimento de primeira qualidade! A equipe é muito atenciosa e os resultados são excepcionais. Recomendo a Visual Laser para todos que precisam de cuidados oftalmológicos.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Roberto Lima",
      role: "Paciente",
      content:
        "Excelente clínica! A tecnologia é de ponta e os médicos são muito experientes. Minha experiência foi incrível e hoje tenho uma visão perfeita.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que Nossos <span className="text-accent-400">Pacientes</span>{" "}
            Dizem
          </h2>
          <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos pacientes é nossa maior recompensa. Conheça
            alguns depoimentos de quem confiou na Visual Laser para cuidar da
            saúde visual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 h-full">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-accent-400" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-primary-200 leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent-500/30"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-accent-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Junte-se aos Nossos Pacientes Satisfeitos
            </h3>
            <p className="text-primary-200 mb-6">
              Agende sua consulta e descubra por que tantas pessoas confiam na
              Visual Laser para cuidar da sua saúde visual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Agendar Consulta
              </button>
              <button className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg border border-white/30 hover:border-accent-400 transition-all duration-300">
                Ver Mais Depoimentos
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
