# Website Audit — Quietforge (flexgrafik-services.vercel.app)

**Date:** 2026-06-23  
**Revision:** v2 — site↔LinkedIn parity gap added (owner correction)  
**Persona:** NL SMB owner (ZZP/BV), English-readable, skeptical of agencies, checks LinkedIn after site  
**Routes:** 21/21 HTTP 200  
**UX verdict:** **Fail** (console 404 errors > 0 on home + results pages)

---

## v2 — Site ↔ LinkedIn parity (new)

Owner confirmed: **Quietforge = service, FlexGrafik = live proof (not demo).** LinkedIn Services and About state this explicitly. Site implies it ("live operation") but **does not name FlexGrafik** as the registered operating company.

| Check | LinkedIn | Site | Verdict |
|-------|----------|------|---------|
| Names Quietforge | ✅ Services | ✅ header | ✅ |
| Names FlexGrafik as proof | ✅ Overview + Services opener | ⚠️ `/about/` story only | **AUD-S01** |
| 142 inbox msgs / scan | ✅ FlexGrafik block | verify `proof.ts` | **AUD-S02** |
| 200+ Wizard SKUs | ✅ FlexGrafik block | not on home metrics | **AUD-S02** |
| Advisory client + AVG | ✅ Services | ✅ case study | ✅ |

**Finding AUD-S01 (P1):** Add explicit FlexGrafik bridge copy — site should match LinkedIn clarity.  
**Source:** `conversion-copy.ts` ABOUT.storyBody — close but missing company name.

---

## 1. Brand & positioning — Score: 4.2/5

| Check | Result | Evidence |
|-------|--------|----------|
| Primary label = Conversion Systems Architect | ✅ | `conversion-copy.ts` POSITIONING.label |
| Anti-positioning on hero | ✅ | "Not a web designer. Not an AI chatbot builder." visible on mobile home |
| AI not in H1 | ✅ | H1 = outcome-led systems copy |
| Exception handling (website-only) | ⚠️ | In canon + copy file; verify visible on `/pricing/` not just docs |
| Quietforge vs FlexGrafik in UI | ✅ | Header = `quietforge`; no print confusion on site |
| Authors metadata | ⚠️ | `layout.tsx` authors URL → `portfolio.flexgrafik.nl` (stale?) |

**Finding AUD-W01 (P2):** Metadata `authors` points to `portfolio.flexgrafik.nl` — may 404 or show old portfolio.  
**Fix:** Point to `https://services.flexgrafik.nl/founder/` or LinkedIn `sameAs`.

---

## 2. Messaging & copy — Score: 4.0/5

| Check | Result | Evidence |
|-------|--------|----------|
| Problem → System → Effect arc | ✅ | Case studies + solution layouts |
| Named objections (WhyThisWorks) | ✅ | 4 objections in `conversion-copy.ts` OBJECTIONS |
| PAS template per section | ⚠️ | Canon exists; not verified line-by-line on all 14 home sections |
| Self-as-client transparency | ✅ | About/founder copy honest |
| Budget qualification copy | ✅ | `BUDGET_QUALIFICATION` string exists |
| Product name consistency | ❌ | Inbox Killer vs "Telegram Deployment Agent" on solution page |

**Finding AUD-W02 (P2):** `/solutions/inbox-killer/` title/H1 = "Telegram Deployment Agent" — conflicts with spearhead name "Inbox Killer" in nav, ecosystem, site-map §3.  
**Fix:** Align H1/title to "Inbox Killer" with Telegram as implementation detail in body.  
**Source:** `inventory.json` solutions-inbox-killer entry.

**Finding AUD-W03 (P3):** Case study `results-inbox-killer` H1 = "The self-running back-office" — acceptable but weak link to product name.

---

## 3. UX & interaction (Nielsen heuristics) — Score: 3.2/5

Evaluated via `nielsen-heuristics-audit` framework against live crawl + mobile screenshots.

| Heuristic | Score | Notes |
|-----------|-------|-------|
| 1. Visibility of system status | 4 | Sticky header, clear nav active states |
| 2. Match real world | 3 | "Telegram Deployment Agent" jargon for SMB |
| 3. User control | 4 | Clear back nav, footer links |
| 4. Consistency | 3 | Product naming drift (see AUD-W02) |
| 5. Error prevention | 3 | Not tested: wizard/booking flows |
| 6. Recognition over recall | 4 | Intent colors, clear section labels |
| 7. Flexibility | 3 | No WhatsApp shortcut in header |
| 8. Aesthetic minimalism | 3 | Home = 14 sections — long scroll |
| 9. Error recovery | 2 | Console 404s with no user-visible fallback |
| 10. Help/documentation | 4 | Trust page, artefacts, how-it-works |

**Finding AUD-W04 (P1):** Home page length (14 locked sections per `site-map.md`) — attention decay risk for mobile SMB buyer. Prior audit recommended MVP 5-section mode.  
**Fix:** Phase 2 traffic-aware home trim OR sticky CTA from section 3.

**Finding AUD-W05 (P1):** Console errors on interaction — **17× 404 on `/`**, 14× on `/results/`, etc.  
**Fix:** Deploy verify `/public/gratka/*`; check Next `Image` src paths on Vercel.  
**Repro:** `node scripts/audit-capture.mjs` → `inventory.json` home.errors.

**Finding AUD-W06 (P2):** Header CTA always "Book Automation Map" — canon allows cold-traffic variant ("See systems") as Phase 2.

---

## 4. Visual design system (ui-design-review) — Score: 4.3/5

| Dimension | Score | Notes |
|-----------|-------|-------|
| Visual hierarchy | 4.5 | Amber CTA dominates; clear H1/H2 |
| Typography | 4 | Mono + sans pairing consistent |
| Color & contrast | 4.5 | Dark/amber on-brand; intent colors used |
| Spacing & layout | 4 | Generous section padding |
| Component consistency | 4 | Cards, borders, radius uniform |
| Branding & personality | 4.5 | Distinct Quietforge — not template |
| Iconography | 4 | Lucide, consistent stroke |
| Imagery | 3.5 | Proof screenshots strong when loaded; 404s break polish |
| Motion | 4 | Framer scroll reveals (not fully tested reduced-motion) |
| Category conventions | 4 | Linear/Vercel-adjacent — appropriate for architect ICP |

**Finding AUD-W07 (P3):** flexgrafik.nl uses magenta/pink — intentional separation OK; ensure no pink leaks into Quietforge CSS.

---

## 5. Conversion / funnel — Score: 3.5/5

| Check | Result | Evidence |
|-------|--------|----------|
| L3 CTA in header | ✅ | "Book your Automation Map" |
| L1 proof via Systems nav | ✅ | `/results/` |
| L2 wizard demo link | ⚠️ | Hero secondary = "See the systems" not "See the wizard (2 min)" |
| Pricing floors visible | ✅ | `/pricing/` meta mentions €290, €1,200+ |
| WhatsApp L3 path | ❌ | Not in header/hero; placeholder phone in constants |
| Discovery page | ✅ | `/book-discovery/` — clear €290 H1 |
| Lead magnet for <€199 | ⚠️ | Canon defines path; not verified on live pricing |
| Returning visitor flow | ⚠️ | No warm-lead mention on book-discovery |

**Finding AUD-W08 (P1):** WhatsApp discovery canon vs implementation gap.  
**Fix:** Set `NEXT_PUBLIC_WHATSAPP_URL`; add ghost CTA in hero + mobile-primary rule.  
**Source:** `src/lib/constants.ts` WHATSAPP, `marketing-strategy.md §3`.

**Finding AUD-W09 (P2):** Hero secondary CTA = "See the systems" — canon also wants "See the wizard (2 min)" as L2 demo path.

---

## 6. Technical — Score: 3.0/5

| Check | Result | Evidence |
|-------|--------|----------|
| All routes 200 | ✅ | inventory.json |
| JSON-LD WebSite+Org+Person | ✅ | `layout.tsx` |
| JSON-LD sameAs LinkedIn | ❌ | Missing |
| OG image per route | ✅ | inventory ogImage fields |
| OG domain consistency | ⚠️ | ogImage URLs use `services.flexgrafik.nl` while browsing Vercel preview |
| Lighthouse CI | ⚠️ | **Blocked** — Windows EPERM on chrome-launcher temp cleanup |
| Sitemap build script | ✅ | `prebuild` → generate-sitemap.mjs |
| Console clean | ❌ | 404 errors (see AUD-W05) |

**Finding AUD-W10 (P2):** Lighthouse not executed this session — run on Linux CI or fix Windows temp permissions.  
**Fix:** Add GitHub Action `lighthouse:ci` against production URL.

**Finding AUD-W11 (P1):** Same as AUD-W05 — production trust issue if 404s persist on `services.flexgrafik.nl`.

---

## Interaction manifest (abbreviated)

| Time | Action | Route | Result |
|------|--------|-------|--------|
| T+0 | Playwright crawl desktop 1440×900 | 21 routes | All 200 |
| T+1 | Playwright crawl mobile 390×844 | 4 key routes | Screenshots captured |
| T+2 | Console capture home | `/` | 17 errors |
| T+3 | External fetch | flexgrafik.nl | 200, NL ZZP branding |
| T+4 | External fetch | LinkedIn | 999 login wall; public metadata via fetch |

Full screenshots: `assets/desktop/`, `assets/site-mobile/`.

---

## Cross-reference: prior audit (2026-06-17)

`docs/audit-findings (1).md` — 50 comma-level recommendations. This audit **confirms** items #6 (home length), #43–47 (WhatsApp), #53 (JSON-LD sameAs) and **adds** cross-channel P0 (LinkedIn) not in prior scope.

---

*Methodology: [2026-06-23-professional-audit-plan.md](../../plans/2026-06-23-professional-audit-plan.md)*
