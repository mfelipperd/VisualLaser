export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Visual Laser",
    description:
      "Referência em oftalmologia avançada e humanizada na região Norte. Há quase 30 anos cuidando da saúde visual da sua família.",
    url: "https://visuallaser.med.br",
    telephone: ["+559132254422", "+5591988968201"],
    email: "marketing@visuallaser.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Travessa 14 de Março, 1622",
      addressLocality: "Belém",
      addressRegion: "PA",
      postalCode: "66055-490",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.4557,
      longitude: -48.4902,
    },
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
    medicalSpecialty: "Ophthalmology",
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Exame de Refração",
        description: "Para prescrição de óculos e lentes de contato",
      },
      {
        "@type": "MedicalProcedure",
        name: "Campimetria Visual Computadorizada",
        description: "Avaliação do campo visual",
      },
      {
        "@type": "MedicalProcedure",
        name: "Mapeamento de Retina",
        description: "Exame detalhado da retina",
      },
      {
        "@type": "MedicalProcedure",
        name: "Capsulotomia Posterior com YAG Laser",
        description: "Tratamento da opacidade da cápsula posterior",
      },
      {
        "@type": "MedicalProcedure",
        name: "Iridotomia com YAG Laser",
        description: "Tratamento do glaucoma",
      },
    ],
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Everson Costa",
        },
        reviewBody:
          "Experiência satisfatória... Muito bom o atendimento e os médicos são os melhores. Recomendo!",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Claudio Ramos",
        },
        reviewBody:
          "Clínica excelente, atendimento 10. Instalações muito boas. Recomendo",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "7",
      bestRating: "5",
      worstRating: "1",
    },
    logo: "https://visuallaser.med.br/wp-content/uploads/2021/07/logo-visual-branca-comp.png",
    sameAs: [
      "https://www.facebook.com/visuallaser",
      "https://www.instagram.com/visuallaser",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
