## 2024-07-05 - Next.js Image Component missing sizes with fill
**Learning:** The Next.js `<Image>` component with the `fill` property was used in several places without the `sizes` attribute. This is an anti-pattern that causes the browser to download unnecessarily large image versions, as Next.js defaults to `100vw` without `sizes`.
**Action:** Always include the `sizes` property when using the `fill` property on `<Image>` components to specify the expected display size of the image across different viewports, which optimizes image delivery.
