# Handoff — Portfolio authority audit & Commander clarification (2026-06-25)

**Repo:** services.flexgrafik.nl · **HEAD:** `a9ab872` · **Build:** not re-run (no `src/` changes this session)

## Cel / Goal

Audit live `/results/` vs meta module specs; confirm home SSoT; resolve conflict between AS-IS inventory and portfolio presentation before any copy remediation.

## Commander decision (binding)

**Two authority layers — do not mix:**

| Layer | Source | Use |
|-------|--------|-----|
| **Portfolio / investor / client** | `flexgrafik-meta/docs/core/modules/*.md` + blueprint / to-be | What the site shows — capability pitch, future functions per repo |
| **Internal / code ops** | `as-is-inventory.md` | VCMS, handoffs, agent truth — **not** override for public portfolio copy |

**Jadzia ~90% on site = intentional.** Portfolio shows what Dowódca can build (hours of work away), not strict code-evidence %. Do **not** downgrade to ~35% vs vision on public pages unless Commander explicitly asks.

**Previous session plan** (align copy to AS-IS, Jadzia → 35%) → **cancelled** for portfolio layer.

## Co zrobiono / What changed

- Live audit: [quietforge.flexgrafik.nl/results/](https://quietforge.flexgrafik.nl/results/) + owner-ecosystem + home Built vs Planned
- Confirmed **home structure** matches [`site-map.md` §2](../strategy/site-map.md) ↔ [`src/app/page.tsx`](../../src/app/page.tsx) (14 sections, correct order)
- Mapped `/results/` hub: 8 case-study cards (5 map to ecosystem repos + 3 B2B/pilot); all **8 repos** visible on `/results/owner-ecosystem/`
- Identified non-repo cards: Inbox Killer, Advisory, WhatsApp pilot — by design
- Commander corrected agent approach: meta **modules** = public canon; AS-IS = internal only

## Pliki / Files

| File | Action |
|------|--------|
| `docs/operations/handoffs/2026-06-25-portfolio-authority-audit.md` | new — this file |
| `docs/operations/SESSION-ANCHOR.md` | update — next focus |
| `docs/operations/handoffs/NEXT-SESSION-PROMPT.md` | update — start prompt |

No `src/` changes. Untracked (pre-existing, not this session): `docs/audit-quietforge-ux-ia.md`.

## Weryfikacja / Verification

```bash
git status          # clean @ a9ab872 (1 untracked audit doc)
git diff --stat     # empty
# npm run build     # skipped — no code changes
```

Live checks (browser):
- `/results/` — 8 case cards, LOS banner "8 repos"
- `/results/owner-ecosystem/` — 8-repo grid + flow + Built vs Planned table
- `/#built-vs-planned` — 8 readiness rows present

## Home SSoT (confirmed)

| What | Source |
|------|--------|
| Section order (LOCKED) | [`docs/strategy/site-map.md` §2](../strategy/site-map.md) |
| Copy / data | `src/content/*.ts` (`ecosystem.ts`, `conversion-copy.ts`, `proof.ts`, `readiness.ts`, `los-architecture.ts`) |
| Composer | [`src/app/page.tsx`](../../src/app/page.tsx) |

**Verdict:** home is structurally aligned with site-map §2.

## Post-deploy smoke (Dowódca)

No deploy needed — no code shipped. Optional sanity:
1. Home scroll — 14 sections in site-map order
2. `/results/` — investor path: owner-ecosystem → jadzia-coi → sales-funnel

## Następny krok / Next steps

1. **Update canon docs in services** — [`authority-chain.md`](../architecture/authority-chain.md): add explicit portfolio vs internal layer (Commander decision above)
2. **Portfolio work** — when editing copy, read target repo's `flexgrafik-meta/docs/core/modules/module-*.md` first; keep LIVE/PARTIAL/PLANNED labels where they serve clarity, not AS-IS downgrade
3. **Deferred** — BL-02 commercial traction, BL-03 videos, solutions-page hardcode drift
4. **Do not** — mass AS-IS alignment session, Jadzia 35% on public site, video/outbound scope

**Supersedes for next agent:** [`2026-06-25-meta-ssot-alignment-brief.md`](./2026-06-25-meta-ssot-alignment-brief.md) AS-IS remediation queue — use modules canon instead.
