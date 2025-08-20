import type { Metadata } from "next";
import {
  ExamesHero,
  ExamesSection,
  CirurgiasSection,
  CTA,
} from "@/components/exames-cirurgias";

export const metadata: Metadata = {
  title: "Exames e Cirurgias - Visual Laser",
  description:
    "Conheça nossa ampla gama de exames oftalmológicos e cirurgias com tecnologia de última geração. Desde exames básicos até procedimentos complexos.",
  keywords: [
    "exames oftalmológicos",
    "cirurgias oftalmológicas",
    "catarata",
    "cirurgia refrativa",
    "glaucoma",
    "retina",
    "Visual Laser",
    "Belém",
    "Pará",
  ],
  openGraph: {
    title: "Exames e Cirurgias - Visual Laser",
    description:
      "Conheça nossa ampla gama de exames oftalmológicos e cirurgias com tecnologia de última geração.",
    url: "https://visuallaser.med.br/exames-cirurgias",
  },
};

export default function ExamesCirurgiasPage() {
  return (
    <main className="min-h-screen">
      <ExamesHero />
      <ExamesSection />
      <CirurgiasSection />
      <CTA />
    </main>
  );
}
