
## 2024-07-15 - Missing `sizes` attribute on `<Image>` components
**Learning:** Found a common anti-pattern in the codebase where Next.js `<Image>` components use the `fill` property but lack the `sizes` attribute. This causes the browser to download the image at full viewport width (100vw), which is particularly problematic for images displayed in grids (e.g., in `DoctorsCatalog` where images are displayed in a 3-column grid on desktop).
**Action:** Always ensure that when using `<Image fill />` within a responsive grid or container that isn't full width, a `sizes` attribute accurately reflecting the layout breakpoints is provided to optimize image delivery and reduce bandwidth usage.
