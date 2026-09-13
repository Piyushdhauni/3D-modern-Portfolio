# Piyush Dhauni — Portfolio

A 3D, motion-driven portfolio built with Next.js, React Three Fiber / three.js,
GSAP, Framer Motion and Tailwind CSS — ready to push to GitHub and deploy on
Vercel.

## Stack

| Tool | Role |
|---|---|
| **Next.js 14** (App Router) | Project structure, routing, deployment target |
| **three.js + React Three Fiber** | The morphing wireframe hero sphere |
| **GSAP** | The hero's orchestrated load-in sequence |
| **Framer Motion** | Scroll reveals and hover micro-interactions |
| **Tailwind CSS** | Layout, type scale, spacing |
| **Spline** *(optional)* | Drop-in slot for a custom 3D scene — see `components/SplineEmbed.tsx` |
| **Vercel** | Hosting / deployment |
| **GitHub** | Version control, connected to Vercel for auto-deploys |

## Design language

Near-black base (`#0a0a0a`) with a single acid-green accent (`#cdff3d`),
Bebas Neue for display type, Cormorant Italic for softer editorial lines, and
DM Mono for labels and body copy — restrained, typographic, one deliberate
motion moment on load rather than animation on everything.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

```
app/
  layout.tsx        fonts + metadata
  page.tsx           assembles all sections
  globals.css        base styles, marquee keyframes, grain texture
components/
  Scene.tsx          R3F canvas — the morphing wireframe sphere
  Hero.tsx           GSAP timeline for the load-in
  Navbar.tsx         fixed nav, mix-blend-mode
  Marquee.tsx        scrolling skills ticker
  About.tsx          bio + certification
  Skills.tsx         skills list with hover state
  Projects.tsx       project grid (placeholder copy — see below)
  Contact.tsx        closing CTA
  Footer.tsx
  SplineEmbed.tsx    optional slot for a Spline scene
lib/
  noise.ts           simplex noise used to displace the sphere's vertices
```

## Before you make it yours

This ships with real structure and working code, but placeholder content in
a few spots — swap these before publishing:

- **`components/Projects.tsx`** — the four entries are drawn from things
  you've mentioned building (a glassmorphism UI panel, a film-strip photo
  concept, a coded animated illustration, a browser game concept). Replace
  the descriptions with real write-ups, links and screenshots once each
  project has a home.
- **`components/Contact.tsx`** — update the email address and social links.
- **`components/SplineEmbed.tsx`** — optional. Design a scene at
  [spline.design](https://spline.design), export it as a Public URL, and
  add it to `.env.local` as `NEXT_PUBLIC_SPLINE_SCENE_URL`. Drop
  `<SplineEmbed />` into `About.tsx` (or anywhere) once you have a URL — it
  renders a placeholder box until you do.
- **`app/layout.tsx`** — update `metadataBase` once you have your real
  domain.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
2. Framework preset: **Next.js** (auto-detected) — no config needed.
3. If you set `NEXT_PUBLIC_SPLINE_SCENE_URL`, add it under
   **Settings → Environment Variables** before deploying.
4. Deploy. Every push to `main` redeploys automatically.

## Notes

- The hero sphere and page scroll are already tuned to respect
  `prefers-reduced-motion`.
- `next.config.mjs` sets `eslint.ignoreDuringBuilds: true` so a first deploy
  isn't blocked by lint config you haven't set up yet — safe to remove once
  you've wired up your own ESLint rules.
- This was hand-authored rather than scaffolded by a CLI, so run
  `npm install && npm run dev` once locally before you push, just to confirm
  versions resolve cleanly in your environment.
