"use client";

import { motion } from "framer-motion";
import { Building2, Users, Award, Heart } from "lucide-react";

const CompanyHero = () => {
  const stats = [
    {
      icon: Building2,
      value: "+25",
      label: "Anos de Experiência",
      description: "Tradição e confiança",
    },
    {
      icon: Users,
      value: "50.000+",
      label: "Pacientes Atendidos",
      description: "Famílias cuidadas",
    },
    {
      icon: Award,
      value: "100%",
      label: "Compromisso",
      description: "Com a excelência",
    },
    {
      icon: Heart,
      value: "Seg-Sex",
      label: "Horário de Funcionamento",
      description: "Segunda a Quinta: 08h às 18h | Sexta: 08h às 17h",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-0 sm:pt-20">
      {/* Background Video - Hidden on Mobile */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full video-container">
            <iframe
              src="https://www.youtube.com/embed/Dw_8kJKcsrs?autoplay=1&mute=1&vq=hd1080&rel=0&modestbranding=1&controls=0&showinfo=0&loop=1&playlist=Dw_8kJKcsrs&end=0&disablekb=1&fs=0&iv_load_policy=3"
              title="Vídeo Institucional Visual Laser"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/70 to-primary-700/50"></div>
        </div>
      </div>

      {/* Background Image for Mobile */}
      <div className="absolute inset-0 sm:hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/images/fundo_empresa.JPG)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/70 to-primary-700/50"></div>
        </div>
      </div>

      <style jsx>{`
        .video-container {
          height: calc(100% + 12.5rem); /* 200px em mobile */
          transform: translateY(-6.25rem); /* -100px em mobile */
          overflow: hidden;
        }
        
        .video-container iframe {
          width: 100vw !important;
          height: 56.25vw !important; /* 16:9 aspect ratio */
          min-height: 100vh !important;
          min-width: 177.78vh !important; /* 16:9 aspect ratio */
          position: absolute !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
        }
        
        @media (min-width: 768px) {
          .video-container {
            height: calc(100% + 15.625rem); /* 250px em tablet */
            transform: translateY(-7.8125rem); /* -125px em tablet */
          }
          
          .video-container iframe {
            width: 100% !important;
            height: 100% !important;
            min-width: 100% !important;
            min-height: 100% !important;
          }
        }
        
        @media (min-width: 1024px) {
          .video-container {
            height: calc(100% + 15.625rem); /* 250px em desktop */
            transform: translateY(-7.8125rem); /* -125px em desktop */
          }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-20 sm:pt-0">
        <div className="container mx-auto container-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-shadow-lg leading-tight">
                  Nós Somos a{" "}
                  <span className="text-accent-400">Visual Laser</span>
                </h1>

                <p className="text-xl md:text-2xl text-primary-200 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Nascemos há mais de 25 anos com o espírito de inovar e servir
                  com empatia e profissionalismo, conquistando a cada dia o
                  reconhecimento e preferência de nossos clientes.
                </p>

                <div className="text-lg text-primary-100 max-w-3xl mx-auto">
                  <p className="mb-4">
                    Nos tornamos referência em Oftalmologia de excelência na
                    grande Belém, sempre atentos aos avanços tecnológicos para
                    oferecer maior segurança e melhores resultados.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Grid - Reposicionado com espaçamento adequado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 mt-16 mb-16"
      >
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-accent-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-accent-200 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-primary-200">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CompanyHero;
