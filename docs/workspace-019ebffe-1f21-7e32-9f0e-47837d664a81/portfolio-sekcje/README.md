# Quietforge Portfolio — repositioning to „AI Systems Architect" (master README for Cursor)

> Goal: turn the Quietforge site from „skilled freelancer who builds things" into
> **„serious AI Systems Architect who owns risk, process and architecture"**.
> Live site: the Vercel deployment (Quietforge).
> Stack: keep the existing Next.js/React + the current visual language (dark, terminal accents, mono).

---

## 1. BRAINSTORM — diagnosis (what works / what's missing)

### Already strong (KEEP, don't touch)
- „Built on a live system, not a template" — real differentiator.
- „Delivered by an AI workforce" — explains the pricing/speed edge.
- „Human-in-the-loop by design" — trust signal.
- Paid Automation Map as the first step — premium, filters tyre-kickers.
- Terminal snippets (`inbox.scan`, `classify → plan → diff → approve`) — read as „real engineer".

### Three gaps that keep you positioned as a freelancer
| Gap | Symptom on site | Section that fixes it |
|---|---|---|
| No face / no architect narrative | site speaks bland „we/I", no About | **1 — About: AI Systems Architect** |
| No visible process | delivery feels like „magic", not method | **2 — How I work (your 12-step workflow)** |
| Trust layer thin | only one HITL line; no data-safety, no no-lock-in | **3 — Trust & Safety** |
| Results are empty `[X]` | 4 placeholders scream „no proof" | **4 — Case studies (process-proof)** |
| Nothing to take away | no artefacts to forward internally | **artefakty/ (3 PDFs)** |

### Strategic insight
The META-README ecosystem (Jadzia-Core on LangGraph/FastAPI/VPS, a meta-repo with a
single source of truth, agent cards, a 12-step workflow, guardrails) is ALREADY a portfolio.
We don't invent anything — we re-tell the real system in client-benefit language.

---

## 2. POSITIONING — the one sentence everything serves
> **„I don't write code by hand all day. I design intelligent systems that code, check
> and maintain themselves — with a human in the loop so nothing breaks your business."**

Every new section must reinforce: *systems thinker > coder*.

Decisions locked with the owner:
- Language: **English**.
- Voice: **named personal brand** — „I'm Norbert, AI Systems Architect" behind Quietforge.
- Case studies: **real ecosystem, anonymised** (FlexGrafik / Jadzia / ZZP-wizard / accounting client — no client names).
- Metrics: **process-proof first** (architecture, scope, diagrams). Swap in hard numbers after first deliveries.

---

## 3. PLAN — where each section goes (current page map)

Current home flow:
```
HERO → "Sound familiar?" (4 pains) → Inbox Killer (spearhead) →
"Grow from here" (3 systems) → Why this works → What changes → Automation Map CTA
```

Target home flow (NEW = ⬛):
```
HERO → "Sound familiar?" → Inbox Killer →
"Grow from here" → Why this works →
⬛ 1. About — AI Systems Architect
⬛ 2. How I work (process)
⬛ 3. Trust & Safety
→ What changes / Case studies (rework /results, section 4) → Automation Map CTA
```

`/results` page: replace the four empty `[X]` cards with **section 4** content (process-proof case studies).

### Why this order
1. **About after „Why this works"** — first prove the method works, then reveal the person behind it.
2. **How I work right after About** — a named architect must show a repeatable process.
3. **Trust & Safety before the final CTA** — remove the last objection before „Book".
4. **Case studies on /results** — replace placeholders that currently hurt credibility.

---

## 4. ACTION — files in this folder
| Path | Contents |
|---|---|
| `1-about-architect/` | About section (HTML + copy) + README |
| `2-how-i-work/` | Process section (12-step → 5 readable phases) + README |
| `3-trust-safety/` | Trust & data-safety section + README |
| `4-case-studies/` | Reworked /results, 4 process-proof cases + README |
| `artefakty/` | Skeletons for 3 PDFs (Automation Map Sample, Data-Safety Playbook, Maintenance & Handover) |
| `preview.html` | One-file visual preview of all new sections |

### Deployment order for Cursor
1. Read `preview.html` to see target look.
2. Add section **1 (About)** after „Why this works".
3. Add **2 (How I work)**, then **3 (Trust & Safety)**.
4. Rework **/results** with section **4**.
5. Wire the 3 artefacts as download links from About / Trust / Automation Map.

---

## 5. GLOBAL RULES
- Language **English**, voice = confident, plain, „no fluff" — matches current copy.
- Keep current visual system: dark bg, mono/terminal accents, generous spacing.
- The preview ships self-contained CSS (`qf-*` classes); Cursor maps them onto the
  real design tokens / Tailwind already in the repo.
- No invented metrics. Use „estimate" labels or qualitative/process proof.
- All CTAs point to the existing `/book-discovery/` (Automation Map).
- Don't fabricate client names — anonymise (e.g. „a Rotterdam accounting office").

## 6. QA checklist
- [ ] About, How I work, Trust & Safety live in the order from §3.
- [ ] /results no longer shows raw `[X]` placeholders.
- [ ] Visual language consistent with the rest of the site.
- [ ] Mobile (375px) clean, no horizontal scroll.
- [ ] All CTAs → /book-discovery/.
- [ ] 3 artefact links resolve (or are clearly marked „coming soon").
