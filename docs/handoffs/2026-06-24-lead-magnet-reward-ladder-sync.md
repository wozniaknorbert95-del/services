# Handoff — Lead Magnet reward ladder sync (2026-06-24)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (33 routes)

## Cel / Goal

Sync `/results/lead-magnet/` portfolio with `LEAD-MAGNET-PORTFOLIO-PACK.md` SSoT — full four-tier reward ladder (GAME10, STICKER1, TSHIRT2, WINNER), season prize track, and purchase-bonus legal framing.

## Co zrobiono / What changed

- Rebuilt `lead-magnet-flow.svg` v2 — 4 reward tiers, act mapping, GAME10 fallback, €199 footnote, season prize
- Added `leadMagnetRewardLadder[]` + season prize + legal disclaimer in case study content
- New **Reward ladder** section on case study layout (between CIS and Scope)
- Gallery captions #03 and #06 updated for four-tier + tier-aware wizard bridge
- Solution page `after` bullets + results card `system` line updated
- REPO 2 metrics in `13_DANE_PER_REPO_GOTOWE.md` + OG subtitle

## Pliki / Files

| File | Action |
|------|--------|
| `public/gratka/lead-magnet-flow.svg` | rewrite (v2 ladder) |
| `src/content/lead-magnet-case-study.ts` | update + `leadMagnetRewardLadder` |
| `src/content/proof.ts` | gallery captions #03, #06 |
| `src/components/casestudy/LeadMagnetCaseStudyLayout.tsx` | Reward ladder section |
| `src/app/solutions/lead-magnet-game/page.tsx` | effect `after` copy |
| `src/lib/case-studies.ts` | card `system` line |
| `docs/13_DANE_PER_REPO_GOTOWE.md` | REPO 2 reward codes |
| `public/og/results-lead-magnet.svg` | subtitle |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (33 routes)
rg 'STICKER1|TSHIRT2|WINNER' src/content/   # matches in lead-magnet-case-study.ts
```

## Post-deploy smoke (Dowódca)

1. `/results/lead-magnet/` — diagram shows L2–L5 + act labels + season prize band
2. Reward ladder section renders 4 cards + legal disclaimer
3. `/solutions/lead-magnet-game/` — after bullets mention physical purchase bonuses
4. No fabricated conversion percentages on page

## Następny krok / Next steps

- Commit + push when ready (`ship` skill)
- Optional: CapCut export for `videos.leadMagnet` (beat 03 reward cards)
- Copy pack into services repo when PR #118 merges: `docs/portfolio/LEAD-MAGNET-PORTFOLIO-PACK.md`
