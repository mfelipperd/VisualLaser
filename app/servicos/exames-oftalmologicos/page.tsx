import type { Metadata } from "next";
import { Eye, CheckCircle, Clock, Shield, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exames Oftalmológicos | Visual Laser Belém | Exames de Vista Completos",
  description: "Exames oftalmológicos completos em Belém: acuidade visual, refração, tonometria, fundoscopia e muito mais. Tecnologia de ponta e resultados precisos na Visual Laser.",
  keywords: [
    "exames oftalmológicos",
    "exame de vista",
    "refração",
    "tonometria",
    "fundoscopia",
    "acuidade visual",
    "oftalmologia belém",
    "exames de olho",
    "Visual Laser"
  ],
  openGraph: {
    title: "Exames Oftalmológicos | Visual Laser Belém",
    description: "Exames oftalmológicos completos com tecnologia de ponta: acuidade visual, refração, tonometria, fundoscopia e muito mais.",
    url: "https://visuallaser.med.br/servicos/exames-oftalmologicos",
    type: "website",
  },
  alternates: {
    canonical: "https://visuallaser.med.br/servicos/exames-oftalmologicos",
  },
};

const exames = [
  {
    title: "Exame de Acuidade Visual",
    description: "Avaliação da capacidade de enxergar detalhes finos a diferentes distâncias.",
    duracao: "10-15 minutos",
    preparacao: "Nenhuma preparação especial necessária",
    icon: Eye,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Refração",
    description: "Determinação do grau necessário para correção de miopia, hipermetropia e astigmatismo.",
    duracao: "15-20 minutos",
    preparacao: "Evitar uso de lentes de contato por 24h",
    icon: Shield,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Tonometria",
    description: "Medição da pressão intraocular para detecção de glaucoma.",
    duracao: "5-10 minutos",
    preparacao: "Nenhuma preparação especial",
    icon: Clock,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Fundoscopia",
    description: "Exame detalhado do fundo do olho, retina, vasos e nervo óptico.",
    duracao: "10-15 minutos",
    preparacao: "Pode ser necessário dilatar a pupila",
    icon: Star,
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Biomicroscopia",
    description: "Exame das estruturas oculares anteriores com lâmpada de fenda.",
    duracao: "10-15 minutos",
    preparacao: "Nenhuma preparação especial",
    icon: CheckCircle,
    color: "from-red-500 to-red-600"
  },
  {
    title: "Campimetria",
    description: "Avaliação do campo visual para detecção de alterações periféricas.",
    duracao: "20-30 minutos",
    preparacao: "Nenhuma preparação especial",
    icon: Eye,
    color: "from-indigo-500 to-indigo-600"
  }
];

export default function ExamesOftalmologicosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-accent-400/30">
              <Eye className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-medium text-accent-300">
                Exames Completos
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-gradient bg-gradient-to-r from-white to-accent-300 bg-clip-text text-transparent">
                Exames
              </span>
              <br />
              <span className="text-accent-400">Oftalmológicos</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-200 leading-relaxed max-w-3xl mx-auto">
              Oferecemos uma gama completa de exames oftalmológicos com tecnologia de última geração 
              para diagnóstico preciso e tratamento eficaz.
            </p>
          </div>
        </div>
      </section>

      {/* Exames Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossos <span className="text-gradient">Exames</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada exame é realizado com precisão e cuidado, utilizando equipamentos modernos 
                e técnicas atualizadas para garantir resultados confiáveis.
              </p>
            </div>

            {/* Exames Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {exames.map((exame, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="p-8">
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${exame.color} mb-6`}>
                      <exame.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {exame.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {exame.description}
                    </p>
                    
                    {/* Details */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          <strong>Duração:</strong> {exame.duracao}
                        </span>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-gray-400 mt-0.5" />
                        <span className="text-sm text-gray-600">
                          <strong>Preparação:</strong> {exame.preparacao}
                        </span>
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
                  Por que Escolher Nossos Exames?
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Tecnologia Avançada</h4>
                  <p className="text-gray-600">Equipamentos de última geração para resultados precisos</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Resultados Rápidos</h4>
                  <p className="text-gray-600">Resultados disponíveis imediatamente após o exame</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Equipe Especializada</h4>
                  <p className="text-gray-600">Profissionais experientes e altamente qualificados</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Atendimento Humanizado</h4>
                  <p className="text-gray-600">Cuidado personalizado e acolhedor</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-950 to-primary-900 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Agende Seus Exames
              </h3>
              <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco e agende seus exames oftalmológicos. 
                Nossa equipe está pronta para cuidar da sua saúde visual.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center space-x-3 bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Agendar Exames</span>
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
