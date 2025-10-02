import type { Metadata } from "next";
import { Users, Eye, CheckCircle, Clock, Star, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tratamento de Catarata | Visual Laser Belém | Cirurgia de Catarata",
  description: "Tratamento moderno de catarata em Belém: facoemulsificação, lentes intraoculares premium, cirurgia sem pontos. Recuperação rápida na Visual Laser.",
  keywords: [
    "catarata",
    "cirurgia de catarata",
    "facoemulsificação",
    "lentes intraoculares",
    "tratamento de catarata",
    "oftalmologia belém",
    "Visual Laser",
    "lentes multifocais",
    "lentes tóricas"
  ],
  openGraph: {
    title: "Tratamento de Catarata | Visual Laser Belém",
    description: "Tratamento moderno de catarata com facoemulsificação e lentes intraoculares premium para recuperação rápida.",
    url: "https://visuallaser.med.br/servicos/tratamento-catarata",
    type: "website",
  },
  alternates: {
    canonical: "https://visuallaser.med.br/servicos/tratamento-catarata",
  },
};

const lentes = [
  {
    title: "Lentes Monofocais",
    description: "Correção para uma distância específica, geralmente para longe, com óculos para perto.",
    vantagens: ["Custo acessível", "Alta qualidade visual", "Segurança comprovada"],
    indicacao: "Catarata simples",
    icon: Eye,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Lentes Multifocais",
    description: "Permitem enxergar bem tanto de longe quanto de perto, reduzindo dependência de óculos.",
    vantagens: ["Visão para longe e perto", "Menor dependência de óculos", "Conforto visual"],
    indicacao: "Catarata + presbiopia",
    icon: Star,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Lentes Tóricas",
    description: "Corrigem o astigmatismo além da catarata, proporcionando visão mais nítida.",
    vantagens: ["Correção de astigmatismo", "Visão mais nítida", "Menos aberrações"],
    indicacao: "Catarata + astigmatismo",
    icon: Shield,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Lentes Premium",
    description: "Combinação de múltiplas tecnologias para máxima qualidade visual e independência de óculos.",
    vantagens: ["Máxima qualidade visual", "Independência total de óculos", "Tecnologia avançada"],
    indicacao: "Catarata + múltiplos problemas",
    icon: Users,
    color: "from-orange-500 to-orange-600"
  }
];

const beneficios = [
  {
    icon: CheckCircle,
    title: "Cirurgia Segura",
    description: "Facoemulsificação é uma das cirurgias mais seguras da medicina",
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
    title: "Sem Pontos",
    description: "Técnica moderna que não requer pontos cirúrgicos",
    color: "text-purple-600"
  },
  {
    icon: Star,
    title: "Qualidade Visual",
    description: "Melhoria significativa na qualidade da visão",
    color: "text-orange-600"
  }
];

const processo = [
  {
    step: "1",
    title: "Diagnóstico",
    description: "Exame completo para avaliar o grau da catarata e escolher a lente ideal"
  },
  {
    step: "2",
    title: "Preparação",
    description: "Orientações pré-operatórias e preparação para a cirurgia"
  },
  {
    step: "3",
    title: "Cirurgia",
    description: "Facoemulsificação com lente intraocular - procedimento rápido e seguro"
  },
  {
    step: "4",
    title: "Recuperação",
    description: "Acompanhamento pós-operatório e retorno às atividades normais"
  }
];

export default function TratamentoCatarataPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-accent-400/30">
              <Users className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-medium text-accent-300">
                Tratamento Moderno
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-gradient bg-gradient-to-r from-white to-accent-300 bg-clip-text text-transparent">
                Tratamento de
              </span>
              <br />
              <span className="text-accent-400">Catarata</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-200 leading-relaxed max-w-3xl mx-auto">
              Cirurgia moderna de catarata com facoemulsificação e lentes intraoculares premium 
              para recuperação rápida e qualidade visual excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Lentes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tipos de <span className="text-gradient">Lentes Intraoculares</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos diferentes tipos de lentes intraoculares para atender às necessidades 
                específicas de cada paciente e garantir os melhores resultados.
              </p>
            </div>

            {/* Lentes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {lentes.map((lente, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className="p-8">
                    
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${lente.color} mb-6`}>
                      <lente.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {lente.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {lente.description}
                    </p>
                    
                    {/* Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Vantagens:</h4>
                        <ul className="space-y-2">
                          {lente.vantagens.map((vantagem, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-gray-600">{vantagem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Indicação:</h4>
                        <p className="text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                          {lente.indicacao}
                        </p>
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
                  Benefícios do Tratamento
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            </div>

            {/* Process Section */}
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Como Funciona o Processo
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processo.map((step, index) => (
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

            {/* FAQ Section */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Perguntas Frequentes
                </h3>
              </div>
              
              <div className="space-y-8 max-w-4xl mx-auto">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    A cirurgia de catarata é segura?
                  </h4>
                  <p className="text-gray-600">
                    Sim, a facoemulsificação é uma das cirurgias mais seguras da medicina moderna, 
                    com altíssima taxa de sucesso e baixo risco de complicações.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Quanto tempo demora a recuperação?
                  </h4>
                  <p className="text-gray-600">
                    A recuperação é rápida. A maioria dos pacientes retorna às atividades normais 
                    em 2-3 dias, com melhoria gradual da visão nas primeiras semanas.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Preciso usar óculos após a cirurgia?
                  </h4>
                  <p className="text-gray-600">
                    Depende do tipo de lente escolhida. Lentes multifocais podem reduzir significativamente 
                    a dependência de óculos, enquanto monofocais podem exigir óculos para perto.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-950 to-primary-900 rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Recupere Sua Visão
              </h3>
              <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
                Não deixe a catarata limitar sua qualidade de vida. Agende uma consulta 
                e descubra como podemos ajudá-lo a recuperar uma visão clara e nítida.
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
