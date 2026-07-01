# Handoff — Facebook ZZP Rebrand v2.0 (2026-07-01)

**Repo:** quietforge.flexgrafik.nl · **Build:** N/A (docs only)

## Cel / Goal

Facebook canon v2.0: pivot from generic EN consumer print shop to NL ZZP brandingpartner — profile paste-ready copy, 10-post launch series, rules/strategy sync, GTM pointers.

## Co zrobiono / What changed

### Plan audit → implementation

Audyt planu wykrył: sprzeczność NL/EN, claim „logo op podium”, słabą kolejność postów, brak media gates, brak GTM sync. Wszystkie poprawki wdrożone.

### Shipped files

| File | Action |
|------|--------|
| `docs/strategy/facebook/profile-copy.md` | **NEW** — paste checklist, NL bio/About, categories, CTA |
| `docs/strategy/facebook/strategy.md` | v2.0 — ZZP ICP, 6 USPs, audit baseline |
| `docs/strategy/facebook/rules.md` | v2.0 — FB-R09 Mimaki/montage, chat honesty |
| `docs/strategy/facebook/content-themes.md` | 10-post series — reordered, Media + Publish gate |
| `docs/strategy/facebook/README.md` | v2.0 — read order, Commander execution |
| `docs/strategy/README.md` | Facebook v2.0 pointers |
| `docs/strategy/gtm/01,02,06,README.md` | Sync labels + FB baseline |
| `docs/operations/SESSION-ANCHOR.md` | Facebook v2.0 closed · Commander P0 |
| `.cursor/plans/facebook_zzp_rebrand_2e2e222b.plan.md` | Audit-corrected · todos completed |

## Weryfikacja / Verification

Docs-only session — no code change. Cross-links manually verified.

```bash
# Optional sanity (no code touched)
npm run typecheck
npm run build
```

## Następny krok / Next steps (Commander P0)

1. Paste [`profile-copy.md`](../strategy/facebook/profile-copy.md) into Facebook Page
2. Publish + **pin** Post #1 from [`content-themes.md`](../strategy/facebook/content-themes.md)
3. Continue posts 2–10 every 2–3 days — **do not publish without Media** (Publish gates)
4. Post #7 (game) — **≥1 week after** LinkedIn M0-F

## Kluczowe reguły (nie łamać)

- NL only · no erkapremium name · no Quietforge CTA
- Chat = LIVE sales chat · qualification agent = PLANNED
- 161 SKUs · 5 speelniveaus · season leaderboard (not „logo op podium”)
- Wizard L1: `https://zzpackage.flexgrafik.nl/wizard/`

---

*Facebook ZZP rebrand v2.0 · 2026-07-01*
