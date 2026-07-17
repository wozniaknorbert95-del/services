# SESSION-ANCHOR — Live Session Pointer

**Updated:** 2026-07-17 · **Status:** ACTIVE · **Gate:** M0.2 CLOSED ✅ · **Outbound canon:** LinkedIn v3.1 + Facebook v2.0 ✅

---

## WYNIK

**Quietforge email unification** shipped + verified on production — `hello@flexgrafik.nl` removed repo-wide; forms deliver to `quietforge@flexgrafik.nl` via SMTP. Commander confirmed test emails received.

| Layer | Status |
|-------|--------|
| Homepage v3.0 | ✅ Faza 1+2 closed |
| Form intake (SMTP) | ✅ `/api/intake` + `/api/waitlist` live |
| Contact email SSoT | ✅ `quietforge@flexgrafik.nl` |
| LinkedIn canon | ✅ v3.1 — Module Series + profile-copy |
| Facebook canon | ✅ v2.0 — ZZP brandingpartner NL |
| GTM drift | ✅ gtm/01, 02, 06 synced |

**Handoff:** [`handoffs/2026-07-17-quietforge-email-unification.md`](./handoffs/2026-07-17-quietforge-email-unification.md) · **CLOSED** ✅

---

## NASTĘPNY KROK (Commander)

1. **Facebook profile paste** — [`../strategy/facebook/profile-copy.md`](../strategy/facebook/profile-copy.md) checklist
2. **Facebook Post #1** — publish + pin [`../strategy/facebook/content-themes.md`](../strategy/facebook/content-themes.md)
3. **LinkedIn profile** — paste [`../strategy/linkedin/profile-copy.md`](../strategy/linkedin/profile-copy.md)
4. **LinkedIn Featured V2** — 4 URLs (~10 min)
5. **LinkedIn M0-F** — game post (film ready) · FB Post #7 ≥1 week later

---

## OPEN (non-blocking)

| Item | Owner | Priorytet |
|------|-------|-----------|
| Facebook profile + Post #1 | Commander | **P0** |
| LinkedIn Featured V2 | Commander | **P0** |
| LinkedIn profile paste | Commander | **P0** |
| FB posts 2–10 (2–3/week) | Commander | P1 |
| PDF artefacts regen (old email in cached PDFs) | Agent | P2 |

---

## WEEKLY GA4

```bash
GOOGLE_APPLICATION_CREDENTIALS=~/.config/quietforge-ga-sa.json npm run ga4:gate
```

---

*Maintainer: update at end of every session*
