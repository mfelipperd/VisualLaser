## 2024-08-01 - [Missing sizes attribute in Next.js Image component]
**Learning:** In Next.js 14, using the `<Image>` component with the `fill` property without providing a `sizes` attribute can cause the browser to download unnecessarily large image sizes, leading to poor LCP (Largest Contentful Paint) and overall performance issues.
**Action:** Always include a `sizes` attribute when using `<Image fill />` to optimize image delivery and improve frontend performance.
