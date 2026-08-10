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

type ReviewsStatus = "loading" | "ok" | "unavailable";

const PLACE_ID = "ChIJVycBkYGOpJIR67YIBR6Kyo4";
const DEFAULT_GOOGLE_MAPS_URL = `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`;

const Testimonials = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [status, setStatus] = useState<ReviewsStatus>("loading");
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [googleMapsUrl, setGoogleMapsUrl] = useState(DEFAULT_GOOGLE_MAPS_URL);

  const fetchGoogleReviews = useCallback(async () => {
    setStatus("loading");

    try {
      const response = await fetch("/api/google-reviews");
      const data = await response.json();

      if (response.ok && data.success && data.reviews?.length > 0) {
        setReviews(data.reviews);
        setAverageRating(data.rating || 0);
        setTotalReviews(data.totalReviews || 0);
        setGoogleMapsUrl(data.googleMapsUri || DEFAULT_GOOGLE_MAPS_URL);
        setStatus("ok");
        return;
      }

      setStatus("unavailable");
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Erro ao buscar avaliações do Google:", error);
      }
      setStatus("unavailable");
    }
  }, []);

  useEffect(() => {
    fetchGoogleReviews();
  }, [fetchGoogleReviews]);

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

  if (status === "loading") {
    return (
      <section className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white overflow-x-hidden">
        <div className="container mx-auto container-padding">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-accent-500 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
            <p className="text-xl text-primary-200">
              Carregando avaliações do Google...
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

          {status === "ok" && (
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                {renderStars(Math.round(averageRating))}
                <span className="text-2xl font-bold text-accent-400">
                  {averageRating.toFixed(1)}
                </span>
              </div>
              <span className="text-primary-200 text-lg">
                • {totalReviews} avaliações no Google
              </span>
              <button
                onClick={fetchGoogleReviews}
                className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
                title="Atualizar avaliações"
              >
                <RefreshCw className="w-4 h-4 text-primary-300" />
              </button>
            </div>
          )}

          <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
            A satisfação dos nossos pacientes é nossa maior recompensa. Conheça
            alguns depoimentos reais de quem confiou na Visual Laser para cuidar
            da saúde visual.
          </p>
        </motion.div>

        {status === "unavailable" ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20"
          >
            <Quote className="w-10 h-10 text-accent-400 mx-auto mb-4" />
            <p className="text-primary-200 text-lg mb-6">
              As avaliações do Google ainda não estão disponíveis por aqui.
              Veja as avaliações reais direto no perfil da Visual Laser no
              Google Maps.
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              <span>Ver avaliações no Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        ) : (
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
        )}

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
              {status === "ok" && (
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-lg border border-white/30 hover:border-accent-400 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Ver no Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
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
