import type { Metadata } from "next";
import {
  ExamesHero,
  ExamesSection,
  CirurgiasSection,
  CTA,
} from "@/components/exames-cirurgias";
import MedicalAuthorSignature from "@/components/MedicalAuthorSignature";
import BreadcrumbSchema from "@/components/json-ld/BreadcrumbSchema";

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
      {/* Medical Web Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Exames e Cirurgias Oftalmológicas",
            "description": "Exames oftalmológicos e cirurgias com tecnologia de última geração, desde exames básicos até procedimentos complexos.",
            "about": {
              "@type": "MedicalSpecialty",
              "name": "Ophthalmology"
            },
            "reviewedBy": {
              "@type": "Physician",
              "name": "Dr. Roberto Carlei Lima",
              "identifier": "CRM-PA 5071"
            },
            "publisher": {
              "@id": "https://visuallaser.med.br/#clinic"
            }
          })
        }}
      />

      <ExamesHero />
      <ExamesSection />
      <CirurgiasSection />
      <div className="container mx-auto container-padding">
        <MedicalAuthorSignature />
      </div>
      <CTA />

      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Exames e Cirurgias", item: "/exames-cirurgias" },
        ]}
      />
    </main>
  );
}
