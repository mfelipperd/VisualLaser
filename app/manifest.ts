import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Visual Laser - Clínica Oftalmológica de Excelência',
    short_name: 'Visual Laser',
    description: 'Transforme sua visão com a Visual Laser! Especialistas em cirurgias refrativas, catarata e tratamentos oculares com tecnologia de última geração.',
    start_url: '/',
    display: 'standalone',
    background_color: '#163960',
    theme_color: '#163960',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'pt-BR',
    categories: ['medical', 'health', 'business'],
    icons: [
      {
        src: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/logo-visual-branca.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any maskable'
      }
    ],
    screenshots: [
      {
        src: '/images/social-preview.jpg',
        sizes: '1200x630',
        type: 'image/jpeg',
        form_factor: 'wide',
        label: 'Visual Laser - Clínica Oftalmológica'
      },
      {
        src: '/images/social-preview-square.jpg',
        sizes: '1080x1080',
        type: 'image/jpeg',
        form_factor: 'narrow',
        label: 'Visual Laser - Especialidades'
      }
    ],
    shortcuts: [
      {
        name: 'Agendar Consulta',
        short_name: 'Agendar',
        description: 'Agende sua consulta oftalmológica',
        url: '/?modal=appointment',
        icons: [
          {
            src: '/favicon.png',
            sizes: '32x32'
          }
        ]
      },
      {
        name: 'Nossa Equipe',
        short_name: 'Equipe',
        description: 'Conheça nossa equipe médica',
        url: '/equipe',
        icons: [
          {
            src: '/favicon.png',
            sizes: '32x32'
          }
        ]
      },
      {
        name: 'Exames e Cirurgias',
        short_name: 'Serviços',
        description: 'Nossos serviços oftalmológicos',
        url: '/exames-cirurgias',
        icons: [
          {
            src: '/favicon.png',
            sizes: '32x32'
          }
        ]
      }
    ]
  }
}
