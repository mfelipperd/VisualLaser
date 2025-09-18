import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Óculos em Belém | Oftalmologista | Prescrição | Visual Laser",
  description: "👓 Óculos em Belém! Oftalmologista especializado em prescrição de óculos, exames de vista e consultas. ✅ Melhor clínica oftalmológica de Belém-PA. 📍 Nazaré, Belém. Agende sua consulta!",
  keywords: [
    "óculos belém",
    "óculos em belém",
    "ótica belém",
    "oftalmologista belém",
    "oftalmologista em belém",
    "exame de vista belém",
    "consulta oftalmológica belém",
    "prescrição de óculos belém",
    "lentes belém",
    "armação de óculos belém",
    "óculos de grau belém",
    "óculos de sol belém",
    "lentes de contato belém",
    "exame de refração belém",
    "médico dos olhos belém",
    "especialista em olhos belém",
    "clínica oftalmológica belém",
    "clínica de oftalmologia belém",
    "oftalmologia belém",
    "Visual Laser",
  ],
  openGraph: {
    title: "👓 Óculos em Belém | Oftalmologista | Prescrição | Visual Laser",
    description: "👓 Óculos em Belém! Oftalmologista especializado em prescrição de óculos, exames de vista e consultas. ✅ Melhor clínica oftalmológica de Belém-PA. 📍 Nazaré, Belém. Agende sua consulta!",
    url: "https://visuallaser.med.br/oculos-belém",
    type: "website",
    images: [
      {
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Óculos em Belém - Visual Laser Clínica Oftalmológica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "👓 Óculos em Belém | Oftalmologista | Prescrição | Visual Laser",
    description: "👓 Óculos em Belém! Oftalmologista especializado em prescrição de óculos, exames de vista e consultas.",
    images: ["/images/social-preview.jpg"],
  },
  alternates: {
    canonical: "https://visuallaser.med.br/oculos-belém",
  },
};

export default function OculosBelem() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
    </main>
  );
}
