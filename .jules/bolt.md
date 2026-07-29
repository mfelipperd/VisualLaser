## 2024-05-24 - Missing Sizes in Next.js Image Component
**Learning:** Codebase anti-pattern found: Next.js `<Image>` components using the `fill` property without the `sizes` property cause browsers to download unnecessarily large image sizes.
**Action:** Always include the `sizes` property when using `fill` in Next.js `<Image>` to define the layout sizes and avoid fetching full-resolution images unnecessarily.
