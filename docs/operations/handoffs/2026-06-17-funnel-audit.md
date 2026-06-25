# Handoff — Funnel audit + VCMS nav revert

**Data:** 2026-06-17  
**Repo:** services.flexgrafik.nl  
**Sesja:** Revert VCMS z nav + audyt lejka vs strategy canon

---

## Zmiany w tej sesji

| Plik | Co |
|------|-----|
| `src/lib/navigation.ts` | Usunięto VCMS z `SOLUTIONS_NAV` i `FOOTER_COMPANY`; footer Company: **Systems & results** → `/results/` |
| `docs/strategy/conversion-pipeline.md` §6 | Kanon: 5 SKU w dropdown; VCMS proof pod Systems → owner-ecosystem → `#why-vcms` |

**Build:** `npm run typecheck` ✅ · `npm run build` ✅ (31 routes)

---

## 1. Executive summary

- **Lejek ogólnie zdrowy** — proof → qualification → Book Automation Map jest spójny na większości money pages; header CTA L3, home section order = LOCKED canon.
- **Największa luka (P0):** `/solutions/inbox-killer/` ma **zły content** (Telegram Deployment Agent zamiast Inbox Killer) — spearhead SKU jest zepsuty dla Flow B.
- **Druga luka (P0):** Legacy route `/inbox-killer/` z starym pricingiem (€497/€147) — orphan, sprzeczny z kanonem €1,200+.
- **Największy win:** Home stack 14/14 sekcji zgodny z `site-map.md` §2; nav manifest w `navigation.ts`; VCMS proof poprawnie w home/results (nie w Solutions dropdown).
- **Faza 2 gaps:** Brak sticky CTA, brak mobile hero WhatsApp-primary, słabe L2 wizard na home.

---

## 2. Funnel map

### Canon (cold visitor — Flow A)

```
Google/referral
    → Home Hero (pain + L3)
    → IntentRouter / proof sections
    → /results/ (case studies)
    → /book-discovery/ (L3)
    → Automation Map call
```

### Actual routes (skrót)

```
/                    HOME (14 sections, proof stack)
/results/*           Proof hub + 6 case studies (+ whatsapp pilot)
/solutions/*         Product ladder (5 SKU)
/how-it-works/       Process trust
/pricing/            Commercial
/book-discovery/     L3 conversion
/founder/ · /about/  Credibility
/trust/              Safety
```

### Mermaid — cold path vs implementation

```mermaid
flowchart TD
  A[Cold visitor] --> B[Home /]
  B --> C{IntentRouter}
  C -->|module card| D[/results/* or /solutions/*]
  C -->|See the systems| E[/results/]
  B --> F[BehindTheScenes / OwnerEcosystem]
  F --> G[/results/owner-ecosystem/#why-vcms]
  D --> H[/book-discovery/]
  E --> H
  I[Header L3] --> H
  J[Footer L3 + WhatsApp] --> H
  K[Legacy /inbox-killer/] -.->|P0 orphan| L[Wrong pricing copy]
  M[/solutions/inbox-killer/] -.->|P0 wrong page| N[Telegram agent content]
```

---

## 3. L1/L2/L3 compliance

| Strona | Canon (expected) | Actual | Status |
|--------|------------------|--------|--------|
| **Home Hero** | Desktop: L1 secondary + L2 optional; Mobile: WhatsApp L3 primary | L3 Book (filled) + L1 „See the systems” — brak L2 wizard; mobile = desktop | ⚠️ Phase 2 mobile |
| **Home IntentRouter** | Route to proof; L2 wizard tease | L3 Book + L1 Results; brak L2 | ⚠️ |
| **Home FinalCtaBand** | Single L3 | Single L3 + artefact link (L1) | ✅ |
| **Home Pricing section** | One primary per viewport | **4× „Book Automation Map”** na kartach tierów | ❌ competing primaries |
| **Header** | 5 nav + L3 Book | Zgodne (`navigation.ts`) | ✅ |
| **Footer** | L3 repeat + trust | Get started: Book + email + WhatsApp | ✅ |
| **/pricing/** | L3 hero + final; budget gate copy | L3 hero, final, budget copy inline | ✅ |
| **/book-discovery/** | L3 form; proof link; warm lead line | Warm lead ✅; **brak jawnego linku do sample PDF** w hero | ⚠️ |
| **/how-it-works/** | Process + retention block + final L3 | 3 steps + after-delivery ✅ + final L3 | ✅ |
| **/results/** | Proof hub + final L3 | Owner ecosystem card + cases + FieldReports + L3 | ✅ |
| **/solutions/` hub** | L3 + L1 how-it-works | Book + ghost How it works | ✅ |
| **/solutions/inbox-killer/** | Problem→System→Effect + case study + L3 | **Wrong product (Telegram)** | ❌ P0 |
| **SolutionLayout (other SKUs)** | L3 + case study L1 | Book + case study link | ✅ |

---

## 4. Nav & IA

| Element | Canon | Actual | Notes |
|---------|-------|--------|-------|
| Header item 1 | Systems → `/results/` | ✅ | L1 proof access |
| Solutions dropdown | 5 product SKUs | ✅ 5 (po revert) | Inbox Killer „Start here”, Managed „MRR” |
| Header CTA | Book Automation Map | ✅ `HEADER_CTA` | |
| About | `/founder/` or `/about/` | `/about/` | OK per canon |
| Footer Company | Systems & results | ✅ **Systems & results** | Option A — aligns z header „Systems” |
| VCMS placement | **Not** in Solutions/footer SKU | ✅ Removed | Proof: Home `BehindTheScenes`, `/results/owner-ecosystem/#why-vcms` |
| Footer Solutions | hub + 5 SKU | ✅ via `FOOTER_SOLUTIONS` | VCMS nie dziedziczy po revert |
| Orphan routes | Brak | `/inbox-killer/` legacy page | P0 — stary pricing, nie w nav |
| Redirect | — | `/digital-modernization/` → web-upgrade | OK |

**Decyzja VCMS (zatwierdzona):** Governance layer = proof under **Systems**, nie product SKU. Dropdown i footer company bez VCMS; ścieżka: Header **Systems** → `/results/` → owner-ecosystem → `#why-vcms`.

---

## 5. Proof stack — home vs site-map.md §2 (LOCKED)

| # | Canon component | `page.tsx` | Match |
|---|-----------------|------------|-------|
| 1 | HeroSection | ✅ | |
| 2 | SystemArchitecture | ✅ | |
| 3 | IntentRouter | ✅ | |
| 4 | PainGrid | ✅ | |
| 5 | SpearheadSpotlight | ✅ | |
| 6 | OwnerEcosystemTeaser | ✅ | |
| 7 | SystemMetrics | ✅ | |
| 8 | ResultsTeaser | ✅ | |
| 9 | BehindTheScenes | ✅ | VCMS screens |
| 10 | HowIWork | ✅ | |
| 11 | WhyThisWorks | ✅ | pillars + 4 objections |
| 12 | TrustSafety | ✅ | |
| 13 | Pricing | ✅ | |
| 14 | FinalCtaBand | ✅ | |

**Wynik: 14/14 — pełna zgodność.** `ecosystem.ts` `HOME_SECTIONS` = ten sam order.

**Uwaga:** `EcosystemVideo` forbidden per canon — nie ma na home ✅.

---

## 6. Gaps (P0 / P1 / P2)

### P0 — napraw przed trafficiem na spearhead

| Gap | Plik / hint |
|-----|-------------|
| **Inbox Killer solution page = zły produkt** (Telegram Deployment Agent) | `src/app/solutions/inbox-killer/page.tsx` — przepisać na Inbox Killer copy z hubu / case study |
| **Legacy `/inbox-killer/`** — €497 pricing, nie w kanonie | `src/app/inbox-killer/page.tsx` — redirect do `/solutions/inbox-killer/` lub usunąć + sitemap |

### P1 — conversion polish

| Gap | Plik / hint |
|-----|-------------|
| Home Pricing section: 4 competing L3 buttons | `src/components/sections/Pricing.tsx` — jeden CTA pod gridem |
| `/book-discovery/` brak proof link (sample PDF) w hero | `src/app/book-discovery/page.tsx` — link do `ARTEFACTS.automationMapSample` |
| `BUDGET_QUALIFICATION` string nieużywany na solution pages | `conversion-copy.ts` → `SolutionLayout` footer hint |
| Brak sticky CTA po proof (canon §3) | Nowy `StickyCtaBand` + mount w layout po scroll |
| L2 wizard na home (Hero secondary = L1 only) | `HeroSection.tsx` / `IntentRouter.tsx` — `EXTERNAL.zzpackageWizard` „See the wizard (2 min)” |

### P2 — Phase 2 / content

| Gap | Plik / hint |
|-----|-------------|
| Mobile hero WhatsApp-primary | `HeroSection.tsx` + responsive CTA swap |
| Video slots placeholders | `proof.ts` videos — last phase per canon |
| WhatsApp pilot case study — słaba discoverability | Link z `/results/` hub lub IntentRouter module |
| `solutions/inbox-killer` metadata title wrong | metadata w page.tsx po fix contentu |

---

## 7. What's working

- **Strategy canon** — README → marketing → site-map → pipeline → ui-ux jest kompletny i używany w kodzie (`navigation.ts`, `conversion-copy.ts`, `ecosystem.ts`).
- **Positioning** — Hero ma anti-positioning, proof line, architect label; nie „web designer”.
- **Proof depth** — `/results/` z owner ecosystem, gratka diagrams, FieldReports, intent badges.
- **Money pages** — pricing ranges, discovery fee upfront, how-it-works retention block, book-discovery warm-lead line.
- **VCMS story** — `BehindTheScenes`, `OwnerEcosystemTeaser`, `/results/owner-ecosystem/#why-vcms` — bez zaśmiecania Solutions nav.
- **Technical gate** — typecheck + build clean; 22 routes w sitemap.

---

## 8. Recommended next session (max 3)

1. **Fix spearhead:** Przepisać `solutions/inbox-killer/page.tsx` + redirect/usuń legacy `/inbox-killer/`.
2. **CTA hygiene:** Home `Pricing.tsx` — jeden L3; dodać proof PDF link na `/book-discovery/`.
3. **L2 tease:** Hero lub IntentRouter — link „See the wizard (2 min)” → `EXTERNAL.zzpackageWizard`.

---

*Audyt: read-only review implementation vs `docs/strategy/*`. Nav revert shipped w tej sesji.*
