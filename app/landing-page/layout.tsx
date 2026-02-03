import type { Metadata } from "next";
import "../globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Agende sua Consulta Oftalmológica | Visual Laser Belém | Especialistas",
  description: "👁️ Agende sua consulta oftalmológica em Belém! Oftalmologistas especializados, tecnologia de ponta e atendimento humanizado. ✅ Clínica de referência há mais de 25 anos. 📍 Nazaré, Belém-PA.",
  keywords: [
    "consulta oftalmológica belém",
    "agendamento oftalmologia belém",
    "exame de vista belém",
    "oftalmologista belém",
    "clínica oftalmológica belém",
    "consulta oftalmológica",
    "exame de vista",
    "oftalmologia belém",
    "Visual Laser",
    "agendamento online",
    "oftalmologista perto de mim",
    "médico dos olhos belém",
    "especialista em olhos",
    "clínica de oftalmologia",
    "cirurgia refrativa belém",
    "catarata belém",
  ],
  metadataBase: new URL("https://visuallaser.med.br"),
  alternates: {
    canonical: "/landing-page",
  },
  openGraph: {
    title: "👁️ Agende sua Consulta Oftalmológica | Visual Laser Belém",
    description: "👁️ Agende sua consulta oftalmológica em Belém! Oftalmologistas especializados, tecnologia de ponta e atendimento humanizado. ✅ Clínica de referência há mais de 25 anos.",
    url: "https://visuallaser.med.br/landing-page",
    siteName: "Visual Laser - Agendamento",
    images: [
      {
        url: "/images/landing-page-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Agende sua Consulta Oftalmológica - Visual Laser Belém",
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
    title: "👁️ Agende sua Consulta Oftalmológica | Visual Laser",
    description: "👁️ Agende sua consulta oftalmológica em Belém! Oftalmologistas especializados, tecnologia de ponta e atendimento humanizado.",
    images: ["/images/landing-page-preview.jpg"],
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
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}
