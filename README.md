# LeGreen Dzen Wellness

**Premium Section 21 medical cannabis patient portal** — built with React 19, TypeScript, Vite, Tailwind CSS, shadcn/ui, and Framer Motion.

## Features

- **React 19 + TypeScript** — Modern, type-safe architecture
- **Framer Motion** — Smooth scroll animations, hover effects, page transitions
- **Tailwind CSS + shadcn/ui** — Premium dark theme with glass-morphism effects
- **HashRouter** — SPA routing that works on GitHub Pages
- **WhatsApp Integration** — All forms open directly into WhatsApp chat
- **Age Gate** — 18+ verification modal with session storage
- **Patient Menu** — Access-code-gated cultivar catalog (30 strains)
- **Responsive** — Mobile-first design, works on all devices

## Pages

| Route | Description |
|-------|-------------|
| `/` | Public patient portal — hero, how it works, licences, booking, FAQ, contact |
| `/#/patients` | Gated patient menu — 30 cultivars with THC%, effects, Rx indications |

## Access Code

Default patient menu code: `DZEN21` — **change this before launch** and distribute only to verified patients.

## Licences

- **SAHPRA Cultivation Licence**: 0000000095MC (21 Apr 2023 → 21 Apr 2028)
- **Section 21 Collection Point**: UID 25CM002 (valid to 14 Oct 2027)
- **Dispensing Doctor**: Dr. Tupy (Synergy Wellness)
- **Collection Point**: Moshate Gardens, Klipfontein, Molotlegi Rd, Soshanguve

## Deploy

### GitHub Pages (Auto)
A GitHub Actions workflow (`.github/workflows/deploy.yml`) is included. Push to `main` and it builds + deploys automatically.

1. Go to **Settings → Pages**
2. Source: **GitHub Actions**
3. Push to `main` — the workflow handles the rest

### Manual Build
```bash
npm install
npm run build
# Deploy dist/ folder
```

## WhatsApp

+27 66 049 1730
