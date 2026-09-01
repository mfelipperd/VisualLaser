import type { Metadata } from "next";
import {
  ContactHero,
  ContactInfo,
  ContactForm,
  LocationMap,
} from "@/components/contato";

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
    </main>
  );
}
