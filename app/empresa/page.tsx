import type { Metadata } from "next";
import CompanyHero from "@/components/empresa/CompanyHero";
import CompanyVideo from "@/components/empresa/CompanyVideo";
import CompanyHistory from "@/components/empresa/CompanyHistory";
import Technology from "@/components/empresa/Technology";
import MedicalTeam from "@/components/empresa/MedicalTeam";
import CompanyValues from "@/components/empresa/CompanyValues";
import ContactCTA from "@/components/empresa/ContactCTA";
import BreadcrumbSchema from "@/components/json-ld/BreadcrumbSchema";
import FAQSchema from "@/components/json-ld/FAQSchema";
import FAQAccordionList from "@/components/faq/FAQAccordionList";
import { faqs } from "@/data/faq";

const empresaFaqs = faqs.filter((faq) =>
  [
    "Qual a melhor clínica oftalmológica em Belém?",
    "A Visual Laser utiliza tecnologia Zeiss ou Alcon em suas cirurgias?",
    "A Visual Laser atende por convênio ou só particular?",
  ].includes(faq.question)
);

export const metadata: Metadata = {
  title: "Sobre a Visual Laser | Clínica Oftalmológica há 25+ Anos em Belém",
  description:
    "👁️ Conheça a Visual Laser: história, equipe médica especializada e tecnologia de ponta em oftalmologia. ✅ Referência em Belém-PA há mais de 25 anos. Saiba mais!",
  keywords: [
    "sobre a visual laser",
    "história visual laser",
    "equipe médica visual laser",
    "clínica oftalmológica belém",
    "tecnologia oftalmologia belém",
    "quem somos visual laser",
    "Visual Laser",
  ],
  openGraph: {
    title: "Sobre a Visual Laser | Clínica Oftalmológica em Belém",
    description:
      "👁️ História, equipe médica e tecnologia de ponta em oftalmologia. Referência em Belém-PA há mais de 25 anos.",
    url: "https://visuallaser.med.br/empresa",
    type: "website",
  },
  alternates: {
    canonical: "https://visuallaser.med.br/empresa",
  },
};

export default function EmpresaPage() {
  return (
    <main className="min-h-screen">
      <CompanyHero />
      <CompanyVideo />
      <CompanyHistory />
      <Technology />
      <MedicalTeam />
      <CompanyValues />
      <ContactCTA />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto container-padding max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Perguntas Frequentes
          </h2>
          <FAQAccordionList items={empresaFaqs} />
        </div>
      </section>
      <FAQSchema questions={empresaFaqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Empresa", item: "/empresa" },
        ]}
      />
    </main>
  );
}
