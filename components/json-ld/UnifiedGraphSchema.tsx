import { doctors } from "@/data/doctors";
import { getPlaceDetails, GooglePlacesConfigError } from "@/lib/google-places";

const GOOGLE_PLACE_ID = "ChIJVycBkYGOpJIR67YIBR6Kyo4";

async function getAggregateRating() {
  try {
    const place = await getPlaceDetails(GOOGLE_PLACE_ID);

    if (!place.rating || !place.userRatingCount) {
      return null;
    }

    return {
      "@type": "AggregateRating",
      ratingValue: place.rating,
      reviewCount: place.userRatingCount,
      bestRating: 5,
      worstRating: 1,
    };
  } catch (error) {
    if (!(error instanceof GooglePlacesConfigError)) {
      console.error("Erro ao buscar avaliação do Google para o schema:", error);
    }
    return null;
  }
}

export default async function UnifiedGraphSchema() {
  const domain = "https://visuallaser.med.br";
  const clinicId = `${domain}/#clinic`;
  const websiteId = `${domain}/#website`;
  const aggregateRating = await getAggregateRating();

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
    sameAs: [
      "https://www.facebook.com/VisualLaserOftalmologia/",
      "https://www.instagram.com/visuallaser/",
      "https://www.youtube.com/@VisualLaserClinica",
    ],
    knowsAbout: [
      "Cirurgia de Catarata com Lentes Premium",
      "Cirurgia Refrativa a Laser (SMILE, LASIK, PRK)",
      "Tratamento de Glaucoma e Retina",
      "Exames Oftalmológicos de Alta Precisão",
      "Tecnologia Zeiss e Alcon em Oftalmologia",
    ],
    award: "Referência em Tecnologia Oftalmológica no Norte do Brasil",
    ...(aggregateRating ? { aggregateRating } : {}),
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
