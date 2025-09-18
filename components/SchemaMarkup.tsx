export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Visual Laser - Clínica Oftalmológica de Excelência",
    alternateName: "Visual Laser",
    description:
      "🚀 Transforme sua visão com a Visual Laser! Especialistas em cirurgias refrativas, catarata e tratamentos oculares com tecnologia de última geração. ✅ Resultados comprovados. 📍 Belém, Pará.",
    url: "https://visuallaser.med.br",
    telephone: ["+559132254422", "+5591988968201"],
    email: "marketing@visuallaser.com.br",
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
      latitude: -1.4557,
      longitude: -48.4902,
    },
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"],
    medicalSpecialty: "Ophthalmology",
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Cirurgia Refrativa",
        description: "Correção de miopia, hipermetropia e astigmatismo com laser",
        procedureType: "Laser Eye Surgery",
        bodyLocation: "Eye",
        preparation: "Exames pré-operatórios e orientações médicas",
        followup: "Consultas de acompanhamento pós-operatório",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cirurgia de Catarata",
        description: "Remoção da catarata com implante de lente intraocular",
        procedureType: "Cataract Surgery",
        bodyLocation: "Eye",
        preparation: "Exames pré-operatórios e orientações médicas",
        followup: "Consultas de acompanhamento pós-operatório",
      },
      {
        "@type": "MedicalProcedure",
        name: "Exame de Refração",
        description: "Para prescrição de óculos e lentes de contato",
        procedureType: "Eye Examination",
        bodyLocation: "Eye",
      },
      {
        "@type": "MedicalProcedure",
        name: "Campimetria Visual Computadorizada",
        description: "Avaliação do campo visual",
        procedureType: "Visual Field Test",
        bodyLocation: "Eye",
      },
      {
        "@type": "MedicalProcedure",
        name: "Mapeamento de Retina",
        description: "Exame detalhado da retina",
        procedureType: "Retinal Imaging",
        bodyLocation: "Eye",
      },
      {
        "@type": "MedicalProcedure",
        name: "Capsulotomia Posterior com YAG Laser",
        description: "Tratamento da opacidade da cápsula posterior",
        procedureType: "Laser Treatment",
        bodyLocation: "Eye",
      },
      {
        "@type": "MedicalProcedure",
        name: "Iridotomia com YAG Laser",
        description: "Tratamento do glaucoma",
        procedureType: "Laser Treatment",
        bodyLocation: "Eye",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Oftalmológicos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Consulta Oftalmológica",
            description: "Consulta médica oftalmológica completa",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Exames Oftalmológicos",
            description: "Pacote completo de exames oftalmológicos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalProcedure",
            name: "Cirurgias Oftalmológicas",
            description: "Cirurgias refrativas e de catarata",
          },
        },
      ],
    },
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
        datePublished: "2024-01-15",
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
        datePublished: "2024-01-10",
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
          name: "Maria Silva",
        },
        reviewBody:
          "Atendimento excelente, médicos muito competentes. Recomendo para toda família!",
        datePublished: "2024-01-05",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "15",
      bestRating: "5",
      worstRating: "1",
    },
    logo: "https://visuallaser.med.br/logo-visual-branca.png",
    image: [
      "https://visuallaser.med.br/images/social-preview.jpg",
      "https://visuallaser.med.br/images/social-preview-square.jpg",
    ],
    sameAs: [
      "https://www.facebook.com/visuallaser",
      "https://www.instagram.com/visuallaser",
      "https://www.youtube.com/@visuallaser",
    ],
    foundingDate: "1995",
    areaServed: [
      {
        "@type": "City",
        name: "Belém",
        addressRegion: "PA",
        addressCountry: "BR",
      },
      {
        "@type": "State",
        name: "Pará",
        addressCountry: "BR",
      },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -1.4557,
        longitude: -48.4902,
      },
      geoRadius: "50000",
    },
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
    currenciesAccepted: "BRL",
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
