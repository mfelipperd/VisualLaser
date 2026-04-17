import { doctors } from "@/data/doctors";

interface Provider {
  name: string;
  image: string;
  description: string;
  crm: string;
}

/**
 * UnifiedGraphSchema Component
 * Generates a connected JSON-LD Graph for the entire clinic entity.
 * This is the "gold standard" for GEO (Generative Engine Optimization).
 */
export default function UnifiedGraphSchema() {
  const domain = "https://visuallaser.med.br";
  const clinicId = `${domain}/#clinic`;
  const websiteId = `${domain}/#website`;

  const clinicSchema = {
    "@type": "MedicalBusiness",
    "@id": clinicId,
    name: "Visual Laser - Clínica Oftalmológica em Belém",
    url: domain,
    logo: `${domain}/logo-visual-branca.png`,
    image: [`${domain}/images/social-preview.jpg`],
    telephone: ["+559132254422", "+5591988968201"],
    email: "marketing@visuallaser.com.br",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tv. 14 de Março, 1622",
      addressLocality: "Nazaré, Belém",
      addressRegion: "PA",
      postalCode: "66055-490",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.4499849,
      longitude: -48.4807296,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    medicalSpecialty: ["Ophthalmology", "Optometry"],
    isAccessibleForFree: false,
    knowsAbout: [
      "Cirurgia de Catarata com Lentes Premium",
      "Cirurgia Refrativa a Laser (SMILE, LASIK, PRK)",
      "Tratamento de Glaucoma e Retina",
      "Exames Oftalmológicos de Alta Precisão",
      "Tecnologia Zeiss e Alcon em Oftalmologia",
    ],
    award: "Referência em Tecnologia Oftalmológica no Norte do Brasil",
  };

  const employeeSchemas = doctors.map((doc: any, index: number) => ({
    "@type": "Physician",
    "@id": `${domain}/#doctor-${index}`,
    name: doc.name,
    image: doc.image,
    description: doc.description,
    medicalSpecialty: "Ophthalmology",
    affiliation: { "@id": clinicId },
    identifier: doc.crm,
  }));

  const websiteSchema = {
    "@type": "WebSite",
    "@id": websiteId,
    url: domain,
    name: "Visual Laser",
    publisher: { "@id": clinicId },
    potentialAction: {
      "@type": "SearchAction",
      target: `${domain}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [clinicSchema, ...employeeSchemas, websiteSchema],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
