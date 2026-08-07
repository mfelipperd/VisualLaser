## 2024-08-07 - Missing sizes in next/image with fill property
**Learning:** Found multiple instances where the `<Image>` component from `next/image` is used with the `fill` property but without the `sizes` property. This is a known Next.js anti-pattern that can cause the browser to download unnecessarily large image sizes, negatively impacting performance and LCP (Largest Contentful Paint).
**Action:** When using the `next/image` component with `fill`, always include a `sizes` attribute that accurately reflects the image's layout sizes in the DOM.
