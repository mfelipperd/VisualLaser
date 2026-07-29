## 2024-05-24 - Next.js Image Component Sizes
**Learning:** Next.js `<Image>` component with the `fill` property can cause the browser to download unnecessarily large image sizes if the `sizes` property is not explicitly defined, acting as a performance bottleneck specific to this codebase's image rendering.
**Action:** Always ensure the `sizes` property is included when using the `<Image>` component with `fill` to optimize bundle size and image loading times.
