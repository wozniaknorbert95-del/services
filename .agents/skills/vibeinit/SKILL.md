---
name: vibeinit
description: Session bootstrap for services.flexgrafik.nl. Reads the knowledge canons and strategy canon in order, checks git state and active handoffs, then prints a concise ADHD-friendly session anchor (CO robimy / DLACZEGO / NASTĘPNY KROK). Invoke at the start of every working session before touching code.
---

# vibeinit — Session Bootstrap

Establishes shared context at the start of a session so every change is grounded in the strategy canon and the current repo state. Replaces ad-hoc "where were we?" exploration with a single, repeatable anchor.

## When to Use This Skill

Invoke this skill when:
- Starting any new working session on this repo
- Resuming after a break and unsure of branch / uncommitted state
- Onboarding a new agent or contributor mid-project
- Before planning page/component work (canon must be loaded first)

## Procedure

### Step 1 — Read knowledge canons (mandatory, in order)

Per `AGENTS.md`, read top-to-bottom before any page/component work:

1. `docs/README.md` — knowledge map + authority layers
2. `docs/canons/vision-system.md` — north star, three brains, phases
3. `docs/canons/strategy-rules.md` — IA / funnel HARD rules
4. `docs/canons/marketing-rules.md` — copy / proof HARD rules
5. `docs/strategy/site-map.md` — **home order (LOCKED §2), 8-repo map, intent colors**
6. `docs/strategy/conversion-pipeline.md` — flow, nav, CTA tiers
7. `docs/strategy/marketing-strategy.md` — positioning detail
8. `docs/strategy/ui-ux-principles.md` — hierarchy, section anatomy, motion policy

Also skim `brain.md` (tech/deploy only) and `DESIGN-SYSTEM.md` (visual tokens) if doing UI work.

### Step 2 — Read repo state

```bash
git status              # branch + uncommitted/untracked
git log --oneline -8    # recent history / deploy cadence
git branch --show-current
```

Note uncommitted work and whether it is mid-feature or stray. Flag anything under `.cursor/` or secrets that must NOT be committed.

### Step 3 — Surface active work

- List newest files in `docs/operations/handoffs/` (most recent date = last session): read the latest 1–2.
- Check `docs/operations/SESSION-ANCHOR.md` for queued work.
- Scan for open threads: `rg '\[FILL:' src/`, TODO/FIXME if relevant.

### Step 4 — Emit the session anchor

## Output Format

```markdown
## Session Anchor — services.flexgrafik.nl · <date>

**Branch:** <branch> · **Uncommitted:** <n files / clean>
**Last session:** <latest handoff title + date>

### CO ROBIMY
<1–2 lines: the single focused goal this session>

### DLACZEGO
<1 line: why it matters / which funnel job or canon rule it serves>

### NASTĘPNY KROK
<the very next concrete action>

**Canon flags:** <e.g. page.tsx change → must update site-map.md §2 · build must pass before commit>
**Watch:** <uncommitted files to handle, secrets/.cursor not to commit>
```

## Guardrails

- One focused goal per session (Zasada 1-1-1: one session = one task = one module).
- Do NOT start implementation inside `vibeinit` — it only orients. Hand off to `section-build` / `rootcause` / etc.
- Communicate the anchor PL-friendly and brief (ADHD: CO → DLACZEGO → NASTĘPNY KROK). Code/docs stay EN.
- If the canon and `brain.md` disagree, canons + strategy win (`docs/architecture/authority-chain.md`).
