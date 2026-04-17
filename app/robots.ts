import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/private/",
          "/admin/",
          "/api/",
          "/_next/",
          "*.json",
          "*.xml",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/", "/_next/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/", "/_next/"],
      },
      {
        userAgent: "Slurp",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/", "/_next/"],
        crawlDelay: 2,
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/", "/_next/"],
        crawlDelay: 1,
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/", "/_next/"],
        crawlDelay: 3,
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: ["/private/", "/admin/", "/api/", "/_next/"],
        crawlDelay: 2,
      },
    ],
    sitemap: "https://visuallaser.med.br/sitemap.xml",
    host: "https://visuallaser.med.br",
  };
}
