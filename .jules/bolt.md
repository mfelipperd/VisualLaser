## 2024-07-19 - Missing `sizes` attribute on Next.js `Image` components with `fill`
**Learning:** Found multiple instances where Next.js `Image` components use the `fill` property but are missing the `sizes` attribute. This is an anti-pattern in Next.js as it causes the browser to download unnecessarily large image sizes, hurting performance. This is documented in my memory context.
**Action:** Always verify that Next.js `<Image>` components with the `fill` property also include an appropriate `sizes` attribute.
