## 2024-06-11 - [Next.js Image Optimization]
**Learning:** When using Next.js `<Image>` component with `fill` property, it's an anti-pattern to omit the `sizes` property. This can cause the browser to download unnecessarily large image sizes, hurting performance.
**Action:** Always include the `sizes` property when using `<Image fill />` to define how the image will scale responsively and help the browser select the appropriately sized image file.
