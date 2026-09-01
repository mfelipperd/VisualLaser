import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import MedicalAuthorSignature from "@/components/MedicalAuthorSignature";
import BreadcrumbSchema from "@/components/json-ld/BreadcrumbSchema";
import FAQSchema from "@/components/json-ld/FAQSchema";
import FAQAccordionList from "@/components/faq/FAQAccordionList";
import { faqs } from "@/data/faq";

const oftalmologistaBelemFaqs = faqs.filter((faq) =>
  [
    "Qual a melhor clínica oftalmológica em Belém?",
    "Existe um oftalmologista perto de mim em Belém?",
    "A Visual Laser atende por convênio ou só particular?",
    "Como agendar uma consulta pela internet?",
  ].includes(faq.question)
);

export const metadata: Metadata = {
  title: "Oftalmologista em Belém | Visual Laser",
  description: "👁️ Oftalmologista em Belém há mais de 25 anos. Consultas, exames e cirurgias com equipe especializada. ✅ Convênios aceitos. 📍 Nazaré, Belém. Agende sua consulta!",
  keywords: [
    "oftalmologista belém",
    "oftalmologista em belém",
    "oftalmologista perto de mim",
    "médico dos olhos belém",
    "especialista em olhos belém",
    "doutor dos olhos belém",
    "clínica oftalmológica belém",
    "clínica de oftalmologia belém",
    "oftalmologia belém",
    "consulta oftalmológica belém",
    "exame de vista belém",
    "cirurgia de olhos belém",
    "laser nos olhos belém",
    "catarata belém",
    "cirurgia refrativa belém",
    "óculos belém",
    "óculos em belém",
    "exame de refração belém",
    "oftalmologia pará",
    "Visual Laser",
  ],
  openGraph: {
    title: "👁️ Oftalmologista em Belém | Visual Laser",
    description: "👁️ Oftalmologista em Belém há mais de 25 anos. Consultas, exames e cirurgias com equipe especializada. ✅ Convênios aceitos. 📍 Nazaré, Belém.",
    url: "https://visuallaser.med.br/oftalmologista-belém",
    type: "website",
    images: [
      {
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Oftalmologista em Belém - Visual Laser Clínica Oftalmológica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "👁️ Oftalmologista em Belém | Visual Laser",
    description: "👁️ Oftalmologista em Belém há mais de 25 anos. Consultas, exames e cirurgias com equipe especializada.",
    images: ["/images/social-preview.jpg"],
  },
  alternates: {
    canonical: "https://visuallaser.med.br/oftalmologista-belém",
  },
};

export default function OftalmologistaBelem() {
  return (
    <main className="min-h-screen">
      <Hero />

      <section className="py-20 bg-white">
        <div className="container mx-auto container-padding max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Oftalmologista em Belém na Visual Laser
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            A Visual Laser é a clínica oftalmológica de referência em Belém, Pará, com mais de 25
            anos de história e mais de 50.000 pacientes atendidos. Diferente de clínicas de
            nicho, somos um centro hospitalar completo, com todas as subespecialidades da visão —
            catarata, córnea, glaucoma, retina, plástica ocular e oftalmopediatria — em um único
            local na Tv. 14 de Março, 1622, no bairro de Nazaré.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Convênios e Atendimento Particular
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Atendemos os dois formatos: a clínica é credenciada a diversos convênios, como
            Unimed, Bradesco Saúde, Amil, SulAmérica e Cassi, entre outros, e também oferece
            atendimento particular.
          </p>
        </div>
      </section>

      <Services />
      <div className="container mx-auto container-padding">
        <MedicalAuthorSignature />
      </div>
      <Testimonials />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto container-padding max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Perguntas Frequentes
          </h2>
          <FAQAccordionList items={oftalmologistaBelemFaqs} />
        </div>
      </section>
      <FAQSchema questions={oftalmologistaBelemFaqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Oftalmologista em Belém", item: "/oftalmologista-belém" },
        ]}
      />
    </main>
  );
}
