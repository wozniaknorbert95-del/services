# Handoff: services.flexgrafik.nl — Rebuild + Brain + Workflows

## Context

Profesjonalna przebudowa landing page `services.flexgrafik.nl` z amatorskiego one-pagera na konwersyjny B2B system. Dodanie `brain.md`, workflow'ów `.agents/workflows/` oraz profesjonalnych komend. Zakończenie sesji z pełną dokumentacją operacyjną.

## Deliverables

### 1. Landing Page Rebuild (Professional CRO)

| Sekcja | Opis |
|---|---|
| Hero | "Your inbox is 80% noise. We surface the 20% that pays." — one product focus, dual CTA (Calendly + scroll), Framer Motion fade-in |
| Trust Bar | KFA Finanse, FlexGrafik, FitDiet — grayscale logos, minimal |
| Pain Points | 3 karty z hard data: "12h/week", "1 in 3 hot leads", "€800–1,500/mo" |
| Solution | Inbox Killer: €497 + €147/mo, 6 feature bullets, "First 5 clients free" |
| How It Works | 5-step timeline z ikonami (Scan → Call → Build → Approve → Launch) |
| Case Studies | KFA (Before: 12h/week → After: 3x leads) + FitDiet placeholder |
| Project Showcase | app.flexgrafik.nl + zzpackage.flexgrafik.nl — screenshot placeholders |
| Risk Reversal | No lock-in, Human approval (Zasada 11), 48h delivery promise |
| Final CTA | "Ready to stop losing leads?" — Calendly + email |
| Footer | Copyright + links (portfolio, flexgrafik.nl, legal) |

### 2. Product Pages

| Route | Zawartość |
|---|---|
| `/inbox-killer/` | Deep-dive: pricing, features, FAQ (3 questions), back-to-home |
| `/digital-modernization/` | Coming soon + waitlist form (client component) |
| `/legal/` | Privacy Policy + Terms of Service (GDPR compliance) |

### 3. SEO & Infrastructure

- Per-page `metadata: Metadata` z OG images, Twitter cards
- `public/robots.txt` — allow all + sitemap reference
- `public/sitemap.xml` — 4 routes
- `public/og/*.svg` — 3 OG images (home, inbox-killer, modernization)
- Static export (`output: 'export'`) w `next.config.ts`

### 4. UI Primitives (`src/components/ui/`)

| Komponent | Cel |
|---|---|
| `Section.tsx` | Wrapper z Framer Motion scroll animation |
| `Button.tsx` | Primary / Secondary / Ghost variants |
| `Card.tsx` | Default + Accent border variants |
| `Badge.tsx` | Label tags (mono font, accent colors) |

### 5. Brain + Workflows

| Plik | Cel |
|---|---|
| `brain.md` | 14-sekcyjny kanon projektu (PL) — stack, guardrails, deploy, komendy |
| `.agents/workflows/vibe-init.md` | Start sesji — klasyfikacja zadania, constrainty, router |
| `.agents/workflows/handoff.md` | Zakończenie sesji — template handoff doc |
| `.agents/workflows/build-check.md` | Pre-commit build + TS verification |
| `.agents/workflows/deploy-vercel.md` | Vercel deploy + DNS config |
| `.agents/workflows/new-page.md` | Scaffold nowej strony |
| `.agents/workflows/seo-audit.md` | Lighthouse + manual checklist |
| `.agents/workflows/component-scaffold.md` | Tworzenie komponentów |

### 6. package.json Scripts

```json
{
  "lint": "next lint",
  "typecheck": "tsc --noEmit",
  "audit:links": "npx broken-link-checker https://services.flexgrafik.nl --ordered"
}
```

## Build Results

- `npm run build`: **PASS** — 7/7 static pages, 0 errors
- `npm run typecheck`: **PASS** — `tsc --noEmit`, 0 errors
- Routes: `/`, `/inbox-killer/`, `/digital-modernization/`, `/legal/`
- Output: `dist/` z `index.html` i folderami route'ów

## Files Changed

| File | Action |
|---|---|
| `src/app/page.tsx` | Rewrite — kompozycja 10 sekcji |
| `src/app/layout.tsx` | Rewrite — metadata, OG, Twitter, JSON-LD |
| `src/app/globals.css` | Existing — design tokens (unchanged) |
| `src/app/inbox-killer/page.tsx` | **New** — product deep-dive |
| `src/app/digital-modernization/page.tsx` | **New** — coming soon + waitlist |
| `src/app/legal/page.tsx` | **New** — privacy + terms |
| `src/components/Hero.tsx` | Rewrite — PAS copy, Framer Motion, Button/Badge |
| `src/components/PainPoints.tsx` | Rewrite — hard data, icons, Card |
| `src/components/HowItWorks.tsx` | Rewrite — 5-step timeline, icons, motion |
| `src/components/TrustBar.tsx` | **New** — partner logos |
| `src/components/Solution.tsx` | **New** — product card, pricing, features |
| `src/components/CaseStudies.tsx` | **New** — before/after metrics |
| `src/components/ProjectShowcase.tsx` | **New** — project cards with links |
| `src/components/RiskReversal.tsx` | **New** — guarantees + quote |
| `src/components/CTAFinal.tsx` | **New** — final CTA block |
| `src/components/Footer.tsx` | **New** — links, copyright |
| `src/components/WaitlistForm.tsx` | **New** — client component form |
| `src/components/ui/Section.tsx` | **New** — scroll animation wrapper |
| `src/components/ui/Button.tsx` | **New** — 3 variants, sizes |
| `src/components/ui/Card.tsx` | **New** — 2 variants |
| `src/components/ui/Badge.tsx` | **New** — label component |
| `public/og/*.svg` | **New** — 3 OG images |
| `public/robots.txt` | **New** |
| `public/sitemap.xml` | **New** |
| `next.config.ts` | Modify — static export config |
| `package.json` | Modify — new scripts |
| `brain.md` | **New** — canonical project brain |
| `.agents/workflows/*.md` | **New** — 7 workflow files |

## Decisions

| Decyzja | Uzasadnienie |
|---|---|
| One product on homepage | Strategia B2B — zero analysis paralysis |
| English language | Globalny rynek SMB; decyzja strategiczna 2026-05-30 |
| Calendly CTA (nie formularz) | Formularz = Phase 2 (wymaga webhook + Make/Zapier) |
| Static SVG OG images | Szybkie, lekkie, zero zależności zewnętrznych |
| `output: 'export'` | Vercel edge, szybkie ładowanie, no server needed |
| Waitlist form jako client component | Fix Server Component event handler error |
| Polish brain.md, English workflows | brain = dla dowódcy/agentów (PL); workflow commands = CLI (EN) |

## Blockers

| Bloker | Rozwiązanie |
|---|---|
| DNS `services.flexgrafik.nl` nieaktywne | Dodaj A record `76.76.21.21` w panelu Cyber-Folks (ns1.cyberfolks.pl) |
| `digital-modernization` formularz — tylko alert | Wymaga webhook do Make/Zapier (Phase 2, post-validacja) |
| Brak realnych screenshotów projektów | Zrobić screenshoty `app.flexgrafik.nl` i `zzpackage.flexgrafik.nl`, wgrać do `public/projects/` |

## State

- **portfolio**: 47/47 pages, clean, live at `https://portfolio.flexgrafik.nl`
- **services**: rebuilt, 7/7 pages, brain + workflows documented, deployed to `https://flexgrafik-services.vercel.app`
- **DNS**: `services.flexgrafik.nl` wymaga A record → `76.76.21.21`
- **KFA meeting**: June 6 (6 dni) — `/inbox-killer/` gotowy jako live proof
- **72h validation test**: USER robi ręcznie (LinkedIn post + 5 DMs)

## Next Steps

1. **DNS**: Dodaj A record `services` → `76.76.21.21` w Cyber-Folks
2. **Screenshoty**: Zrób i wgraj realne screenshoty projektów (`app.flexgrafik.nl`, `zzpackage.flexgrafik.nl`)
3. **SEO Audit**: Uruchom `npm run audit:links` po propagacji DNS; Lighthouse mobile + desktop
4. **Formularz kontaktowy**: Phase 2 — webhook do Make/Zapier (po walidacji 72h)
5. **Case Study #2**: Zamień FitDiet placeholder na realny case study po pierwszym kliencie
6. **Commit i push**: `git add .`, `git commit -m "feat(services): rebuild landing page + brain + workflows"`, `git push origin master`

---

*Session ended: 2026-05-30 | Build: PASS (7/7) | TypeScript: PASS | Deployed: https://flexgrafik-services.vercel.app*
