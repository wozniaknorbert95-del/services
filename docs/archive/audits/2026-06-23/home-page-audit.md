# Home Page Audit — Quietforge (services.flexgrafik.nl)

**Date:** 2026-06-23  
**Auditor:** Senior UX/Systems Design Reviewer  
**Scope:** Full home page — 14 sections, narrative arc, design system compliance, conversion mechanics  
**Benchmark:** Linear.app, Vercel.com, Retool.com, Stripe.com (systems-architect presentation standard)  
**Canon:** `site-map.md`, `ui-ux-principles.md`, `conversion-pipeline.md`, `marketing-strategy.md`, `DESIGN-SYSTEM.md`

---

## 1. Executive Summary

### Overall Score: 3.7 / 5.0 (B+)

The home page has **exceptional conceptual architecture** — the 14-section narrative arc follows Problem → System → Effect faithfully, the Intent Router is a genuinely original UX pattern, and the terminal-aesthetic positioning is unique in the SMB conversion space. The strategy canon is rigorous and well-documented.

However, the **execution has drift**. Several sections break design system rules, the Intent Router uses a different visual language than the rest of the page, there is cognitive overload from 14 full-weight sections, and critical wayfinding signals are missing. The page reads as a systems-architect's comprehensive documentation — not as a systems-architect's **curated cockpit** where a client instantly orients themselves.

**The gap:** The site was built to **explain** everything. It needs to be rebuilt to make the visitor **feel** like they're operating a system — oriented, in control, one clear path ahead at each step.

### Score Breakdown

| Dimension | Score | Note |
|-----------|-------|------|
| **Strategy alignment** | 4.5 | Canon compliance excellent; section order LOCKED and honored |
| **Narrative arc** | 4.0 | Problem→System→Effect holds; but 14 sections dilute the climax |
| **Visual system consistency** | 3.2 | IntentRouter breaks token system; inconsistent panel density |
| **Cognitive load management** | 2.8 | No progressive disclosure; every section equally weighted |
| **Conversion mechanics** | 3.5 | L3 well-placed; L1/L2 hierarchy muddy in middle sections |
| **Systems-architect identity** | 4.2 | Terminal mocks, status bars, eyebrows — strong and unique |
| **Mobile experience** | 3.3 | StickyCta added; but 14 sections = extreme scroll depth |
| **Wayfinding** | 2.9 | No section nav, no progress, no "you are here" signal |
| **Design system compliance** | 3.0 | IntentRouter, PainGrid use non-token vars; class drift |
| **Benchmark parity (Linear/Vercel)** | 3.5 | Vibe correct; density and white-space management lagging |

---

## 2. The Core Thesis Problem

The site tries to serve two masters simultaneously:

**Master A — "Show I'm a real systems architect"** (explain everything, 8 repos, 14 sections, VCMS governance, Agent OS, intent colors, proof manifest). This is the builder's perspective.

**Master B — "Make the client feel like they're in a cockpit"** (oriented, confident, decisive, one clear next step). This is the buyer's perspective.

Currently the page executes ~80% of Master A and ~40% of Master B. The optimization plan must **preserve A while dramatically improving B**.

### The Systems Architect Paradox

A real systems architect **curates** complexity. A junior shows everything. The home page currently shows everything — which paradoxically undermines the "I'm a systems thinker" positioning.

**Target state:** The visitor scrolls through 14 sections and at every point thinks *"This person thinks in systems"* — not because they see all the systems, but because the **page itself behaves like a system**: clear routing, progressive disclosure, every element in its place, nothing wasted.

---

## 3. Section-by-Section Analysis

### §1 Hero (HeroSection) — Score: 4.2 / 5.0

**Strengths:**
- Anti-positioning line is bold and differentiating ("Not a web designer. Not an AI chatbot builder.")
- Terminal mock is the right visual — client immediately senses "this is different"
- Status bar below hero = brilliant systems-architect signal
- 4 CTA tiers present (Book / WhatsApp / See systems / Wizard) — covers all entry paths

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| H-01 | P1 | **4 CTAs in hero = competing priorities.** Canon says "one primary per viewport." WhatsApp ghost + See systems text link + Wizard link = 3 secondaries. Client faces decision paralysis at the most critical moment. Linear has ONE button. Vercel has TWO max. |
| H-02 | P2 | **Wizard CTA is invisible.** `text-[var(--qf-text-faint)]` on the most conversion-ready L2 link. If someone is ready to try the wizard, they shouldn't have to squint. |
| H-03 | P2 | **"Chat on WhatsApp" label doesn't convey value.** "Ask me anything — WhatsApp" or "Quick question? WhatsApp →" positions it as low-friction help, not a channel announcement. |
| H-04 | P3 | **Terminal mock is static.** Linear and Vercel animate their hero visuals on scroll or with a typing effect. The static `$` cursor is fine, but a subtle cursor blink would add life without violating reduced-motion. |
| H-05 | P2 | **proofLine and microTrust are both `--qf-text-faint`.** Two lines of barely-visible text at the bottom of the hero area — the proof line ("FlexGrafik live ops • 8-repo ecosystem") is the single most important trust signal and it's the faintest element on screen. |

**Recommendation:** Reduce to 2 CTAs above-fold (primary Book + ghost WhatsApp). Move wizard and See systems to the status bar or a secondary row below the main CTA pair. Promote proofLine to `--qf-text-dim` minimum.

---

### §2 System Architecture (SystemArchitecture) — Score: 4.0 / 5.0

**Strengths:**
- 8-step horizontal pipeline is excellent information design
- Numbered steps with monospace index = systems-architect DNA
- "Same architecture deployed in my own ecosystem" hint = honest and strong

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| SA-01 | P1 | **Pipeline doesn't highlight where the CLIENT enters.** Visitor → Landing → Wizard → … → Client. The first 2 steps describe the website itself ("Lands with a specific pain" / "Recognises the outcome"). A systems architect would highlight the **handoff boundary** — where the system takes over from the human. Currently all 8 steps look equal. |
| SA-02 | P2 | **No visual connection to IntentRouter below.** This section shows the macro pipeline; IntentRouter shows the modules. The viewer doesn't understand they're looking at different layers of the same system. A real cockpit shows layer relationships. |
| SA-03 | P2 | **Mobile layout.** 8 cells stacking vertically on mobile loses the pipeline metaphor entirely. The `→` arrows disappear. On mobile this reads as a list, not a flow. |

**Recommendation:** Highlight step 3–4 (Wizard + AI Assistant) with accent border — that's where the system does the heavy lifting. Add a thin connecting line between this section and IntentRouter, or a micro-label "The modules underneath ↓".

---

### §3 Intent Router (IntentRouter) — Score: 4.5 / 5.0 (concept) · 2.8 / 5.0 (implementation)

**This is the section you built to show systems mastery. It's the right instinct — it IS the most unique section on any SMB conversion site I've seen. The concept deserves a 5. The implementation needs work.**

**Strengths:**
- **Genuinely original UX pattern.** No competitor has an intent-based filter that dynamically reorganizes system modules. This IS what makes the page feel like a cockpit.
- Filtering animation with `AnimatePresence` + `popLayout` is smooth
- "Next step" recommendation panel adapts to selection — personalized architecture
- Intent color badges on every card — consistent with ecosystem manifest
- ModulePreviewThumb shows real screenshots

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| IR-01 | **P0** | **Visual language break.** This section uses `rounded-xl`, `rounded-2xl`, `rounded-full`, `hover:-translate-y-0.5`, `hover:shadow-lg`, `bg-gradient-to-b` — ALL of which violate DESIGN-SYSTEM.md: "Sharp corners (`--qf-radius: 2px`). No rounded cards/buttons." / "Borders, not shadows." / "No gradients-as-decoration." This section looks like it was pasted from a different site. |
| IR-02 | **P0** | **Non-token CSS variables.** Uses `--border-strong`, `--border-subtle`, `--bg-elevated`, `--bg-base`, `--text-muted`, `--text-main` — none of which are Quietforge tokens. The canonical tokens are `--qf-border`, `--qf-border-bright`, `--qf-bg-raised`, `--qf-bg`, `--qf-text-dim`, `--qf-text`. This creates dependency on an external/legacy stylesheet. |
| IR-03 | P1 | **`panel` and `btn` CSS classes.** Uses bare `.panel` and `.btn` instead of `qf-panel` and `qf-btn`. These may resolve to nothing or to different styles. |
| IR-04 | P1 | **CTA panel at bottom is too long.** `max-w-3xl mx-auto p-8 rounded-2xl` with "Based on your choice, I recommend starting with:" is verbose. A systems architect's recommendation would be terse: "{Module name} → See proof". |
| IR-05 | P2 | **No state label.** When no intent is selected, the grid shows all 8 modules. When an intent is selected, it filters. But there's no label showing "Showing: all modules" → "Showing: 3 modules matching 'Save time'". A systems UI always shows filter state. |
| IR-06 | P2 | **Intent buttons lack selected-state accessibility.** The `aria-pressed` is correct, but the selected state relies solely on background color. For systems-architect UI: add a checkmark, a border treatment, or a "selected" indicator. |
| IR-07 | P2 | **Legend bar below buttons is redundant.** The intent buttons already show the label + color. The legend bar restates the same information with a dot + longer legend text. Eliminate redundancy — a systems-architect interface never explains itself twice. |

**Recommendation:** This section needs a visual-system migration to Quietforge tokens. Remove `rounded-xl`, `shadow-lg`, gradients. Use `--qf-radius`, `--qf-border`, `--qf-bg-raised`. Keep the interaction logic — it's gold. The cockpit feel comes from the FUNCTION, not from rounded cards.

---

### §4 Pain Grid (PainGrid) — Score: 4.3 / 5.0

**Strengths:**
- Intent-colored left borders = immediate visual categorization
- Icons per pain type add scannability
- "See the fix →" link in intent color = good conversion micro-pattern
- Data-driven from `PAIN_GRID` in ecosystem.ts — DRY and canonical

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| PG-01 | P2 | **No eyebrow H2.** Only an Eyebrow ("Sound familiar?") with no heading. This breaks the section anatomy from ui-ux-principles.md §3: "Eyebrow + H2 + lead paragraph." Every other section has an H2. |
| PG-02 | P2 | **4 cards feel disconnected from the 8 modules above.** The pain grid has 4 pains; the Intent Router has 8 modules. A systems thinker would show the mapping: "This pain → this module." Currently the visitor must infer the connection. |
| PG-03 | P3 | **"Sound familiar?" is generic.** For a systems-architect position, consider: "// Diagnostics" or "Where the system finds the leaks" — language that positions the pains as system failures, not emotional prompts. |

---

### §5 Spearhead Spotlight (SpearheadSpotlight) — Score: 4.4 / 5.0

**Strengths:**
- "Start here" eyebrow = clear wayfinding
- Terminal mock with `read → classify → draft → approve` = process-proof in 1 line
- Accent border + glow shadow on right panel = justified `--spearhead` emphasis
- Copy is benefit-driven: "gives you your mornings back"

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| SS-01 | P2 | **CTA goes to `/solutions/inbox-killer/` but label says "See how Inbox Killer works."** The canonical L1 for solution-aware visitors is to see proof first (`/results/inbox-killer/`). The solution page is the conversion page. Consider: primary → proof, secondary → solution. |
| SS-02 | P3 | **No measurement line.** The section claims time savings but doesn't cite "142 msgs/scan" or any number. BehindTheScenes below shows VCMS metrics. Spearhead should show inbox metrics. |

---

### §6 Owner Ecosystem Teaser (OwnerEcosystemTeaser) — Score: 4.0 / 5.0

**Strengths:**
- SVG ecosystem map is the signature proof asset
- PDF download = tangible artefact (conversion-pipeline L2)
- Outcome bullets with ✓ = clean pattern

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| OE-01 | P2 | **Redundant outcome bullets.** BehindTheScenes (§9) repeats the exact same 3 outcomes ("Fewer surprises before deploy", "Faster changes with control", "Cleaner handover"). Copy-paste across two sections in the same page. A systems architect doesn't repeat. |
| OE-02 | P2 | **SVG diagram is wide but context-free.** The diagram shows repo names, but a cold visitor doesn't know what "jadzia-core" or "flex-vcms" means. The IntentRouter already maps modules to outcomes. The ecosystem map should map to the SAME module names, not repo keys. |

---

### §7 System Metrics (SystemMetrics) — Score: 3.8 / 5.0

**Strengths:**
- Number + label + outcome line per card = good pattern
- Intent color on label = consistent with router
- Data from `metrics-display.ts` + `proof.ts` = DRY

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| SM-01 | P1 | **Metrics are feature counts, not outcomes.** "14 wizard steps" / "200+ SKUs" / "8 repos" — these are impressive to developers, not to SMB owners. The outcome translations exist (`metrics-display.ts`) but are in small gray text below. A cockpit puts the OUTCOME big and the feature count small. Invert the hierarchy. |
| SM-02 | P2 | **"Inbox throughput: 142 msgs/scan"** — what does "per scan" mean to a business owner? Translation: "142 emails classified before you open your inbox." Make the outcome the headline. |
| SM-03 | P2 | **6 metric cards in a 3-column grid.** On mobile this becomes 6 stacked cards of similar weight. Reduce to 3–4 impactful metrics or group into categories. |

---

### §8 Results Teaser (ResultsTeaser) — Score: 3.8 / 5.0

**Strengths:**
- Case study cards with intent badges, measurement line, and detail link
- 2-column grid at lg = scannable
- "See all results →" link = proper L1

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| RT-01 | P1 | **Shows ALL case studies (6+) on home.** Vercel shows 3 featured. Linear shows 2 quotes. Showing everything says "I need to prove myself" — the opposite of systems-architect confidence. Show 3 max with "See all results →". |
| RT-02 | P2 | **H2 is just "What changes" — no eyebrow.** Every section should follow eyebrow + H2 pattern. "// Results" eyebrow missing. |
| RT-03 | P2 | **Measurement line uses `--qf-text-faint`.** The single most important proof data (measurement) is the least visible text on the card. This should be `--qf-accent` or `--qf-ok`. |

---

### §9 Behind the Scenes (BehindTheScenes) — Score: 3.5 / 5.0

**Strengths:**
- VCMS feature status badges (PROVEN / DEMO) = honesty pattern
- Screenshots from proof manifest = real
- "The system proposes; a human approves what ships" = strong one-liner

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| BTS-01 | P1 | **Content overlap with §6 (OwnerEcosystemTeaser).** Both sections show VCMS governance, ecosystem map, same outcome bullets. A cold visitor sees two sections about the same thing back-to-back (separated only by §7 and §8). Merge or differentiate. |
| BTS-02 | P1 | **Center-aligned text + long paragraph = hard to scan.** This is the only section with `text-center` on the intro block. Every other section is left-aligned. Breaks visual rhythm. |
| BTS-03 | P2 | **Feature status pills are tiny (10px).** The honesty labels (PROVEN / DEMO) are a trust differentiator but nearly invisible. Make them part of a more prominent table or grid. |

---

### §10 How I Work (HowIWork) — Score: 4.5 / 5.0

**Strengths:**
- 5-step numbered process with deliverable per step = gold standard
- "paid first step" and "human-in-the-loop" badges = honest qualification
- Artefact download links = tangible proof
- Quote at bottom: "same workflow that runs my own production ecosystem" = strong close

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| HIW-01 | P3 | **"Build with an AI workforce" step description.** For an SMB owner, "planner → coder → tester → review" is internal jargon. Rephrase: "assembled faster and leaner than manual coding." |

**This is the strongest section on the page.** It should be higher in the scroll order per conversion-pipeline.md Flow A (proof → process → commercial).

---

### §11 Why This Works (WhyThisWorks) — Score: 3.5 / 5.0

**Strengths:**
- 3 pillars + 4 named objections = clear structure
- Objection handling is honest and specific

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| WTW-01 | P1 | **No H2 eyebrow.** Just "Why this works" as H2. Missing `// Objections` or `// Under the hood` eyebrow. |
| WTW-02 | P2 | **Pillar icons (Server, Bot, ShieldCheck) are generic.** For a systems architect, consider terminal/cockpit iconography or remove icons entirely — the text is strong enough. |
| WTW-03 | P2 | **Objection cards are `--qf-bg-inset` with no visual hierarchy.** The objection label ("Price", "Trust") is in accent mono — good. But the rebuttal text blends with everything else. Consider making the rebuttal bolder or the objection a different layout (label: rebuttal in one line, like a key-value pair in a terminal). |

---

### §12 Trust & Safety (TrustSafety) — Score: 4.0 / 5.0

**Strengths:**
- "Safe enough to hand your inbox to" eyebrow = specific and confident
- HITL, EU data, logged & auditable = the right 3 pillars
- "For ZZP & small businesses in NL" = clear ICP signal

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| TS-01 | P3 | **Could be merged with WhyThisWorks.** Trust + objection handling are the same buyer concern. Two separate sections with 3 cards each = 6 cards about "why trust me." Merge into one section with 2 subsections. |

---

### §13 Pricing (Pricing) — Score: 3.2 / 5.0

**Strengths:**
- 4 tiers with clear deliverables
- "Fee credited toward your project" in discovery tier
- Checkmark lists per tier

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| PR-01 | **P0** | **4× identical "Book Automation Map" CTA.** Every tier card has the same button. This violates conversion-pipeline.md: "No competing primaries per viewport section." The user sees 4 identical buttons and doesn't know which to click. Only the Automation Map tier should have the primary CTA. Others: "Scoped in your Map" or "Included in Map". |
| PR-02 | P1 | **No featured/spearhead tier.** DESIGN-SYSTEM.md specifies `qf-tier--featured` with a "Most popular" badge for the middle plan. No tier is visually elevated. Inbox Killer range (€1,200–€4,800) is the spearhead and should be featured. |
| PR-03 | P2 | **Pricing data doesn't match constants.** `proof.ts` has generic pricing (`singleSystem`, `ecosystem`, `maintenance`) but `constants.ts` has product-specific ranges (`inboxKiller: 1200–4800`, `salesFunnel: 2400–6500`). The home pricing section shows generic tiers, not product-specific ranges. |

---

### §14 Final CTA Band (FinalCtaBand) — Score: 4.5 / 5.0

**Strengths:**
- Single L3 CTA = correct per canon
- "Start with clarity, not a sales pitch" = strong close
- Automation Map sample download link = tangible artefact

**Issues:**

| ID | Severity | Finding |
|----|----------|---------|
| FC-01 | P3 | **Copy is slightly long.** 4 lines of explanation before the button. A systems architect's close is 2 lines max: problem + action. |

---

## 4. Narrative Arc Analysis

### Current Arc (14 sections)

```
§1  Hero           — Who / CTA
§2  Pipeline       — How the system works (macro)
§3  IntentRouter   — Pick your outcome (interactive)
§4  PainGrid       — Recognize your problem
§5  Spearhead      — Start here (Inbox Killer)
§6  Ecosystem      — Proof: 8 repos
§7  Metrics        — Proof: numbers
§8  Results        — Proof: case studies
§9  BehindScenes   — Proof: VCMS governance
§10 HowIWork       — Process
§11 WhyThisWorks   — Objections
§12 Trust          — Safety
§13 Pricing        — Commercial
§14 FinalCTA       — Close
```

### Problem: The Proof Zone is Too Long

Sections 5–9 are ALL proof. Five consecutive sections proving the system is real. This is the "showing everything" problem. After §5 (Spearhead), a convinced visitor wants to act — but they're served 4 more proof sections before they see process or pricing.

### Recommended Arc (same 14 sections, reweighted)

The section order is LOCKED in `site-map.md` — we do NOT propose reordering. Instead, we propose **visual weight management**: not all sections need equal height and density.

| Section | Current weight | Proposed weight | Rationale |
|---------|---------------|-----------------|-----------|
| §1 Hero | FULL | FULL | Correct — must earn 10 seconds |
| §2 Pipeline | FULL | **COMPACT** | 8 steps can be a single horizontal strip, not a full section. This is education, not proof. |
| §3 IntentRouter | FULL | FULL | The cockpit moment. Preserve. |
| §4 PainGrid | FULL | **COMPACT** | 4 cards, already scannable. Remove section padding. Let it breathe less — it's a bridge, not a destination. |
| §5 Spearhead | FULL | FULL | Correct — the flagship CTA moment |
| §6 Ecosystem | FULL | **MEDIUM** | Show diagram + 1 CTA. Remove outcome bullets (they're in §9). |
| §7 Metrics | FULL | **COMPACT** | Reduce to 3–4 metrics. Outcome-first, feature-second. |
| §8 Results | FULL (6 cards) | **MEDIUM** (3 cards) | Curate. Show 3 strongest. |
| §9 BehindScenes | FULL | **Merge with §6** or make it an expandable panel under Ecosystem |
| §10 HowIWork | FULL | FULL | Strongest section. Keep. |
| §11 WhyThisWorks | FULL | **Merge with §12** into single Trust/Objections section |
| §12 Trust | FULL | See above |
| §13 Pricing | FULL | FULL (but fix competing CTAs) |
| §14 FinalCTA | FULL | FULL | Correct close |

**Effect:** Same 14 components in DOM. Visually: 10 perceived sections instead of 14. Scroll depth reduced ~30%. The cockpit feels tighter.

---

## 5. The Cockpit Principle — Making the Client Feel Like a Systems Architect

### What "cockpit feel" actually means in UX

| Cockpit trait | UX implementation | Current state |
|---------------|-------------------|---------------|
| **Orientation** | "You are here" indicator, section progress, breadcrumb-like wayfinding | Missing entirely |
| **Instrumentation** | Data displayed as metrics/gauges, not prose | Metrics section exists but outcomes are buried |
| **Routing** | "Based on your input, go HERE" — active navigation | IntentRouter does this (great) but it's disconnected from the rest |
| **Status awareness** | What's live, what's ready, what's pending | Status bar in hero + VCMS badges — but not threaded through |
| **Minimal chrome** | No decorative elements; every pixel has a job | IntentRouter violates (shadows, gradients, rounded corners) |
| **Confidence** | "I know what I'm looking at" — clear labels, no ambiguity | Eyebrows help; but some sections lack them |

### Proposed Cockpit Enhancements

**Enhancement 1 — Section Navigator (sticky sidebar or top rail)**

A thin, vertical line on the left edge (desktop) or a horizontal progress bar (mobile) showing where the visitor is in the narrative. Labels:

```
System · Route · Pain · Spearhead · Proof · Process · Pricing
```

When the visitor scrolls past a section, the corresponding label activates. This is how a systems architect would design a long-scroll page — with orientation.

**Enhancement 2 — Thread the Status Bar**

The hero has a status bar (`8 repos · 6 systems live · human-in-the-loop · EU-hosted`). This bar should reappear (minimally) at the top of the Metrics and BehindTheScenes sections — reinforcing that the visitor is looking at a LIVE system, not a brochure.

**Enhancement 3 — IntentRouter State Persistence**

If a visitor selects "Save time" in the IntentRouter, that choice should subtly persist:
- Results Teaser highlights time-related case studies
- Spearhead section reinforces "Inbox Killer saves time"
- This makes the page feel RESPONSIVE to the user — like a system that adapts to their input

This is advanced (React state or URL param) but it's the single highest-impact cockpit feature.

**Enhancement 4 — Terminal-Language Section Labels**

Replace prose eyebrows with terminal-style labels where appropriate:

| Current | Proposed |
|---------|----------|
| "Sound familiar?" (PainGrid) | `// diagnostics` |
| "Find your path" pill (IntentRouter) | `// route --by-outcome` |
| "What changes" (ResultsTeaser) | `// results` |
| "Why this works" (WhyThisWorks) | `// system.verify()` |

This threads the systems-architect language through the page without changing the content.

---

## 6. Design System Compliance Matrix

| Section | Token compliance | Issues |
|---------|-----------------|--------|
| §1 Hero | ✅ Full | All qf-* tokens |
| §2 Pipeline | ✅ Full | All qf-* tokens |
| §3 IntentRouter | ❌ **Broken** | Uses `--border-strong`, `--bg-elevated`, `--text-muted`, `.panel`, `.btn`, `rounded-xl`, `shadow-lg`, gradients |
| §4 PainGrid | ✅ Full | All qf-* tokens |
| §5 Spearhead | ✅ Full | qf-* + justified spearhead glow |
| §6 Ecosystem | ✅ Full | All qf-* tokens |
| §7 Metrics | ✅ Full | All qf-* tokens |
| §8 Results | ✅ Full | All qf-* tokens |
| §9 BehindScenes | ✅ Full | All qf-* tokens |
| §10 HowIWork | ✅ Full | All qf-* tokens |
| §11 WhyThisWorks | ✅ Full | All qf-* tokens |
| §12 Trust | ✅ Full | All qf-* tokens |
| §13 Pricing | ✅ Full | All qf-* tokens |
| §14 FinalCTA | ✅ Full | All qf-* tokens |

**The IntentRouter is the ONLY section that breaks the design system.** Ironic, because it's the section designed to show systems mastery. This must be the top priority fix.

---

## 7. Conversion Mechanics Audit

### CTA Placement Map

| Section | L1 | L2 | L3 | Competing? |
|---------|----|----|-----|------------|
| §1 Hero | See systems | Wizard | Book + WhatsApp | **Yes — 4 actions** |
| §3 IntentRouter | See systems | — | Book | No |
| §5 Spearhead | — | — | See how IK works (L1 disguised as L3 button) | No |
| §6 Ecosystem | Ecosystem map | PDF download | — | No |
| §8 Results | See all results | — | — | No |
| §9 BehindScenes | Owner ecosystem CS | — | — | No |
| §10 HowIWork | Download sample | Handover policy | — | No |
| §13 Pricing | — | — | Book × 4 | **Yes — 4× identical** |
| §14 FinalCTA | Sample download | — | Book | No |

**Violations:** Hero (4 actions) and Pricing (4× same button). Canon allows max 1 primary + 1 secondary per viewport.

### L3 Cadence (cold visitor scroll)

```
§1  L3 Book (hero)         ← first L3
§2  —
§3  L3 Book (router)       ← second L3 after 1 proof section
§4  —
§5  L3 (spearhead CTA)
§6  —
§7  —
§8  —
§9  —
§10 —
§11 —
§12 —
§13 L3 × 4 (pricing)      ← 8 sections since last L3
§14 L3 Book (close)
```

**Gap:** Sections 6–12 have ZERO L3. A visitor scrolling through 7 sections of proof/process has no conversion opportunity. Canon says "minimum two proof sections before second L3" — but it doesn't say "zero L3 for seven sections."

**Fix:** Add a subtle L3 after §8 (ResultsTeaser) or §10 (HowIWork). Not a full CTA band — a single-line inline: "Ready? Book your Automation Map →".

---

## 8. Optimization Plan — Prioritized

### P0 — Must Fix (1 session each)

| ID | Task | Impact | Files |
|----|------|--------|-------|
| OPT-01 | **IntentRouter → Quietforge tokens.** Replace all non-qf vars, remove rounded-xl / shadow-lg / gradients, use `qf-panel` cards. | Design system integrity | `IntentRouter.tsx` |
| OPT-02 | **Pricing: 1 primary CTA, not 4.** Automation Map tier = primary. Others: "Scoped in your Map" (disabled-style). Add `qf-tier--featured` to Inbox Killer or Ecosystem. | Conversion clarity | `Pricing.tsx` |
| OPT-03 | **Hero: reduce to 2 CTAs.** Primary Book + ghost WhatsApp. Move wizard + See systems to status bar row or small text links below. | Decision paralysis | `HeroSection.tsx` |

### P1 — High Impact (1 session each)

| ID | Task | Impact | Files |
|----|------|--------|-------|
| OPT-04 | **Add eyebrows to PainGrid, ResultsTeaser, WhyThisWorks.** Follow section anatomy from ui-ux-principles. | Visual consistency | 3 components |
| OPT-05 | **Results Teaser: max 3 case studies.** Curate top 3. "See all results →" stays. | Cognitive load | `ResultsTeaser.tsx` |
| OPT-06 | **Metrics: outcome-first layout.** Large text = business outcome. Small mono = feature count. Invert current hierarchy. | SMB reader comprehension | `SystemMetrics.tsx`, `metrics-display.ts` |
| OPT-07 | **Deduplicate Ecosystem ↔ BehindTheScenes.** Remove duplicated outcome bullets from one section. Differentiate: Ecosystem = breadth (8 repos), BTS = depth (VCMS governance). | Content redundancy | `OwnerEcosystemTeaser.tsx`, `BehindTheScenes.tsx` |
| OPT-08 | **ProofLine promotion in hero.** `--qf-text-dim` instead of `--qf-text-faint`. This is the most important trust line. | Trust signal visibility | `HeroSection.tsx` |
| OPT-09 | **IntentRouter: add filter state label.** "Showing all modules" / "3 modules match 'Save time'". | Cockpit UX | `IntentRouter.tsx` |
| OPT-10 | **Mid-page L3.** Subtle inline "Ready? Book your Automation Map →" after §8 or §10. | Conversion gap | `ResultsTeaser.tsx` or `HowIWork.tsx` |

### P2 — Polish (1–2 sessions)

| ID | Task | Impact | Files |
|----|------|--------|-------|
| OPT-11 | **Section progress indicator.** Thin left-edge rail (desktop) or top progress bar (mobile) with section labels. | Wayfinding / cockpit feel | New component |
| OPT-12 | **Terminal-language eyebrows.** `// diagnostics`, `// results`, `// system.verify()` where appropriate. | Systems-architect identity | Copy in components |
| OPT-13 | **Merge WhyThisWorks + TrustSafety.** One "Trust" section with pillars + objection handling. | Scroll depth | 2 components → 1 |
| OPT-14 | **Section weight management.** Reduce padding on Pipeline and PainGrid to `--qf-sp-16` instead of `--qf-sp-24`. Visual cue that these are bridges, not destinations. | Perceived length | `SystemArchitecture.tsx`, `PainGrid.tsx` |
| OPT-15 | **IntentRouter recommendation panel: shorter.** "Recommended: {name}" + 2 buttons max. | Cockpit terseness | `IntentRouter.tsx` |

### P3 — Advanced Cockpit (Sprint 3+)

| ID | Task | Impact | Files |
|----|------|--------|-------|
| OPT-16 | **Intent persistence across sections.** User selects "Save time" → Results Teaser highlights time-related studies. | Personalized cockpit | React state + prop drilling |
| OPT-17 | **Hero terminal cursor blink.** CSS-only animation, disabled when `prefers-reduced-motion`. | Micro-polish | `HeroSection.tsx` |
| OPT-18 | **Pipeline handoff highlight.** Steps 3–4 (Wizard + AI) get accent border to show "where the system takes over." | Architecture communication | `SystemArchitecture.tsx` |

---

## 9. Success Metrics

| Metric | Current | Target | Measurement |
|--------|---------|--------|-------------|
| Design system compliance | 13/14 sections | 14/14 | Zero non-qf CSS vars in src/components/home/ |
| Competing CTAs per viewport | 2 violations | 0 | Manual review |
| Scroll depth to first L3 | 1 section (hero) | 1 section | Maintained |
| L3 gap (longest stretch without L3) | 7 sections | ≤ 4 sections | Section count |
| Results shown on home | 6+ | 3 | Card count |
| Perceived section count | 14 equal | 10 weighted | Visual weight audit |
| Nielsen heuristics avg | 3.9 | ≥ 4.3 | Post-optimization audit |

---

## 10. Benchmark Comparison

| Trait | Linear | Vercel | Quietforge (current) | Quietforge (target) |
|-------|--------|--------|---------------------|---------------------|
| Hero CTAs | 2 | 2 | 4 | 2 |
| Sections visible | ~6 | ~8 | 14 | 14 (10 perceived) |
| Interactive element | Command palette demo | Deploy button | IntentRouter | IntentRouter (enhanced) |
| Proof density | Sparse (brand trust) | Medium (metrics) | High (5 proof sections) | Medium (3 curated) |
| Pricing on home | No | No | Yes (4 tiers) | Yes (refined) |
| Section navigation | No (short page) | No | No | Yes (progress rail) |
| Design system consistency | 100% | 100% | 92% (IntentRouter breaks) | 100% |

---

## 11. Key Insight

**The IntentRouter IS the cockpit moment.** It's where the visitor stops being passive and starts ROUTING themselves through a system. No competitor has this. But it's currently wrapped in the wrong visual skin (rounded cards, shadows, gradients) that says "SaaS landing page" instead of "architect's control panel."

When the IntentRouter uses Quietforge tokens — sharp corners, thin borders, monospace labels, no decorative shadows — it will feel like the visitor just sat down at a terminal and started operating. THAT is the moment the positioning delivers.

**The page doesn't need fewer sections. It needs the sections to feel like panels in a dashboard — each with a clear function, visible boundaries, and no redundancy.**

---

*Audit prepared on 2026-06-23. Canon references: site-map.md, ui-ux-principles.md, conversion-pipeline.md, marketing-strategy.md, DESIGN-SYSTEM.md. All findings traceable to specific files and lines.*
