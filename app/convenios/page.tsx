import type { Metadata } from "next";
import { Shield, Building2, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Convênios Atendidos | Visual Laser Oftalmologia Belém",
  description: "Confira a lista de convênios médicos atendidos pela Visual Laser. Unimed, IPEP, CASF, PGE, TRT e outros. Agende sua consulta oftalmológica em Belém!",
  keywords: [
    "convênios oftalmologista belém",
    "oftalmologista unimed belém",
    "oftalmologista ipep belém",
    "cobertura convênio visual laser",
    "visual laser convênios",
    "oftalmologista aceita convênio",
    "consulta oftalmologista convênio"
  ],
  openGraph: {
    title: "Convênios Atendidos | Visual Laser Oftalmologia",
    description: "Aceitamos diversos convênios para sua comodidade. Confira nossa lista atualizada de planos de saúde atendidos.",
    url: "https://visuallaser.med.br/convenios",
    type: "website",
  },
  alternates: {
    canonical: "https://visuallaser.med.br/convenios",
  },
};

import Image from "next/image";

const convenios = [
  { name: "Amazônia Saúde", logo: "/images/convenios/amazonia_saude.png" },
  { name: "Amil", logo: "/images/convenios/amil.svg" },
  { name: "Aspara", logo: "/images/convenios/aspara.png" },
  { name: "Assefaz", logo: "/images/convenios/assefaz.svg" },
  { name: "Bacen", logo: "/images/convenios/bacen.png" },
  { name: "Bradesco Saúde", logo: "/images/convenios/bradesco.png" },
  { name: "Casembrapa", logo: "/images/convenios/casembrapa.png" },
  { name: "CASF", logo: null },
  { name: "CASSI", logo: "/images/convenios/cassi.webp" },
  { name: "CEF (Saúde Caixa)", logo: null },
  { name: "Conab", logo: null },
  { name: "Correios", logo: "/images/convenios/correios.png" },
  { name: "Eletronorte", logo: "/images/convenios/eletronorte_new.png" },
  { name: "Embratel", logo: null },
  { name: "Fusex", logo: null },
  { name: "Garantia de Saúde", logo: null },
  { name: "Infraero", logo: null },
  { name: "Lider Saúde", logo: null },
  { name: "Mediservice", logo: null },
  { name: "Petrobras", logo: "/images/convenios/petrobras.svg" },
  { name: "Proasa Saúde", logo: null },
  { name: "Procuradoria (Plan-Assiste)", logo: null },
  { name: "Pró-Social (TRF)", logo: null },
  { name: "SulAmérica", logo: null },
  { name: "TRE", logo: null },
  { name: "TRT", logo: null },
  { name: "Unafisco", logo: null },
  { name: "Unimed", logo: "/images/convenios/unimed.svg" },
  { name: "Vale (PASA)", logo: null }
];

const unimedException = "Exceto Dra. Rosamélia Lima, Dra. Tais Rocha e Dr. Joacy David";

export default function ConveniosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-950 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
            <Shield className="w-5 h-5 text-accent-400" />
            <span className="text-sm font-medium text-accent-300">
              Planos e Coberturas
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Convênios <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-200">Atendidos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trabalhamos com os principais planos de saúde para oferecer o melhor atendimento oftalmológico para você e sua família.
          </p>
        </div>
      </section>

      {/* Convenios List Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Lista de Convênios
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Confira abaixo a relação de convênios que atendemos atualmente. 
                  Para informações específicas sobre cobertura de procedimentos, entre em contato.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {convenios.map((convenio, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center justify-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-accent-200 transition-all duration-300 group h-40"
                  >
                    {convenio.logo ? (
                      <div className="w-24 h-12 relative mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                        <Image 
                          src={convenio.logo}
                          alt={`Logo ${convenio.name}`}
                          width={96}
                          height={48}
                          className="object-contain max-h-12 w-auto"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-accent-50 transition-colors">
                        <Shield className="w-8 h-8 text-gray-400 group-hover:text-accent-500 transition-colors" />
                      </div>
                    )}
                    <span className="font-bold text-gray-800 text-center group-hover:text-accent-700 transition-colors">
                      {convenio.name}
                    </span>
                    {convenio.name === "Unimed" && (
                      <p className="text-xs text-gray-500 text-center mt-2 px-2 leading-tight">
                        *{unimedException}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-16 bg-gradient-to-r from-gray-900 to-primary-900 rounded-2xl p-8 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Não encontrou seu convênio?</h3>
                  <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Entre em contato conosco para verificar a cobertura ou conhecer nossas condições especiais para atendimento particular e reembolso.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="https://wa.me/5591988968201" 
                      target="_blank"
                      className="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Verificar Cobertura</span>
                    </Link>
                    <Link
                      href="/psvl"
                      className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-xl transition-all border border-white/30"
                    >
                      <Building2 className="w-5 h-5" />
                      <span>Conhecer PSVL</span>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
