# María Rodríguez Rojo — Portfolio

Bilingual personal portfolio for a Senior iOS Developer. Built with **Astro 5**, **Tailwind CSS 4**, and a neon cyberpunk aesthetic. Supports dark/light theme, automatic browser language detection, and full English/Spanish content.

---

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`

## Commands

| Command           | Action                                    |
| :---------------- | :---------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start dev server at `localhost:4321`      |
| `npm run build`   | Build production site to `./dist/`        |
| `npm run preview` | Preview the production build locally      |

---

## Features

- **Bilingual** — Full EN/ES content. Automatic browser language detection on first visit; manual toggle in sidebar and mobile nav.
- **Dark / Light theme** — Toggle persists across pages and language switches via `localStorage`. CSS-driven icon crossfade (no JS for visuals).
- **View Transitions** — Smooth page transitions with Astro's `<ClientRouter />`. Theme and event listeners re-initialise on every navigation via `astro:page-load`.
- **Sections** — Hero · About · Experience · Projects · Skills · Recommendations · Contact
- **Project cards** — Cards with a reference URL are fully clickable; external link icon appears on hover.
- **Copy email** — Clipboard button in Contact with check-mark feedback.
- **Recommendations** — LinkedIn recommendation displayed with terminal-window blockquote style.
- **Mobile nav** — Icon-only bottom tab bar (6 sections). Theme toggle and language switcher live in a frosted-glass pill fixed to the top-right corner.
- **Lighthouse scores** (production build):
  - Desktop: Performance 99 · Accessibility 95 · Best Practices 100 · SEO 100
  - Mobile:  Performance 87 · Accessibility 95 · Best Practices 100 · SEO 100

---

## Customisation

### 1. Profile data — `src/content/profile.json`

All personal content in bilingual format:

```jsonc
{
  "name": "Your Name",
  "headline":    { "en": "Your Title",  "es": "Tu Título" },
  "bio":         { "en": "...",         "es": "..." },
  "experience":  [ { "company": "...", "description": { "en": "...", "es": "..." } } ],
  "projects":    [ { "name": "...",    "description": { "en": "...", "es": "..." },
                     "link": { "en": "https://...", "es": "https://..." } } ],
  "skills":      { "languages": [], "frameworks": [], "tools": [] },
  "testimonials":[ { "author": "...", "quote": { "en": "...", "es": "..." } } ]
}
```

### 2. UI strings — `src/i18n/translations.ts`

Navigation labels, section headers, and button text. Profile content lives in `profile.json`, not here.

### 3. Site URL & language — `src/config.ts`

```typescript
export const siteConfig = {
  siteUrl:       'https://yourdomain.com',
  defaultLang:   'en',   // language served at /
  secondaryLang: 'es',   // language served at /es/
} as const;
```

To make Spanish the default, update `defaultLang` and rename `src/pages/es/` accordingly.

### 4. Theme colours — `src/styles/global.css`

Core palette variables at the top of the file:

```css
/* Dark mode (default) */
--color-bg-dark:     #050508;    /* page background        */
--color-neon:        #00d4ff;    /* primary cyan accent    */
--color-neon-purple: #bf00ff;    /* secondary purple       */

/* Light mode (activated via html.light class) */
--color-bg-light:    #f0f4ff;    /* page background        */
```

### 5. Avatar — `public/avatar.jpg` / `public/avatar.webp`

Replace both files with your photo (keep the same filenames). The `<picture>` element serves WebP to supporting browsers with JPEG as fallback. Recommended: 200×200 px, square crop.

---

## Project Structure

```
portfolio/
├── public/
│   ├── avatar.jpg          # Profile photo (JPEG fallback)
│   └── avatar.webp         # Profile photo (WebP, primary)
└── src/
    ├── config.ts           # Site URL + language config
    ├── components/
    │   └── Portfolio.astro # All page sections
    ├── content/
    │   └── profile.json    # Personal data (bilingual)
    ├── i18n/
    │   └── translations.ts # UI strings (bilingual)
    ├── layouts/
    │   └── Layout.astro    # Page shell, sidebar, mobile nav
    ├── pages/
    │   ├── index.astro     # English  (/)
    │   └── es/
    │       └── index.astro # Spanish  (/es/)
    └── styles/
        └── global.css      # Neon theme, animations, light mode
```

---

## Deploy

This is a fully static Astro site (`output: 'static'`). `npm run build` produces a `dist/` folder that can be served from any static host — no server runtime required.

- **Netlify** — connect the repository, set build command `npm run build`, publish directory `dist`
- **GitHub Pages** — use the [Astro GitHub Pages action](https://docs.astro.build/en/guides/deploy/github/)
- **Any CDN / VPS** — upload the contents of `dist/` to your web root

---

## Tech Stack

- [Astro](https://astro.build) 5.x — static site generator with View Transitions
- [Tailwind CSS](https://tailwindcss.com) 4.x — utility-first CSS
- TypeScript
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) — loaded non-blocking via Google Fonts
- Heroicons — inline SVG icons
