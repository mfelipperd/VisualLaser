import { HelpCircle } from "lucide-react";
import Link from "next/link";
import { faqs } from "@/data/faq";
import FAQSchema from "./json-ld/FAQSchema";
import FAQAccordionList from "./faq/FAQAccordionList";

const HOME_FAQ_COUNT = 5;

const FAQ = () => {
  const homeFaqs = faqs.slice(0, HOME_FAQ_COUNT);

  return (
    <section className="py-20 bg-gray-50">
      <FAQSchema questions={homeFaqs} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-5 h-5 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700 uppercase tracking-wider">
                Dúvidas Frequentes
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tudo o que você precisa saber sobre nossos atendimentos, convênios e tecnologia em Belém.
            </p>
          </div>

          <FAQAccordionList items={homeFaqs} />

          {/* Bottom CTA */}
          <div className="mt-12 text-center space-y-3">
            <Link
              href="/perguntas-frequentes"
              className="inline-flex items-center text-primary-700 font-bold hover:text-primary-800 transition-colors"
            >
              Ver todas as perguntas frequentes
            </Link>
            <p className="text-gray-500">
              Ainda tem dúvidas?{" "}
              <a
                href="https://wa.me/5591988968201"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-bold hover:text-primary-700 transition-colors"
              >
                Fale com nossa equipe pelo WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
