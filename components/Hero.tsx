"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1576091160399-112c8b0a0f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Excelência em Oftalmologia",
      subtitle: "Tecnologia de última geração para cuidar da sua visão",
      description:
        "A Visual Laser oferece tratamentos oftalmológicos avançados com equipamentos de ponta e uma equipe médica altamente qualificada.",
      ctaText: "Agendar Consulta",
      ctaLink: "/agendamento",
      secondaryText: "Conheça Nossa Clínica",
      secondaryLink: "/empresa",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Cirurgias Refrativas",
      subtitle: "Liberte-se dos óculos com segurança",
      description:
        "Realizamos cirurgias refrativas com tecnologia de ponta, proporcionando resultados excepcionais e recuperação rápida.",
      ctaText: "Saiba Mais",
      ctaLink: "/servicos",
      secondaryText: "Nossa Equipe",
      secondaryLink: "/equipe",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Atendimento Humanizado",
      subtitle: "Cuidamos de você com carinho e profissionalismo",
      description:
        "Nossa missão é proporcionar o melhor atendimento oftalmológico, sempre com foco na qualidade de vida dos nossos pacientes.",
      ctaText: "Entre em Contato",
      ctaLink: "/contato",
      secondaryText: "Localização",
      secondaryLink: "/contato",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-950/60 via-primary-950/40 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto container-padding">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-5 border border-white/20 max-w-6xl">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-end">
                    {/* Text Content */}
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                          {slides[currentSlide].title}
                        </h1>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h2 className="text-2xl md:text-3xl font-semibold text-accent-400 mb-4">
                          {slides[currentSlide].subtitle}
                        </h2>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                          {slides[currentSlide].description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <Link
                          href={slides[currentSlide].ctaLink}
                          className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          <span>{slides[currentSlide].ctaText}</span>
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                      >
                        <Link
                          href={slides[currentSlide].secondaryLink}
                          className="inline-flex items-center space-x-2 text-white hover:text-accent-400 font-medium py-4 px-8 border border-white/30 hover:border-accent-400 rounded-lg transition-all duration-300"
                        >
                          <span>{slides[currentSlide].secondaryText}</span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent-500 scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
