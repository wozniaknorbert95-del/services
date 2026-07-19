# Change log — LinkedIn channel canon

---

## v3.1 — 9-post Module Series opener (2026-06-30)

### Calendar

- **9 opening posts (M0-A–M0-I)** inserted before Business Leak Series
- Each post: metadata, EN body, media, first-comment CTA with UTM, competency signal
- Publish order: Module Series first · then W1–W4 leak series
- Total slots: 17 (9 + 8)

### Strategy

- **§19 Competency signals** — formalized from raw notes; posts demonstrate skills indirectly

### Module mapping

| Slot | Repo |
|------|------|
| M0-A | flexgrafik-meta (Automation Map) |
| M0-B | zzpackage (Wizard) |
| M0-C | jadzia-core (Jadzia COI) |
| M0-D | agent-os |
| M0-E | flex-vcms |
| M0-F | app.flexgrafik.nl |
| M0-G | agent-os-ui |
| M0-H | flexgrafik-nl |
| M0-I | Full ecosystem |

---

## v3.0 — professional repair (2026-06-30)

### Strategic additions

- **strategy.md §15–18:** Engagement strategy (daily 15 min routine), network growth plan (16 → 80+ connections in 8 weeks), content format guidance, structured review cadence (week 2, week 4, monthly, quarterly).
- Baselines anchored to live audit: 16 connections, 531 imp/7d, B2B readiness 2.4/5.

### File structure

| Change | Detail |
|--------|--------|
| **README.md** | Rewritten as lean index — fixed broken markdown escaping; removed duplication with strategy.md |
| **profile-copy.md** | NEW — consolidated About + Experience (Quietforge + FlexGrafik) with implementation checklist and proof metrics table |
| **Deleted** | `linkedin-about me.txt`, `expirience main -linkedin.txt`, `expirience 2 -linkedin.txt` |
| **strategy.md** | v3.0 — sections 15–18 added |
| **rules.md** | Unchanged (v2.0 still valid) |
| **calendar.md** | Unchanged (v2.0 still valid) |

### Fact verification (cross-checked)

| Claim | Verified against |
|-------|------------------|
| Automation Map €290 | `src/content/pricing.ts` |
| Managed Automation €349–€890/mo | `src/content/pricing.ts` |
| 142 messages/scan | `src/content/proof.ts` |
| 167 SKUs | `src/content/proof.ts` |
| Profile baseline 16 connections, 2.4/5 B2B | `gtm/audits/linkedin-audit-2026-06-29.md` |

### profile-copy improvements vs v2.0 txt drafts

- About: explicit €290 + `/book-discovery/` URL (was bare domain only).
- FlexGrafik Experience: metrics with LIVE labels; Featured URLs moved to checklist table.
- Warning: do not use OLD copies in `gtm/audits/assets/` (pre-v2.0 jargon).

### Implementation order (Commander)

1. Paste [profile-copy.md](./profile-copy.md) into LinkedIn.
2. Add Featured (4 URLs) — audit L-A01.
3. Complete Services setup + pricing €290 — audit L-A02–A04.
4. Publish W1-A + W1-B from [calendar.md](./calendar.md).
5. Start daily engagement per strategy.md §15.
6. Week 2 review per strategy.md §18.

---

## v2.0 — outcome-first repair (2026-06-29)

### Strategic shift

Old framing:
- 8 modules introduced one by one
- strong proof, but too much technical and internal architecture language
- risk of sounding like a system catalogue

New framing:
- 4 business leaks: manual quotes, inbox chaos, weak lead capture, automation without control
- proof appears after the buyer recognises the problem
- Automation Map remains the single first step

### Files changed in v2.0

- **README.md** — channel canon entry point
- **strategy.md** — buyer psychology, ICP, four leaks, CTA ladder
- **rules.md** — LI-R01 through LI-R16
- **calendar.md** — 4-week, 8-post series with full EN copy
- Profile txt drafts (now superseded by profile-copy.md in v3.0)

---

*Maintainer: update at end of every LinkedIn strategy session*
