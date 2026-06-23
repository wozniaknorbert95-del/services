---
name: handoff
description: Write a session handoff doc to docs/handoffs/YYYY-MM-DD-[feature].md following the repo convention (goal, files changed table, verification, post-deploy smoke, next steps). Invoke at the end of every session — handoff is mandatory per AGENTS.md.
---

# handoff — Session Handoff Doc

Every session ends with a handoff (`AGENTS.md` global rule 3, repo §Handoff). It is the durable memory the next session (and `vibeinit`) reads first. Keep it scannable, honest, and short.

## When to Use This Skill

Invoke this skill when:
- A working session is complete (feature, fix, or audit)
- Before/after the commit that closes the session (`ship`)
- Pausing mid-feature and need to record state for resumption

## Procedure

### Step 1 — Pick the path

`docs/handoffs/YYYY-MM-DD-[feature].md` — today's date, kebab-case feature slug.
Examples in repo: `2026-06-24-logo-remediation.md`, `2026-06-23-sprint-1-ux-fixes.md`.

### Step 2 — Gather facts (don't invent)

- `git status` / `git diff --stat` → exact files changed and new vs. modified.
- The `verify` result (build PASS + route count).
- Which canon docs were touched (e.g. `site-map.md` §2 updated alongside `page.tsx`).
- Open threads / deferred items for the next session.

### Step 3 — Write using the repo structure

Match existing handoffs: a short goal, a **files-changed table**, a fenced **verification** block, a **post-deploy smoke** list (the owner runs these after Vercel deploys), and **next steps**. Bilingual headers are normal in this repo (PL section titles, EN technical content acceptable); keep technical detail in EN.

## Output Format

```markdown
# Handoff — <Feature title> (<YYYY-MM-DD>)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (<n routes>)

## Cel / Goal
<1–3 lines: what this session set out to do and why>

## Co zrobiono / What changed
- <bullet per meaningful change, grouped if many>

## Pliki / Files

| File | Action |
|------|--------|
| `src/...` | new / update / rewrite / redirect |

## Weryfikacja / Verification
```bash
npm run typecheck   # pass
npm run build       # pass (<n routes>)
rg '\[FILL:' src/   # 0 matches
```

## Post-deploy smoke (Dowódca)
1. <live check, e.g. node scripts/audit-404s.mjs — console errors = 0>
2. <key route renders correct H1 / section>
3. <any env var to set in Vercel>

## Następny krok / Next steps
- <queued work, plan reference, deferred items>
```

## Guardrails

- Record only verified facts — the verification block must reflect a real `verify` run.
- If `page.tsx` (home) changed, confirm `site-map.md` §2 was updated and say so (anti-chaos rule).
- Do not list secrets, env values, or `.cursor/` paths in the handoff.
- Keep it brief and skimmable (ADHD-friendly) — tables and bullets over prose. Note placeholder env (e.g. WhatsApp URL) the owner must fill.
