## 2024-07-21 - [Added sizes attribute to Next.js Image components using fill]
**Learning:** This codebase had multiple instances of the anti-pattern of using Next.js `<Image>` component with the `fill` property without specifying the `sizes` property. This causes the browser to download unnecessarily large image sizes, hurting performance.
**Action:** When using `<Image fill />`, explicitly discover the responsive grid/container classes and always add an appropriate `sizes` property to optimize image loading.
