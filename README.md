# My Creative Portfolio

A sleek, dark-aesthetic creative portfolio for digital marketing, built with **React**, **Tailwind CSS**, and **Framer Motion**.

## Stack

- [Vite](https://vitejs.dev/) — dev server & build tool
- [React 18](https://react.dev/) — UI framework
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — animations & layout transitions
- [Lucide React](https://lucide.dev/) — icons
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — form validation

## Folder Structure

```
my-creative-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── utils/
    │   └── cn.js
    ├── data/
    │   └── projects.js
    ├── hooks/
    │   ├── useMobileMenu.js
    │   └── useInView.js
    ├── components/
    │   ├── ui/
    │   │   ├── Button.jsx
    │   │   ├── Input.jsx
    │   │   ├── Textarea.jsx
    │   │   ├── Card.jsx
    │   │   ├── Container.jsx
    │   │   └── Section.jsx
    │   ├── layout/
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   └── sections/
    │       ├── Hero/
    │       │   ├── Hero.jsx
    │       │   ├── HeroText.jsx
    │       │   └── HeroVisual.jsx
    │       ├── About/
    │       │   └── About.jsx
    │       ├── ProjectGallery/
    │       │   ├── ProjectGallery.jsx
    │       │   ├── ProjectCard.jsx
    │       │   └── FilterPills.jsx
    │       └── Contact/
    │           ├── Contact.jsx
    │           └── ContactForm.jsx
```

## Getting Started

```bash
cd my-creative-portfolio
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |

## Customizing

- **Projects**: Edit `src/data/projects.js` to add your own case studies (title, category, image, results metric, description).
- **Colors**: Update Tailwind config in `tailwind.config.js` or swap the `indigo-600` accent in components.
- **Content**: Update copy in each section component under `src/components/sections/`.
- **Deploy**: Build with `npm run build` and deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.

## Features

- Dark aesthetic with glassmorphism cards
- Hero section with staggered Framer Motion entrance animations
- Project gallery with category filter pills + layout transitions
- About section with animated stats and capability list
- Contact form with Zod validation and success state
- Fully responsive, sticky navbar with mobile menu
- Scroll-reveal animations on all sections
