import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import SchemaMarkup from "@/components/SchemaMarkup";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import BlurModal from "@/components/BlurModal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Visual Laser - Clínica Oftalmológica de Excelência",
  description:
    "A Visual Laser é uma clínica oftalmológica de referência, especializada em cirurgias refrativas, catarata e tratamentos oculares com tecnologia de última geração.",
  keywords: [
    "oftalmologia",
    "cirurgia refrativa",
    "catarata",
    "laser",
    "clínica oftalmológica",
    "Belém",
    "Pará",
    "Visual Laser",
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
    title: "Visual Laser - Clínica Oftalmológica de Excelência",
    description:
      "A Visual Laser é uma clínica oftalmológica de referência, especializada em cirurgias refrativas, catarata e tratamentos oculares com tecnologia de última geração.",
    url: "https://visuallaser.med.br",
    siteName: "Visual Laser",
    images: [
      {
        url: "https://visuallaser.med.br/wp-content/uploads/2023/12/DSC7103.jpg",
        width: 1200,
        height: 630,
        alt: "Visual Laser - Clínica Oftalmológica",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual Laser - Clínica Oftalmológica de Excelência",
    description:
      "A Visual Laser é uma clínica oftalmológica de referência, especializada em cirurgias refrativas, catarata e tratamentos oculares com tecnologia de última geração.",
    images: [
      "https://visuallaser.med.br/wp-content/uploads/2023/12/DSC7103.jpg",
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
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <BlurModal />
      </body>
    </html>
  );
}
