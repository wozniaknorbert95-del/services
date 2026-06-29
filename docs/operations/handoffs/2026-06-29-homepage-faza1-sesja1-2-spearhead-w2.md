# Handoff — Homepage Faza 1 Sesja 1.2 Spearhead W2 terminal→screenshot (2026-06-29)

**Repo:** services.flexgrafik.nl · **Build:** ✅ PASS (34 routes) · **Typecheck:** ✅ PASS · **Branch:** master

## Cel / Goal

Sesja 1.2 (`page-feature`) — refactor sekcji #5 `SpearheadSpotlight`: **W2 terminal mock → screenshot only** per `mapa.txt` sekcja 5 + `site-map.md §3 v3.0` row 5. De-jargon copy (remove Mollie/SKU details). Zasada 1-1-1: 2 pliki (komponent + copy SSoT) — uzasadnione: ten sam logical change.

## Co zrobiono / What changed

### `src/content/conversion-copy.ts` — SPEARHEAD de-jargon + screenshot

| Pole | Old | New |
|------|-----|-----|
| `body` | "The self-service configurator runs on **Mollie checkout** today — **9 UI screens**, open pricing, human approval on every deploy. This is the revenue layer I run before selling automation." | "The self-service configurator runs live today — open pricing, human approval on every deploy. This is the revenue layer I run before selling automation." |
| `bullets[1]` | "**${metrics.skus} SKU catalog**, scored leads, calm order form or designer handoff." | "Scored leads, calm order form or designer handoff — no phone tag." |
| `terminalCommand` | `'wizard.checkout --live zzpackage'` | ❌ removed |
| `terminalLines` | 3 lines (9 UI screens · Mollie checkout · HITL active) | ❌ removed |
| `screenshot` | — | ✅ new: `{ src: '/gratka/wizard-checkout.png', alt: 'Wizard Cash Engine checkout — live configurator with open pricing', caption: 'Configure → see price → pay, no phone call.' }` |

### `src/components/home/SpearheadSpotlight.tsx` — W2 terminal → screenshot

| Zmiana | Szczegóły |
|--------|-----------|
| Import | + `import Image from 'next/image'` |
| Comment | "Used in: src/app/page.tsx (home)" → "Used in: src/app/page.tsx (home) — sekcja 5 per site-map.md §3 v3.0" |
| Terminal mock block (lines 81-93) | ❌ removed: `<pre>` z `$ {terminalCommand}` + terminalLines map + `_` cursor |
| Screenshot block | ✅ new: `<Image src={SPEARHEAD.screenshot.src} alt={SPEARHEAD.screenshot.alt} width={480} height={300} className="h-auto w-full" loading="lazy" />` + caption `<p>` |
| Inner div | `p-4` padding → `overflow-hidden` (full-bleed image) |

### Co zostaje (per mapa.txt sekcja 5)

- ✅ Status LIVE (StatusBadge)
- ✅ 1 mocny benefit (headline + body + 3 bullets)
- ✅ Screenshot (`/gratka/wizard-checkout.png` — ten sam co hero proofVisual)
- ✅ Link do proof (primary CTA "Try the wizard (2 min)" → zzpackage.flexgrafik.nl)
- ✅ Secondary CTA "Inbox Killer — B2B product" → /solutions/inbox-killer/

### Co wywalamy (per mapa.txt sekcja 5)

- ❌ Terminal (`$ wizard.checkout --live zzpackage`)
- ❌ Długie listy SKU (`${metrics.skus} SKU catalog` z bullets)
- ❌ Szczegóły Mollie (`Mollie checkout` z body + terminalLines)
- ❌ `9 UI screens` z body (jargon dla SMB)

## Strategy Check

| Rule | Status | Note |
|------|--------|------|
| Home order (site-map §3 v3.0 LOCKED, 9 sections) | ✅ | sekcja 5 — no order change |
| Page arc Problem→System→Effect | ✅ | proof block, P→S→E in hero beats preserved |
| Single L3 / header = L3 Book | ✅ | primary CTA = L2 demo (proof context), UR-02 OK (1 primary per viewport) |
| Intent badge on every card (§4) | N/A | no cards in spearhead |
| Positioning (Conversion Systems Architect) | ✅ | no positioning change |
| Anti-chaos: site-map.md updated w/ page.tsx | ✅ N/A | no page.tsx change |

**Verdict:** COMPLIANT

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/conversion-copy.ts` | edit — SPEARHEAD de-jargon + screenshot field (remove terminalCommand/terminalLines) |
| `src/components/home/SpearheadSpotlight.tsx` | edit — W2 terminal mock → Image screenshot + caption |
| `docs/operations/handoffs/2026-06-29-homepage-faza1-sesja1-2-spearhead-w2.md` | new — ten handoff |

## Weryfikacja / Verification

```bash
npm run typecheck   # PASS
npm run build       # PASS (34 routes)
git diff --stat     # 2 files changed, 21 ins / 21 del
```

## Post-deploy smoke (Commander)

Po push master → Vercel CD:
1. `https://quietforge.flexgrafik.nl/` — sekcja 5 (Spearhead) renderuje screenshot zamiast terminala
2. Screenshot `wizard-checkout.png` widoczny w prawej kolumnie (desktop) / poniżej (mobile)
3. Brak `$ wizard.checkout` terminal block
4. Brak "Mollie checkout" / "9 UI screens" / "161 SKU catalog" w copy sekcji 5
5. StatusBadge LIVE widoczny
6. CTAs: "Try the wizard (2 min)" + "Inbox Killer — B2B product" działają
7. Mobile: screenshot nie powoduje horizontal scroll

## Następne kroki

1. **Commit + push** (czeka na GO Dowódcy)
2. **Sesja 1.3** (`page-feature`) — refactor sekcji #6: `BuiltVsPlanned` compact 4 rows (Wizard, Jadzia COI, Agent OS, Governance) + merge `ResultsTeaser`. **W3 de-jargon `LangGraph HITL pipeline` → "supervised workflow"**. **T4: zamień Lead Magnet → Governance row**.
3. **Sesja 1.4** — `IntentRouter` 6 kart (hide `flex-vcms` + `flexgrafik-meta`)
4. **Sesje 1.5–1.6** — `HowIWork` skrócony, `TrustAndObjections` + `Pricing` + `FinalCtaBand` połączone
5. **Sesja 1.7** — W1 copy polish ResultsTeaser (jeśli zostaje w sekcji 6)

## Uwagi

- `metrics.skus` import nadal używany w `conversion-copy.ts` (ABOUT.storyBody line 191) — nie usuwać
- `qf-spearhead-card` CSS class — zachowana (style karty), tylko inner div zmieniony (p-4 → overflow-hidden dla full-bleed image)
- Screenshot `/gratka/wizard-checkout.png` ten sam co hero `HERO.proofVisual.src` — spójność wizualna
- `screens.wizardCheckout` w `proof.ts` ma ten sam src — SSoT zachowane (SPEARHEAD.screenshot używa dosłownego path dla niezależności od proof.ts)
- Anti-chaos rule 1 (page.tsx → site-map §3): N/A — brak zmian w page.tsx
- Anti-chaos rule 2 (HARD rule → skill): N/A — brak canon edit
- Anti-chaos rule 4 (handoff): ✅ ten plik
