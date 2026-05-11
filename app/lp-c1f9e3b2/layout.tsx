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
    <div className={inter.className}>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Força override definitivo da landing page sobre o globals.css Poppins */
        .lp-container, .lp-container * {
          font-family: ${inter.style.fontFamily} !important;
        }
        .lp-container .font-black {
          font-weight: 900 !important;
        }
        .lp-container .font-extrabold {
          font-weight: 800 !important;
        }
        .lp-container .font-bold {
          font-weight: 700 !important;
        }
        .lp-container .font-semibold {
          font-weight: 600 !important;
        }
      ` }} />
      <div className="lp-container">
        {children}
      </div>
    </div>
  );
}
