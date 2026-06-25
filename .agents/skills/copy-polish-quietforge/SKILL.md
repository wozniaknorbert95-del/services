---
name: copy-polish-quietforge
description: Final microcopy and UI text polish for quietforge.flexgrafik.nl — eyebrow prefix rules, CTA canon, glued-copy grep gates, agency anti-positioning. Invoke before ship after section work or a live QA pass.
---

# copy-polish-quietforge — Quietforge Microcopy Gate

Binding polish pass for public copy. Complements `design-review`, `ui-audit`, and `tuzi-copy-polish` (social only — do not use tuzi for site copy).

## When to use

- Pre-ship polish session
- After live QA finds glued text or double `//`
- Before committing money-page or home changes

## Procedure

### 1 — Eyebrow prefix (no `// //`)

- `<Eyebrow>` and `.qf-eyebrow::before` both add `// `.
- Content strings passed to them must **not** start with `//`.
- `Eyebrow` strips accidental `//` via `stripEyebrowPrefix` — still fix sources.

```bash
rg "'// |\"// " src/content/ src/components/
rg "<Eyebrow>//" src/
rg 'qf-eyebrow">//' src/
```

### 2 — CTA canon

- Button / nav / sticky / final CTA label: **`Book Automation Map`**
- Source: `CTAS.bookAutomationMap` in `src/content/conversion-copy.ts`
- Prose may use “your Automation Map” or “Book an Automation Map” in sentences only.

```bash
rg "Book your Automation Map" src/ --glob "*.tsx"
```

### 3 — Glued copy grep

```bash
rg "—live|Mappaid|Verifyhuman|maintainno|€290is|changes\.€|Guided agency" src/
```

Fix patterns: em-dash + space, ` · ` tag separators in `HowIWork`, metric order in `SystemMetrics`.

### 4 — Agency anti-positioning

- Forbidden self-ID: `Guided agency demo`
- Allowed comparative: `vs typical 3-month agency cycles`

### 5 — Sitemap priorities

Run `node scripts/generate-sitemap.mjs` and verify tiers in `public/sitemap.xml`.

## Output

Report grep results (expect 0 on forbidden patterns) before `ship`.
