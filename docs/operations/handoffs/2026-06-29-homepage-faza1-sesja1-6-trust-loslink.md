# Handoff — Homepage Faza 1 Sesja 1.6 Trust ~50% shorter + FinalCta LOS link (2026-06-29)

**Repo:** services.flexgrafik.nl · **Build:** ✅ PASS (34 routes) · **Typecheck:** ✅ PASS · **Branch:** master

## Cel / Goal

Sesja 1.6 (`page-feature`) — refactor sekcji #9 per `mapa.txt` sekcja 9 + `site-map.md §3 v3.0` row 9:
- Trust & Safety skrócić o ~50% (gęstość treści, nie "half content removed")
- Cennik bez zmian (per mapa.txt: "czytelny")
- Mocniejsze CTA + LOS link "See full architecture →" (SR-12 amend implementation)
- Zasada 1-1-1: 2 pliki (sekcja 9 = logical change)

## Co zrobiono / What changed

### `src/components/home/TrustAndObjections.tsx` — ~50% gęstości krócej

| Usunięte (jargon / redundant) | Szczegóły |
|--------------------------------|-----------|
| Eyebrow "Safe enough to hand your inbox to" | Zastąpione krótszym "safety" + headline "Safe enough to hand your inbox to." (scalony eyebrow+H2) |
| Długi intro paragraph | "AI in a real business should reduce risk, not add it. Every system is built to survive..." (3 zdania) → 1 zdanie jędrne: "Every system is built to survive a small business owner's worst week — and a regulator's question." |
| "For ZZP & small businesses in NL — services, e-commerce, advisory, regulated." | ❌ removed (redundantancies z hero/PainGrid) |
| Sub-eyebrow "system.verify()" + H3 "Common objections — answered" | ❌ removed (drugi eyebrow + redundant h3 w środku sekcji) — objections block bez dodatkowej hierarchii |
| Layout centered | Left-align → center dla headline + safety cards grid sm:grid-cols-3 (zamiast 2/3 stagger) — bardziej kompaktowy |
| Padding reductions | sp-24 + sp-12 → sp-24 + sp-10 + sp-8 (bardziej kompaktowy vertical rhythm) |
| Card content | h3 `qf-fs-lg` → `qf-fs-base` (mniejszy rozmiar, bardziej compact) |

**Co zostaje** (per mapa.txt §9 + MR-09):
- ✅ 3 SAFETY_CARDS (Human-in-the-loop, EU data, Logged & auditable)
- ✅ 4 OBJECTIONS (Price, Trust, Timing, Scope creep) — MR-09 HARD rule zachowane
- ✅ Link do /trust/ (L1)

### `src/components/home/FinalCtaBand.tsx` — + LOS link (SR-12 amend)

Zmiana: dodano link "See full architecture →" poniżej primary CTA.

```tsx
<p className="mt-[var(--qf-sp-6)] font-mono text-xs text-[var(--qf-text-faint)]">
  Want the full picture first?{' '}
  <Link href={ROUTES.resultsOwnerEcosystem} ...>
    See full architecture →
  </Link>
</p>
```

**SR-12 amend implementation:** governance proof na home = BuiltVsPlanned compact (sekcja 6) + link "See full architecture →" w sekcji 9 (FinalCtaBand). Pełne LOS + 8-repo + governance details → `/results/owner-ecosystem/`.

### `src/components/sections/Pricing.tsx` — bez zmian

Per mapa.txt: "Cennik zostawić w obecnej formie (jest czytelny)". Bez edycji.

## Strategy Check

| Rule | Status | Note |
|------|--------|------|
| Home order (site-map §3 v3.0 LOCKED, 9 sections) | ✅ | sekcja 9 — no order change |
| Page arc Problem→System→Effect | ✅ | close section (trust → pricing → CTA) |
| Single L3 / header = L3 Book | ✅ | FinalCtaBand primary = L3 Book Automation Map |
| Intent badge on every card (§4) | N/A | no repo/pain cards |
| Positioning (Conversion Systems Architect) | ✅ | no positioning change |
| Anti-chaos: site-map.md updated w/ page.tsx | ✅ N/A | no page.tsx change |
| SR-12 (governance proof = BuiltVsPlanned + link w sekcji 9) | ✅ | LOS link added w FinalCtaBand |
| MR-09 (4 named objections addressable) | ✅ | all 4 OBJECTIONS preserved |
| MR-11 (no jargon SMB-facing) | ✅ | "system.verify()" eyebrow removed |

**Verdict:** COMPLIANT

## Pliki / Files

| File | Action |
|------|--------|
| `src/components/home/TrustAndObjections.tsx` | edit — ~50% density reduction (remove sub-eyebrow, h3, redundant paragraphs; center layout; compact cards) |
| `src/components/home/FinalCtaBand.tsx` | edit — + "See full architecture →" link (SR-12 amend implementation) |
| `docs/operations/handoffs/2026-06-29-homepage-faza1-sesja1-6-trust-loslink.md` | new — ten handoff |

## Weryfikacja / Verification

```bash
npm run typecheck   # PASS
npm run build       # PASS (34 routes)
git diff --stat     # 2 files changed, 78 ins / 75 del
```

## Post-deploy smoke (Commander)

Po push master → Vercel CD:
1. `https://quietforge.flexgrafik.nl/` — sekcja 9 (Trust) wyraźnie krótsza / bardziej centered
2. Headline "Safe enough to hand your inbox to." jako H2 (eyebrow "safety" scalony)
3. 3 safety cards (HITL, EU data, Logged) w 1 wierszu na desktopie (sm:grid-cols-3)
4. 4 objekcje jako mono block bez dodatkowego eyebrow/h3
5. Link "See full Trust & Safety details →" widoczny na dole
6. FinalCtaBand: pod primary CTA "Book Automation Map" nowy link "Want the full picture first? See full architecture →" → /results/owner-ecosystem/
7. Pricing sekcja bez zmian (4 tier cards)
8. Mobile: bez horizontal scroll

## Następne kroki

1. **Commit + push** (czeka na GO Dowódcy)
2. **Sesja 1.7** — W1 N/A (ResultsTeaser usunięte z home w sesji 1.3) → **Faza 1 CLOSED**
3. **Faza 2** — UX sesje:
   - 2.1 CTA distribution + L1/L2 text link audit
   - 2.2 Mobile optimization (tabele → cards, BuiltVsPlanned accordion, tap targets 44px)
   - 2.3 Dead code cleanup (ResultsTeaser, LivingSystemTeaser, BehindTheScenes, WhyThisWorks, TrustSafety, SystemArchitecture, OwnerEcosystemTeaser)
   - 2.4 Lighthouse + OG refresh
4. **Faza 3** — GTM docs sync (3 sesje)
5. **Faza 4** — Verify + Commander HITL

## Uwagi

- ~50% reduction = gęstość treści (centration + wieksza ekonomia paragrafów), nie dosłownie połowa linii — za dużo structural markup by redukować line count do 59. Treść wizualna ~50% krótsza.
- "system.verify()" eyebrow — drobny jargon techniczny, zastąpione czystym "safety" eyebrow.
- LOS link w FinalCtaBand — `Want the full picture first?` framing jako L1.5 (pomiędzy L1 See systems a L3 Book Map).
- Commander's parallel work na `docs/strategy/README.md`, `gtm/README.md`, `linkedin/` — nietknięte, zostają untracked/modified.
- Anti-chaos rule 1 (page.tsx → site-map §3): N/A — brak zmian w page.tsx
- Anti-chaos rule 2 (HARD rule → skill): N/A — brak canon edit (SR-12 zaktualizowane w sesji 1.0)
- Anti-chaos rule 4 (handoff): ✅ ten plik