## 2026-06-15 - [Next.js Image Optimization]
**Learning:** The codebase has a performance anti-pattern where Next.js `<Image>` components using the `fill` property are frequently missing the `sizes` property. Without `sizes`, Next.js defaults to generating a `srcset` for `100vw`, which forces users to download unnecessarily large images, worsening Largest Contentful Paint (LCP) and wasting bandwidth.
**Action:** When using `<Image fill>`, always explicitly define the `sizes` attribute based on the parent container's size at different breakpoints.
