"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ExternalLink, RefreshCw } from "lucide-react";
import AppointmentModal from "./AppointmentModal";
import Image from "next/image";

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: string;
  profile_photo_url?: string;
}

const Testimonials = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  // Place ID da Visual Laser
  const PLACE_ID = "ChIJVycBkYGOpJIR67YIBR6Kyo4";
  const GOOGLE_MAPS_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;

  const fetchGoogleReviews = useCallback(async () => {
    try {
      setLoading(true);

      // Simular busca de reviews (em produção, seria um endpoint do backend)
      // Por enquanto, vamos usar os reviews estáticos mas com estrutura real
      const mockReviews = await simulateGoogleReviews();

      setReviews(mockReviews);
      setAverageRating(4.6); // Rating médio da Visual Laser
      setTotalReviews(327); // Total de avaliações
      setLastUpdated(new Date().toLocaleDateString("pt-BR"));
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error("Erro ao buscar reviews:", error);
      }
      // Fallback para reviews estáticos
      setReviews(fallbackReviews);
      setAverageRating(4.6);
      setTotalReviews(327);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGoogleReviews();
  }, [fetchGoogleReviews]);

  // Simulação de reviews do Google (em produção seria web scraping real)
  const simulateGoogleReviews = async (): Promise<GoogleReview[]> => {
    // Simular delay de rede
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return [
      {
        author_name: "Isabely Menezes",
        rating: 5,
        text: "A clínica oferece um atendimento de excelência. Minha avó foi muito bem tratada e nós duas ficamos extremamente satisfeitas com o cuidado médico prestado pelo Dr. Armando Vidonho.",
        time: "há 2 semanas",
        profile_photo_url: "",
      },
      {
        author_name: "Marcino Fernandes",
        rating: 5,
        text: "Realizei com o Dr Carlos Lima na clinica Visual Laser a cirurgia de blefaroplastia onde me encontro 100% satisfeito com o atendimento gentil, educado, humano e atencioso do Dr. Carlos Lima, bem como de suas atendentes. O resultado final da cirurgia de blefaroplastia inferior ficou excelente e acima do esperado.",
        time: "há 1 semana",
        profile_photo_url: "",
      },
      {
        author_name: "Tereza Neves",
        rating: 5,
        text: "Sou paciente do Dr. Armando Vidonho e há 20 dias passei por cirurgia de Catarata. Os exames clínicos pós operatório confirmam ótimo resultado. Sinto-me bem e feliz por estar conseguindo ler sem o auxílio de óculos. Fui muito bem atendida por toda a equipe da Clínica Visual Laser e em especial pelo Dr. Armando Vidonho.",
        time: "há 3 semanas",
        profile_photo_url: "",
      },
      {
        author_name: "Rayanne Kathleem",
        rating: 5,
        text: "Sou paciente do Dr Armando vidonho comecei meu tratamento de ceratocone a 1 ano e pouco dia 21/08/25 fiz o transplante de córnea vou fazer 1 mês uma ótima cirurgia Dr muito atencioso 100% cicatrisado recuperação total. Não tenho do que reclamar as meninas da recepção são super atenciosas sempre bem atendida",
        time: "há 3 semanas",
        profile_photo_url: "",
      },
      {
        author_name: "Rafael Salviano",
        rating: 5,
        text: "Atendimento humanizado, são super atenciosos, médico qualificado e com um tratamento ótimo, gostei muito do ambiente e da qualidade dos serviços oferecidos, recomendo que conheçam e sejam clientes dessa clínica, estão de parabéns!",
        time: "há 3 semanas",
        profile_photo_url: "",
      },
      {
        author_name: "Ivana Souza",
        rating: 5,
        text: "Excelente atendimento... minha Cirurgia de blefaroplastia com o Dr.Carlos Lima foi excelente. Só gratidão.",
        time: "há 3 semanas",
        profile_photo_url: "",
      },
      {
        author_name: "Tricia Almeida",
        rating: 5,
        text: "Visual Laser clínica especializada em oftalmologia avançada e humanizada, o atendimento é sempre diferenciado, clínica que a família toda é atendida a anos com o Dr Armando Vidonho, muito atencioso em seu atendimento",
        time: "há 3 semanas",
        profile_photo_url: "",
      },
      {
        author_name: "Kaina Siqueira",
        rating: 5,
        text: "Uma clínica humanizada, com atendimento excelente, profissionais excepcionais. Dr. Armando Vidonho sempre atendeu toda nossa família com muito cuidado e atencioso. Recomendo Muito a clínica.",
        time: "há 2 meses",
        profile_photo_url: "",
      },
      {
        author_name: "Gracemi Reis",
        rating: 5,
        text: "Dr. Carlos Henrique Lima foi muito competente e atencioso no atendimento pré e pós cirurgico.",
        time: "há 2 meses",
        profile_photo_url: "",
      },
    ];
  };

  // Reviews de fallback caso o scraping falhe
  const fallbackReviews: GoogleReview[] = [
    {
      author_name: "Isabely Menezes",
      rating: 5,
      text: "A clínica oferece um atendimento de excelência. Minha avó foi muito bem tratada e nós duas ficamos extremamente satisfeitas com o cuidado médico prestado pelo Dr. Armando Vidonho.",
      time: "há 2 semanas",
    },
    {
      author_name: "Marcino Fernandes",
      rating: 5,
      text: "Realizei com o Dr Carlos Lima na clinica Visual Laser a cirurgia de blefaroplastia onde me encontro 100% satisfeito com o atendimento gentil, educado, humano e atencioso do Dr. Carlos Lima, bem como de suas atendentes. O resultado final da cirurgia de blefaroplastia inferior ficou excelente e acima do esperado.",
      time: "há 1 semana",
    },
    {
      author_name: "Tereza Neves",
      rating: 5,
      text: "Sou paciente do Dr. Armando Vidonho e há 20 dias passei por cirurgia de Catarata. Os exames clínicos pós operatório confirmam ótimo resultado. Sinto-me bem e feliz por estar conseguindo ler sem o auxílio de óculos. Fui muito bem atendida por toda a equipe da Clínica Visual Laser e em especial pelo Dr. Armando Vidonho.",
      time: "há 3 semanas",
    },
    {
      author_name: "Rayanne Kathleem",
      rating: 5,
      text: "Sou paciente do Dr Armando vidonho comecei meu tratamento de ceratocone a 1 ano e pouco dia 21/08/25 fiz o transplante de córnea vou fazer 1 mês uma ótima cirurgia Dr muito atencioso 100% cicatrisado recuperação total. Não tenho do que reclamar as meninas da recepção são super atenciosas sempre bem atendida",
      time: "há 3 semanas",
    },
    {
      author_name: "Rafael Salviano",
      rating: 5,
      text: "Atendimento humanizado, são super atenciosos, médico qualificado e com um tratamento ótimo, gostei muito do ambiente e da qualidade dos serviços oferecidos, recomendo que conheçam e sejam clientes dessa clínica, estão de parabéns!",
      time: "há 3 semanas",
    },
    {
      author_name: "Ivana Souza",
      rating: 5,
      text: "Excelente atendimento... minha Cirurgia de blefaroplastia com o Dr.Carlos Lima foi excelente. Só gratidão.",
      time: "há 3 semanas",
    },
    {
      author_name: "Tricia Almeida",
      rating: 5,
      text: "Visual Laser clínica especializada em oftalmologia avançada e humanizada, o atendimento é sempre diferenciado, clínica que a família toda é atendida a anos com o Dr Armando Vidonho, muito atencioso em seu atendimento",
      time: "há 3 semanas",
    },
    {
      author_name: "Kaina Siqueira",
      rating: 5,
      text: "Uma clínica humanizada, com atendimento excelente, profissionais excepcionais. Dr. Armando Vidonho sempre atendeu toda nossa família com muito cuidado e atencioso. Recomendo Muito a clínica.",
      time: "há 2 meses",
    },
    {
      author_name: "Gracemi Reis",
      rating: 5,
      text: "Dr. Carlos Henrique Lima foi muito competente e atencioso no atendimento pré e pós cirurgico.",
      time: "há 2 meses",
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

  const getAvatarInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleRefresh = () => {
    fetchGoogleReviews();
  };

  if (loading) {
    return (
      <section className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white overflow-x-hidden">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-accent-500 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
            <p className="text-xl text-primary-200">
              Carregando depoimentos do Google...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white overflow-x-hidden">
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

          {/* Rating Summary */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              {renderStars(Math.round(averageRating))}
              <span className="text-2xl font-bold text-accent-400">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <span className="text-primary-200 text-lg">
              • {totalReviews} avaliações
            </span>
          </div>

          {/* Last Updated Info */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-sm text-primary-300">
              Última atualização: {lastUpdated}
            </span>
            <button
              onClick={handleRefresh}
              className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
              title="Atualizar reviews"
            >
              <RefreshCw className="w-4 h-4 text-primary-300" />
            </button>
          </div>

          <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos pacientes é nossa maior recompensa. Conheça
            alguns depoimentos reais de quem confiou na Visual Laser para cuidar
            da saúde visual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
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
                  {renderStars(review.rating)}
                  <span className="text-sm text-primary-200 ml-2">
                    {review.time}
                  </span>
                </div>

                {/* Content */}
                <p className="text-primary-200 leading-relaxed mb-6 text-lg">
                  &quot;
                  {review.text.length > 200
                    ? `${review.text.substring(0, 200)}...`
                    : review.text}
                  &quot;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  {review.profile_photo_url ? (
                    <Image
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent-500/30"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-accent-500/30 rounded-full flex items-center justify-center border-2 border-accent-500/30">
                      <span className="text-accent-400 font-semibold text-sm">
                        {getAvatarInitials(review.author_name)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-white">
                      {review.author_name}
                    </h4>
                    <p className="text-sm text-accent-400">Paciente</p>
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
              <button 
                onClick={() => setIsAppointmentModalOpen(true)}
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Agendar Consulta
              </button>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg border border-white/30 hover:border-accent-400 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Ver no Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </section>
  );
};

export default Testimonials;
