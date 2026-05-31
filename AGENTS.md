# AGENTS — services.flexgrafik.nl

## Projekt
Standalone B2B SMB Automation Landing System — FlexGrafik Digital.
Stack: Next.js 16.2.6, React 19, TypeScript, Tailwind v4, Framer Motion, Lucide React.

## Workflow
- Hermes = orchestrator (planuje, deleguje, weryfikuje)
- OpenCode = executor (implementuje komponenty, pages)
- Deploy: auto via Vercel CD na push do `master`

## Zasady
1. Jeden komponent per sesja OpenCode — nie mega-diffy.
2. TypeScript strict — zero `any`.
3. Tailwind utility-first — zero inline styles, zero CSS Modules.
4. Dark theme default — CSS vars z `globals.css`.
5. Wszystkie animacje respektują `prefers-reduced-motion`.
6. Mobile-first responsive.
7. Zero secrets w plikach — `.env.local` dla kluczy (gitignored).
8. Po każdej sesji: `npm run build` musi przejść bez błędów.
9. OG image dla każdej nowej route.
10. Sitemap + robots.txt aktualizowane przy nowych stronach.

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

## Testy
- `npm run build` — wymagany przed każdym commitem
- TypeScript: `npm run typecheck`

## Handoff
Każda sesja OpenCode kończy się plikiem `docs/handoffs/YYYY-MM-DD-[feature].md`.
