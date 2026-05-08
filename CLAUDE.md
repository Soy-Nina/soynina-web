# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Next.js dev server
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Next.js linting
```

No test runner is configured.

## Architecture

This is a **Next.js (App Router) bilingual nonprofit website** for Soy Niña (Costa Rica), deployed on Netlify with Decap CMS for content management.

### Routing & i18n

- Uses `next-intl` with Spanish as the default locale (no URL prefix) and English under `/en/`
- All pages live under `app/[locale]/` — the locale segment resolves to `es` or `en`
- `localeDetection: false` and `localePrefix: "as-needed"` — Spanish URLs have no prefix
- i18n config lives in `src/i18n/` (routing.ts, request.ts, navigation.ts)
- Translation strings are in `messages/es.json` and `messages/en.json`, editable via CMS

### Content Management

Content is file-system based (no database):

- **Blog posts**: Markdown with YAML frontmatter in `content/blog/es/` and `content/blog/en/`; parsed via `gray-matter` + `marked` through `lib/blog.ts`
- **Reports**: Markdown frontmatter with PDF links in `content/reports/`; parsed via `lib/reports.ts`; PDFs stored in `public/reports/`
- **Site text**: All UI copy lives in `messages/es.json` and `messages/en.json`; consumed via `useTranslations()` from `next-intl`
- **Events**: Fetched from `/api/events` endpoint; fallback data in `lib/events-data.ts`
- Decap CMS config at `public/admin/config.yml` — backend is GitHub (branch: `staging`)

### Component Structure

- `components/soy-nina/` — page-level feature components (Hero, Programs, Impact, Events, Donate, etc.)
- `components/ui/` — low-level Shadcn/Radix UI primitives; do not modify unless changing the design system
- `hooks/` — `use-mobile.ts`, `use-toast.ts`

### Styling

- Tailwind CSS 4 via `@tailwindcss/postcss`
- Brand color palette defined as CSS variables in `app/globals.css`:
  - Purple `#4526c9`, Magenta `#fe35fe`, Navy `#140b3f`, Lime `#e0ff4f`, Teal `#00c49a`
- Icons from `lucide-react`

### Key Libraries

| Purpose | Library |
|---|---|
| i18n | `next-intl` |
| Markdown parsing | `gray-matter`, `marked` |
| Map | `react-leaflet` |
| Donations | `@paypal/react-paypal-js` |
| UI primitives | `@radix-ui/*`, Shadcn |
| Animations | `tailwindcss-animate` |

### SEO & Metadata

- Each page exports `generateMetadata` using helpers from `lib/metadata.ts`
- `getAlternates()` generates `hreflang` alternates for ES/EN
- `app/sitemap.ts` and `app/robots.ts` are auto-generated

### Deployment

- Netlify: build command `npm run build`, functions in `netlify/functions/` (esbuild bundler)
- CMS pushes content directly to the `staging` branch
- Images: `next.config.mjs` sets `unoptimized: true` for images
