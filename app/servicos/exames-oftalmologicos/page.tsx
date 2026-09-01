import type { Metadata } from "next";
import { Eye, CheckCircle, Clock, Shield, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import BreadcrumbSchema from "@/components/json-ld/BreadcrumbSchema";
import FAQSchema from "@/components/json-ld/FAQSchema";
import FAQAccordionList from "@/components/faq/FAQAccordionList";

const examesFaqs = [
  {
    question: "Preciso de preparo especial para os exames oftalmológicos?",
    answer:
      "Depende do exame. A maioria não exige preparo, mas alguns têm orientações específicas: mapeamento de retina exige dilatação pupilar, angiografia fluorescente exige jejum de 4 horas, e exames como refratometria, topografia de córnea, biometria e microscopia especular pedem para evitar lentes de contato por 24h a 7 dias antes.",
  },
  {
    question: "A clínica realiza exames de alta complexidade como Mapeamento de Retina?",
    answer:
      "Sim, realizamos uma gama completa de exames diagnósticos em Belém, incluindo Mapeamento de Retina, Campimetria Computadorizada, OCT e Ultrassom Ocular. Nossa infraestrutura permite um diagnóstico preciso para patologias de retina, glaucoma e córnea em um único local.",
  },
  {
    question: "Quais exames ajudam no diagnóstico de glaucoma?",
    answer:
      "Para investigação de glaucoma, realizamos Tonometria (medição da pressão intraocular), Campimetria Visual Computadorizada (avaliação do campo visual) e Gonioscopia (exame do ângulo da câmara anterior do olho).",
  },
  {
    question: "Quanto tempo leva para sair o resultado dos exames?",
    answer:
      "Os resultados ficam disponíveis imediatamente após o exame, sem necessidade de retorno em outro dia para retirá-los.",
  },
  {
    question: "A Visual Laser atende por convênio ou só particular?",
    answer:
      "Atende os dois. A clínica é credenciada a diversos convênios, como Unimed, Bradesco Saúde, Amil, SulAmérica e Cassi, entre outros, e também oferece atendimento particular.",
  },
];

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
    preparacao: "Nenhuma preparação especial necessária",
    icon: Eye,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Refratometria",
    description: "Determinação precisa do grau necessário para prescrição de óculos e lentes de contato.",
    preparacao: "Evitar uso de lentes de contato por 24h",
    icon: Shield,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Tonometria",
    description: "Medição da pressão intraocular através de aplanação ou rebote para detecção de glaucoma.",
    preparacao: "Nenhuma preparação especial",
    icon: Clock,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Mapeamento de Retina",
    description: "Exame detalhado do fundo do olho, retina, vasos sanguíneos e nervo óptico.",
    preparacao: "Dilatação pupilar necessária",
    icon: Star,
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Campimetria Visual Computadorizada",
    description: "Avaliação completa do campo visual para detecção de alterações periféricas e glaucoma.",
    preparacao: "Nenhuma preparação especial",
    icon: Eye,
    color: "from-indigo-500 to-indigo-600"
  },
  {
    title: "Topografia de Córnea",
    description: "Mapeamento detalhado da superfície corneana para diagnóstico de ceratocone e planejamento cirúrgico.",
    preparacao: "Não usar lentes de contato por 3-7 dias",
    icon: CheckCircle,
    color: "from-red-500 to-red-600"
  },
  {
    title: "OCT (Tomografia de Coerência Óptica)",
    description: "Imagens de alta resolução da retina, nervo óptico e córnea para diagnósticos precisos.",
    preparacao: "Nenhuma preparação especial",
    icon: Eye,
    color: "from-teal-500 to-teal-600"
  },
  {
    title: "Angiografia Fluorescente",
    description: "Exame com contraste para avaliar circulação sanguínea da retina e coroide.",
    preparacao: "Jejum de 4 horas",
    icon: Star,
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "Paquimetria Ultrassônica",
    description: "Medição precisa da espessura da córnea, essencial para cirurgias refrativas.",
    preparacao: "Nenhuma preparação especial",
    icon: CheckCircle,
    color: "from-cyan-500 to-cyan-600"
  },
  {
    title: "Biometria Óptica",
    description: "Medição precisa das estruturas oculares para cálculo de lentes intraoculares.",
    preparacao: "Não usar lentes de contato por 24h",
    icon: Shield,
    color: "from-amber-500 to-amber-600"
  },
  {
    title: "Gonioscopia",
    description: "Exame do ângulo da câmara anterior para avaliação de glaucoma.",
    preparacao: "Nenhuma preparação especial",
    icon: Eye,
    color: "from-lime-500 to-lime-600"
  },
  {
    title: "Microscopia Especular de Córnea",
    description: "Análise das células endoteliais da córnea para avaliação de saúde corneana.",
    preparacao: "Não usar lentes de contato por 24h",
    icon: CheckCircle,
    color: "from-violet-500 to-violet-600"
  }
];

export default function ExamesOftalmologicosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">

      {/* Medical Test Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTest",
            "name": "Exames Oftalmológicos",
            "description": "Exames oftalmológicos completos para diagnóstico preciso: acuidade visual, refratometria, tonometria, mapeamento de retina, OCT, topografia de córnea e outros.",
            "medicalSpecialty": "Ophthalmology",
            "relevantSpecialty": {
              "@type": "MedicalSpecialty",
              "name": "Ophthalmology"
            },
            "provider": {
              "@id": "https://visuallaser.med.br/#clinic"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 pt-28 pb-20">
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

            {/* O que é */}
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O que são os <span className="text-gradient">Exames Oftalmológicos</span>?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Exames oftalmológicos são procedimentos diagnósticos que avaliam a saúde e o
                funcionamento dos olhos — da acuidade visual à estrutura da retina e do nervo
                óptico. Na Visual Laser, oferecemos uma gama completa de exames com equipamentos
                de última geração, permitindo diagnóstico preciso de miopia, astigmatismo,
                catarata, glaucoma e outras condições oculares em um único local.
              </p>
            </div>

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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Por que Escolher Nossos Exames e Procedimentos?
                </h2>
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

            {/* FAQ */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Perguntas Frequentes sobre Exames Oftalmológicos
                </h2>
              </div>
              <div className="max-w-3xl mx-auto">
                <FAQAccordionList items={examesFaqs} />
              </div>
            </div>
            <FAQSchema questions={examesFaqs} />

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary-950 to-primary-900 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Agende Seus Exames
              </h2>
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

      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Serviços", item: "/servicos" },
          { name: "Exames Oftalmológicos", item: "/servicos/exames-oftalmologicos" },
        ]}
      />
    </main>
  );
}
