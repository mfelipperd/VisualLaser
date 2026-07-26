## 2024-07-26 - [Missing `sizes` attribute on `next/image`]
**Learning:** In Next.js, when using the `<Image>` component with the `fill` property, omitting the `sizes` property causes the browser to download unnecessarily large image sizes, hurting performance. This is a common anti-pattern in the codebase.
**Action:** Always ensure the `sizes` property is included when using the `fill` property on the Next.js `<Image>` component.
