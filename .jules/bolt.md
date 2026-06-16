## 2024-06-16 - [Frontend Optimization] Missing sizes property on filled Images
**Learning:** When using Next.js `<Image>` component with the `fill` property, omitting the `sizes` attribute causes Next.js to default to `100vw`. This leads the browser to download unnecessarily massive image versions even for small containers (like an 80px logo inside a grid), severely impacting bandwidth and Largest Contentful Paint (LCP).
**Action:** Always ensure the `sizes` property is included when using `<Image fill />`. Base the sizes string on the actual rendered container width at various breakpoints.
