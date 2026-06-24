# AGENTS — quietforge.flexgrafik.nl

## Projekt
Standalone B2B SMB Conversion Systems Portfolio — FlexGrafik Digital (Quietforge).
Positioning: **Conversion Systems Architect** — see strategy canon below.
Stack: Next.js 16.2.6, React 19, TypeScript, Tailwind v4, Framer Motion, Lucide React.

## Strategy canon (mandatory before page/component work)

Read in order — binding for copy, nav, CTAs, and section composition:

1. `docs/strategy/README.md`
2. `docs/strategy/marketing-strategy.md`
3. **`docs/strategy/site-map.md`** — home section order (LOCKED), 8-repo map, intent colors
4. `docs/strategy/conversion-pipeline.md`
5. `docs/strategy/ui-ux-principles.md`

**Content sources:** `src/content/ecosystem.ts`, `src/content/proof.ts`, `src/content/conversion-copy.ts`

**Anti-chaos:** Zmiana `page.tsx` (home) = aktualizacja `site-map.md` w tej samej sesji.

Visual implementation: `DESIGN-SYSTEM.md` + `src/app/globals.css`. Project memory: `brain.md`.

## Workflow
- Hermes = orchestrator (planuje, deleguje, weryfikuje)
- OpenCode = executor (implementuje komponenty, pages)
- Deploy: auto via Vercel CD na push do `master`

## Zasady
1. Jeden komponent per sesja OpenCode — nie mega-diffy. Zmiany muszą być zgodne ze strategy canon. **Batch mode:** max 3 sekcje/sesja z build gate między.
2. TypeScript strict — zero `any`.
3. Tailwind utility-first — **max 8 utility classes per element**; przekrocz → wyciągnij do `qf-*` w quietforge.css.
4. Dark theme default — CSS vars z `globals.css`.
5. Wszystkie animacje respektują `prefers-reduced-motion`.
6. Mobile-first responsive.
7. Zero secrets w plikach — `.env.local` dla kluczy (gitignored).
8. Po każdej sesji: `npm run build` musi przejść bez błędów.
9. OG image dla każdej nowej route.
10. Sitemap + robots.txt aktualizowane przy nowych stronach (sitemap via build script).
11. **JSON-LD:** Root layout — `Organization` + `Person` (Norbert Wozniak, founder, quietforge.flexgrafik.nl) + existing `WebSite`.

## Struktura
```
src/
  app/          — Next.js App Router pages
  components/   — React components (ui/ + feature components)
public/
  og/           — Open Graph images (1200×630 SVG)
```

## Design tokens
Źródło prawdy: `src/app/globals.css` — CSS custom properties.
Nie duplikuj wartości. Importuj z tokenów.

**Globalne Kolory Korzyści (Intent Colors):**
- `--fx-time` (Czerwony) - Oszczędność czasu
- `--fx-money` (Zielony) - Przychody / zysk
- `--fx-order` (Niebieski) - Porządek i systemy
- `--fx-calm` (Żółty) - Mniej stresu i chaosu
- `--fx-efficiency` (Fiolet) - Efektywność zespołu

Tailwind v4: dostępne jako klasy np. `text-fx-money`, `bg-fx-time`.
Akcenty per repo są ładowane via atrybut `data-app="nazwa-repo"` w sekcji `<body>`.

## Testy
- `npm run build` — wymagany przed każdym commitem
- TypeScript: `npm run typecheck`

## Handoff
Każda sesja OpenCode kończy się plikiem `docs/handoffs/YYYY-MM-DD-[feature].md`.
