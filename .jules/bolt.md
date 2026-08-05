## 2024-05-15 - [Anti-pattern: Missing sizes on fill images]
**Learning:** Found multiple usages of Next.js Image component with the `fill` property without the `sizes` property. This can cause the browser to download unnecessarily large image sizes, hurting performance.
**Action:** When using Next.js Image with `fill`, always provide the `sizes` property.
