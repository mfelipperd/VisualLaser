## 2024-07-20 - [Performance Optimization] Missing `sizes` property on Next.js `<Image>` components with `fill`
**Learning:** Next.js `<Image>` components using the `fill` property without a `sizes` attribute can cause the browser to download unnecessarily large image files, hurting LCP and overall performance.
**Action:** Always include the `sizes` property when using `fill` on Next.js `<Image>` components to provide the browser with hints about the image's displayed size at different breakpoints.
