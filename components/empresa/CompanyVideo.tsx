"use client";

import { motion } from "framer-motion";

const CompanyVideo = () => {
  // URL do vídeo do YouTube da Visual Laser com autoplay e qualidade máxima
  const videoUrl =
    "https://www.youtube.com/embed/Dw_8kJKcsrs?autoplay=1&mute=1&vq=hd1080&rel=0&modestbranding=1";

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
            Conheça a <span className="text-primary-600">Visual Laser</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Assista ao nosso vídeo institucional e descubra mais sobre nossa
            história, valores e compromisso com a excelência em oftalmologia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Video Container */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            <div className="h-[40vh]">
              <iframe
                src={videoUrl}
                title="Vídeo Institucional Visual Laser"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen

              />
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Neste vídeo, você conhecerá nossa equipe médica, nossa
              infraestrutura e os valores que nos tornam referência em
              oftalmologia na região Norte.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyVideo;
