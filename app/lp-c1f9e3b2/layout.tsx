import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Visual Laser - Cirurgia de Catarata",
  description: "Clínica Oftalmológica em Belém especializada em Cirurgia de Catarata.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable}`}>
      {children}
    </div>
  );
}
