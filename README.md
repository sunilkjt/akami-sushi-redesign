# Akami Sushi — Website Redesign

A premium, production-ready redesign of the website for **Akami Sushi**, a Japanese restaurant in Lisbon, Portugal. Built as an independent project — the original repository (`sunilkjt/akami-sushi`) and the live site (`https://akamisushi.pt/`) are untouched.

## Project overview

Single-page, multilingual (European Portuguese / English / Japanese) restaurant website with verified business data only: real photos from the restaurant, its actual menu with prices, ordering links, opening hours (11:30–15:30 & 18:30–22:30, daily), address and telephone transcribed from the existing site. No invented content — no fake reviews, awards, prices or dishes.

## Design goals

- Editorial, premium Japanese aesthetic: warm ivory (#F8F5EF), deep charcoal (#20201D), vermilion accent (#B83A2D), muted sand (#EAE3D8), deep ink (#171918) sections.
- Fraunces editorial serif headings + Inter body (Noto Serif JP for Japanese headings).
- Generous whitespace, thin hairline rules, restrained vertical-kanji (赤 / おもてなし) details, subtle hover/reveal motion only.
- Mobile-first; no horizontal overflow; WCAG 2.2 AA practices (Lighthouse accessibility, best-practices and SEO audits scored 100/100 at time of writing).

## Technologies

- React 18 + TypeScript + Vite 5 (static SPA, no backend)
- Hand-rolled ~200-line i18n context (no external i18n dependency)
- Pure CSS design system (`src/index.css`), custom properties as design tokens
- GitHub Actions → GitHub Pages deployment

## Project structure

```
├── index.html                  # SEO meta, Open Graph, JSON-LD Restaurant schema
├── public/
│   ├── favicon.svg
│   ├── robots.txt / sitemap.xml
│   ├── images/                 # Real restaurant photos (see licensing below)
│   └── menu/                   # The restaurant's published menu pages (photos)
├── src/
│   ├── index.css               # Design system
│   ├── main.tsx / App.tsx
│   ├── data/
│   │   ├── restaurant.ts       # Verified address, phone, hours, links
│   │   └── menu.ts             # Full menu, transcribed with real prices
│   ├── i18n/
│   │   ├── dictionaries.ts     # pt / en / ja strings
│   │   └── i18n.tsx            # Language context + persistence
│   └── components/             # Navbar, HeroSection, RestaurantIntro,
│                               # FeaturedDishes, MenuPreview, ExperienceSection,
│                               # Gallery, OrderingSection, ContactSection, Footer,
│                               # shared (Reveal + Lightbox)
└── .github/workflows/deploy.yml
```

## Local development

```bash
npm install
npm run dev        # dev server
npm run build      # type-check + production build → dist/
npm run preview    # serve the production build locally
```

No environment variables are required.

## Deployment to GitHub Pages

The repo already contains `.github/workflows/deploy.yml`. After pushing to `main`:

1. GitHub → repository → **Settings → Pages** → Source: **GitHub Actions**.
2. The workflow builds and deploys on every push to `main`.
3. Preview URL: `https://sunilkjt.github.io/akami-sushi-redesign/`

Vite is configured with `base: "./"`, so all asset paths are repository-relative — no base-path rewrites needed.

## Migrating to the existing domain (akamisushi.pt)

1. In `public/robots.txt` and `public/sitemap.xml`, replace the `sunilkjt.github.io/akami-sushi-redesign` URLs with `https://akamisushi.pt/`.
2. In `index.html`, update `rel="canonical"`, the `og:url` / `og:image` absolute URLs, and the `"url"` / `"image"` fields inside the JSON-LD block to the live domain.
3. Rebuild and deploy to the host serving `akamisushi.pt`.

Canonical is intentionally NOT pointed at the live domain while the site is only a GitHub Pages preview, to avoid hijacking the existing site's index status.

## Multilingual content management

- All interface strings live in `src/i18n/dictionaries.ts` as three dictionaries keyed by dot-names (`pt`, `en`, `ja`). Keys are typed nowhere but are a flat `Record<string, string>`; missing keys fall back to Portuguese.
- The language selector is a keyboard-accessible listbox in the navbar plus buttons in the footer. Choice persists in `localStorage`; `<html lang>` updates automatically (`pt-PT`, `en`, `ja`).
- Menu item names carry per-language fields (`names.pt / en / ja`) in `src/data/menu.ts`. Japanese names are careful descriptive translations; check them against the restaurant's preferences before wide release.

## Menu & business info management

- Everything business-specific is in `src/data/restaurant.ts` and `src/data/menu.ts` — presentation components only read from these files.
- The full menu (14 categories, ~80 items) was transcribed from the restaurant's own menu photos, which are preserved under `public/menu/`. Prices were verified against the printed menu on 2026-10-26.
- Opening hours come from the current live site ("Open daily: 11:30–15:30 & 18:30–22:30"). **Re-verify with the restaurant before relying on them for anything critical**, including seasonal or holiday closures.
- To change a price: edit the `price` field in `src/data/menu.ts`. To add a photo: drop it in `public/images/` and reference it.

## Image licensing & asset documentation

- All photos in `public/images/` and `public/menu/` were obtained from the restaurant's own repository and website (WhatsApp kitchen/counter photos, official logo, published menu pages). They are presumed owned/licensed by Akami Sushi.
- AI-generated renders found in the original assets (e.g. `images/bg.jpg`, `hotdish1.jpg`) were **excluded** so that no stock/synthetic image is presented as an Akami dish.
- No images are hotlinked from third-party sites. If new photography is added, it must be original or properly licensed.
- `logo.png` is the restaurant's official wordmark; the site also uses a compact inline 赤 mark as favicon/app icon.

## Known limitations

- Single-page app: content requires JavaScript (a `<noscript>` fallback shows address and phone).
- No online ordering or reservation backend — external links only (Uber Eats, Bolt Food, Glovo, phone, WhatsApp).
- No privacy/cookie policy page exists yet (none exists on the current site either); add one if you collect analytics.
- Opening hours were verified against the live site in October 2026 and should be re-confirmed with the restaurant periodically.
- Japanese translations of dish names are descriptive and should be reviewed by the restaurant.
- Performance is a hand-turn but not yet measured in the deployed environment (JS bundle ≈ 58 kB gzip; images are JPEG, not yet converted to WebP/AVIF).
