"use client";

import { useEffect } from "react";

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        "/images/hero-1.jpg",
        "/images/hero-2.jpg", 
        "/images/hero-3.jpg",
        "/logo-visual-branca.png"
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images loading
    const optimizeImageLoading = () => {
      const images = document.querySelectorAll("img[data-src]");
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || "";
            img.classList.remove("lazy");
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Preconnect to external domains
    const preconnectExternalDomains = () => {
      const domains = [
        "https://fonts.googleapis.com",
        "https://fonts.gstatic.com",
        "https://www.google-analytics.com",
        "https://www.googletagmanager.com",
        "https://www.youtube.com",
        "https://www.google.com"
      ];

      domains.forEach((domain) => {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = domain;
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    preconnectExternalDomains();
    optimizeImageLoading();

    // Core Web Vitals monitoring is handled by Next.js built-in analytics
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance optimizations initialized');
    }
  }, []);

  return null;
}
