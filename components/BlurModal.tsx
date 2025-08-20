"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Mail, Phone, X, CheckCircle, ArrowRight } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { UserContact } from "@/types";

const BlurModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<UserContact>({
    email: "",
    phone: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hasSeenModal, setHasSeenModal] = useLocalStorage(
    "blurModalSeen",
    false
  );

  useEffect(() => {
    // Verificar se o formulário já foi preenchido
    const formSubmitted = localStorage.getItem("formSubmitted");

    // Mostrar a modal após 3 segundos se:
    // 1. Não preencheu o formulário E
    // 2. Não marcou como vista (ou seja, não preencheu dados antes)
    if (!formSubmitted && !hasSeenModal) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hasSeenModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar se pelo menos um campo foi preenchido
    const hasData =
      formData.name.trim() || formData.email.trim() || formData.phone.trim();

    if (hasData) {
      // Se tem dados, salvar e mostrar mensagem de sucesso
      setIsLoading(true);

      // Simular envio (aqui você pode integrar com sua API)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Salvar no localStorage que preencheu o formulário
      localStorage.setItem("userContact", JSON.stringify(formData));
      localStorage.setItem("formSubmitted", "true");

      setIsSubmitted(true);
      setIsLoading(false);

      // Fechar modal após 2 segundos
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    } else {
      // Se não tem dados, apenas fechar a modal SEM marcar como vista
      setIsVisible(false);
    }
  };

  const closeModal = () => {
    // Verificar se pelo menos um campo foi preenchido
    const hasData =
      formData.name.trim() || formData.email.trim() || formData.phone.trim();

    if (hasData) {
      // Se tem dados, salvar e marcar como preenchido
      localStorage.setItem("userContact", JSON.stringify(formData));
      localStorage.setItem("formSubmitted", "true");
      setHasSeenModal(true); // Só marca como vista se preencheu dados
    }

    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[100] overflow-hidden"
      >
        {/* Background com desfoque */}
        <div className="absolute inset-0 backdrop-blur-md bg-black/20" />

        {/* Conteúdo da modal */}
        <div className="relative h-full flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 text-center relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-10 h-10" />
              </div>

              <h2 className="text-2xl font-bold mb-2">
                {isSubmitted
                  ? "Obrigado!"
                  : "Sua Visão Merece Cuidado Especial"}
              </h2>

              {!isSubmitted && (
                <p className="text-primary-100 text-sm">
                  Deixe seus dados para receber informações sobre como a Visual
                  Laser pode ajudar sua visão, ou clique em "Ver Melhor" para
                  continuar navegando
                </p>
              )}
            </div>

            {/* Body */}
            <div className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo{" "}
                      <span className="text-gray-500 font-normal">
                        (opcional)
                      </span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Digite seu nome completo (opcional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email{" "}
                      <span className="text-gray-500 font-normal">
                        (opcional)
                      </span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                        placeholder="seu@email.com (opcional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone{" "}
                      <span className="text-gray-500 font-normal">
                        (opcional)
                      </span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:border-transparent transition-all duration-200"
                        placeholder="(91) 99999-9999 (opcional)"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Ver Melhor</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Ao enviar, você concorda em receber informações sobre nossos
                    serviços.
                    <br />
                    <a
                      href="/privacidade"
                      className="text-primary-600 hover:underline"
                    >
                      Política de Privacidade
                    </a>
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Obrigado pelos seus dados!
                  </h3>
                  <p className="text-gray-600">
                    Nossa equipe entrará em contato em breve para ajudar sua
                    visão. Agora você pode navegar pelo site normalmente.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurModal;
