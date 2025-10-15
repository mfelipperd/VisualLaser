import type { Metadata } from "next";
import { Eye, Shield, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nossos Serviços | Exames e Cirurgias Oftalmológicas | Visual Laser Belém",
  description: "Conheça todos os nossos serviços oftalmológicos em Belém: exames completos, cirurgias refrativas, tratamento de catarata e muito mais. Tecnologia de ponta e equipe especializada.",
  keywords: [
    "serviços oftalmológicos",
    "exames de vista",
    "cirurgias refrativas",
    "tratamento de catarata",
    "oftalmologia belém",
    "clínica oftalmológica",
    "Visual Laser",
    "exames oftalmológicos",
    "cirurgia de catarata",
    "laser nos olhos"
  ],
  openGraph: {
    title: "Nossos Serviços | Visual Laser Belém",
    description: "Conheça todos os nossos serviços oftalmológicos: exames completos, cirurgias refrativas, tratamento de catarata e muito mais.",
    url: "https://visuallaser.med.br/servicos",
    type: "website",
    images: [
      {
        url: "/images/servicos-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Serviços Oftalmológicos - Visual Laser Belém",
      },
    ],
  },
  alternates: {
    canonical: "https://visuallaser.med.br/servicos",
  },
};

const services = [
  {
    title: "Exames Oftalmológicos",
    description: "Exames completos de acuidade visual, refração, tonometria e fundoscopia com tecnologia de última geração.",
    features: [
      "Exame de acuidade visual",
      "Refração para prescrição de óculos",
      "Tonometria (pressão intraocular)",
      "Biomicroscopia",
      "Fundoscopia",
      "Campimetria"
    ],
    icon: Eye,
    href: "/servicos/exames-oftalmologicos",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Cirurgias Refrativas",
    description: "Correção definitiva de miopia, hipermetropia, astigmatismo e presbiopia com técnicas avançadas.",
    features: [
      "LASIK",
      "PRK",
      "SMILE",
      "Lentes intraoculares",
      "Correção de presbiopia",
      "Cirurgia personalizada"
    ],
    icon: Shield,
    href: "/servicos/cirurgias-refrativas",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    title: "Tratamento de Catarata",
    description: "Cirurgia moderna de catarata com lentes intraoculares premium e recuperação rápida.",
    features: [
      "Facoemulsificação",
      "Lentes intraoculares monofocais",
      "Lentes multifocais",
      "Lentes tóricas",
      "Cirurgia sem pontos",
      "Recuperação rápida"
    ],
    icon: Users,
    href: "/servicos/tratamento-catarata",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    title: "PSVL - Programa Solidário",
    description: "Programa especial para pacientes sem convênio médico, oferecendo tratamentos acessíveis.",
    features: [
      "Consultas acessíveis",
      "Exames com desconto",
      "Cirurgias subsidiadas",
      "Pagamento facilitado",
      "Atendimento humanizado",
      "Qualidade garantida"
    ],
    icon: Clock,
    href: "/psvl",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600"
  }
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-accent-400/30">
              <CheckCircle className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-medium text-accent-300">
                Serviços Especializados
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-gradient bg-gradient-to-r from-white to-accent-300 bg-clip-text text-transparent">
                Nossos Serviços
              </span>
              <br />
              <span className="text-accent-400">Oftalmológicos</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-200 leading-relaxed max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços oftalmológicos com tecnologia de última geração 
              e equipe médica altamente especializada há mais de 25 anos.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Conheça Nossos <span className="text-gradient">Serviços</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada serviço é realizado com excelência, utilizando as mais modernas técnicas 
                e equipamentos para garantir os melhores resultados.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden"
                >
                  <div className="p-8">
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center text-accent-600 font-semibold group-hover:text-accent-700 transition-colors">
                      <span>Saiba mais</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-950 to-primary-900 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para Cuidar da Sua Visão?
              </h3>
              <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e agende sua consulta. Nossa equipe está pronta 
                para oferecer o melhor atendimento oftalmológico.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center space-x-3 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Agendar Consulta</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  href="tel:+559132254422"
                  className="inline-flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-white/30"
                >
                  <span>Ligar Agora</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
