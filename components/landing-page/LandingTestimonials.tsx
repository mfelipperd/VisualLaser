"use client";

import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";

const LandingTestimonials = () => {
  const testimonials = [
    {
      name: "Tereza Neves",
      treatment: "Cirurgia de Catarata",
      rating: 5,
      text: "Sou paciente do Dr. Armando Vidonho e há 20 dias passei por cirurgia de Catarata. Os exames clínicos pós operatório confirmam ótimo resultado. Sinto-me bem e feliz por estar conseguindo ler sem o auxílio de óculos. Fui muito bem atendida por toda a equipe da Clínica Visual Laser.",
      verified: true
    },
    {
      name: "Ligia Paz",
      treatment: "Cirurgia Refrativa",
      rating: 5,
      text: "Realizei a cirurgia refrativa há uns 35 dias e foi a melhor decisão e investimento que já fiz. É uma qualidade de vida diferente! Toda a assistência do Dr. Carlos foi fundamental, com orientações, disponibilidade e atenção em todo o processo.",
      verified: true
    },
    {
      name: "Nay Barra",
      treatment: "Cirurgia Refrativa PRK",
      rating: 5,
      text: "Recentemente realizei a tão sonhada cirurgia refrativa/PRK com o Dr. Armando Vidonho. Desde a minha adolescência fui refém dos óculos de grau, e sempre foi bem acentuado (+5 graus). Minha experiência foi espetacular!",
      verified: true
    },
    {
      name: "Rayanne Kathleem",
      treatment: "Transplante de Córnea",
      rating: 5,
      text: "Sou paciente do Dr Armando vidonho comecei meu tratamento de ceratocone a 1 ano e pouco, fiz o transplante de córnea, uma ótima cirurgia, Dr muito atencioso, 100% cicatrisado, recuperação total. As meninas da recepção são super atenciosas, sempre bem atendida.",
      verified: true
    },
    {
      name: "Brenda Natália Viana Porto",
      treatment: "Cirurgia Refrativa",
      rating: 5,
      text: "Consegui me despedir dos óculos depois da cirurgia refrativa com o Dr. Carlos Lima. É impressionante como minha qualidade de vida melhorou! O procedimento foi rápido, sem dor, e a recuperação foi super tranquila. Sou imensamente grato por tudo.",
      verified: true
    },
    {
      name: "Igor Sudario",
      treatment: "Cirurgia Refrativa",
      rating: 5,
      text: "Dr Armando Vidonho tem o Dom da cura. Foi um sucesso total o procedimento. Hoje eu não preciso de óculos, que profissional brilhante! Desejo todo o sucesso ao ilustríssimo médico!",
      verified: true
    },
    {
      name: "Marcino Fernandes",
      treatment: "Blefaroplastia",
      rating: 5,
      text: "Realizei com o Dr Carlos Lima a cirurgia de blefaroplastia onde me encontro 100% satisfeito com o atendimento gentil, educado, humano e atencioso do Dr. Carlos Lima. O resultado final da cirurgia ficou excelente e acima do esperado.",
      verified: true
    },
    {
      name: "Lucas Viana",
      treatment: "Tratamento de Ceratocone",
      rating: 5,
      text: "Tive problema de ceratocone e o tratamento que fiz com o Dr Armando Vidonho salvou minha visão, sou muito grato e recomendo a Visual Laser. Atendimento excelente.",
      verified: true
    },
    {
      name: "David Barroso",
      treatment: "Consulta Oftalmológica",
      rating: 5,
      text: "Dr. Armando Vidonho prestou um atendimento excelente! Extremamente carismático e profissional. Além disso, toda a equipe foi incrível e teve toda a paciência de instruir os exames e os pacientes.",
      verified: true
    }
  ];

  const stats = [
    { number: "98%", label: "Taxa de Satisfação" },
    { number: "4.6/5", label: "Avaliação Google" },
    { number: "327+", label: "Avaliações Google" },
    { number: "25+", label: "Anos de Experiência" }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-accent-500/10 rounded-full px-6 py-3 mb-6">
              <Heart className="w-5 h-5 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">Depoimentos Reais</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-gradient">O Que Nossos Pacientes</span>
              <br />
              <span className="text-gray-700">Dizem Sobre Nós</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mais de 50.000 pacientes já confiaram na Visual Laser para cuidar da sua saúde ocular. 
              Veja alguns depoimentos reais de quem teve sua vida transformada.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials Grid */}
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
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 h-full flex flex-col">
                  
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <Quote className="w-8 h-8 text-accent-500 opacity-60" />
                    {testimonial.verified && (
                      <div className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                        ✓ Verificado
                      </div>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 flex-1">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.treatment}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-primary-950 to-primary-900 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Junte-se a Milhares de Pacientes Satisfeitos
              </h3>
              <p className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto">
                Agende sua consulta gratuita e descubra por que somos a clínica oftalmológica 
                mais confiável de Belém há mais de 25 anos.
              </p>
              
              <button
                onClick={() => {
                  const formElement = document.getElementById('landing-form');
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                  }
                  // Rastrear evento de interesse
                  if (typeof window !== 'undefined' && window.trackConversion) {
                    window.trackConversion('InitiateCheckout');
                  }
                }}
                className="inline-flex items-center space-x-3 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="text-lg">🎯 Agendar Minha Consulta Gratuita</span>
                <Star className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingTestimonials;
