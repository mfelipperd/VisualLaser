import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import SchemaMarkup from "@/components/SchemaMarkup";
import GoogleAnalytics from "@/components/GoogleAnalytics";
const CookieConsent = dynamic(() => import("@/components/CookieConsent"));
const BlurModal = dynamic(() => import("@/components/BlurModal"));
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"));
const Footer = dynamic(() => import("@/components/Footer"));
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Visual Laser | Clínica Oftalmológica em Belém",
    template: "%s | Visual Laser",
  },
  description:
    "👁️ Clínica de Oftalmologia em Belém! Oftalmologistas especializados, consultas, exames, cirurgias e óculos. Aceitamos diversos convênios. ✅ Agende sua consulta!",
  keywords: [
    "clínica oftalmológica",
    "clínica oftalmológica belém",
    "oftalmologista belém",
    "exame de vista belém",
    "cirurgia de olhos belém",
    "cirurgia refrativa belém",
    "cirurgia de catarata belém",
    "óculos belém",
    "convênios oftalmologista belém",
    "amazônia saúde belém",
    "amil belém",
    "aspara belém",
    "assefaz belém",
    "bacen belém",
    "bradesco saúde belém",
    "casembrapa belém",
    "casf belém",
    "cassi belém",
    "cef belém",
    "conab belém",
    "correios belém",
    "eletronorte belém",
    "embratel belém",
    "fusex belém",
    "garantia de saúde belém",
    "infraero belém",
    "lider saúde belém",
    "mediservice belém",
    "petrobras belém",
    "proasa saúde belém",
    "procuradoria plan-assiste belém",
    "pró-social trf belém",
    "sulamérica belém",
    "tre belém",
    "trt belém",
    "unafisco belém",
    "unimed belém",
    "vale e pasa belém",
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
    phoneNumbers: ["+55 91 3225-4422"],
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
    apple: "/apple-touch-icon.png",
  },
  other: {
    "yandex-verification": "your-yandex-verification-code",
    "msvalidate.01": "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        <link rel="preload" href="/images/hero-1.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/hero-2.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/hero-3.jpg" as="image" type="image/jpeg" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className="font-poppins antialiased">
        <SchemaMarkup />
        <GoogleAnalytics />
        <PerformanceOptimizer />
        <Header />
        <main className="pb-20 md:pb-0 overflow-x-hidden">{children}</main>
        <Footer />
        <CookieConsent />
        <BlurModal />
        <WhatsAppButton />
      </body>
    </html>
  );
}
