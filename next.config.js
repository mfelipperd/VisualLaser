/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'visuallaser.med.br',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/logo-visual-branca.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/icon.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/inicio",
        destination: "/",
        permanent: true,
      },
      {
        source: "/medicos",
        destination: "/equipe",
        permanent: true,
      },
      {
        source: "/agende-sua-consulta",
        destination: "/",
        permanent: true,
      },
      // SEO Redirecionamentos para rotas extintas/erradas do Sitemap anterior
      {
        source: "/agendamento",
        destination: "/contato",
        permanent: true,
      },
      {
        source: "/equipe/:slug",
        destination: "/equipe",
        permanent: true,
      },
      {
        source: "/cirurgia-refrativa",
        destination: "/servicos/cirurgias-refrativas",
        permanent: true,
      },
      {
        source: "/catarata",
        destination: "/servicos/tratamento-catarata",
        permanent: true,
      },
      {
        source: "/exames-oculares",
        destination: "/servicos/exames-oftalmologicos",
        permanent: true,
      },
      {
        source: "/plastica-ocular",
        destination: "/servicos",
        permanent: true,
      },
      {
        source: "/oncologia-ocular",
        destination: "/servicos",
        permanent: true,
      },
      // Redirecionamentos de Legado / Crawl Budget Optimization
      {
        source: "/:path*.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index-1.html",
        destination: "/",
        permanent: true,
      },
    ];
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
