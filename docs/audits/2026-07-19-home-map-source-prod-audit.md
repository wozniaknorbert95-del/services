# Audit — Home map vs source vs prod (2026-07-19)

**Scope:** tylko home — mapa (`site-map.md` §3), `page.tsx`, markery DOM, weryfikacja HTML na `quietforge.flexgrafik.nl`.  
**Nie w scope:** redesign, copy rewrite, ship.

**HEAD (repo):** `2c7b367` · **Prod status API:** success · **Prod HTML:** zgodny z HEAD (needles sales-lift obecne)

---

## 1. Werdykt weryfikacji serwer ↔ źródła

| Check | Result |
|-------|--------|
| Kolejność `data-home-section` na prod = kolejność w `page.tsx` | ✅ **MATCH** |
| Sales-lift needles na prod (dual-brand, you approve, Quote first, Book Map, credited) | ✅ **MATCH** |
| Stare igły nieobecne (`HITL approval`, `Start here`) | ✅ **MATCH** |
| Canon §3 „9 sections” vs rzeczywiste komponenty | ⚠️ **MAPA ≠ DOM** (patrz §3) |
| Canon §4 „Recommended hero copy” proof strip | ⚠️ **STALE** (nadal `HITL approval` w docs; kod ma `you approve every send`) |

**Wniosek techniczny:** Vercel **pokazuje to, co jest w źródłach**. Chaos, który czujesz, to **problem architektury treści / gęstości UX**, nie drift deployu.

---

## 2. Mapa — co mówi canon vs co renderuje kod

### Canon (`site-map.md` §3) — 9 „logical sections”

| # | Logical section | Components |
|---|-----------------|------------|
| 1 | Hero | HeroSection |
| 2 | Dual-brand | DualBrandBand |
| 3 | Featured paths | FeaturedStrip |
| 4 | Pain router | PainGrid |
| 5 | Live proof — Wizard | SpearheadSpotlight **+** SystemMetrics |
| 6 | Honesty gate | BuiltVsPlanned |
| 7 | Pick your module | IntentRouter |
| 8 | How it works | HowIWork |
| 9 | Trust + Pricing + Final CTA | TrustAndObjections **+** Pricing **+** FinalCtaBand |

### Source (`page.tsx`) — kolejność komponentów

```text
HeroSection
DualBrandBand
FeaturedStrip
PainGrid
SpearheadSpotlight
SystemMetrics          ← osobny blok DOM
BuiltVsPlanned
IntentRouter
HowIWork
TrustAndObjections     ← emituje 2 markery (patrz niżej)
Pricing
FinalCtaBand
StickyCta (chrome)
```

### Prod DOM — `data-home-section` (zmierzono 2026-07-19)

```text
1  hero
2  dual-brand
3  featured-strip
4  pain-grid
5  spearhead
6  system-metrics          ← osobna „sekcja” wizualna
7  built-vs-planned
8  repo-router
9  how-i-work
10 trust-safety
11 why-this-works          ← drugi marker z TrustAndObjections
12 pricing
13 final-cta
```

**13 markerów sekcji** (+ chrome StickyCta / SectionProgress).  
Canon mówi „9” — buyer widzi **~13 bloków z własnymi H2**. To jest rdzeń wrażenia chaosu.

---

## 3. H2 na prod (kolejność narracji)

1. Quietforge sells… FlexGrafik runs…  
2. Three paths — same stack…  
3. Where is the business leaking…  
4. Wizard Cash Engine — live checkout…  
5. Verified proof at a glance.  
6. What is live today vs roadmap.  
7. Pick your leak — see the production module…  
8. A method, not a magic trick.  
9. Safe enough to hand your inbox to.  
10. Start with a paid Automation Map.  
11. Start with clarity, not a sales pitch.

**Overlapy intencji (brainstorm fuel):**

| Funnel job | Ile razy home go „startuje” |
|------------|-----------------------------|
| „Gdzie zacząć / co wybrać” | Featured (3 paths) + PainGrid + IntentRouter = **3 routery** |
| Dual brand / kto sprzedaje | Hero 1-liner + DualBrandBand pełna sekcja |
| Live proof | Spearhead + SystemMetrics + BuiltVsPlanned + Intent cards |
| Close / Map | Hero CTA + Featured Map card + Pricing + Final CTA (+ sticky) |

To nie jest błąd deployu — to **za dużo równoległych „entry points”** na jednym scrollu.

---

## 4. Drift dokumentacji (do naprawienia przy burzy)

| Doc | Problem |
|-----|---------|
| `site-map.md` §3 | Mówi „9 sections”; DOM ma 13 markerów — mylące dla agentów i Ciebie |
| `site-map.md` §4 Recommended proof strip | Nadal `HITL approval` — **niezgodne z `conversion-copy.ts` / prod** |
| `site-map.md` §4 Recommended lead | Dłuższy niż shipped `HERO.subline` (skrócony w sales-lift) |
| `HOME_SECTION_MARKERS` w `ecosystem.ts` | Brak `why-this-works` (emitowany przez TrustAndObjections) |

---

## 5. Diagnoza „chaos / biedny UX” (auditor, nie redesign)

**Nie:** „prod nie pokazuje źródeł”.  
**Tak:** mapa v3.0 jest buyer-first w intencji, ale **stack jest nadal gęsty**:

1. **Podwójne / potrójne routingi** przed głębokim proof (Featured → Pain → Intent).  
2. **Sekcja 5 i 9 w canonie to sklejki** — w UI wyglądają jak osobne rozdziały (metrics, why-this-works).  
3. **Dark mono aesthetic** + dużo kart/statusów = „terminal portfolio”, nie spokojna strona SMB.  
4. **Sales-lift poprawił fold hero**, ale nie skrócił długości scrolla ani liczby H2.

---

## 6. Pytania do burzy mózgów (bez decyzji teraz)

1. Czy home ma mieć **jeden** router (Pain **albo** Featured **albo** Intent) — które dwa lecą na `/solutions/` / `/results/`?  
2. Czy DualBrand zostaje jako **1 linia w hero** (już jest) i **pełna sekcja znika**?  
3. Czy SystemMetrics scala się wizualnie w Spearhead (1 H2)?  
4. Czy Trust+Pricing+Final to **jeden ekran close**, bez osobnego „why-this-works”?  
5. Target scroll: **ile H2 max** na home (np. 6–7 zamiast 11)?

---

## 7. Evidence

```bash
# Prod section order (2026-07-19)
hero → dual-brand → featured-strip → pain-grid → spearhead → system-metrics
→ built-vs-planned → repo-router → how-i-work → trust-safety → why-this-works
→ pricing → final-cta

# Needles
Quietforge deploys=True · you approve every send=True · Quote first=True
Book Automation Map=True · HITL approval=False · Start here=False
```

*Audit only — gotowe jako wejście do burzy mózgów home IA/UX.*
