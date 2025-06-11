# Juan Felipe Rada - Portfolio

This is my personal portfolio website built with Astro, showcasing my work as a software developer, and also hosting my blog. It supports i18n (English, Spanish, and Portuguese), a contact form, y career path and some personal projects projects.

![Portfolio Preview](https://github.com/Radapls/radapls.github.io/blob/main/public/portfolio-preview.png)

## 🚀 Features

- Multi-language support (EN, ES, PT-BR)
- Responsive design
- Contact form integration
- Dark/Light theme toggle
- Project showcase
- Experience path
- E2E Test

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- CSS3
- [TypeScript](https://www.typescriptlang.org/)
- [MDX](https://mdxjs.com/)
- [Cypress](https://www.cypress.io/)

## 🏗️ Project Structure

```text
/
├── src
│   ├── assets               # Astro-managed assets (e.g., blog post images if optimized by Astro)
│   │   ├── documents 
│   │   ├── gifs
│   │   ├── img
│   │   └── videos
│   ├── components           # Base components
│   │   └── i18n
│   ├── data                 # All the global variables must be here
│   ├── layouts
│   ├── pages                # Astro pages and routes (e.g., index.astro, about.astro)
│   │   └── [lang]
│   ├── scripts              # Global scripts
│   ├── sections             # Reusable sections
│   ├── styles               # Global styles
│   └── types                # Global types
├── astro.config.mjs         # Astro configuration
└── package.json             # Project dependencies and scripts
```
