import type { Metadata } from "next";
import {
  EquipeHero,
  EquipeSection,
  EspecialidadesSection,
  DoctorsCatalog,
  CTA,
} from "@/components/equipe";

export const metadata: Metadata = {
  title: "Equipe Médica - Visual Laser",
  description:
    "Conheça nossa equipe médica especializada em oftalmologia. Profissionais experientes e capacitados para oferecer o melhor tratamento para sua saúde visual.",
  keywords: [
    "equipe médica",
    "oftalmologistas",
    "médicos especialistas",
    "oftalmologia",
    "Visual Laser",
    "Belém",
    "Pará",
  ],
  openGraph: {
    title: "Equipe Médica - Visual Laser",
    description: "Conheça nossa equipe médica especializada em oftalmologia.",
    url: "https://visuallaser.med.br/equipe",
  },
};

export default function EquipePage() {
  return (
    <main className="min-h-screen">
      <EquipeHero />
      <EquipeSection />
      <EspecialidadesSection />
      <DoctorsCatalog />
      <CTA />
    </main>
  );
}
