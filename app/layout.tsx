import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import SchemaMarkup from "@/components/SchemaMarkup";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import BlurModal from "@/components/BlurModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Visual Laser - Clínica Oftalmológica de Excelência em Belém",
  description:
    "🚀 Transforme sua visão com a Visual Laser! Especialistas em cirurgias refrativas, catarata e tratamentos oculares com tecnologia de última geração. ✅ Resultados comprovados. 📍 Belém, Pará. Agende sua consulta!",
  keywords: [
    "oftalmologia",
    "cirurgia refrativa",
    "catarata",
    "laser",
    "clínica oftalmológica",
    "Belém",
    "Pará",
    "Visual Laser",
    "oftalmologista",
    "tratamento ocular",
    "cirurgia de olhos",
    "clínica de olhos",
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
    title: "👁️ Visual Laser - Transforme Sua Visão com Excelência!",
    description:
      "🚀 Clínica oftalmológica de referência em Belém! Especialistas em cirurgias refrativas, catarata e tratamentos oculares com tecnologia de última geração. ✅ Resultados comprovados. 📍 Agende sua consulta hoje mesmo!",
    url: "https://visuallaser.med.br",
    siteName: "Visual Laser - Clínica Oftalmológica",
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
    google: "your-google-verification-code",
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
      </head>
      <body className="font-poppins antialiased">
        <SchemaMarkup />
        <GoogleAnalytics />
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
