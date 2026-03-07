# María Rodríguez Rojo — Developer Portfolio

A modern, bilingual developer portfolio built with **Astro 5**, **Tailwind CSS 4**, and a **Neon Dream** cyberpunk aesthetic. Features dark/light theme, automatic browser language detection, and full English/Spanish support.

Made with 🧡 by [Web Reactiva](https://webreactiva.com)

---

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |

---

## Language Behavior

- **Root URL** (`/`) → English by default
- **Auto-detection**: On first visit, browser language is checked. If Spanish (`es`), automatically redirects to `/es/`
- **Manual toggle**: Language switch button in sidebar
- **Secondary URL** (`/es/`) → Spanish

---

## Customization Guide

### 1. Profile Data (`src/content/profile.json`)

All personal content lives here in bilingual format:

```json
{
  "name": "Your Name",
  "headline": { "en": "Your Title", "es": "Tu Título" },
  "bio": { "en": "...", "es": "..." },
  "experience": [...],
  "projects": [...],
  "skills": {...}
}
```

### 2. Change Default Language (`src/config.ts`)

```typescript
export const siteConfig = {
  defaultLang: 'en',     // Language at root URL (/)
  secondaryLang: 'es',   // Language at /es/
} as const;
```

If you swap to Spanish as default, also rename `src/pages/es/` → `src/pages/en/` and move `src/pages/index.astro` logic accordingly.

### 3. UI Translations (`src/i18n/translations.ts`)

Navigation labels, section headers, and button text are here. Profile content is **not** here — keep them separate.

### 4. Theme & Colors (`src/styles/global.css`)

Key neon variables in `@theme`:

```css
@theme {
  --color-neon: #00d4ff;        /* Primary neon color */
  --color-neon-purple: #bf00ff; /* Secondary accent */
  --color-bg-dark: #050508;     /* Dark bg */
  --color-bg-light: #080d2a;    /* Light (day-mode) bg */
}
```

---

## Project Structure

```
src/
├── config.ts              # Language config (single source of truth)
├── components/
│   └── Portfolio.astro    # All page sections
├── content/
│   └── profile.json       # Your personal data (bilingual)
├── i18n/
│   └── translations.ts    # UI strings (bilingual)
├── layouts/
│   └── Layout.astro       # Page shell + sidebar
├── pages/
│   ├── index.astro        # English (root /)
│   └── es/
│       └── index.astro    # Spanish (/es/)
└── styles/
    └── global.css         # Neon Dream theme + animations
```

---

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push project to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Astro — no config needed

---

## Tech Stack

- [Astro](https://astro.build) 5.x
- [Tailwind CSS](https://tailwindcss.com) 4.x
- TypeScript
- Space Grotesk + IBM Plex fonts
- View Transitions API
