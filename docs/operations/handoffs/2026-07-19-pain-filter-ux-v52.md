# Handoff — Pain filter UX polish v5.2 (2026-07-19)

**Repo:** quietforge.flexgrafik.nl (services) · **Build:** `npm run build` ✅ (26 sitemap routes)

## Cel / Goal

Pełny pakiet UX P0–P2 na pain/intent routerze po hide-filter + color frames: sticky kontekst, URL share, mobile compact, calm contrast, bridge do modułów — bez zgadywania, z canon sync i ship.

## Co zrobiono / What changed

- **Chips:** `data-intent` CSS (zero inline), short labels (Time/Money/Calm/Team/Order), keyboard toolbar, Clear + See modules
- **Sticky filter bar** under nav while filtering (`IntentFilterSticky`)
- **URL + storage:** `?intent=` ↔ `sessionStorage` via `HomeIntentProvider` + `Suspense` boundary
- **Pain cards:** Losing / You get kickers; hide IntentBadges when filtering; mobile hide body; grid min-height
- **IntentRouter:** filtered H2/lead (`titleFiltered` / `leadFiltered`); calm text token `#fde68a` on dark
- **Canon:** `site-map.md` §3 → **v5.2**; `strategy-check` skill synced

## Pliki / Files

| File | Action |
|------|--------|
| `src/lib/home-intent.tsx` | rewrite — URL + sessionStorage |
| `src/components/home/HomeIntentBoundary.tsx` | new — Suspense wrap |
| `src/components/home/IntentFilterChips.tsx` | rewrite — CSS chips + a11y |
| `src/components/home/IntentFilterSticky.tsx` | new |
| `src/components/home/PainGrid.tsx` | update — hierarchy + mobile |
| `src/components/home/IntentRouter.tsx` | update — filtered copy |
| `src/app/page.tsx` | update — boundary + sticky |
| `src/app/solutions/page.tsx` | update — boundary |
| `src/app/globals.css` | update — chips/sticky/calm/mobile |
| `src/content/ecosystem.ts` | shortLabel + filter copy (prior) |
| `docs/strategy/site-map.md` | §3 v5.2 |
| `.agents/skills/strategy-check/SKILL.md` | v5.2 |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (26 routes)
```

## Post-deploy smoke (Dowódca)

1. `/` → chip **Time** → only matching leaks; sticky bar under nav; URL `?intent=time`
2. Clear filter → all 9 leaks back; sticky gone
3. **See matching modules ↓** → `#repo-router` H2 = “Matching modules — …”
4. Mobile width: pain cards without long body copy
5. Chip **Calm** → yellow frame OK, CTA/text readable (amber, not mud yellow)
6. `/solutions/?intent=money` → chips + filtered modules

## Następny krok / Next steps

- Optional: soft-scroll to `#repo-router` on first chip select (deferred — jump link is enough)
- Sales review: keep ×9 vs trim to ×8 (VCMS/Agent already out of Pain)
