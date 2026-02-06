export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Visual Laser - Clínica Oftalmológica em Belém",
    alternateName: ["Visual Laser", "Clínica Oftalmológica Belém", "Oftalmologista Belém", "Óculos Belém"],
    description:
      "👁️ Clínica de Oftalmologia em Belém! Oftalmologistas especializados, consultas, exames, cirurgias e óculos. ✅ Melhor clínica oftalmológica de Belém-PA. 📍 Nazaré, Belém. Agende sua consulta!",
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
      latitude: -1.4499849,
      longitude: -48.4807296,
    },
    openingHours: ["Mo-Th 08:00-18:00", "Fr 08:00-17:00"],
    medicalSpecialty: "Ophthalmology",
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Consulta Oftalmológica em Belém",
        description: "Consulta com oftalmologista especializado em Belém",
        procedureType: "Medical Consultation",
        bodyLocation: "Eye",
        preparation: "Agendamento prévio",
        followup: "Retorno conforme orientação médica",
      },
      {
        "@type": "MedicalProcedure",
        name: "Exame de Vista em Belém",
        description: "Exame completo de refração para prescrição de óculos",
        procedureType: "Eye Examination",
        bodyLocation: "Eye",
        preparation: "Agendamento prévio",
      },
      {
        "@type": "MedicalProcedure",
        name: "Prescrição de Óculos em Belém",
        description: "Prescrição e venda de óculos em Belém",
        procedureType: "Optical Service",
        bodyLocation: "Eye",
        preparation: "Exame de refração",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cirurgia Refrativa em Belém",
        description: "Correção de miopia, hipermetropia e astigmatismo com laser",
        procedureType: "Laser Eye Surgery",
        bodyLocation: "Eye",
        preparation: "Exames pré-operatórios e orientações médicas",
        followup: "Consultas de acompanhamento pós-operatório",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cirurgia de Catarata em Belém",
        description: "Remoção da catarata com implante de lente intraocular",
        procedureType: "Cataract Surgery",
        bodyLocation: "Eye",
        preparation: "Exames pré-operatórios e orientações médicas",
        followup: "Consultas de acompanhamento pós-operatório",
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
        latitude: -1.4499849,
        longitude: -48.4807296,
      },
      geoRadius: "50000",
    },
    paymentAccepted: [
      "Cash",
      "Credit Card",
      "Debit Card",
      "Bank Transfer",
      "PIX",
      "Boleto",
      "Amazônia Saúde",
      "Amil",
      "Aspara",
      "Assefaz",
      "Bacen",
      "Bradesco Saúde",
      "Casembrapa",
      "CASF",
      "CASSI",
      "CEF",
      "Conab",
      "Correios",
      "Eletronorte",
      "Embratel",
      "Fusex",
      "Garantia de Saúde",
      "Infraero",
      "Lider Saúde",
      "Mediservice",
      "Petrobras",
      "Proasa Saúde",
      "Procuradoria",
      "Pró-Social",
      "SulAmérica",
      "TRE",
      "TRT",
      "Unafisco",
      "Unimed",
      "Vale e Pasa"
    ],
    currenciesAccepted: "BRL",
    priceRange: "$$",
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Medical License",
        recognizedBy: {
          "@type": "Organization",
          name: "Conselho Federal de Medicina",
        },
      },
    ],
    knowsAbout: [
      "Cirurgia Refrativa",
      "Cirurgia de Catarata",
      "Oftalmologia Pediátrica",
      "Retina",
      "Glaucoma",
      "Plástica Ocular",
      "Oncologia Ocular",
      "Exames Oftalmológicos",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Consulta Oftalmológica",
        },
        price: "150.00",
        priceCurrency: "BRL",
        availability: "InStock",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Cirurgia Refrativa",
        },
        price: "3000.00",
        priceCurrency: "BRL",
        availability: "InStock",
      },
    ],
    potentialAction: [
      {
        "@type": "ScheduleAction",
        name: "Agendar Consulta",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://visuallaser.med.br/agendamento",
          actionPlatform: ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
