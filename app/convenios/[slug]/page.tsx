import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, CheckCircle, Phone, ArrowLeft, Calendar, Info } from 'lucide-react';
import { convenios } from '@/data/convenios';
import BreadcrumbSchema from '@/components/json-ld/BreadcrumbSchema';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const convenio = convenios.find((c) => c.slug === params.slug);

  if (!convenio) return { title: 'Página Não Encontrada' };

  return {
    title: `Oftalmologista que aceita ${convenio.name} em Belém | Visual Laser`,
    description: `Agende sua consulta oftalmológica, exames e cirurgias pelo convênio ${convenio.name} na Visual Laser em Belém. Atendimento especializado e tecnologia de ponta.`,
    keywords: [
      `oftalmologista ${convenio.name} belém`,
      `clínica de olhos ${convenio.name} belém`,
      `médico oculista ${convenio.name} belém`,
      `atendimento ${convenio.name} visual laser`,
      `consulta oftalmológica ${convenio.name}`,
    ],
    openGraph: {
      title: `Oftalmologista que aceita ${convenio.name} em Belém | Visual Laser`,
      description: `Sua visão merece o melhor. Atendimento completo pelo convênio ${convenio.name} na Visual Laser Belém.`,
      url: `https://visuallaser.med.br/convenios/${convenio.slug}`,
    },
    alternates: {
      canonical: `https://visuallaser.med.br/convenios/${convenio.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return convenios.map((c) => ({
    slug: c.slug,
  }));
}

export default function ConvenioDetailPage({ params }: Props) {
  const convenio = convenios.find((c) => c.slug === params.slug);

  if (!convenio) notFound();

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-950 to-primary-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/convenios"
            className="inline-flex items-center text-accent-300 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar para todos os convênios
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Oftalmologista <span className="text-accent-400">{convenio.name}</span> em Belém
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-2xl leading-relaxed">
              Realize consultas, exames e cirurgias com a excelência da Visual Laser através do seu plano de saúde.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-50">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex items-center space-x-6">
                  {convenio.logo ? (
                    <div className="w-32 h-16 relative bg-gray-50 rounded-xl p-4 flex items-center justify-center border border-gray-100">
                      <Image 
                        src={convenio.logo}
                        alt={`Logo ${convenio.name}`}
                        width={128}
                        height={64}
                        className="object-contain max-h-12 w-auto"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center">
                      <Shield className="w-10 h-10 text-primary-600" />
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Atendimento {convenio.name}</h2>
                    <p className="text-green-600 font-semibold flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1" /> Convênio Ativo
                    </p>
                  </div>
                </div>
                
                <Link 
                  href="https://wa.me/5591988968201"
                  target="_blank"
                  className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-accent-500/30 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Agendar com {convenio.name}</span>
                </Link>
              </div>

              <div className="prose prose-lg max-w-none text-gray-600">
                <h3 className="text-gray-900">Por que escolher a Visual Laser para seu atendimento?</h3>
                <p>
                  A Visual Laser é referência em oftalmologia em Belém, oferecendo uma estrutura hospitalar completa para quem utiliza o convênio <strong>{convenio.name}</strong>. Nossa clínica reúne em um único local tudo o que você precisa para cuidar da sua saúde ocular:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    "Consultas especializadas com médicos experientes",
                    "Mais de 37 tipos de exames diagnósticos",
                    "Bloco cirúrgico de alta tecnologia",
                    "Atendimento humanizado e personalizado",
                    "Localização central no bairro de Nazaré",
                    "Agilidade na autorização de procedimentos"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent-500 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {convenio.exception && (
                <div className="mt-10 p-4 bg-orange-50 border border-orange-100 rounded-xl flex items-start space-x-3">
                  <Info className="w-5 h-5 text-orange-500 mt-0.5" />
                  <p className="text-sm text-orange-700">
                    <strong>Nota importante sobre o convênio {convenio.name}:</strong> {convenio.exception}. 
                    Para estes profissionais, o atendimento poderá ser realizado via particular com condições especiais.
                  </p>
                </div>
              )}
            </div>

            {/* Atomic Content Section for SEO */}
            <div className="bg-primary-900 rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Perguntas Frequentes sobre {convenio.name}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-accent-300">A Visual Laser realiza cirurgias pelo convênio {convenio.name}?</h4>
                  <p className="text-primary-100 italic">Sim, realizamos diversos procedimentos cirúrgicos via {convenio.name}, como cirurgia de catarata e tratamentos de retina, sujeitos à autorização prévia de acordo com seu plano específico.</p>
                </div>
                <div>
                  <h4 className="font-bold text-accent-300">Quais exames posso fazer com meu plano {convenio.name}?</h4>
                  <p className="text-primary-100 italic">Você pode realizar exames preventivos de rotina e exames de alta complexidade (como OCT, Mapeamento de Retina e Campo Visual) utilizando seu convênio diretamente em nossa clínica.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Agendar agora</h3>
              <p className="text-gray-600 mb-8">
                Fale com nossa equipe pelo WhatsApp para verificar sua cobertura específica e agendar seu horário.
              </p>
              <div className="space-y-4">
                <Link 
                  href="https://wa.me/5591988968201"
                  target="_blank"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl text-center transition-all flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Verificar {convenio.name}</span>
                </Link>
                <div className="text-center">
                  <span className="text-sm text-gray-400">Ou ligue no:</span>
                  <p className="font-bold text-gray-800">(91) 3225-4422</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <BreadcrumbSchema 
        items={[
          { name: "Home", item: "/" },
          { name: "Convênios", item: "/convenios" },
          { name: convenio.name, item: `/convenios/${convenio.slug}` },
        ]}
      />
    </main>
  );
}
