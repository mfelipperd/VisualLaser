"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube,
  Heart,
  Shield,
  Award
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const LandingFooter = () => {
  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Empresa", href: "/empresa" },
    { name: "Equipe", href: "/equipe" },
    { name: "Serviços", href: "/exames-cirurgias" },
    { name: "Contato", href: "/contato" },
  ];

  const services = [
    { name: "Consulta Gratuita", href: "#landing-form" },
    { name: "Exames Oftalmológicos", href: "/exames-cirurgias" },
    { name: "Cirurgias Refrativas", href: "/exames-cirurgias" },
    { name: "Tratamento de Catarata", href: "/exames-cirurgias" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL || "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
      color: "hover:text-pink-600",
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      href: "#", 
      color: "hover:text-red-600" 
    },
  ];

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto container-padding py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <Image
                src="/logo-visual-branca.png"
                alt="Visual Laser"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Visual Laser</h3>
                <p className="text-sm text-primary-200">
                  Clínica Oftalmológica
                </p>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-primary-200 leading-relaxed mb-6 max-w-md"
            >
              Há quase 30 anos, somos referência em oftalmologia avançada e
              humanizada na região Norte. Nossa clínica oferece infraestrutura
              completa, tecnologia de última geração e uma equipe médica
              altamente especializada.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 mb-6"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-accent-400" />
                <span className="text-sm text-primary-200">Dados Seguros</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent-400" />
                <span className="text-sm text-primary-200">+25 Anos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-accent-400" />
                <span className="text-sm text-primary-200">50.000+ Pacientes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-accent-400" />
                <span className="text-sm text-primary-200">Resultados Rápidos</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white/20`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg font-semibold mb-6 text-accent-400"
            >
              Links Rápidos
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-accent-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Services */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg font-semibold mb-6 text-accent-400"
            >
              Nossos Serviços
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-primary-200 hover:text-accent-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12"
        >
          <h4 className="text-2xl font-bold text-accent-400 mb-6 text-center">
            Entre em Contato
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-accent-400" />
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">Telefone</h5>
              <p className="text-primary-200 mb-2">(91) 3225-4422</p>
              <p className="text-primary-200">(91) 98896-8201</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-accent-400" />
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">Email</h5>
              <p className="text-primary-200">contato@visuallaser.med.br</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent-400" />
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">Endereço</h5>
              <p className="text-primary-200">Tv. 14 de Março, 1622</p>
              <p className="text-primary-200">Nazaré, Belém - PA</p>
            </div>
          </div>

          <div className="text-center mt-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-accent-400" />
              <span className="text-lg font-semibold text-white">Horário de Funcionamento</span>
            </div>
            <p className="text-primary-200">Segunda a Quinta: 08h às 18h</p>
            <p className="text-primary-200">Sexta: 08h às 17h</p>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para Cuidar da Sua Visão?
            </h3>
            <p className="text-accent-100 mb-6 max-w-2xl mx-auto">
              Não perca mais tempo! Agende sua consulta gratuita agora mesmo e garanta sua vaga limitada. 
              Nossa equipe está pronta para oferecer o melhor atendimento oftalmológico.
            </p>
            
            <button
              onClick={() => {
                const formElement = document.getElementById('landing-form');
                if (formElement) {
                  formElement.scrollIntoView({ behavior: 'smooth' });
                }
                // Rastrear evento final
                if (typeof window !== 'undefined' && window.trackConversion) {
                  window.trackConversion('Lead');
                }
              }}
              className="inline-flex items-center space-x-3 bg-white hover:bg-gray-50 text-accent-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="text-lg">🎯 Agendar Consulta Gratuita Agora</span>
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-primary-200 text-sm">
                © 2024 Visual Laser. Todos os direitos reservados.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <Link
                href="/politica-privacidade"
                className="text-primary-200 hover:text-accent-400 text-sm transition-colors duration-200"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos-uso"
                className="text-primary-200 hover:text-accent-400 text-sm transition-colors duration-200"
              >
                Termos de Uso
              </Link>
              <Link
                href="https://portfolio-marcos-three.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-200 hover:text-accent-400 text-sm transition-colors duration-200"
              >
                Criado com ❤️ por Marcos Felippe
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default LandingFooter;
