# Handoff: Phase 4 + 5 Complete + Deploy Fix

## Context

Kompleksowa sesja: zakończono Phase 4 (trust pages) + Phase 5 (blog + book-discovery) + naprawiono deploy Vercel (404). 22 strony live pod `https://flexgrafik-services.vercel.app/`.

## Deliverables

### Phase 4 (Trust Pages) — DONE
- `/how-it-works` — 8 sekcji: Hero, 3 Steps, HITL, Timeline, FAQ, CTA
- `/results` — 4 use cases (Problem→System→Result), [X] placeholders
- `/about` — Story, 3 moat pillars, principles, Pillar 3 bridge

### Phase 5 (Blog + Book Discovery) — DONE
- Blog system MDX: `@next/mdx`, `mdx-components.tsx`, layout, listing, `[slug]` dynamic
- 3 seed MDX posts: automation, digital transformation, under the hood
- `/book-discovery` — 8 sekcji + formularz (bez Mollie — wymaga API key)

### Deploy Fix — DONE
- Root cause: `output: 'export'` + `distDir` niekompatybilne z Vercel Next.js preset
- Fix: `vercel.json` → `"framework": "nextjs"`, usunięcie `output: 'export'` z `next.config.ts`
- Workflow: uproszczony do single-job build+deploy (Vercel auto-builduje .next/)
- Result: 22/22 routes, HTTP 200 na wszystkich głównych URLach

## Build Results
- `npm run build`: ✅ PASS — 22/22 routes (17 static + 5 SSG)
- `npm run typecheck`: ✅ PASS — zero TS errors
- Deploy: ✅ `https://flexgrafik-services.vercel.app/`

## Files Changed (session)

| File | Action |
|---|---|
| `src/app/how-it-works/page.tsx` | New |
| `src/app/results/page.tsx` | New |
| `src/app/about/page.tsx` | New |
| `src/app/pricing/page.tsx` | New (poprzednia sesja) |
| `src/app/solutions/managed-automation/page.tsx` | New (poprzednia sesja) |
| `src/app/blog/page.tsx` | New |
| `src/app/blog/[slug]/page.tsx` | New |
| `src/app/blog/layout.tsx` | New |
| `src/app/blog/posts/*.mdx` | New (3 posts) |
| `src/app/book-discovery/page.tsx` | New |
| `src/app/book-discovery/BookDiscoveryForm.tsx` | New |
| `src/mdx-components.tsx` | New |
| `public/og/*.svg` | New (7 OG images) |
| `public/sitemap.xml` | Modified — 8 routes added |
| `next.config.ts` | Modified — MDX + removed output:export |
| `vercel.json` | Modified — framework: nextjs |
| `.github/workflows/deploy.yml` | Modified — simplified |
| `package.json` | Modified — @next/mdx installed |

## Decisions

| Decyzja | Uzasadnienie |
|---|---|
| Bez Mollie w tej sesji | Brak `MOLLIE_API_KEY` — wymaga osobnej sesji z env vars |
| Hardcoded POST_META registry | `@next/mdx` nie auto-exportuje frontmatter — runtime contract |
| No static export on Vercel | Vercel natywnie obsługuje Next.js App Router — static export psuje deploy |
| Blog bez kategorii-filter | Listing statyczny wystarczy na start — filter można dodać później |

## Blockers

| Bloker | Rozwiązanie |
|---|---|
| `services.flexgrafik.nl` DNS nie istnieje | Rekord A `76.76.21.21` dla subdomeny `services` w Cyber-Folks |
| Mollie brak | Dodaj `MOLLIE_API_KEY` do `.env.local` + GitHub secrets, potem wire form |
| 10 stron bez OG image | Phase 6 OG audit — stworzyć brakujące SVG |
| GH Actions Node.js 20 deprecated | Upgrade `actions/setup-node@v4` → node-version: '24' |

## OG Image Audit (pre-Phase 6)

| Strona | OG? |
|---|---|
| `/` (home) | ✅ |
| `/about` | ✅ |
| `/book-discovery` | ✅ |
| `/how-it-works` | ✅ |
| `/pricing` | ✅ |
| `/results` | ✅ |
| `/solutions/managed-automation` | ✅ |
| `/blog` | ❌ |
| `/blog/[slug]` | ❌ |
| `/digital-modernization` | ❌ |
| `/inbox-killer` | ❌ |
| `/legal` | ❌ |
| `/solutions` | ❌ |
| `/solutions/inbox-killer` | ❌ |
| `/solutions/web-upgrade` | ❌ |
| `/solutions/sales-funnel` | ❌ |
| `/solutions/lead-magnet-game` | ❌ |

## State
- **services**: ✅ Live — `https://flexgrafik-services.vercel.app/`, 22 routes, build clean
- **DNS**: ❌ `services.flexgrafik.nl` — brak rekordu A w Cyber-Folks
- **Mollie**: ❌ Brak API key — formularz pokazuje tylko confirmation message

## Next Steps (najbliższa sesja)
1. **Phase 6 OG Image Audit** — dodać OG do 10 brakujących stron (blog, legal, solutions, ladder pages)
2. **Phase 6 Meta Audit** — zweryfikować metadata na każdej stronie
3. **Phase 6 Broken Link Check** — `npm run audit:links` + manual CTA flow check
4. **Mollie integration** — po dostarczeniu API key przez użytkownika
