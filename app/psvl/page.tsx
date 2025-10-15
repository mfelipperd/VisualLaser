import type { Metadata } from "next";
import { Heart, Users, CheckCircle, Star, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PSVL - Programa Solidário Visual Laser | Acessibilidade em Oftalmologia | Belém",
  description: "PSVL - Programa Solidário Visual Laser: oferecemos tratamentos oftalmológicos acessíveis para quem não possui convênio médico. Qualidade e humanização em Belém.",
  keywords: [
    "PSVL",
    "Programa Solidário Visual Laser",
    "oftalmologia acessível",
    "tratamento sem convênio",
    "oftalmologia popular",
    "Visual Laser",
    "belém",
    "consulta acessível"
  ],
  openGraph: {
    title: "PSVL - Programa Solidário Visual Laser | Belém",
    description: "Programa Solidário Visual Laser: tratamentos oftalmológicos acessíveis com qualidade e humanização para quem não possui convênio médico.",
    url: "https://visuallaser.med.br/psvl",
    type: "website",
  },
  alternates: {
    canonical: "https://visuallaser.med.br/psvl",
  },
};

const beneficios = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cuidado personalizado e acolhedor para todos os pacientes",
    color: "text-red-600"
  },
  {
    icon: Shield,
    title: "Qualidade Garantida",
    description: "Mesma qualidade de atendimento, independente da forma de pagamento",
    color: "text-blue-600"
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais experientes e altamente qualificados",
    color: "text-green-600"
  },
  {
    icon: CheckCircle,
    title: "Tecnologia Moderna",
    description: "Equipamentos de última geração para diagnósticos precisos",
    color: "text-purple-600"
  }
];

const servicos = [
  {
    title: "Consultas Oftalmológicas",
    description: "Consultas com oftalmologistas especializados a preços especiais para quem não possui convênio médico",
    inclui: ["Consulta médica", "Avaliação inicial", "Orientações médicas", "Prescrição se necessário"],
    valor: "Desconto especial na consulta",
    icon: Heart,
    color: "from-blue-500 to-blue-600"
  }
];

const comoFunciona = [
  {
    step: "1",
    title: "Agendamento",
    description: "Entre em contato conosco e agende sua consulta no PSVL"
  },
  {
    step: "2",
    title: "Consulta",
    description: "Realização da consulta oftalmológica com desconto especial"
  },
  {
    step: "3",
    title: "Orientações",
    description: "Receba orientações médicas e próximos passos se necessário"
  }
];

export default function PSVLPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-accent-400/30">
              <Heart className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-medium text-accent-300">
                Programa Solidário
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-gradient bg-gradient-to-r from-white to-accent-300 bg-clip-text text-transparent">
                PSVL
              </span>
              <br />
              <span className="text-accent-400">Programa Solidário Visual Laser</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-200 leading-relaxed max-w-3xl mx-auto">
              Oferecemos tratamentos oftalmológicos acessíveis para quem não possui convênio médico, 
              mantendo a mesma qualidade e humanização que nos caracteriza há mais de 25 anos.
            </p>
          </div>
        </div>
      </section>

      {/* About PSVL Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre o <span className="text-gradient">PSVL</span>
              </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              O Programa Solidário Visual Laser nasceu da nossa missão de democratizar o acesso 
              às consultas oftalmológicas de qualidade. Oferecemos desconto especial apenas na consulta 
              para quem não possui convênio médico, mantendo a mesma excelência no atendimento.
            </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <beneficio.icon className={`w-8 h-8 ${beneficio.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{beneficio.title}</h4>
                  <p className="text-gray-600">{beneficio.description}</p>
                </div>
              ))}
            </div>

            {/* Services Section */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Serviços do PSVL
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Oferecemos desconto especial apenas na consulta oftalmológica para quem não possui 
                  convênio médico. Exames e procedimentos têm valores normais.
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto">
                {servicos.map((servico, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${servico.color}`}>
                        <servico.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {servico.title}
                        </h4>
                        
                        <p className="text-gray-600 mb-4">
                          {servico.description}
                        </p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-gray-900 mb-2">Inclui:</h5>
                          <ul className="space-y-1">
                            {servico.inclui.map((item, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-accent-50 px-3 py-2 rounded-lg">
                          <p className="text-sm font-semibold text-accent-700">
                            {servico.valor}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How it Works Section */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Como Funciona
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  O processo é simples e transparente. Entre em contato conosco para agendar 
                  sua consulta com desconto especial.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {comoFunciona.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notice Section */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-3xl p-8 md:p-12 mb-16">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Importante Saber
                </h3>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <h4 className="text-xl font-bold text-green-700">Incluído no PSVL</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Consulta médica com oftalmologista</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Avaliação inicial e orientações</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Prescrição de medicações se necessário</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">Desconto especial na consulta</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-200">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-6 h-6 text-red-600" />
                      <h4 className="text-xl font-bold text-red-700">Não Incluído no PSVL</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">Exames complementares (valor normal)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">Cirurgias (valor normal)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">Medicações (valor normal)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-red-500" />
                        <span className="text-gray-700">Óculos ou lentes de contato</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Depoimentos
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    &ldquo;O PSVL me permitiu fazer minha consulta oftalmológica quando eu não tinha condições. 
                    A qualidade do atendimento foi excepcional e o preço acessível.&rdquo;
                  </p>
                  <p className="font-semibold text-gray-900">- Maria Silva</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    &ldquo;Excelente programa! Consegui fazer minha consulta oftalmológica com preço 
                    justo. A equipe é muito atenciosa e profissional.&rdquo;
                  </p>
                  <p className="font-semibold text-gray-900">- João Santos</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-950 to-primary-900 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Faça Parte do PSVL
              </h3>
              <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e agende sua consulta oftalmológica com desconto especial. 
                O PSVL oferece apenas desconto na consulta, exames e procedimentos têm valores normais.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center space-x-3 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Entrar em Contato</span>
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
