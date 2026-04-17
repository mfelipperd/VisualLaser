/**
 * PhysicianSchema Component
 * Automatically generates Physician JSON-LD for the whole medical team.
 * This helps IAs (ChatGPT, Gemini, etc.) and Google understand the expertise and authority of the clinic.
 */

import { doctors } from "@/data/doctors";

export default function PhysicianSchema() {
  const schemas = doctors.map((doc) => ({
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": doc.name,
    "image": doc.image,
    "description": doc.description,
    "medicalSpecialty": "Ophthalmology",
    "occupationalCategory": "Physician",
    "identifier": doc.crm,
    "affiliation": {
      "@type": "MedicalBusiness",
      "name": "Visual Laser",
      "url": "https://visuallaser.med.br"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tv. 14 de Março, 1622",
      "addressLocality": "Nazaré, Belém",
      "addressRegion": "PA",
      "postalCode": "66055-490",
      "addressCountry": "BR"
    }
  }));

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
