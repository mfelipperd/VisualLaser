## 2024-05-24 - [Next.js Image `fill` Property Anti-Pattern]

**Learning:** Found a specific codebase anti-pattern: using Next.js `<Image>` component with the `fill` property without providing a `sizes` attribute. By default, Next.js will assume the image spans the entire viewport width (`100vw`) and generate a `srcset` with very large images, leading to unnecessary bandwidth usage and hurting LCP performance metrics.
**Action:** Always provide an explicit `sizes` attribute when using `fill` on `<Image>` to guide the browser in downloading appropriately sized images based on the responsive layout (e.g., `sizes="(max-width: 768px) 100vw, 50vw"`).
