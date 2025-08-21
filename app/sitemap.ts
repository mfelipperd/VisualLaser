import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://visuallaser.med.br";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          'pt-BR': baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/empresa`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/empresa`,
        },
      },
    },
    {
      url: `${baseUrl}/equipe`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/equipe`,
        },
      },
    },
    {
      url: `${baseUrl}/exames-cirurgias`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/exames-cirurgias`,
        },
      },
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/contato`,
        },
      },
    },
    {
      url: `${baseUrl}/agendamento`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/agendamento`,
        },
      },
    },
    {
      url: `${baseUrl}/cirurgia-refrativa`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/cirurgia-refrativa`,
        },
      },
    },
    {
      url: `${baseUrl}/catarata`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/catarata`,
        },
      },
    },
    {
      url: `${baseUrl}/exames-oculares`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          'pt-BR': `${baseUrl}/exames-oculares`,
        },
      },
    },
  ];
}
