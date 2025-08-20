"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const [isMapHovered, setIsMapHovered] = useState(false);

  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Empresa", href: "/empresa" },
    { name: "Serviços", href: "/servicos" },
    { name: "Equipe", href: "/equipe" },
    { name: "Contato", href: "/contato" },
  ];

  const services = [
    { name: "Exames Oftalmológicos", href: "/servicos" },
    { name: "Cirurgias Refrativas", href: "/servicos" },
    { name: "Tratamento de Catarata", href: "/servicos" },
    { name: "PSVL", href: "/psvl" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
    },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-600" },
  ];

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo-visual-branca.png"
                alt="Visual Laser"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Visual Laser</h3>
                <p className="text-sm text-primary-200">
                  Clínica Oftalmológica
                </p>
              </div>
            </div>
            <p className="text-primary-200 leading-relaxed mb-6 max-w-md">
              Há quase 30 anos, somos referência em oftalmologia avançada e
              humanizada na região Norte. Nossa clínica oferece infraestrutura
              completa, tecnologia de última geração e uma equipe médica
              altamente especializada.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white/20`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-400">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
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
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent-400">
              Nossos Serviços
            </h4>
            <ul className="space-y-3">
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
            </ul>
          </div>
        </div>

        {/* Contact & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-accent-400 mb-6">
              Entre em Contato
            </h4>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-primary-200 text-sm">Telefone</p>
                  <p className="font-semibold">(91) 3241-0000</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-primary-200 text-sm">E-mail</p>
                  <p className="font-semibold">contato@visuallaser.med.br</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent-500/20 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-accent-400" />
                </div>
                <div>
                  <p className="text-primary-200 text-sm">
                    Horário de Funcionamento
                  </p>
                  <p className="font-semibold">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative">
            <h4 className="text-2xl font-bold text-accent-400 mb-6">
              Nossa Localização
            </h4>

            <div className="relative">
              <Link
                href="https://maps.google.com/?q=Visual+Laser+Belém+Pará"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsMapHovered(true)}
                onMouseLeave={() => setIsMapHovered(false)}
                className="inline-flex items-center space-x-2 text-accent-400 hover:text-accent-300 transition-colors duration-200"
              >
                <MapPin className="w-5 h-5" />
                <span className="font-medium">
                  Av. Visconde de Souza Franco, 1000 - Belém, Pará
                </span>
              </Link>

              {/* Map Hover */}
              <AnimatePresence>
                {isMapHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-full -right-20 mb-4 z-[9999]"
                    style={{
                      width: "min(400px, calc(100vw - 2rem))",
                      height: "300px",
                    }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.540759359148!2d-48.480729600000004!3d-1.4499849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e8191012757%3A0x8eca8a1e0508b6eb!2sVisual%20Laser!5e0!3m2!1spt-BR!2sbr!4v1755712656992!5m2!1spt-BR!2sbr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg shadow-2xl"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
