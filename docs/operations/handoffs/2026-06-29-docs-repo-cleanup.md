# Handoff — Docs Repo Professionalization (Fazy 1–4)

**Date:** 2026-06-29  
**Branch:** `master`  
**Scope:** Documentation only — `git mv` + `.md` link/README updates. No `src/` changes.

---

## Goal

Uporządkować warstwy dokumentacji services repo: site canon vs outbound GTM vs active audits vs operations — zgodnie z planem professionalization.

---

## Commits (4)

| Commit | Phase | Summary |
|--------|-------|---------|
| `9f72915` | 1 | GTM pack + LinkedIn audit under `gtm/audits/`; route-content-patches → archive |
| `2a248d2` | 2 | Site audits in dated folders + `docs/audits/README.md` |
| `c033f52` | 3 | Operations root → commander/runbooks/artefacts/plans/meta |
| *(this session)* | 4 | AGENTS, INDEX, inventory-2026-06-29, entry point sync |

---

## git mv summary

### Faza 1
- `docs/strategy/route-content-patches.md` → `docs/archive/reference/`
- `docs/strategy/linkedin-audit-2026-06-29.md` → `docs/strategy/gtm/audits/`
- `docs/strategy/assets/*.png` → `docs/strategy/gtm/audits/assets/`

### Faza 2
- `docs/audits/2026-06-25-quietforge-ux-ia.md` → `docs/audits/2026-06-25/quietforge-ux-ia.md`
- `docs/audits/2026-06-26-ux-ui-pro-audit.md` → `docs/audits/2026-06-26/ux-ui-pro-audit.md`

### Faza 3
- `commercial-traction-*` → `operations/commander/`
- Runbooks → `operations/runbooks/`
- `ga4-audit-*.json` → `operations/artefacts/`
- `video-production-plan` → `operations/plans/`
- Meta handoffs → `operations/handoffs/meta/`

---

## Active canon link fixes

- `site-map.md` → new UX-IA path
- `ops-rules.md`, `ga4-property-map.md` → runbooks RESTART path
- GTM 02/04/06/08 → commander commercial-traction
- `07-remediation-plan-dod.md` → commander traction
- Selected handoffs with broken relative links (GA4, UX audit, wizard manual)

---

## Faza 5 (cleanup)

- `docs/dla inwestorów.md`, `New Text Document.txt` — already absent (prior archive session)
- `docs/wizard video.mp4` → `docs/archive/operations/wizard-video-source.mp4` (filesystem; gitignored via `docs/*.mp4`)
- `gtm/08-investor-track.md` → link to `archive/commander-private/`

## Remaining follow-up

- [ ] Osobna sesja: `src/content/pricing.ts` + `solutions/page.tsx` comments → archive path
- [ ] Push `master` when Commander approves (Zasada 11)
- [ ] Update `SESSION-ANCHOR.md` on next feature session

---

## Verification

- `docs/operations/` root: only `SESSION-ANCHOR.md` + `README.md`
- `docs/audits/` root: only `README.md` + dated folders
- `docs/strategy/` root: 4 canon files + `README.md` (+ `gtm/`)

---

*Handoff: docs repo cleanup · Norbert Wozniak*
