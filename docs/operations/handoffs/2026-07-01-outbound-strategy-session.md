# Handoff — Outbound Strategy Session (2026-07-01)

**Repo:** quietforge.flexgrafik.nl · **Build:** N/A (docs + 1 code fix)

## Cel / Goal

Kompleksowa sesja outbound: LinkedIn Module Series (9 postów), Facebook audit + plan ZZP rebrand, GTM sync, LINKEDIN_URL fix.

## Co zrobiono / What changed

### Shipped (committed `93f48d2`)

**LinkedIn v3.1:**
- `calendar.md` — 9-post Opening Module Series (M0-A–M0-I) + 8 Business Leak posts (17 total)
- `strategy.md` — §19 Competency signals (discovery, workflow, tech audit, architecture, AI, BPMN, change management)
- `profile-copy.md` — consolidated About + Experience ×2 (paste-ready)
- `README.md` — lean index, publish order M0 → W
- Deleted 3 legacy `.txt` profile drafts

**Facebook v1.0:**
- `README.md`, `strategy.md`, `rules.md`, `content-themes.md` — consumer NL channel canon

**GTM sync:**
- `gtm/01` — homepage v3.0 ✅ (was stale "brak dual-brand")
- `gtm/02` — Managed Automation €349/mo fix (was €290/mo), Facebook canon link
- `gtm/03`, `07` — SSoT pointers to linkedin/ canon
- `gtm/06` — baseline table updated, M0.2 closed
- `gtm/audits/assets/README.md` — DO NOT USE old profile snapshots

**Code:**
- `src/lib/constants.ts` — `LINKEDIN_URL` → `flexgrafik-quietforge` (audit QF-L01)

### Ready (plan approved, not yet executed)

**Facebook v2.0 ZZP rebrand** — ✅ **SHIPPED** this session. See [`2026-07-01-facebook-zzp-rebrand.md`](./2026-07-01-facebook-zzp-rebrand.md).

## Pliki / Files

| File | Action | Status |
|------|--------|--------|
| `docs/strategy/linkedin/calendar.md` | rewrite (17 posts) | committed |
| `docs/strategy/linkedin/strategy.md` | update (§19) | committed |
| `docs/strategy/linkedin/profile-copy.md` | add | committed |
| `docs/strategy/linkedin/README.md` | rewrite | committed |
| `docs/strategy/linkedin/CHANGELOG.md` | update (v3.1) | committed |
| `docs/strategy/facebook/*` (4 files) | add (v1.0) | committed |
| `docs/strategy/gtm/01,02,03,06,07,README` | update | committed |
| `docs/strategy/gtm/audits/assets/README.md` | add | committed |
| `docs/strategy/README.md` | update | committed |
| `docs/operations/SESSION-ANCHOR.md` | update | committed |
| `src/lib/constants.ts` | fix LINKEDIN_URL | committed |
| `docs/strategy/facebook/*` (v2.0) | **NEXT SESSION** | plan approved |

## Weryfikacja / Verification

```bash
npm run typecheck   # PASS
npm run build       # PASS (34 routes)
```

## Następny krok / Next steps

### P0 — Facebook ZZP rebrand (następna sesja agenta)

**Start prompt:**

```
/vibeinit

Cel sesji: implementacja planu Facebook ZZP Rebrand.

Plan: .cursor/plans/facebook_zzp_rebrand_2e2e222b.plan.md
Audyt FB (live, 2026-07-01): 14 followers, 0 reviews, bio EN "Your Graphics, Our Passion", 
7 postów (ostatni maj 2025), zero wzmianki o wizard/gra/asystent.
Page URL: https://www.facebook.com/people/FlexGrafik/61568401273877/

Kluczowe fakty:
- FlexGrafik = wyłącznie ZZP brandingpartner NL (nie generyczny drukarz)
- Partner montażowy (profesjonalny, nie wymieniaj nazwy erkapremium)
- Mimaki ecosolvent druk — UV-bestendig, weerbestendig
- Wizard: 161 SKUs, 9 UI screens, Mollie checkout
- Gra mobilna: 5 levels, leaderboard, tier bonusy, logo na podium
- Asystent sprzedaży: czat na flexgrafik.nl
- Język: NL only (ICP = ZZP'ers w Holandii)
- NIE: Quietforge, Automation Map, Agent OS, 8-repo, investor

Zadanie: implementuj plan — 5 todo items. Przejrzyj plan krytycznie, 
wyłap błędy amatorskie, ulepsz jakość. Potem egzekucja.
Jakość > ilość plików.
```

### P0 — LinkedIn Commander manual

1. Paste `linkedin/profile-copy.md` into LinkedIn
2. Featured V2 (4 URLs)
3. Publish M0-F first (gra — film gotowy)
4. Daily engagement 15 min (strategy §15)

### P1 — Unpushed commit

`93f48d2` is 1 ahead of origin/master. Push when ready.

---

*Outbound strategy session · 2026-07-01 · commit `93f48d2`*
