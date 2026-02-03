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
  ChevronDown,
  Navigation,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [mapKey, setMapKey] = useState(0);

  // Função para solicitar localização do usuário automaticamente
  const requestUserLocation = () => {
    if (!navigator.geolocation) {
      return; // Falha silenciosamente
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        // Força o recarregamento do iframe para mostrar a rota
        setMapKey(prev => prev + 1);
      },
      () => {
        // Falha silenciosamente - não exibe mensagens de erro
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 300000 // 5 minutos
      }
    );
  };

  // Solicitar localização quando o mapa abrir
  const handleMapToggle = () => {
    const newMapVisible = !isMapVisible;
    setIsMapVisible(newMapVisible);
    
    if (newMapVisible && !userLocation) {
      requestUserLocation();
    }
  };

  // Função para gerar URL do Google Maps com rota
  const getGoogleMapsRouteUrl = () => {
    if (userLocation) {
      return `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=Tv.+14+de+Março,+1622+-+Nazaré,+Belém+-+PA,+66055-490&travelmode=driving`;
    }
    return `https://www.google.com/maps/dir/?api=1&destination=Tv.+14+de+Março,+1622+-+Nazaré,+Belém+-+PA,+66055-490`;
  };

  // Função para gerar URL do iframe com rota
  const getMapIframeUrl = () => {
    if (userLocation) {
      return `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dLw0t1z0g1z0g1&origin=${userLocation.lat},${userLocation.lng}&destination=Tv.+14+de+Março,+1622+-+Nazaré,+Belém+-+PA,+66055-490&mode=driving`;
    }
    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.540759359148!2d-48.480729600000004!3d-1.4499849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48e8191012757%3A0x8eca8a1e0508b6eb!2sVisual%20Laser!5e0!3m2!1spt-BR!2sbr!4v1758162242691!5m2!1spt-BR!2sbr";
  };

  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Empresa", href: "/empresa" },
    { name: "Serviços", href: "/servicos" },
    { name: "Equipe", href: "/equipe" },
    { name: "Contato", href: "/contato" },
  ];

  const services = [
    { name: "Exames Oftalmológicos", href: "/servicos/exames-oftalmologicos" },
    { name: "Cirurgias Refrativas", href: "/servicos/cirurgias-refrativas" },
    { name: "Tratamento de Catarata", href: "/servicos/tratamento-catarata" },
    { name: "PSVL", href: "/psvl" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/VisualLaserOftalmologia/",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/visuallaser/",
      color: "hover:text-pink-600",
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      href: "https://www.youtube.com/@VisualLaserClinica", 
      color: "hover:text-red-600" 
    },
  ];

  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
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
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <p className="font-semibold">(91) 3225-4422</p>
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
                  <p className="font-semibold">Segunda a Quinta: 08h às 18h</p>
                  <p className="font-semibold">Sexta: 08h às 17h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div>
            <h4 className="text-2xl font-bold text-accent-400 mb-6">
              Nossa Localização
            </h4>

            <div className="space-y-4">
              {/* Address Clickable */}
              <button
                onClick={handleMapToggle}
                className="inline-flex items-center space-x-2 text-accent-400 hover:text-accent-300 transition-colors duration-200 group"
              >
                <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">
                  Tv. 14 de Março, 1622 - Nazaré, Belém - PA
                </span>
                <motion.div
                  animate={{ rotate: isMapVisible ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              {/* Map Container */}
              <AnimatePresence>
                {isMapVisible && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                      {/* Map */}
                      <iframe
                        key={mapKey}
                        src={getMapIframeUrl()}
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                      />
                      
                      {/* Open in Maps Button */}
                      <div className="p-4 bg-gray-50 border-t">
                        <Link
                          href={getGoogleMapsRouteUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                        >
                          <Navigation className="w-4 h-4" />
                          <span>
                            {userLocation ? "Abrir rota no Google Maps" : "Abrir no Google Maps"}
                          </span>
                        </Link>
                      </div>
                    </div>
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
