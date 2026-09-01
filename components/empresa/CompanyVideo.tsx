"use client";

import { motion } from "framer-motion";

const CompanyVideo = () => {
  // URL do vídeo do YouTube da Visual Laser com qualidade máxima e áudio liberado
  const videoUrl =
    "https://www.youtube.com/embed/Dw_8kJKcsrs?mute=0&vq=hd1080&rel=0&modestbranding=1";

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "Visual Laser - Oftalmologia Avançada e Humanizada",
            description:
              "Vídeo institucional da Visual Laser: conheça nossa equipe médica, infraestrutura e os valores que nos tornam referência em oftalmologia na região Norte.",
            thumbnailUrl: "https://i.ytimg.com/vi/Dw_8kJKcsrs/hqdefault.jpg",
            uploadDate: "2025-01-14T16:22:09-08:00",
            duration: "PT54S",
            embedUrl: "https://www.youtube.com/embed/Dw_8kJKcsrs",
            publisher: {
              "@id": "https://visuallaser.med.br/#clinic",
            },
          }),
        }}
      />
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
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
          className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16"
        >
          {/* Video Container */}
          <div className="bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={videoUrl}
                title="Vídeo Institucional Visual Laser"
                className="absolute top-0 left-0 w-full h-full"
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
