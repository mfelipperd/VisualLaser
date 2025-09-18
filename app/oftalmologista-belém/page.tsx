import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Oftalmologista em Belém | Médico dos Olhos | Consulta | Visual Laser",
  description: "👁️ Oftalmologista em Belém! Médico especialista em olhos, consultas, exames e cirurgias. ✅ Melhor oftalmologista de Belém-PA. 📍 Nazaré, Belém. Agende sua consulta!",
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
    title: "👁️ Oftalmologista em Belém | Médico dos Olhos | Consulta | Visual Laser",
    description: "👁️ Oftalmologista em Belém! Médico especialista em olhos, consultas, exames e cirurgias. ✅ Melhor oftalmologista de Belém-PA. 📍 Nazaré, Belém. Agende sua consulta!",
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
    title: "👁️ Oftalmologista em Belém | Médico dos Olhos | Consulta | Visual Laser",
    description: "👁️ Oftalmologista em Belém! Médico especialista em olhos, consultas, exames e cirurgias.",
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
      <Services />
      <Testimonials />
    </main>
  );
}
