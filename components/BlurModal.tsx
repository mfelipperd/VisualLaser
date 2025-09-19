"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Mail, Phone, X, CheckCircle, ArrowRight } from "lucide-react";
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

  useEffect(() => {
    // Verificar se o formulário já foi preenchido
    const formSubmitted = localStorage.getItem("formSubmitted");
    const sessionShown = sessionStorage.getItem("modalShownThisSession");

    // Mostrar a modal instantaneamente se:
    // 1. Não preencheu o formulário E
    // 2. Não foi mostrada nesta sessão
    if (!formSubmitted && !sessionShown) {
      setIsVisible(true);
      // Marcar que foi mostrada nesta sessão
      sessionStorage.setItem("modalShownThisSession", "true");
    }
  }, []); // Array vazio = executa apenas uma vez quando o componente monta

  // Prevenir scroll do body quando modal estiver aberto
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "unset";
      document.body.style.width = "unset";
    };
  }, [isVisible]);

  // Adicionar listener para tecla ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        closeModal();
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verificar se pelo menos um campo foi preenchido
    const hasData =
      formData.name.trim() || formData.email.trim() || formData.phone.trim();

    if (hasData) {
      // Se tem dados, salvar e mostrar mensagem de sucesso
      setIsLoading(true);

      try {
        // Enviar dados para a API
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            source: 'blur-modal'
          }),
        });

        const result = await response.json();

        if (!result.success) {
          if (process.env.NODE_ENV === 'development') {
            console.error('Erro ao enviar email:', result.message);
          }
          // Mesmo com erro, salvar localmente para não perder o lead
        }

        // Salvar no localStorage que preencheu o formulário
        localStorage.setItem("userContact", JSON.stringify(formData));
        localStorage.setItem("formSubmitted", "true");

        setIsSubmitted(true);
        setIsLoading(false);

        // Fechar modal após 2 segundos
        setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Erro ao enviar dados:', error);
        }
        // Mesmo com erro, salvar localmente para não perder o lead
        localStorage.setItem("userContact", JSON.stringify(formData));
        localStorage.setItem("formSubmitted", "true");
        
        setIsSubmitted(true);
        setIsLoading(false);

        setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      }
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
    }

    setIsVisible(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-[9999] overflow-hidden bg-black/50"
        onClick={handleBackdropClick}
      >
        {/* Background com desfoque */}
        <div className="absolute inset-0 backdrop-blur-sm" />

        {/* Conteúdo da modal */}
        <div className="relative h-full flex items-center justify-center p-1 xs:p-2 sm:p-4 overflow-y-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl xs:rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-xs xs:max-w-sm sm:max-w-md mx-auto my-1 xs:my-2 sm:my-4 overflow-hidden max-h-[95vh] xs:max-h-[90vh] sm:max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-3 xs:p-4 sm:p-6 text-center relative flex-shrink-0">
              <button
                onClick={closeModal}
                className="absolute top-1 right-1 xs:top-2 xs:right-2 sm:top-4 sm:right-4 p-1.5 xs:p-2 hover:bg-white/20 rounded-full transition-colors duration-200 z-10 min-w-[40px] min-h-[40px] xs:min-w-[44px] xs:min-h-[44px] flex items-center justify-center touch-manipulation"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5 xs:w-6 xs:h-6 sm:w-5 sm:h-5" />
              </button>

              <div className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 xs:mb-3 sm:mb-4">
                <Eye className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10" />
              </div>

              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold mb-1 xs:mb-2">
                {isSubmitted
                  ? "Obrigado!"
                  : "Sua Visão Merece Cuidado Especial"}
              </h2>

              {!isSubmitted && (
                <p className="text-primary-100 text-xs xs:text-xs sm:text-sm leading-relaxed">
                  Deixe seus dados para receber informações sobre como a Visual
                  Laser pode ajudar sua visão, ou clique em &quot;Ver Melhor&quot; para
                  continuar navegando
                </p>
              )}
            </div>

            {/* Body */}
            <div className="p-3 xs:p-4 sm:p-6 overflow-y-auto flex-1 min-h-0">
              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-2 xs:space-y-3 sm:space-y-4"
                >
                  <div>
                    <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
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
                      className="w-full px-2.5 xs:px-3 sm:px-4 py-2 xs:py-2.5 sm:py-3 border border-gray-300 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-xs xs:text-sm sm:text-base text-gray-900 placeholder-gray-500 min-h-[40px] xs:min-h-[44px]"
                      placeholder="Digite seu nome completo (opcional)"
                    />
                  </div>

                  <div>
                    <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                      Email{" "}
                      <span className="text-gray-500 font-normal">
                        (opcional)
                      </span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-2.5 xs:left-3 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full pl-8 xs:pl-9 sm:pl-10 pr-2.5 xs:pr-3 sm:pr-4 py-2 xs:py-2.5 sm:py-3 border border-gray-300 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-xs xs:text-sm sm:text-base text-gray-900 placeholder-gray-500 min-h-[40px] xs:min-h-[44px]"
                        placeholder="seu@email.com (opcional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs xs:text-sm font-medium text-gray-700 mb-1 xs:mb-2">
                      Telefone{" "}
                      <span className="text-gray-500 font-normal">
                        (opcional)
                      </span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-2.5 xs:left-3 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full pl-8 xs:pl-9 sm:pl-10 pr-2.5 xs:pr-3 sm:pr-4 py-2 xs:py-2.5 sm:py-3 border border-gray-300 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-xs xs:text-sm sm:text-base text-gray-900 placeholder-gray-500 min-h-[40px] xs:min-h-[44px]"
                        placeholder="(91) 99999-9999 (opcional)"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary-600 text-white py-2 xs:py-2.5 sm:py-3 px-3 xs:px-4 sm:px-6 rounded-lg xs:rounded-xl font-semibold hover:bg-primary-700 transition-all duration-200 flex items-center justify-center space-x-1.5 xs:space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-xs xs:text-sm sm:text-base min-h-[40px] xs:min-h-[44px] touch-manipulation"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Ver Melhor</span>
                        <ArrowRight className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center leading-relaxed">
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
                <div className="text-center py-4 xs:py-6 sm:py-8">
                  <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4">
                    <CheckCircle className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-green-600" />
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 mb-1 xs:mb-2">
                    Obrigado pelos seus dados!
                  </h3>
                  <p className="text-gray-600 text-xs xs:text-sm sm:text-base leading-relaxed">
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
