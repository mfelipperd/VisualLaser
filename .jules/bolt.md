## 2026-06-24 - Next.js Image Component missing sizes with fill
**Learning:** In Next.js, using the `<Image>` component with the `fill` property without a `sizes` attribute defaults the image size to 100vw, downloading unnecessarily large images and impacting performance.
**Action:** Always provide a `sizes` attribute when using `fill` in Next.js `<Image>` components, reflecting the actual layout context (e.g., using max-width breakpoints).
