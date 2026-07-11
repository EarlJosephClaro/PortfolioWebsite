# Earl Joseph A. Claro — Portfolio

A personal portfolio and résumé site for **Earl Joseph A. Claro**, a full-stack web developer at Sun-Asterisk specializing in React, Next.js, and NestJS. Built as a warm, editorial single-page site — deliberately *not* a generic template.

**Live:** https://earljosephclaro.github.io/PortfolioWebsite/

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Spectral (serif display) · Hanken Grotesk (body) · JetBrains Mono (metrics/labels) — via `next/font/google`
- **Icons:** React Icons
- **Hosting:** GitHub Pages (GitHub Actions)

## 🎨 Design System

The visual direction is documented in two root files:

- **[PRODUCT.md](PRODUCT.md)** — strategy: audience, positioning, brand personality, and design principles.
- **[DESIGN.md](DESIGN.md)** — visual system: palette, typography, elevation, components, and do's/don'ts.

Highlights:

- Warm terracotta accent (`#C0562E`) on a true off-white canvas (`#FBFAF8`) — warmth carried by color and type, never a beige background.
- Flat-by-default surfaces with 1px hairline borders; shadows only appear on hover/focus.
- WCAG AA contrast, visible terracotta focus rings, and a reduced-motion-safe entrance animation.
- Proof metrics surfaced as monospace typographic moments rather than a gradient hero-metric block.

## 📄 Sections

Hero · About · Professional Experience · Technical Skills · Education & Languages · Contact

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install & run

```bash
npm install
npm run dev      # http://localhost:3002
```

### Build (static export)

```bash
npm run build    # outputs static site to ./out
```

## 📁 Project Structure

```
ResumeWebsite/
├── app/
│   ├── layout.tsx        # Root layout — fonts + metadata
│   ├── page.tsx          # Home — section composition
│   └── globals.css       # Design tokens, base styles, motion
├── components/
│   ├── Header.tsx        # Fixed nav (scroll-aware)
│   ├── Hero.tsx          # Landing + proof metrics
│   ├── About.tsx         # Summary + focus / achievements
│   ├── Experience.tsx    # Work history
│   ├── Skills.tsx        # Technical skills
│   ├── Education.tsx     # Education & languages
│   ├── Contact.tsx       # Contact channels
│   ├── Footer.tsx        # Footer
│   └── SectionHeading.tsx # Shared section heading (Spectral + terracotta rule)
├── data/
│   └── resume.ts         # All résumé content — edit here
├── PRODUCT.md            # Product / strategy doc
├── DESIGN.md             # Visual design system
├── tailwind.config.ts    # Palette + font tokens
├── next.config.ts        # Static export + GitHub Pages basePath
└── .github/workflows/deploy.yml  # GitHub Pages CI
```

## ✏️ Customization

- **Content:** edit [`data/resume.ts`](data/resume.ts) — personal info, experience, skills, education, languages.
- **Palette & fonts:** [`tailwind.config.ts`](tailwind.config.ts) and [`app/layout.tsx`](app/layout.tsx).
- **Design rules:** [`DESIGN.md`](DESIGN.md).

## 🌐 Deployment

Every push to `main` triggers the **Deploy to GitHub Pages** workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)): it runs `npm run build` (with `GITHUB_PAGES=true` for the correct `basePath`) and publishes `./out` to GitHub Pages. It can also be run manually from **Actions → Deploy to GitHub Pages → Run workflow**.

## 📧 Contact

- **Email:** earlclaro@gmail.com
- **GitHub:** [EarlJosephClaro](https://github.com/EarlJosephClaro)
- **LinkedIn:** [Earl Joseph Claro](https://www.linkedin.com/in/earl-joseph-claro-603350163/)

---

*"Keep Building Confidence and Keep Coding."*
