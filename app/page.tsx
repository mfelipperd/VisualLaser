import Hero from "@/components/Hero";
const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
import dynamic from "next/dynamic";

const PSVL = dynamic(() => import("@/components/PSVL"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const LocalSEOContent = dynamic(() => import("@/components/LocalSEOContent"));
const HiddenSEOContent = dynamic(() => import("@/components/HiddenSEOContent"));
const ConveniosHighlight = dynamic(() => import("@/components/ConveniosHighlight"));
const SiteNavigationSchema = dynamic(() => import("@/components/json-ld/SiteNavigationSchema"));
const WebSiteSchema = dynamic(() => import("@/components/json-ld/WebSiteSchema"));
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clínica Oftalmológica em Belém | Oftalmologista | Óculos | Exames | Visual Laser",
  description: "👁️ Clínica de Oftalmologia em Belém! Oftalmologistas especializados, consultas, exames, cirurgias e óculos. ✅ Melhor clínica oftalmológica de Belém-PA. 📍 Nazaré, Belém. Agende sua consulta!",
  keywords: [
    "clínica oftalmológica belém",
    "clínica de oftalmologia belém", 
    "oftalmologia belém",
    "oftalmologista belém",
    "oftalmologista em belém",
    "oftalmologista perto de mim",
    "óculos belém",
    "óculos em belém",
    "ótica belém",
    "exame de vista belém",
    "consulta oftalmológica belém",
    "cirurgia de olhos belém",
    "laser nos olhos belém",
    "catarata belém",
    "cirurgia refrativa belém",
    "médico dos olhos belém",
    "especialista em olhos belém",
    "clínica de olhos belém",
    "oftalmologia pará",
    "Visual Laser",
  ],
  openGraph: {
    title: "👁️ Visual Laser - Transforme Sua Visão com Excelência em Belém!",
    description: "🚀 Clínica oftalmológica de referência em Belém! Especialistas em cirurgias refrativas, catarata e tratamentos oculares com tecnologia de última geração. ✅ Resultados comprovados. 📍 Agende sua consulta hoje mesmo!",
    url: "https://visuallaser.med.br",
    type: "website",
    images: [
      {
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Visual Laser - Clínica Oftalmológica de Excelência em Belém, Pará",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "👁️ Visual Laser - Transforme Sua Visão com Excelência!",
    description: "🚀 Clínica oftalmológica de referência em Belém! Especialistas em cirurgias refrativas, catarata e tratamentos oculares.",
    images: ["/images/social-preview.jpg"],
  },
  alternates: {
    canonical: "https://visuallaser.med.br",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <ConveniosHighlight />
      <LocalSEOContent />
      <PSVL />
      <Testimonials />
      <FAQ />
      <HiddenSEOContent />
      <WebSiteSchema />
      <SiteNavigationSchema
        items={[
          { name: "Agendamento de Consulta", url: "/contato" },
          { name: "Corpo Clínico", url: "/equipe" },
          { name: "Convênios Aceitos", url: "/convenios" },
          { name: "Cirurgias Refrativas", url: "/servicos/cirurgias-refrativas" },
          { name: "Tratamento de Catarata", url: "/servicos/tratamento-catarata" },
          { name: "Exames Oftalmológicos", url: "/servicos/exames-oftalmologicos" },
        ]}
      />
    </main>
  );
}
