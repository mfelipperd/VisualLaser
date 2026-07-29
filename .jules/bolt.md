## 2024-05-19 - Initial Learnings

**Learning:** This is a Next.js 14 application using React 18, Tailwind CSS, and Framer Motion. The Jest test suite currently contains no tests, so tests must be run with `--passWithNoTests`. Codebase anti-pattern: When using the Next.js `<Image>` component with the `fill` property, always ensure the `sizes` property is also included to prevent the browser from downloading unnecessarily large image sizes. I noticed several components using `<Image fill>` without `sizes`.
