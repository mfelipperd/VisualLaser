## 2024-06-12 - Next.js Image Component missing sizes prop with fill
**Learning:** When using the Next.js `<Image>` component with the `fill` property, omitting the `sizes` property causes the browser to download unnecessarily large image sizes, which degrades performance (especially on mobile).
**Action:** Always include a `sizes` property when using `fill`. Use exact pixel sizes for fixed-dimension containers (e.g., `sizes="80px"`), or use media queries for responsive layouts (e.g., `sizes="(max-width: 768px) 100vw, 50vw"`).
