import type { Metadata } from "next";
import {
  ContactHero,
  ContactInfo,
  ContactForm,
  LocationMap,
} from "@/components/contato";
import BreadcrumbSchema from "@/components/json-ld/BreadcrumbSchema";
import FAQSchema from "@/components/json-ld/FAQSchema";
import FAQAccordionList from "@/components/faq/FAQAccordionList";
import { faqs } from "@/data/faq";

const contatoFaqs = faqs.filter((faq) =>
  [
    "Como agendar uma consulta pela internet?",
    "A Visual Laser atende por convênio ou só particular?",
    "Existe um oftalmologista perto de mim em Belém?",
    "Quanto custa uma consulta particular na Visual Laser?",
  ].includes(faq.question)
);

export const metadata: Metadata = {
  title: "Contato e Endereço | Agende sua Consulta | Visual Laser Belém",
  description:
    "📍 Visual Laser em Nazaré, Belém-PA. ☎️ (91) 3225-4422. Agende sua consulta por telefone, WhatsApp ou formulário. Atendimento rápido e equipe pronta para te ajudar.",
  keywords: [
    "contato visual laser",
    "telefone visual laser",
    "endereço visual laser belém",
    "agendar consulta oftalmologista belém",
    "clínica oftalmológica nazaré belém",
    "Visual Laser",
    "Belém",
    "Pará",
  ],
  openGraph: {
    title: "Contato e Endereço | Visual Laser Belém",
    description:
      "📍 Nazaré, Belém-PA. ☎️ (91) 3225-4422. Agende sua consulta por telefone, WhatsApp ou formulário online.",
    url: "https://visuallaser.med.br/contato",
  },
  alternates: {
    canonical: "https://visuallaser.med.br/contato",
  },
};

export default function ContatoPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <LocationMap />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto container-padding max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Perguntas Frequentes
          </h2>
          <FAQAccordionList items={contatoFaqs} />
        </div>
      </section>
      <FAQSchema questions={contatoFaqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Contato", item: "/contato" },
        ]}
      />
    </main>
  );
}
