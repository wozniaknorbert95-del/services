# Handoff — Lead magnet repo showcase (2026-06-24)

**Repo:** quietforge.flexgrafik.nl · **Build:** `npm run build` ✅ (33 routes)

## Cel / Goal

Podnieść prezentację **app.flexgrafik.nl** (Lead Magnet Game) na Quietforge do poziomu case study Agent OS — SSoT copy, proof assets z live app, dedykowany OG, solution page z konkretnym produktem.

## Co zrobiono / What changed

- Utworzono `lead-magnet-case-study.ts` — SSoT copy (journey, 5 acts, meta, stack)
- Rozszerzono `proof.ts` — LIVE claims, verified metrics, 3 screen keys (gameplay, game-over, leaderboard)
- Przepisano `/results/lead-magnet/` — Agent OS bar: LIVE checklist, acts table, GAME10 bridge, proof slots
- Zaktualizowano `/solutions/lead-magnet-game/` — Bouwplaats Chaos, Canvas engine, GAME10 (nie generic quiz)
- Nowe gratka: `lead-magnet-flow.svg`, `lead-magnet-gameplay.png`, `lead-magnet-game-over.png`, `lead-magnet-leaderboard.png` (prod capture)
- Nowy OG: `results-lead-magnet.svg`
- Portfolio pack w repo gry: `app.flexgrafik.nl/docs/portfolio/LEAD-MAGNET-PORTFOLIO-PACK.md`
- `EXTERNAL.leadMagnetGame` → https://app.flexgrafik.nl/
- Results hub card — flow SVG + live game link

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/lead-magnet-case-study.ts` | new |
| `src/content/proof.ts` | update |
| `src/content/ecosystem.ts` | update (ScreenKey + m6 effect) |
| `src/lib/constants.ts` | update (EXTERNAL) |
| `src/lib/case-studies.ts` | update |
| `src/lib/gratka.ts` | update |
| `src/app/results/lead-magnet/page.tsx` | rewrite |
| `src/app/results/page.tsx` | update |
| `src/app/solutions/lead-magnet-game/page.tsx` | rewrite |
| `src/app/solutions/lead-magnet-game/layout.tsx` | update |
| `public/gratka/lead-magnet-flow.svg` | new |
| `public/gratka/lead-magnet-gameplay.png` | new (prod capture) |
| `public/gratka/lead-magnet-game-over.png` | new (prod capture) |
| `public/gratka/lead-magnet-leaderboard.png` | new (prod capture) |
| `public/og/results-lead-magnet.svg` | new |
| `app.flexgrafik.nl/docs/portfolio/LEAD-MAGNET-PORTFOLIO-PACK.md` | new |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (33 routes)
rg '\[FILL:' src/   # 0 matches (comments in proof.ts only use FILL as doc, not shipped placeholders)
```

### Proof check — lead-magnet scope

| Check | Result |
|-------|--------|
| [FILL:] placeholders shipped | ✅ 0 |
| Metrics traceable to proof.ts | ✅ |
| Stack factual (React 19 + Vite 6, not Next.js) | ✅ fixed |
| ProofScreenSlot assets present | ✅ gameplay, game-over, leaderboard |
| VideoSlot ready=false | ✅ leadMagnet video deferred |
| Intent badges | ✅ money on case study card |
| OG dedicated | ✅ results-lead-magnet.svg |

## Post-deploy smoke (Dowódca)

1. https://quietforge.flexgrafik.nl/results/lead-magnet/ — title „Case study — Lead magnet game”, LIVE checklist, 5 acts table
2. „Play live game ↗” → https://app.flexgrafik.nl/ (200)
3. „Try the wizard ↗” → zzpackage.flexgrafik.nl
4. https://quietforge.flexgrafik.nl/solutions/lead-magnet-game/ — Bouwplaats Chaos copy, not generic quiz
5. Home → IntentRouter → Lead Magnet System → case study
6. Results hub → lead-magnet card → flow SVG renders
7. LinkedIn OG debugger on `/results/lead-magnet/`

## Następny krok / Next steps

- **jadzia-core / Inbox Killer** — Dowódca wieczorem (osobna sesja, analogiczny upgrade)
- **Video** — `videos.leadMagnet` 45s Loom when recorded (`ready: false` until then)
- **Optional PDF** — `lead-magnet-player-journey.pdf` (GRATKA path reserved; SVG only for now)
- Commit + push master → Vercel auto-deploy
