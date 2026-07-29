## 2024-06-23 - Add sizes attribute to Images using fill
**Learning:** When using Next.js `<Image>` component with the `fill` property, if the `sizes` attribute is missing, the browser will download a full-size image (100vw), which is bad for performance, especially on mobile devices or smaller viewports.
**Action:** Always add appropriate `sizes` attributes to Next.js `<Image>` components when using the `fill` property to ensure the browser downloads the correct image size based on the viewport width.
