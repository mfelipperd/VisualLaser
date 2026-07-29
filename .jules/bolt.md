
## 2024-05-18 - Missing sizes attribute on Next.js Image with fill
**Learning:** When using the Next.js `<Image>` component with the `fill` property, omitting the `sizes` property causes the browser to download unnecessarily large image sizes (defaulting to 100vw). This can severely degrade performance, specifically the Largest Contentful Paint (LCP) metric and increase bandwidth consumption. It's especially impactful in components that use the image in a grid layout or as small thumbnails/logos.
**Action:** Always provide an appropriate `sizes` property to Next.js `<Image>` components when using the `fill` property to ensure the correct image resolution is requested based on viewport size.
