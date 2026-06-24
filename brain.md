# Brain — services.flexgrafik.nl

## Canonicka pamięć projektu | v1.1 | 2026-06-17

---

## 0) STRATEGY CANON (v2 — read first)

**Marketing, conversion, and UX decisions are owned by `docs/strategy/`, not this file.**

| Document | Path |
|----------|------|
| Index + read order | `docs/strategy/README.md` |
| Marketing & positioning | `docs/strategy/marketing-strategy.md` |
| User flow, nav, qualification | `docs/strategy/conversion-pipeline.md` |
| UI hierarchy & motion | `docs/strategy/ui-ux-principles.md` |

**Positioning (v2):** Conversion Systems Architect — systems that qualify leads and reduce admin, not "web designer".

**Primary funnel:** Home → Hard proof (results / VCMS) → Qualification (wizard / book-discovery) → Strategy call.

Sections §2 (single-product goal) and §5 (flat IA) below are **historical** — superseded by strategy v2 where they conflict. Tech stack, guardrails, deploy, and tokens in this file remain binding.

---

## 1) IDENTYTET

| | |
|---|---|
| **Domena** | `services.flexgrafik.nl` |
| **Subdomena** | Tak — osobny asset od `portfolio.flexgrafik.nl` |
| **Repo** | `wozniaknorbert95-del/services` (standalone) |
| **Linked Vercel** | `wozniaknorbert95-dels-projects/flexgrafik-services` |
| **Rol** | B2B SMB Conversion Systems Portfolio — konwersja ZZP/SMB na zakwalifikowane leady |
| **Positioning** | Conversion Systems Architect (see `docs/strategy/marketing-strategy.md`) |
| **Język** | Angielski (wszystkie B2B assets) |
| **Audience** | ZZP, małe BV, profesjonalne usługi (księgowi, konsultanci) |

---

## 2) CEL

> **Superseded for copy/IA by `docs/strategy/`** — kept for historical context.

Portfolio sprzedaży systemów konwersji dla SMB. Flagship proof: **Wizard Cash Engine** + product ladder (Inbox Killer, Sales Funnel, Web Upgrade).

- Discovery: Automation Map (paid session)
- Project floors: see `src/lib/constants.ts` → `PRICING`
- Wizard (qualification): `https://zzpackage.flexgrafik.nl/`

**Canonical commercial + funnel rules:** `docs/strategy/conversion-pipeline.md`

---

## 3) AUDIENCJE i SEPARACJA

> **⚠ SUPERSEDED 2026-06-25 — Track 4 rule below is STALE.**  
> Site now shows governed ecosystem proof (LOS, Built vs Planned, owner-ecosystem map) with B2B framing — not zero-repo zero-jargon.  
> **Canonical copy/IA:** `docs/strategy/marketing-strategy.md` · **Home order:** `docs/strategy/site-map.md` §2.

| Track | Asset | Audience | Reguła |
|---|---|---|---|
| 3 | `portfolio.flexgrafik.nl` | Enterprise AI engineering | **Święty.** Zero ZZP, zero cen, zero packages. |
| 4 | `quietforge.flexgrafik.nl` (repo `services`) | SMB/ZZP + investor bridge | **Konwersja + LOS canon on home** (`living-system-architecture.md`). SMB buyer path via PainGrid; `/results/owner-ecosystem/` for tech/investor audience. |

**Home architecture (2026-06-25):** Full LOS on home §2 — 6 layers + Memory, life loop, three brains, `los-architecture.svg`. Repo router always shows 8 repos (`ECOSYSTEM_REPOS`). SMB pipeline (`SystemArchitecture`) removed from home; component retained for future `/how-it-works` use.

---

## 4) TECH STACK

| Warstwa | Technologia |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| React | 19.2.4 |
| TypeScript | strict, `noEmit` |
| Styling | Tailwind CSS v4 (utility-first) |
| Animacje | Framer Motion + `prefers-reduced-motion` |
| Ikony | Lucide React |
| Deploy | Vercel static export (`output: 'export'`) |
| Build artifact | `dist/` (nie `.next/`) |

---

## 5) ARCHITEKTURA INFORMACJI

> **Canonical sitemap, nav, home section order:** `docs/strategy/conversion-pipeline.md` §6

**Live routes (summary):** `/` · `/solutions/*` · `/results/*` · `/how-it-works/` · `/pricing/` · `/book-discovery/` · `/founder/` · `/about/` · `/trust/` · `/legal/`

**Zasada:** Każda route ma jeden funnel job. Nowe strony = OG + sitemap + handoff z odwołaniem do strategy canon.

---

## 6) DESIGN TOKENS

**Źródło prawdy:** `src/app/globals.css` — CSS custom properties.

```css
:root {
  --color-bg: #090c11;
  --color-bg-surface: #0f1318;
  --color-bg-elevated: #161b22;
  --color-border: #21262d;
  --color-text-primary: #e6edf3;
  --color-text-secondary: #8b949e;
  --color-text-muted: #484f58;
  --color-accent: #58a6ff;
  --color-accent-glow: #1f6feb;
  --color-green: #3fb950;
  --color-amber: #d29922;
  --color-red: #f85149;
}
```

**Zakaz:** inline `style={{...}}`, hardcoded kolory, CSS Modules. Wszystko przez Tailwind utility classes z `var(--color-*)`.

---

## 7) GUARDRAILS (TWARDE)

1. **`npm run build` musi przejść przed każdym commitem.** Zero wyjątków.
2. **TypeScript strict — zero `any`.** `npx tsc --noEmit` jako dodatkowa weryfikacja.
3. **One primary CTA above the fold** — cold traffic: See systems; warm: Book or WhatsApp — see strategy canon.
4. **Animacje respektują `prefers-reduced-motion`.** Framer Motion wyłączone, transition: none.
5. **Mobile-first responsive.** Wszystkie sekcje stackują pionowo. Tap targets ≥ 44px.
6. **Zero sekretów w repo.** Klucze, tokeny, hasła w `.env.local` (`.gitignore`).
7. **Deploy: Vercel auto na push do `master`.** Wyjątek od Zasady 11 — marketing asset.
8. **OG image dla każdej nowej route.** 1200×630 via `scripts/generate-og.mjs` template.
9. **Sitemap** regeneruje się on build (`scripts/generate-sitemap.mjs`).
10. **Continuity rule:** Każdy wdrożony system ma documented handoff (diagram + runbook) w VCMS. Norbert unavailable 2 weeks → system runs without intervention for ~80% cases.
11. **WhatsApp AVG:** Explicit opt-in przed pierwszą wiadomością. Retention max 90 dni. Right-to-delete webhook do VCMS. Privacy policy update przed launch agenta.
12. **Build fail = PR blocked.** Build pass z env warning = OK dev; **blokuje deploy prod** jeśli brakuje wymaganego env (np. `NEXT_PUBLIC_WHATSAPP_URL`).
13. **Images:** WebP preferred; screenshots max 1600px width; lazy below fold. SVG inline only if &lt;5KB.

---

## 8) DEPLOY RULES

### Vercel

```bash
# Project linked: wozniaknorbert95-dels-projects/flexgrafik-services
# Sprawdź status:
npx vercel projects ls

# Deploy production:
npx vercel dist --prod --yes
```

### DNS (services.flexgrafik.nl)

W panelu Cyber-Folks (ns1.cyberfolks.pl) dodaj:

**Opcja A (szybsza):**
- Typ: A
- Host: `services`
- Wartość: `76.76.21.21`

**Opcja B (CNAME):**
- Typ: CNAME
- Host: `services`
- Wartość: `cname.vercel-dns.com`

Po dodaniu: `npx vercel domains inspect services.flexgrafik.nl`

---

## 9) WERYFIKACJA PO DEPLOYU

### Automatyczna

```bash
# Health check
curl -sI https://flexgrafik-services.vercel.app/ | head -1

# Po DNS:
curl -sI https://services.flexgrafik.nl/ | head -1

# Lighthouse (wymaga globalnego `npm install -g lighthouse`)
lighthouse https://services.flexgrafik.nl --output=json --chrome-flags="--headless"
```

### Manualna

| Checkpoint | Target |
|---|---|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| **CI gate** | `npm run lighthouse:ci` — blocks merge if Accessibility &lt;95 or Performance &lt;85; blocks release if Best Practices or SEO &lt;95 |
| Mobile viewport | No horizontal scroll, readable fonts |
| Tap targets | ≥ 44px |
| One CTA above fold | "Book Free Demo" widoczny bez scrolla |
| OG images | Wszystkie main routes mają OG image |
| Broken links | Zero 404 (sprawdź `npm run audit:links`) |

---

## 10) SOURCE OF TRUTH

| Dokument | Ścieżka |
|---|---|
| **Strategy canon (v2)** | `docs/strategy/README.md` → marketing · conversion · ui-ux |
| Marketing & positioning | `docs/strategy/marketing-strategy.md` |
| Conversion & user flow | `docs/strategy/conversion-pipeline.md` |
| UI/UX principles | `docs/strategy/ui-ux-principles.md` |
| Design system (visual) | `DESIGN-SYSTEM.md` · `quietforge.css` |
| Design tokens (code) | `src/app/globals.css` |
| Routes & pricing constants | `src/lib/constants.ts` |
| Handoffi | `docs/handoffs/YYYY-MM-DD-*.md` |
| Cross-repo B2B strategy (ref) | `portfolio/docs/strategy/B2B-SMB-AUTOMATION-STRATEGY-EN.md` |

---

## 11) BACKLOG

Aktualny backlog: `services/todo.json` (do utworzenia) lub GitHub Issues.

**Rekomendacja:** Utrzymuj `TODO.md` w root `services/` z krótką listą:
- Phase 2 strony: `/website-modernization/`, `/marketing-automation/`
- Formularz kontaktowy (webhook do Make/Zapier)
- Case Study #2 (FitDiet lub inny klient)
- OG images per dynamic route (jeśli powstaną)

---

## 12) DO'S & DON'TS

### ✅ DO
- Sales copy first, code second.
- Każda sekcja ma jeden cel psychologiczny (PAS framework).
- Hard data w pain points ("12h/week", "€800–1,500/mo").
- Before/After metrics w case studies.
- Risk reversal na każdym etapie (gwarancja, Zasada 11, no lock-in).
- Framer Motion dla scroll animations — ale tylko fade/slide, nie przesadzaj.

### ❌ DON'T
- Tech jargon w copy SMB-facing (nie "LangGraph", nie "LLM pipeline").
- Portfolio/enterprise content na tej domenie.
- Feature-dump copy bez Problem → System → Effect (see marketing-strategy.md).
- Stock photos — używaj placeholderów lub screenshotów z realnych projektów.
- Inline styles — zawsze Tailwind + CSS vars.
- Commit bez `npm run build`.

---

## 13) KLUCZOWE PLIKI

| Plik | Cel |
|---|---|
| `src/app/globals.css` | Design tokens — źródło prawdy |
| `src/app/layout.tsx` | Root metadata, JSON-LD, fonts |
| `src/app/page.tsx` | Home — kompozycja wszystkich sekcji |
| `src/components/ui/*` | Reusable atoms: Button, Card, Section, Badge |
| `public/og/*.svg` | OG images dla wszystkich route'ów |
| `public/robots.txt` | Allow all + sitemap reference |
| `public/sitemap.xml` | Wszystkie route'y |
| `next.config.ts` | Static export config |

---

## 14) KOMENDY REFERENCYJNE

| Komenda | Cel |
|---|---|
| `npm run build` | Static export do `dist/` |
| `npm run typecheck` | TypeScript strict check (`tsc --noEmit`) |
| `npm run lint` | ESLint |
| `npm run audit:links` | Sprawdzenie broken links |
| `npx vercel dist --prod` | Deploy na Vercel production |
| `npx vercel domains inspect services.flexgrafik.nl` | Status domeny |
| `npx vercel projects ls` | Lista projektów |

---

*Last updated: 2026-06-17 | Owner: Norbert Wozniak | Next review: after enterprise polish sprint (implementation phase)*
