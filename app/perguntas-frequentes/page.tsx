import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { faqs } from "@/data/faq";
import FAQSchema from "@/components/json-ld/FAQSchema";
import BreadcrumbSchema from "@/components/json-ld/BreadcrumbSchema";
import FAQAccordionList from "@/components/faq/FAQAccordionList";

export const metadata: Metadata = {
  title: "Perguntas Frequentes - Visual Laser",
  description:
    "Tire suas dúvidas sobre consultas, convênios, cirurgias e exames oftalmológicos na Visual Laser, clínica de referência em Belém.",
  keywords: [
    "perguntas frequentes",
    "dúvidas",
    "oftalmologista",
    "convênios",
    "cirurgia refrativa",
    "Visual Laser",
    "Belém",
    "Pará",
  ],
  openGraph: {
    title: "Perguntas Frequentes - Visual Laser",
    description:
      "Tire suas dúvidas sobre consultas, convênios, cirurgias e exames oftalmológicos na Visual Laser.",
    url: "https://visuallaser.med.br/perguntas-frequentes",
  },
  alternates: {
    canonical: "https://visuallaser.med.br/perguntas-frequentes",
  },
};

export default function PerguntasFrequentesPage() {
  return (
    <main className="min-h-screen">
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Perguntas Frequentes", item: "/perguntas-frequentes" },
        ]}
      />

      <section className="pt-28 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2 mb-4">
                <HelpCircle className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">
                  Dúvidas Frequentes
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Perguntas Frequentes
              </h1>
              <p className="text-xl text-gray-600">
                Tudo o que você precisa saber sobre atendimentos, convênios, cirurgias e exames na Visual Laser.
              </p>
            </div>

            <FAQAccordionList items={faqs} />

            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-4">Ainda tem dúvidas?</p>
              <a
                href="https://wa.me/5591988968201"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors"
              >
                Fale com nossa equipe pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
