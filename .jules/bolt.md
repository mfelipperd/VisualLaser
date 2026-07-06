## 2024-07-06 - [Next.js Image `fill` Property Anti-Pattern]
**Learning:** When using the Next.js `<Image>` component with the `fill` property, omitting the `sizes` property causes the browser to download unnecessarily large image sizes, hurting performance. The browser defaults to assuming the image takes up the full viewport width (100vw).
**Action:** Always ensure the `sizes` property is included when using the `fill` property on Next.js `<Image>` components to optimize image loading and improve LCP (Largest Contentful Paint).
