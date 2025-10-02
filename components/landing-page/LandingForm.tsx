"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, User, Mail, Phone, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  age: string;
  hasInsurance: string;
  message?: string;
}

const LandingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    age: '',
    hasInsurance: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'Email é obrigatório';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(formData.phone.replace(/\D/g, '').replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3'))) newErrors.phone = 'Telefone inválido';
    if (!formData.preferredDate) newErrors.preferredDate = 'Data preferencial é obrigatória';
    if (!formData.preferredTime) newErrors.preferredTime = 'Horário preferencial é obrigatório';
    if (!formData.age) newErrors.age = 'Idade é obrigatória';
    if (!formData.hasInsurance) newErrors.hasInsurance = 'Informação sobre convênio é obrigatória';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formatted
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: 'Nova Solicitação - Consulta Gratuita - Landing Page',
          message: `
Nova solicitação de consulta gratuita:

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Data Preferencial: ${formData.preferredDate}
Horário Preferencial: ${formData.preferredTime}
Idade: ${formData.age} anos
Possui Convênio: ${formData.hasInsurance}
Mensagem: ${formData.message || 'Nenhuma mensagem adicional'}

Fonte: Landing Page - Consulta Gratuita
          `,
          source: 'landing-page'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        
        // Rastrear conversão
        if (typeof window !== 'undefined' && window.trackConversion) {
          window.trackConversion('Purchase', 150); // Valor estimado da consulta
        }

        // Rastrear evento de lead no Google Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
            'value': 150,
            'currency': 'BRL'
          });
        }

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          age: '',
          hasInsurance: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Erro ao enviar solicitação');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar solicitação. Tente novamente ou entre em contato pelo WhatsApp.');
    } finally {
      setIsLoading(false);
    }
  };

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  if (isSuccess) {
    return (
      <section id="landing-form" className="section-padding bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto container-padding">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                🎉 Solicitação Enviada com Sucesso!
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Obrigado por escolher a Visual Laser! Sua solicitação de agendamento foi enviada com sucesso. 
                Nossa equipe entrará em contato em até 24 horas para confirmar sua consulta.
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Próximos Passos:</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">1. Confirmação por Telefone</h4>
                      <p className="text-gray-600">Nossa equipe ligará para confirmar sua consulta</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">2. Preparação para a Consulta</h4>
                      <p className="text-gray-600">Você receberá instruções por email sobre a consulta</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">3. Sua Consulta</h4>
                      <p className="text-gray-600">Compareça no horário agendado para sua consulta completa</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/5591988968201?text=Olá!%20Acabei%20de%20solicitar%20uma%20consulta%20gratuita%20pelo%20site.', '_blank')}
                  className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  <span>💬 Falar no WhatsApp</span>
                </button>
                
                <button
                  onClick={() => window.location.href = 'tel:+559132254422'}
                  className="inline-flex items-center space-x-3 bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
                >
                  <span>📞 Ligar Agora</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="landing-form" className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
              <div className="inline-flex items-center space-x-2 bg-accent-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-accent-400/30">
                <Calendar className="w-5 h-5 text-accent-400" />
                <span className="text-sm font-medium text-accent-300">
                  Agendamento Online - Fácil e Rápido!
                </span>
              </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gradient bg-gradient-to-r from-white to-accent-300 bg-clip-text text-transparent">
                Agende Sua
              </span>
              <br />
              <span className="text-accent-400">Consulta</span>
            </h2>
            
            <p className="text-xl text-primary-200 max-w-3xl mx-auto leading-relaxed">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas 
              para confirmar seu agendamento. <strong>Processo rápido e fácil!</strong>
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Formulário de Agendamento</h3>
              <p className="text-accent-100">Preencha todos os campos para garantir sua vaga</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              {/* Nome e Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>

              {/* Telefone e Idade */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(91) 99999-9999"
                    maxLength={15}
                  />
                  {errors.phone && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                    Idade *
                  </label>
                  <select
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors ${
                      errors.age ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione sua idade</option>
                    <option value="0-12">0-12 anos</option>
                    <option value="13-17">13-17 anos</option>
                    <option value="18-30">18-30 anos</option>
                    <option value="31-45">31-45 anos</option>
                    <option value="46-60">46-60 anos</option>
                    <option value="60+">60+ anos</option>
                  </select>
                  {errors.age && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.age}
                    </div>
                  )}
                </div>
              </div>

              {/* Data e Horário */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Data Preferencial *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={getMinDate()}
                    max={getMaxDate()}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors ${
                      errors.preferredDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.preferredDate && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.preferredDate}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Horário Preferencial *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors ${
                      errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selecione o horário</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  {errors.preferredTime && (
                    <div className="flex items-center mt-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.preferredTime}
                    </div>
                  )}
                </div>
              </div>

              {/* Convênio */}
              <div>
                <label htmlFor="hasInsurance" className="block text-sm font-semibold text-gray-700 mb-2">
                  Possui Convênio Médico? *
                </label>
                <select
                  id="hasInsurance"
                  name="hasInsurance"
                  value={formData.hasInsurance}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors ${
                    errors.hasInsurance ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="sim">Sim, possuo convênio</option>
                  <option value="nao">Não, não possuo convênio</option>
                  <option value="nao-sei">Não tenho certeza</option>
                </select>
                {errors.hasInsurance && (
                  <div className="flex items-center mt-2 text-red-600 text-sm">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.hasInsurance}
                  </div>
                )}
              </div>

              {/* Mensagem Opcional */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem Adicional (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-colors"
                  placeholder="Conte-nos sobre alguma necessidade específica ou dúvida..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-6 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando Solicitação...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-3">
                        <span className="text-lg">🎯 Confirmar Agendamento</span>
                        <CheckCircle className="w-6 h-6" />
                      </div>
                    )}
                  </button>
              </div>

              {/* Privacy Notice */}
              <div className="text-center pt-4">
                <p className="text-sm text-gray-500">
                  🔒 Seus dados estão seguros conosco. Respeitamos sua privacidade e não compartilhamos informações pessoais.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingForm;
