"use client";

import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";

const LandingTestimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "45 anos",
      treatment: "Cirurgia de Catarata",
      rating: 5,
      text: "Excelente atendimento! A equipe da Visual Laser foi muito atenciosa e profissional. Minha cirurgia de catarata foi um sucesso e hoje vejo perfeitamente. Recomendo para toda a família!",
      image: "/images/testimonials/maria-silva.jpg",
      verified: true
    },
    {
      name: "João Santos",
      age: "38 anos",
      treatment: "Cirurgia Refrativa",
      rating: 5,
      text: "Depois de anos usando óculos, finalmente me libertei! A cirurgia refrativa foi rápida e indolor. A Visual Laser tem tecnologia de última geração e médicos muito competentes.",
      image: "/images/testimonials/joao-santos.jpg",
      verified: true
    },
    {
      name: "Ana Costa",
      age: "52 anos",
      treatment: "Exames Oftalmológicos",
      rating: 5,
      text: "Atendimento humanizado e exames completos. A equipe é muito cuidadosa e explica tudo detalhadamente. Fiquei muito satisfeita com o atendimento e os resultados.",
      image: "/images/testimonials/ana-costa.jpg",
      verified: true
    },
    {
      name: "Carlos Lima",
      age: "41 anos",
      treatment: "Tratamento de Glaucoma",
      rating: 5,
      text: "O diagnóstico precoce salvou minha visão! A Visual Laser tem equipamentos modernos e médicos especialistas. O tratamento foi eficaz e o acompanhamento excelente.",
      image: "/images/testimonials/carlos-lima.jpg",
      verified: true
    },
    {
      name: "Fernanda Oliveira",
      age: "29 anos",
      treatment: "Consultas Preventivas",
      rating: 5,
      text: "Faço consultas preventivas há 3 anos na Visual Laser. O atendimento é sempre excepcional, com horários pontuais e profissionais muito qualificados. Minha visão está perfeita!",
      image: "/images/testimonials/fernanda-oliveira.jpg",
      verified: true
    },
    {
      name: "Roberto Alves",
      age: "56 anos",
      treatment: "Implante de LIO",
      rating: 5,
      text: "Cirurgia de catarata com implante de lente premium foi um sucesso! A recuperação foi rápida e hoje vejo melhor do que quando era jovem. Equipe técnica excepcional!",
      image: "/images/testimonials/roberto-alves.jpg",
      verified: true
    }
  ];

  const stats = [
    { number: "98%", label: "Taxa de Satisfação" },
    { number: "4.9/5", label: "Avaliação Média" },
    { number: "50.000+", label: "Pacientes Atendidos" },
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
                        {testimonial.age} • {testimonial.treatment}
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
