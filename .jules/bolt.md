## 2024-07-07 - Next.js Image Optimization
**Learning:** When using the Next.js `<Image>` component with the `fill` property, failing to specify a `sizes` property causes the browser to download unnecessarily large image sizes, which degrades performance and impacts Core Web Vitals (LCP).
**Action:** Always ensure the `sizes` property is included on any `<Image>` component utilizing `fill`, configured precisely according to its parent container's responsive layout (e.g., `sizes="(max-width: 1024px) 100vw, 50vw"` for a 2-column grid).
