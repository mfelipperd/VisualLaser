"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function GoogleAnalytics() {
  const [accepted, setAccepted] = useState(false);
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-D7C24V7X1V";

  useEffect(() => {
    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<{ status?: string }>).detail;
      setAccepted(detail?.status === "accepted");
    };
    try {
      const saved = JSON.parse(localStorage.getItem("cookieConsent") || "null");
      setAccepted(saved?.status === "accepted");
    } catch {
      setAccepted(false);
    }
    window.addEventListener("cookie-consent-change", onConsent);
    return () => window.removeEventListener("cookie-consent-change", onConsent);
  }, []);

  if (!accepted || !/^G-[A-Z0-9]+$/.test(measurementId)) return null;

  return (
    <>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
    </>
  );
}
