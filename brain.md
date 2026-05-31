# Brain — services.flexgrafik.nl

## Canonicka pamięć projektu | v1.0 | 2026-05-30

---

## 1) IDENTYTET

| | |
|---|---|
| **Domena** | `services.flexgrafik.nl` |
| **Subdomena** | Tak — osobny asset od `portfolio.flexgrafik.nl` |
| **Repo** | `portfolio/services/` (monorepo) |
| **Linked Vercel** | `wozniaknorbert95-dels-projects/flexgrafik-services` |
| **Rol** | B2B SMB Automation Landing System — konwersja ZZP/SMB na leady |
| **Język** | Angielski (wszystkie B2B assets) |
| **Audience** | ZZP, małe BV, profesjonalne usługi (księgowi, konsultanci) |

---

## 2) CEL

Sprzedaż jednego produktu: **Inbox Killer** (AI Lead Qualification).

- €497 setup + €147/mo
- Deploy w 48h
- Klient podłącza tylko email (Gmail/Outlook) — reszta jest automatyczna

**Nie sprzedajemy:** stron WWW, e-commerce, marketingu. To przyjdzie po unfrozeniu (14 dni).

---

## 3) AUDIENCJE i SEPARACJA

| Track | Asset | Audience | Reguła |
|---|---|---|---|
| 3 | `portfolio.flexgrafik.nl` | Enterprise AI engineering | **Święty.** Zero ZZP, zero cen, zero packages. |
| 4 | `services.flexgrafik.nl` | SMB/ZZP automation | **Konwersja.** Zero LangGraph, zero repo, zero technicznego żargonu. |

**Most:** Historia Norberta Wozniaka ("Zbudowałem systemy dla własnej drukarni...") — ale bez szczegółów technicznych.

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

## 5) ARCHITEKTURA INFORMACJI (Flat)

```
/                        → Hero LP (one product: Inbox Killer)
/inbox-killer/           → Deep-dive product page
/digital-modernization/  → Placeholder "coming soon" + waitlist
/legal/                  → Privacy + Terms (GDPR)
```

**Zasada:** Każda strona to osobny lejek. Brak nawigacji na `/inbox-killer/` — tylko logo + "Back to home".

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
3. **One product na stronie głównej.** Inbox Killer. Nie dwa, nie trzy. Jedna CTA above the fold.
4. **Animacje respektują `prefers-reduced-motion`.** Framer Motion wyłączone, transition: none.
5. **Mobile-first responsive.** Wszystkie sekcje stackują pionowo. Tap targets ≥ 44px.
6. **Zero sekretów w repo.** Klucze, tokeny, hasła w `.env.local` (`.gitignore`).
7. **Deploy: Vercel auto na push do `main`.** Wyjątek od Zasady 11 — to marketing asset, nie produkcyjna infra.
8. **OG image dla każdej nowej route.** 1200×630 SVG lub PNG w `public/og/`.
9. **Sitemap + robots.txt** aktualizowane przy każdej nowej stronie.

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
| Mobile viewport | No horizontal scroll, readable fonts |
| Tap targets | ≥ 44px |
| One CTA above fold | "Book Free Demo" widoczny bez scrolla |
| OG images | Wszystkie main routes mają OG image |
| Broken links | Zero 404 (sprawdź `npm run audit:links`) |

---

## 10) SOURCE OF TRUTH

| Dokument | Ścieżka |
|---|---|
| Strategia B2B | `portfolio/docs/strategy/B2B-SMB-AUTOMATION-STRATEGY-EN.md` |
| Portfolio AGENTS.md | `portfolio/AGENTS.md` |
| Design tokens | `services/src/app/globals.css` |
| Handoffi | `portfolio/docs/handoffs/2026-05-30-*.md` |
| Strategia architektury | `portfolio/docs/opencode-prompts/plan architektury i optymalizacji.md` |

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
- Więcej niż jeden produkt na stronie głównej.
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

*Last updated: 2026-05-30 | Owner: Norbert Wozniak | Next review: 2026-06-06 (po spotkaniu KFA)*
