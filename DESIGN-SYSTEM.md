# Quietforge — Design System Guide (for agents building the site)

> **Read this before touching any page.** This is the single source of truth for how the Pillar 2 site looks and feels.
> **Strategy (copy, funnel, section order):** `docs/strategy/` — read before changing content or IA.
> Files: `quietforge.css` (the system) · `style-guide.html` (living reference, open in browser) · this guide (rules).
> Aesthetic: **terminal / developer-tool** — inspired by Hermes-Agent (amber) + OpenCode (minimal mono).

---

## 1. The vibe in one paragraph
Dark-first, monospace, **one sharp accent color** (amber `--qf-accent`), thin 1px borders, near-zero radius, generous spacing, calm confidence. It should feel like a high-end developer tool, not a marketing site. **Understated, never loud.** No gradients-as-decoration, no rounded-pill buttons, no drop shadows except the single spearhead glow.

---

## 2. Hard rules (do NOT break these)

| Rule | Why |
|------|-----|
| **Always link `quietforge.css`** and use its tokens/classes. Never hardcode a hex color or px spacing. | One source of truth → agents stay consistent. |
| **One accent color per page.** Amber by default. Don't introduce new colors. | The whole aesthetic rests on restraint. |
| **Monospace everywhere** (`--qf-mono` is the base font). | Terminal identity. |
| **Sharp corners** (`--qf-radius: 2px`). No rounded cards/buttons. | Developer-tool look. |
| **Borders, not shadows.** Depth comes from `--qf-bg-raised`/`--qf-bg-inset`, not box-shadow. | Flat, precise. |
| **One H1 per page.** | SEO + hierarchy. |
| **HITL & "approved" → use `--qf-ok` green** sparingly. | Reinforces the moat visually. |
| **Inline-safe only** in preview: no external fonts/CDN/JS-dependent styling. | Sandbox preview must render. |

---

## 3. Token cheat-sheet (use these, not raw values)

**Color:** `--qf-bg` `--qf-bg-raised` `--qf-bg-inset` `--qf-border` `--qf-border-bright` · `--qf-text` `--qf-text-dim` `--qf-text-faint` · `--qf-accent` `--qf-accent-soft` `--qf-accent-glow` · `--qf-ok` `--qf-info`
**Type sizes:** `--qf-fs-xs … --qf-fs-3xl`
**Spacing:** `--qf-sp-1 … --qf-sp-24` (8px scale)
**Structure:** `--qf-radius` `--qf-maxw` `--qf-maxw-narrow`

---

## 4. Component map (class → use)

| Class | Use for |
|-------|---------|
| `.qf-container` / `.qf-narrow` | Page width wrappers (narrow = prose). |
| `.qf-section` / `.qf-section--tight` | Vertical rhythm between sections. |
| `.qf-grid-2/3/4` | Responsive grids (collapse to 1col < 820px). |
| `.qf-eyebrow` | Small `// LABEL` above headings. |
| `.qf-lead` | Subheads / intros. |
| `.qf-btn` / `--ghost` / `--link` | CTAs. Primary = filled amber. |
| `.qf-panel` / `--titled` / `--spearhead` | Cards. `--spearhead` = the Inbox Killer emphasis. |
| `.qf-list` / `--check` / `--steps` | Bullets (▸), checks (✓), numbered steps. |
| `.qf-code` | Terminal/code blocks (hero visual, "how it works"). |
| `.qf-tier` / `--featured` + `.qf-badge` | Pricing tiers ("Most popular" = featured). |
| `.qf-statusbar` | Hermes-style meta strip (great under hero/footer). |
| `.qf-hint` | `→ ` prefixed micro-trust / tip lines. |
| `.qf-rule` / `--ascii` | Section dividers. |
| `.qf-header` / `.qf-nav` / `.qf-footer` | Chrome. |

### Icons (Lucide React)

- Library: Lucide React only
- Stroke: 1.5px
- Size: 16px inline, 24px section headers
- Color: `--qf-text-dim` default; `--qf-accent` on hover/active

### `.qf-statusbar` spec

- Mono uppercase labels, `--qf-text-faint`
- Vertical separators: 1px `--qf-border`
- Live indicator: `--qf-accent` dot

### Metrics grid spec

- 3–4 columns max on desktop
- Number: `--qf-fs-2xl` mono bold
- Label: `--qf-fs-xs` uppercase accent
- Optional outcome line below label (`--qf-text-dim`)

---

## 5. Page-build recipe (apply the copy docs to this system)

For each page, the agent should:
1. Wrap sections in `.qf-section > .qf-container`.
2. Lead every section with `.qf-eyebrow` + `<h2>` (from the copy doc).
3. Hero: H1 with the accent span on the key phrase + `.qf-lead` + `.qf-btn` + `.qf-hint`. Pair with a `.qf-panel--titled` containing a `.qf-code` terminal mock as the visual.
4. Product outcomes → `.qf-list--check`. Process → `.qf-list--steps`.
5. **Inbox Killer = spearhead** on `/`, `/pricing/`, `/book-discovery/`. On `/solutions/*` — featured tier for that page may use `--spearhead` (not always Inbox Killer).
6. Pricing → `.qf-tier`, middle plan `.qf-tier--featured` + `.qf-badge "Most popular"`.
7. End every page with a single `.qf-btn` → Book Automation Map. No competing CTAs.
8. Footer = shared component (copy from style-guide).

> **Copy comes from the `*— Copy & Wireframe` docs. This system is only the skin.** Don't invent copy; paste from those files.

---

## 6. Theme switch (give the client a choice)

- **Launch default: amber only.** Ship `quietforge.css` as-is — matches Quietforge + Hermes energy.
- **OpenCode blue:** `class="qf-theme-mono"` on `<body>` — future opt-in, not MVP.
- **Light mode:** post-MVP toggle per ui-ux-principles.md §2.

**Decision locked:** MVP = amber dark. No dual-theme at launch.

---

## 7. Accessibility / quality gates (before shipping a page)
- [ ] Contrast: body text `--qf-text` on `--qf-bg` passes AA. Don't put `--qf-text-faint` on small body copy.
- [ ] One `<h1>`, logical heading order.
- [ ] Focus states visible (handled by `:focus-visible`).
- [ ] Works at 360px width (grids collapse).
- [ ] `prefers-reduced-motion` respected (handled globally).
- [ ] No external resource the sandbox can't load.

---

## 8. What to fill before launch
- `[BRAND]` → **Quietforge** (logo text is lowercase `quietforge` with the `▍` accent — see `.qf-logo`).
- `[NAME]` on About.
- Real metrics/testimonials after first deliveries (no invented numbers).
- Wire payment + calendar on `/book`.

---

### Files delivered
```
site/
├── quietforge.css        ← the design system (tokens + components)
├── style-guide.html      ← living reference + working Hero (open in browser)
└── DESIGN-SYSTEM.md       ← this guide (rules for agents)
```

> **Next build step (optional):** turn each `*— Copy & Wireframe` doc into a full HTML page using this system — starting with `index.html` (Home) and `inbox-killer.html` (spearhead).
