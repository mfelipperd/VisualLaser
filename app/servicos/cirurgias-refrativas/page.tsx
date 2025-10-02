import type { Metadata } from "next";
import { Shield, Eye, CheckCircle, Clock, Star, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cirurgias Refrativas | Visual Laser Belém | LASIK, PRK, SMILE",
  description: "Cirurgias refrativas em Belém: LASIK, PRK, SMILE para correção de miopia, hipermetropia, astigmatismo e presbiopia. Tecnologia de ponta na Visual Laser.",
  keywords: [
    "cirurgia refrativa",
    "LASIK",
    "PRK",
    "SMILE",
    "cirurgia de miopia",
    "cirurgia de astigmatismo",
    "cirurgia de hipermetropia",
    "cirurgia de presbiopia",
    "laser nos olhos",
    "oftalmologia belém",
    "Visual Laser"
  ],
  openGraph: {
    title: "Cirurgias Refrativas | Visual Laser Belém",
    description: "Cirurgias refrativas com tecnologia de ponta: LASIK, PRK, SMILE para correção definitiva de problemas visuais.",
    url: "https://visuallaser.med.br/servicos/cirurgias-refrativas",
    type: "website",
  },
  alternates: {
    canonical: "https://visuallaser.med.br/servicos/cirurgias-refrativas",
  },
};

const cirurgias = [
  {
    title: "LASIK",
    description: "Técnica mais popular para correção de miopia, hipermetropia e astigmatismo com recuperação rápida.",
    indicacoes: ["Miopia", "Hipermetropia", "Astigmatismo"],
    duracao: "10-15 minutos por olho",
    recuperacao: "1-3 dias",
    icon: Shield,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "PRK",
    description: "Técnica segura indicada para córneas mais finas ou pacientes com contraindicações ao LASIK.",
    indicacoes: ["Córneas finas", "Profissionais de risco", "Contraindicação ao LASIK"],
    duracao: "10-15 minutos por olho",
    recuperacao: "3-7 dias",
    icon: Eye,
    color: "from-green-500 to-green-600"
  },
  {
    title: "SMILE",
    description: "Técnica mais moderna e menos invasiva, ideal para miopia e astigmatismo leve a moderado.",
    indicacoes: ["Miopia", "Astigmatismo leve a moderado"],
    duracao: "10-15 minutos por olho",
    recuperacao: "1-2 dias",
    icon: Zap,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Lentes Intraoculares",
    description: "Solução para presbiopia e casos extremos, com lentes que substituem o cristalino natural.",
    indicacoes: ["Presbiopia", "Miopia extrema", "Hipermetropia extrema"],
    duracao: "15-20 minutos por olho",
    recuperacao: "3-5 dias",
    icon: Star,
    color: "from-orange-500 to-orange-600"
  }
];

const beneficios = [
  {
    icon: CheckCircle,
    title: "Resultados Permanentes",
    description: "Correção definitiva dos problemas visuais",
    color: "text-green-600"
  },
  {
    icon: Clock,
    title: "Recuperação Rápida",
    description: "Retorno às atividades normais em poucos dias",
    color: "text-blue-600"
  },
  {
    icon: Shield,
    title: "Segurança Comprovada",
    description: "Técnicas modernas e seguras",
    color: "text-purple-600"
  },
  {
    icon: Star,
    title: "Qualidade de Vida",
    description: "Independência de óculos e lentes de contato",
    color: "text-orange-600"
  }
];

export default function CirurgiasRefrativasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-accent-400/30">
              <Shield className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-medium text-accent-300">
                Cirurgias Modernas
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-gradient bg-gradient-to-r from-white to-accent-300 bg-clip-text text-transparent">
                Cirurgias
              </span>
              <br />
              <span className="text-accent-400">Refrativas</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-200 leading-relaxed max-w-3xl mx-auto">
              Correção definitiva de miopia, hipermetropia, astigmatismo e presbiopia 
              com as técnicas mais modernas e seguras da oftalmologia.
            </p>
          </div>
        </div>
      </section>

      {/* Cirurgias Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Técnicas <span className="text-gradient">Disponíveis</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos as principais técnicas de cirurgia refrativa, cada uma com suas 
                indicações específicas para garantir os melhores resultados.
              </p>
            </div>

            {/* Cirurgias Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {cirurgias.map((cirurgia, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="p-8">
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${cirurgia.color} mb-6`}>
                      <cirurgia.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {cirurgia.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {cirurgia.description}
                    </p>
                    
                    {/* Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Indicações:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cirurgia.indicacoes.map((indicacao, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {indicacao}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Clock className="w-5 h-5 text-gray-400 mb-1" />
                          <p className="text-sm text-gray-600">
                            <strong>Duração:</strong> {cirurgia.duracao}
                          </p>
                        </div>
                        <div>
                          <CheckCircle className="w-5 h-5 text-gray-400 mb-1" />
                          <p className="text-sm text-gray-600">
                            <strong>Recuperação:</strong> {cirurgia.recuperacao}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Benefícios das Cirurgias Refrativas
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <beneficio.icon className={`w-8 h-8 ${beneficio.color}`} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{beneficio.title}</h4>
                    <p className="text-gray-600">{beneficio.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Como Funciona o Processo
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Consulta e Avaliação</h4>
                  <p className="text-gray-600">Exame completo para determinar a melhor técnica para seu caso</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Cirurgia</h4>
                  <p className="text-gray-600">Procedimento rápido e seguro com anestesia local</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Recuperação</h4>
                  <p className="text-gray-600">Acompanhamento pós-operatório e retorno às atividades</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-950 to-primary-900 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Livre-se dos Óculos
              </h3>
              <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
                Agende uma consulta para avaliação e descubra se você é candidato 
                a uma cirurgia refrativa. Transforme sua qualidade de vida!
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
