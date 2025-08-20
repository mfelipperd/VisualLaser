import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Visual Laser - Oftalmologia Avançada",
    short_name: "Visual Laser",
    description:
      "Referência em oftalmologia clínica e cirúrgica em Belém. Há quase 30 anos cuidando da saúde visual da sua família.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0ea5e9",
    icons: [
      {
        src: "/logo-visual-branca.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo-visual-branca.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
