# Handoff — Outbound Strategy Comprehensive (2026-06-30)

**Repo:** quietforge.flexgrafik.nl · **Build:** `npm run typecheck` recommended (constants.ts changed)

## Cel / Goal

Kompleksowa naprawa strategii outbound: LinkedIn v3.0, nowy kanał Facebook, synchronizacja GTM, fix drift w kodzie i dokumentacji.

## Co zrobiono / What changed

### LinkedIn (`docs/strategy/linkedin/`)

- README.md — lean index, fixed markdown
- profile-copy.md — consolidated About + Experience ×2
- strategy.md — §15–18 (engagement, growth, formats, review)
- CHANGELOG.md — v3.0
- Deleted 3 legacy `.txt` profile drafts

### Facebook (`docs/strategy/facebook/`) — NEW

- README.md, strategy.md, rules.md, content-themes.md
- Consumer NL channel — FlexGrafik print/design, wizard CTA
- Explicit separation from LinkedIn B2B

### GTM sync

- `gtm/01-two-brand-model.md` — homepage v3.0 ✅ status
- `gtm/06-roadmap-90-days.md` — baseline table updated, M0.2 closed
- `gtm/02-channel-architecture.md` — Facebook canon link, Managed Automation €349/mo fix
- `gtm/03-linkedin-principles.md` — SSoT pointer to linkedin/
- `gtm/07-post-playbook.md` — SSoT pointer to linkedin/calendar.md
- `gtm/audits/assets/README.md` — DO NOT USE old profile snapshots

### Code

- `src/lib/constants.ts` — `LINKEDIN_URL` → flexgrafik-quietforge (audit QF-L01)

### Meta

- `docs/strategy/README.md` — Facebook no longer TBD
- `docs/operations/SESSION-ANCHOR.md` — updated priorities

## Pliki / Files

| Area | Files |
|------|-------|
| LinkedIn | README, strategy, profile-copy, CHANGELOG; deleted 3 txt |
| Facebook | README, strategy, rules, content-themes (4 new) |
| GTM | 01, 02, 03, 06, 07, audits/assets/README |
| Code | src/lib/constants.ts |
| Ops | SESSION-ANCHOR, this handoff |

## Weryfikacja / Verification

```bash
npm run typecheck
npm run build
```

Facts verified: €290 Map, €349–890 managed, 142 msgs, 161 SKUs — pricing.ts / proof.ts

## Następny krok / Next steps (Commander)

**LinkedIn (B2B — priorytet A):**
1. Paste profile-copy.md
2. Featured V2 (4 URLs)
3. Publish M1.1 Inbox Killer
4. Daily engagement 15 min (strategy §15)

**Facebook (consumer — równolegle):**
1. Uzupełnij page URL + follower baseline w facebook/strategy.md §9
2. Pierwszy post P1 — real photo finished project (NL)
3. CTA wizard — content-themes.md W1

**Still open:**
- Book Discovery Formspree backend
- GA4 UTM per channel (FB vs LI)
- TikTok / GMB strategy — not in scope

---

*Outbound comprehensive · 2026-06-30*
