import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/", "/_next/image/"],
        disallow: [
          "/private/",
          "/admin/",
          "/api/",
          "/_next/data/",
          "*.json",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/_next/static/", "/_next/image/"],
        disallow: ["/private/", "/admin/", "/api/"],
      },
    ],
    sitemap: "https://visuallaser.med.br/sitemap.xml",
  };
}
