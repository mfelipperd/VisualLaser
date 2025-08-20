import type { Metadata } from "next";
import {
  ContactHero,
  ContactInfo,
  ContactForm,
  LocationMap,
} from "@/components/contato";

export const metadata: Metadata = {
  title: "Contato - Visual Laser",
  description:
    "Entre em contato com a Visual Laser. Agende sua consulta, tire suas dúvidas ou visite nossa clínica em Belém, Pará.",
  keywords: [
    "contato",
    "agendamento",
    "consulta",
    "endereço",
    "telefone",
    "Visual Laser",
    "Belém",
    "Pará",
  ],
  openGraph: {
    title: "Contato - Visual Laser",
    description:
      "Entre em contato com a Visual Laser. Agende sua consulta ou visite nossa clínica.",
    url: "https://visuallaser.med.br/contato",
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
