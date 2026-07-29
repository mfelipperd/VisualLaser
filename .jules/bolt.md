## 2024-05-18 - [Next.js Image Fill missing Sizes property]
**Learning:** Adding the `fill` property to Next.js `<Image>` components without providing a `sizes` attribute causes the browser to download the image at original full resolution. This negatively impacts LCP and bandwidth in grid environments.
**Action:** Always add the `sizes` property to explicitly tell the browser what size image to fetch based on CSS grid dimensions, particularly when `fill` is used in responsive layouts.
