# Video Production Plan — services.flexgrafik.nl

**Date:** 2026-06-25  
**Scope:** Five pending video slots (`wizard`, `inboxKiller`, `ecosystem`, `leadMagnet`, `founder`)  
**Done (reference):** `agentOs`, `vcms` — self-hosted MP4 in `public/gratka/`  
**Policy:** **No Loom.** Self-hosted MP4 only (same pattern as `vcms-demo.mp4`).  
**Handoffs:** [BL-03 wizard](./handoffs/2026-06-25-bl03-wizard-video-commander.md) · [BL-03b inbox](./handoffs/2026-06-25-bl03b-inbox-video-commander.md)

---

## Executive summary

| Key | Priority | Target | Filename | Pages (today) | Status |
|-----|----------|--------|----------|---------------|--------|
| `wizard` | **P0** | 45–60s | `wizard-demo.mp4` | `/solutions/sales-funnel/`, `/results/sales-funnel/` | **manual OBS** — [`wizard-video-manual.md`](./wizard-video-manual.md) |
| `inboxKiller` | **P0** | 60s | `inbox-killer-demo.mp4` | `/solutions/inbox-killer/`, `/results/inbox-killer/`, `/results/jadzia-coi/` | BL-03b open |
| `ecosystem` | **P1** | 90s | `ecosystem-demo.mp4` | *Not wired yet* — future: `/results/owner-ecosystem/`, home Phase B | Manifest only |
| `leadMagnet` | **P1** | 45s | `lead-magnet-demo.mp4` | `/results/lead-magnet/` | Poster ready |
| `founder` | **P2** | 120s | `founder-demo.mp4` | `/founder/` | Empty state + CTA |

**VideoSlot behaviour** (`src/components/ui/VideoSlot.tsx`):

- `ready: false` or `url: null` → `ProofEmptyState` (or `null` if `hideWhenEmpty`)
- `url` starting with `/` → native `<video controls playsInline>` (self-hosted)
- External URL → `<iframe>` embed (legacy; **do not use** for new videos)

**PR-05 gate:** Never set `ready: true` without a committed file in `public/gratka/` (or verified deploy asset).

---

## Reference — how VCMS was done (mirror this close)

Source: `flex-vcms/docs/VCMS_DEMO_SCRIPT.md`, [2026-06-17 VCMS presentation handoff](./handoffs/2026-06-17-vcms-presentation.md).

| Step | Who | Action |
|------|-----|--------|
| 1 | Commander / Agent | Generate source: `cd flex-vcms && npm run demo:all` → `docs/demo/final-portfolio-demo.mp4` (~69s, gitignored) |
| 2 | Commander | Review MP4 locally — no PII, no fake metrics, English on-screen where visible |
| 3 | Commander | Copy to services: `public/gratka/vcms-demo.mp4` (~4 MB) |
| 4 | Agent | `proof.ts` → `videos.vcms`: `{ url: '/gratka/vcms-demo.mp4', duration: '69s', ready: true }` |
| 5 | Agent | `npm run build` + `npm run typecheck` |
| 6 | Agent | Smoke: Home `#governance`, `/results/owner-ecosystem/#why-vcms`, direct `GET /gratka/vcms-demo.mp4` → 200 |
| 7 | Commander | Push `master` → Vercel CD (Zasada 11 — manual deploy approval) |

**VCMS pipeline (automated):** Playwright screen capture → FFmpeg normalize 1920×1080 → ASS burned-in subtitles (no mic) → optional ambient bed.

**Agent OS (done):** `public/gratka/agent-os-demo.mp4` — 60s automated demo from `agent-os` portfolio pack; same self-host + `ready: true` pattern.

**Pending five videos:** **Commander manual OBS / Win+G only** — see [`wizard-video-manual.md`](./wizard-video-manual.md). Playwright `record:*` scripts are **deprecated** (failed quality gate on wizard).

---

## Tools recommendation

| Tool | Use | Notes |
|------|-----|-------|
| **OBS Studio** | Primary screen recorder (Commander) | 1920×1080 canvas, 30 fps, MP4 (H.264). Matches “Dowódca records screen” workflow. |
| **Windows Game Bar** (`Win+G`) | Fallback quick capture | Lower control; OK for wizard/lead-magnet if OBS unavailable. |
| **FFmpeg** | Post-production | `scale=1920:1080`, `pad`, `-crf 23`, strip audio or add ambient @ 0.12 (see VCMS `AMBIENT_LICENSE.md`). |
| **Playwright `demo:all`** | VCMS only (already done) | Not applicable to wizard/inbox/lead/founder unless new pipelines are built later. |
| **Loom / Vimeo / YouTube** | **Forbidden** for this plan | User policy: self-hosted only. |

**Recording settings (all videos):**

- Resolution: **1920×1080** (scale in post if needed)
- Browser: Chrome, 125% zoom max, dark theme where product supports it
- Hide: bookmarks bar with client names, email subjects, Slack, personal tabs
- Cursor: visible, deliberate pacing (B2B buyer watching on mobile)

---

## Commander vs Agent split

| Phase | Commander (Dowódca) | Agent (OpenCode / Cursor) |
|-------|---------------------|---------------------------|
| Pre-flight | Env checklist per video; blur PII; test accounts | Confirm `proof.ts` slot `ready: false`, poster paths exist |
| Record | OBS capture per shot list below | — |
| Post | Optional FFmpeg compress; rename to canonical filename | — |
| Handoff | Drop MP4 in `public/gratka/` + notify Agent | Update `proof.ts` `url`, `duration`, `ready: true` |
| Verify | Visual review on staging/local | `npm run build`, `npm run typecheck`, smoke URLs |
| Ship | Approve push to `master` | Commit MP4 + `proof.ts`; update FIND DoD in `07-remediation-plan-dod.md` |
| Handoff doc | — | `docs/operations/handoffs/YYYY-MM-DD-<video>-ship.md` |

---

## Master recording session order

Minimize context switches — one browser profile, one OBS scene collection.

| Order | Video | Why this order |
|-------|-------|----------------|
| **1** | `wizard` | P0 cold-traffic blocker; single URL (`zzpackage.flexgrafik.nl`); clean funnel |
| **2** | `leadMagnet` | Same “conversion” headspace; `app.flexgrafik.nl`; no mailbox |
| **3** | `inboxKiller` | Needs OAuth mail + blur workflow; separate mental mode |
| **4** | `ecosystem` | Montage of repos already visited + VCMS + diagram; reuse clips if useful |
| **5** | `founder` | Longest; optional voice-over; can reference prior screen captures |

**Batch tip:** Record wizard + lead-magnet in one sitting (~30 min setup once). Inbox on a day with test mailbox ready. Founder last or separate session.

---

## Video 1 — `wizard` (P0)

**Target duration:** 45–60s (`proof.ts`: `45s` — update to actual after trim)  
**Source app:** https://zzpackage.flexgrafik.nl  
**Poster (ready):** `/gratka/wizard-checkout.png`

### Pages that consume it

| Route | Component |
|-------|-----------|
| `/solutions/sales-funnel/` | `SolutionLayout` → `VideoSlot` |
| `/results/sales-funnel/` | `CaseStudyLayout` → `VideoSlot` |
| Home `IntentRouter` m2 (future Phase B) | `ecosystem.ts` `videoKey: 'wizard'` — not rendered yet |

### Pre-recording checklist

- [ ] Incognito window; no saved client names in autofill
- [ ] Test product path only (generic SKU / demo category)
- [ ] Mollie test mode or stop before real payment (show price + checkout screen)
- [ ] No real client email/phone in forms
- [ ] Window title / URL bar visible for credibility
- [ ] `wizard-checkout.png` matches final checkout frame (optional reshoot poster)

### Shot list / script (EN, B2B — on-screen actions; optional burned-in subtitles)

| Time | Scene | Action | Subtitle (optional) |
|------|-------|--------|---------------------|
| 0:00–0:08 | Hook | Landing → “Stap 1 van 9” visible | Cold traffic shouldn’t need a phone call to get a price. |
| 0:08–0:22 | Configure | 2–3 steps: category, options, quantity | Nine screens. Seven business decisions. Self-service. |
| 0:22–0:35 | Price | Live total updates | Price updates as they configure — no quote-by-email. |
| 0:35–0:50 | Checkout | Summary + Mollie / pay CTA (no charge) | Configure, see price, pay — same path paying clients use. |
| 0:50–0:55 | Hold | Checkout frame | Live on zzpackage.flexgrafik.nl |

### Post-production

| Field | Value |
|-------|-------|
| **Filename** | `public/gratka/wizard-demo.mp4` |
| **proof.ts** | `videos.wizard`: `url: '/gratka/wizard-demo.mp4'`, `duration: '<actual>'`, `poster: '/gratka/wizard-checkout.png'`, `ready: true` |

### Definition of Done

- [ ] `public/gratka/wizard-demo.mp4` exists, plays in VLC, &lt; 15 MB
- [ ] `videos.wizard.ready === true` only after file committed
- [ ] `npm run build` PASS
- [ ] Smoke: `/solutions/sales-funnel/`, `/results/sales-funnel/` — video controls work
- [ ] FIND-02 checked in `07-remediation-plan-dod.md`

---

## Video 2 — `inboxKiller` (P0)

**Target duration:** 60s  
**Source app:** Jadzia COI inbox / classification UI (production or staging with test mailbox)  
**Poster:** `/gratka/inbox-lanes.png` (screen ready)

### Pages that consume it

| Route | Component |
|-------|-----------|
| `/solutions/inbox-killer/` | `SolutionLayout` |
| `/results/inbox-killer/` | `CaseStudyLayout` |
| `/results/jadzia-coi/` | `CaseStudyLayout` (same `videoKey`) |
| Home `IntentRouter` m3 | `videoKey: 'inboxKiller'` — Phase B |

### Pre-recording checklist

- [ ] **Test mailbox only** — no real client names in subject lines
- [ ] Blur or replace: email addresses, invoice numbers, IBAN, personal names
- [ ] OAuth connect screen shows test account label
- [ ] Pre-seed ~10–20 messages across lanes (lead / client / invoice / noise)
- [ ] Human approval gate visible before any “send”
- [ ] Do not click Send on real mail

### Shot list / script (EN, B2B)

| Time | Scene | Action | Subtitle (optional) |
|------|-------|--------|---------------------|
| 0:00–0:10 | Problem | Inbox overview — volume visible | 142 messages per scan — none sent without you. |
| 0:10–0:22 | Connect | OAuth / account link (test) | Connect once. Classify every thread. |
| 0:22–0:40 | Lanes | Scroll lanes: lead · client · invoice · noise | Four lanes. Drafts queued — not auto-sent. |
| 0:40–0:52 | Draft | Open one draft reply | AI proposes. You approve every outbound message. |
| 0:52–0:60 | Gate | Approval UI — highlight HITL | Human-in-the-loop isn’t a footnote — it’s the default. |

### Post-production

| Field | Value |
|-------|-------|
| **Filename** | `public/gratka/inbox-killer-demo.mp4` |
| **proof.ts** | `videos.inboxKiller`: `url: '/gratka/inbox-killer-demo.mp4'`, `duration: '60s'`, `poster: '/gratka/inbox-lanes.png'` (optional), `ready: true` |

### Definition of Done

- [ ] No identifiable PII in final MP4 (manual frame review)
- [ ] `videos.inboxKiller.ready === true` with file in repo
- [ ] Smoke: `/solutions/inbox-killer/`, `/results/inbox-killer/`, `/results/jadzia-coi/`
- [ ] FIND-11 checked in remediation DoD

---

## Video 3 — `ecosystem` (P1)

**Target duration:** 90s  
**Concept:** “How the whole ecosystem works” — 8-repo LOS, not a single app  
**Poster:** none yet — optional `/gratka/owner-ecosystem-map.svg` frame export → `ecosystem-demo-poster.jpg`

### Pages that consume it

| Route | Status |
|-------|--------|
| `/results/owner-ecosystem/` | **Planned** — add `VideoSlot videoKey="ecosystem"` in Agent session after MP4 ready |
| Home `OwnerEcosystemTeaser` | **Removed** 2026-06-17 — do not re-add without canon review |
| Home `IntentRouter` Phase B | Future per-module video |

Today: manifest slot only (`proof.ts` `ecosystem`, `ready: false`). Recording can proceed; wiring is a small follow-up Agent task.

### Pre-recording checklist

- [ ] `owner-ecosystem-map.svg` / PDF open for diagram beat
- [ ] VCMS dashboard at Conflicts: 0 (or honest DEMO label if fixture)
- [ ] Agent OS Mission Control tab (no secrets in queue titles)
- [ ] Wizard thumb / zzpackage tab pre-loaded
- [ ] `app.flexgrafik.nl` tab for lead magnet beat
- [ ] No fabricated client counts on screen

### Shot list / script (EN, B2B)

| Time | Scene | Action | Subtitle (optional) |
|------|-------|--------|---------------------|
| 0:00–0:12 | Map | Pan `owner-ecosystem-map` — 8 repos | One business. Eight repositories. One architecture. |
| 0:12–0:28 | Capture | app.flexgrafik.nl → wizard bridge | Top of funnel: play, register, route to self-service quoting. |
| 0:28–0:42 | Operate | Jadzia / inbox lanes screenshot or live | Operations layer: leads, mail, sales chat — supervised. |
| 0:42–0:58 | Execute | Agent OS Mission Control queue | Engineering layer: agents propose; humans approve before ship. |
| 0:58–1:15 | Govern | VCMS scan → Conflicts: 0 | Governance layer: scan before deploy. Conflicts visible early. |
| 1:15–1:30 | Close | services `#governance` or results hub | Same stack running in production — not a slide deck. |

### Post-production

| Field | Value |
|-------|-------|
| **Filename** | `public/gratka/ecosystem-demo.mp4` |
| **proof.ts** | `videos.ecosystem`: `url: '/gratka/ecosystem-demo.mp4'`, `duration: '90s'`, `poster: null` or poster path, `ready: true` |
| **Follow-up** | Agent: wire `VideoSlot` on `/results/owner-ecosystem/` hero or investor section |

### Definition of Done

- [ ] MP4 committed; `ready: true` only with file
- [ ] At least one live page plays video (after wire-up) or Commander accepts manifest-only until wire session
- [ ] Smoke: `/results/owner-ecosystem/` + `GET /gratka/ecosystem-demo.mp4` → 200
- [ ] No contradiction with `owner-ecosystem.ts` honesty labels (LIVE / PARTIAL / PLANNED)

---

## Video 4 — `leadMagnet` (P1)

**Target duration:** 45s  
**Source app:** https://app.flexgrafik.nl  
**Poster (ready):** `/gratka/lead-magnet-start.png`  
**Gallery:** 7 screenshots already `ready: true` in `leadMagnetGallery`

### Pages that consume it

| Route | Component |
|-------|-----------|
| `/results/lead-magnet/` | `LeadMagnetCaseStudyLayout` → `VideoSlot` |
| `/solutions/lead-magnet-game/` | **No video** — screen only via `SolutionLayout` |
| Home `IntentRouter` m6 | Phase B |

### Pre-recording checklist

- [ ] Test player name/email only (e.g. `Demo Player`, `demo@example.com`)
- [ ] Mobile viewport capture optional (second pass) — desktop first
- [ ] Show register gate before gameplay
- [ ] Reach reward overlay or wizard bridge CTA with tier code visible (GAME10 minimum)
- [ ] Do not show real leaderboard names — use season with test entries if possible

### Shot list / script (EN, B2B)

| Time | Scene | Action | Subtitle (optional) |
|------|-------|--------|---------------------|
| 0:00–0:08 | Start | Main menu — industrial framing | Not a casual browser game — a qualified entry point. |
| 0:08–0:18 | Gate | Register before play | Name and email before the first act — intent, not bounce traffic. |
| 0:18–0:30 | Play | Short gameplay clip | Engagement earns attention before the ask. |
| 0:30–0:40 | Reward | Tier ladder / unlock overlay | Progress unlocks real incentives — discount routes to wizard. |
| 0:40–0:45 | Bridge | Wizard handoff CTA | Same configurator paying clients use. |

### Post-production

| Field | Value |
|-------|-------|
| **Filename** | `public/gratka/lead-magnet-demo.mp4` |
| **proof.ts** | `videos.leadMagnet`: `url: '/gratka/lead-magnet-demo.mp4'`, `duration: '45s'`, `poster: '/gratka/lead-magnet-start.png'`, `ready: true` |

### Definition of Done

- [ ] MP4 + `ready: true`
- [ ] Smoke: `/results/lead-magnet/`
- [ ] Optional: add `videoKey="leadMagnet"` to `/solutions/lead-magnet-game/` in separate Agent session

---

## Video 5 — `founder` (P2)

**Target duration:** 120s (2 min max)  
**Format:** Founder narrative — **screen montage + optional voice-over** (only video where talking head is appropriate)  
**Poster:** optional founder still → `founder-demo-poster.jpg`

### Pages that consume it

| Route | Component |
|-------|-----------|
| `/founder/` | `VideoSlot` with CTA → `/results/` |

### Pre-recording checklist

- [ ] Script rehearsed — first person, no fake client logos
- [ ] If voice-over: quiet room, consistent mic; else burned-in subtitles like VCMS
- [ ] B-roll: wizard, VCMS scan, inbox lanes, Mission Control (from prior sessions or quick re-capture)
- [ ] No commercial traction numbers (BL-02 — public UNKNOWN)
- [ ] Align with `conversion-copy.ts` ABOUT tone — “built for real use, not pitch decks”

### Shot list / script (EN, B2B)

| Time | Scene | Action | Subtitle / VO |
|------|-------|--------|---------------|
| 0:00–0:20 | Hook | Face cam OR results hub scroll | I didn’t start an agency to build brochures. I built a system to run my own business. |
| 0:20–0:45 | Origin | Montage: scattered tools → single pipeline diagram | Off-the-shelf tools scattered data. One architecture forces one pipeline. |
| 0:45–1:10 | Proof | Wizard checkout + VCMS Conflicts: 0 + inbox lanes | Same stack in production daily — invoices, leads, deploy gates. |
| 1:10–1:35 | Philosophy | Agent OS approve gate | Automation doesn’t replace judgment. It removes repetitive coordination. |
| 1:35–1:55 | Offer | Book Automation Map CTA on site | I install this architecture for NL small businesses — start with a map, not a pitch. |
| 1:55–2:00 | Close | quietforge logo / founder page | Built for real use. Documented. Human-gated. |

### Post-production

| Field | Value |
|-------|-------|
| **Filename** | `public/gratka/founder-demo.mp4` |
| **proof.ts** | `videos.founder`: `url: '/gratka/founder-demo.mp4'`, `duration: '120s'`, `poster: null` or poster path, `ready: true` |

### Definition of Done

- [ ] MP4 + `ready: true`
- [ ] Smoke: `/founder/` — video plays; empty state gone
- [ ] No BL-02 violation (invented client counts / GMV)

---

## Global Definition of Done (program)

| Gate | Requirement |
|------|-------------|
| Assets | 5× MP4 in `public/gratka/` with canonical names |
| Manifest | All five `videos.*.ready === true` with matching `url` and `duration` |
| Build | `npm run build` + `npm run typecheck` PASS |
| Proof | `proof-check` skill: zero `[FILL:]`, no `ready: true` without file |
| Smoke URLs | See per-video tables + `GET /gratka/<file>.mp4` → 200 on deploy |
| Docs | SESSION-ANCHOR updated; per-video ship handoff; `07-remediation-plan-dod.md` FIND-02/11 |
| Deploy | Commander approves push `master` → Vercel CD |

**Current score:** 2/7 videos ready (`agentOs`, `vcms`) → target **7/7**.

---

## VideoKey → page map (complete)

| `videoKey` | `ready` | Consumer pages / components |
|------------|---------|----------------------------|
| `vcms` | ✅ | Home `BehindTheScenes`, `ecosystem.ts` m5 |
| `agentOs` | ✅ | `/results/agent-orchestrator/`, `ecosystem.ts` m4 |
| `wizard` | ❌ | `/solutions/sales-funnel/`, `/results/sales-funnel/`, `ecosystem.ts` m2 |
| `inboxKiller` | ❌ | `/solutions/inbox-killer/`, `/results/inbox-killer/`, `/results/jadzia-coi/`, `ecosystem.ts` m3 |
| `leadMagnet` | ❌ | `/results/lead-magnet/`, `ecosystem.ts` m6 |
| `ecosystem` | ❌ | *Manifest only* — wire to owner-ecosystem after record |
| `founder` | ❌ | `/founder/` |

---

## Related files

| File | Role |
|------|------|
| `src/content/proof.ts` | `videos` manifest — single source of truth |
| `src/components/ui/VideoSlot.tsx` | Render logic + empty states |
| `src/content/ecosystem.ts` | `videoKey` per home module |
| `docs/audits/2026-06-25/07-remediation-plan-dod.md` | FIND-02, FIND-11 tracking |
| `flex-vcms/docs/VCMS_DEMO_SCRIPT.md` | Reference pipeline for VCMS (done) |

---

*Next action: Commander session 1 — record `wizard` + `leadMagnet` per Master order. Agent waits for MP4 before any `ready: true`.*
