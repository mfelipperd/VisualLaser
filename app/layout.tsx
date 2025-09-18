import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import SchemaMarkup from "@/components/SchemaMarkup";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import BlurModal from "@/components/BlurModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

export const metadata: Metadata = {
  title: "Clínica Oftalmológica em Belém | Oftalmologista | Óculos | Visual Laser",
  description:
    "👁️ Clínica de Oftalmologia em Belém! Oftalmologistas especializados, consultas, exames, cirurgias e óculos. ✅ Melhor clínica oftalmológica de Belém. 📍 Nazaré, Belém-PA. Agende sua consulta!",
  keywords: [
    "clínica oftalmológica",
    "clínica oftalmológica belém",
    "clínica de oftalmologia",
    "clínica de oftalmologia belém",
    "oftalmologia belém",
    "oftalmologista belém",
    "oftalmologista em belém",
    "oftalmologista perto de mim",
    "óculos belém",
    "óculos em belém",
    "ótica belém",
    "exame de vista belém",
    "consulta oftalmológica belém",
    "cirurgia de olhos belém",
    "laser nos olhos belém",
    "catarata belém",
    "cirurgia refrativa belém",
    "Visual Laser",
    "oftalmologia pará",
    "clínica de olhos belém",
    "médico dos olhos belém",
    "especialista em olhos belém",
  ],
  authors: [{ name: "Visual Laser" }],
  creator: "Visual Laser",
  publisher: "Visual Laser",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://visuallaser.med.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "👁️ Clínica Oftalmológica em Belém | Oftalmologista | Óculos | Visual Laser",
    description:
      "👁️ Melhor Clínica de Oftalmologia em Belém! Oftalmologistas especializados, consultas, exames, cirurgias e óculos. ✅ Clínica oftalmológica de referência em Belém-PA. 📍 Nazaré, Belém. Agende sua consulta!",
    url: "https://visuallaser.med.br",
    siteName: "Visual Laser - Clínica Oftalmológica em Belém",
    images: [
      {
        url: "/images/social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Visual Laser - Clínica Oftalmológica de Excelência em Belém, Pará",
        type: "image/jpeg",
      },
      {
        url: "/images/social-preview-square.jpg",
        width: 1080,
        height: 1080,
        alt: "Visual Laser - Logo e Especialidades Oftalmológicas",
        type: "image/jpeg",
      },
    ],
    locale: "pt_BR",
    type: "website",
    countryName: "Brasil",
    emails: ["contato@visuallaser.med.br"],
    phoneNumbers: ["+55 91 99999-9999"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@visuallaser",
    creator: "@visuallaser",
    title: "👁️ Visual Laser - Transforme Sua Visão com Excelência!",
    description:
      "🚀 Clínica oftalmológica de referência em Belém! Especialistas em cirurgias refrativas, catarata e tratamentos oculares com tecnologia de última geração. ✅ Resultados comprovados. 📍 Agende sua consulta hoje mesmo!",
    images: [
      "/images/social-preview.jpg",
      "/images/social-preview-square.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verificado-via-dns-txt",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo-visual-branca.png",
  },
  other: {
    "theme-color": "#163960",
    "msapplication-TileColor": "#163960",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Visual Laser",
    "application-name": "Visual Laser",
    "msapplication-config": "/browserconfig.xml",
    "yandex-verification": "your-yandex-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "viewport": "width=device-width, initial-scale=1, maximum-scale=5",
    "mobile-web-app-capable": "yes",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="font-poppins">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" as="style" />
        <link rel="preload" href="/images/hero-1.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/hero-2.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/hero-3.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className="font-poppins antialiased">
        <SchemaMarkup />
        <GoogleAnalytics />
        <PerformanceOptimizer />
        <Header />
        <main className="mt-0 md:mt-20 pb-20 md:pb-0">{children}</main>
        <Footer />
        <CookieConsent />
        <BlurModal />
        <WhatsAppButton />
      </body>
    </html>
  );
}
