
import React from "react";

interface NavItem {
  name: string;
  url: string;
}

interface SiteNavigationSchemaProps {
  items: NavItem[];
}

export default function SiteNavigationSchema({ items }: SiteNavigationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: item.name,
      description: `Ir para a página de ${item.name}`,
      url: item.url.startsWith("http")
        ? item.url
        : `https://visuallaser.med.br${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
