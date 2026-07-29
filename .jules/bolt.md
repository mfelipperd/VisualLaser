## 2024-05-24 - Next.js Image Component and `fill` Prop
**Learning:** In Next.js, when using the `<Image>` component with the `fill` property, it's a codebase anti-pattern to omit the `sizes` property. Without `sizes`, Next.js will serve images sized for 100vw, downloading unnecessarily large images for smaller containers or on mobile devices, which hurts performance.
**Action:** Always ensure the `sizes` property is included when `fill` is used. Use appropriate sizes based on the responsive layout context of the image.
