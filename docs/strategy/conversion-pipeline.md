# Conversion Pipeline — User Flow, Navigation & Qualification

**Version:** 3.0  
**Status:** Canonical — post-audit funnel, CTAs, booking logic and recovery states  
**Primary funnel:** Recognition → proof → paid Automation Map → scoped build

---

## 1. Strategic funnel

Quietforge must behave like a productised consulting system, not a contact-form agency.

```text
Visitor
  ↓
Pain recognition
  ↓
Working proof
  ↓
Trust and safety
  ↓
Commercial clarity
  ↓
Paid Automation Map
  ↓
Scoped build / no-build recommendation
```

### Site job by buyer state

| Buyer state | User question | Site job |
|---|---|---|
| Cold | “Is this for my problem?” | Show pains and outcomes in plain language |
| Interested | “Is it real?” | Show live systems, screenshots, case studies |
| Cautious | “Is this safe?” | Show HITL, AVG, EU, no lock-in, logs |
| Price-aware | “Can I afford the first step?” | Show €290 Map and build ranges clearly |
| Ready | “What happens after I click?” | Paid booking flow with no ambiguity |

---

## 2. CTA tiers

Each viewport section gets **one primary** action.

| Tier | User intent | Label examples | Destination |
|---|---|---|---|
| L1 — Explore | Low commitment | See live systems · View results · Explore architecture | `/results/`, `/results/owner-ecosystem/` |
| L2 — Demo | See it work | Try the wizard · Watch walkthrough | external wizard / video / proof asset |
| L3 — Commit | Start qualification | Book Automation Map · Pay €290 and pick a slot | `/book-discovery/` |
| Support | Ask before committing | Ask on WhatsApp | WhatsApp deep link |

**Forbidden:** two filled buttons in one viewport section.

---

## 3. Header CTA

Global header CTA is always:

```text
Book Automation Map → /book-discovery/
```

Header nav provides L1 proof access via:

```text
Systems & Results → /results/
```

Do not swap the header CTA by traffic type until analytics prove the need.

---

## 4. Hero CTA rules

### Desktop

Primary: `Book Automation Map`  
Secondary: `See live systems`  
Tertiary text: `Ask on WhatsApp`

### Mobile

Before proof: primary remains `Book Automation Map`.  
After honesty gate: sticky bottom can make `Ask on WhatsApp` primary and `Book Automation Map` secondary.

Reason: Dutch SMB buyers often prefer async chat once they understand the offer.

---

## 5. Book Discovery — paid Automation Map

This is the highest-priority conversion surface.

### Professional target flow

```text
1. User understands €290 value
2. User sees what is included
3. User pays €290
4. User picks a slot
5. User completes intake
6. Confirmation email explains next steps
```

### Required copy promise

If the page says “Pay & pick a slot”, the UI must actually support payment and slot selection.

### If checkout/calendar is not live

Use this fallback language instead:

- Page title: `Request your Automation Map slot — €290, credited`
- Primary CTA: `Request a paid Map slot`
- Form submit: `Request my Automation Map slot`
- Microcopy: `If the fit is right, I’ll send a payment link and available times within 24 hours.`

Do **not** use `Send enquiry` as the main submit label on the paid Map page.

### Required form fields

1. Name
2. Business name
3. Email
4. Website/link
5. Biggest pain
6. Budget range or “not sure yet”
7. Preferred time zone / availability
8. Optional notes

### Required proof near form

- Automation Map sample download
- 3 bullets: what user receives
- Credit line: `The €290 fee is credited toward your first build.`
- No-pressure line: `If there is nothing worth automating, you keep the Map and stop there.`

---

## 6. Primary user flows

### Flow A — Cold visitor

```text
Home Hero
  → Pain router
  → Spearhead proof or Results card
  → Trust / pricing
  → Book Automation Map
```

### Flow B — Problem-aware visitor

```text
Solutions hub
  → Matching solution page
  → Linked case study
  → Pricing clarity
  → Book Automation Map
```

### Flow C — Proof-first visitor

```text
Results hub
  → Case study
  → Owner ecosystem / safety proof
  → Book Automation Map
```

### Flow D — Price shopper

```text
Pricing
  → Map/Build/Run explanation
  → Sample Map
  → Book Automation Map
```

### Flow E — Mobile chat-first visitor

```text
Home / Solution page on mobile
  → Scroll past proof
  → Sticky WhatsApp CTA
  → 6–8 qualification questions
  → brief to Norbert
  → paid Map or no-fit redirect
```

---

## 7. Product story flow

Use this for diagrams and proof pages, not as nav labels:

```text
Visitor → Pain route → Wizard / Assistant → Qualification → Human approval → Quote → Client
```

For animation:

```text
Lead → Wizard → AI draft → Human gate → Quote → Sale
```

All labels must be plain language. Technical names are secondary.

---

## 8. Pricing and qualification gates

### Public commercial source of truth

| Offer | Public price |
|---|---:|
| Automation Map | €290 credited |
| Inbox Killer | €1,200–€4,800 |
| Web Upgrade | €1,800–€5,500 |
| Sales Funnel / Wizard Cash Engine | €2,400–€6,500 |
| Lead Magnet Game | €2,200–€6,500 |
| Ecosystem / Multi-System Build | €3,490–€12,000 |
| Managed Automation | €349–€890/mo |

### Budget language

If budget is below project range:

> Start with the Automation Map. You will know what is worth building before committing to a larger project.

If budget is below €199:

> Start with the free guide or blog content. The Automation Map is paid strategic work, not a free sales call.

Do not promise a strategy call to unqualified traffic.

---

## 9. Failure modes and recovery

| Failure | User sees | Recovery |
|---|---|---|
| Payment unavailable | “Payment is temporarily unavailable.” | WhatsApp + email + request slot form |
| Calendar full | “Next slots are full.” | Waitlist + WhatsApp |
| Wizard down | “Wizard is temporarily unavailable.” | Results page + WhatsApp |
| WhatsApp offline | Offline notice | Email + `/book-discovery/` |
| User not fit | Honest no-fit message | Guide, blog, or referral suggestion |

Every broken flow must have one obvious next step.

---

## 10. Measurement

Track these events:

| Event | Trigger |
|---|---|
| `cta_book_map_click` | Any Book Automation Map click |
| `cta_whatsapp_click` | WhatsApp click |
| `sample_map_download` | Automation Map sample |
| `wizard_demo_click` | External wizard click |
| `case_study_open` | Results card click |
| `pricing_view` | Pricing section/page view |
| `book_payment_start` | Payment step begins |
| `book_payment_complete` | Payment completed |
| `intake_submit` | Intake completed |

---

## 11. Review checklist

- [ ] One primary CTA per viewport.
- [ ] Paid Map page does not look like generic contact.
- [ ] Pricing is consistent everywhere.
- [ ] Sales Funnel and Web Upgrade are not swapped.
- [ ] Proof appears before repeated L3 pressure.
- [ ] WhatsApp is a support/async qualification path, not a random duplicate CTA.
- [ ] Draft/pilot pages are not public unless complete.

---

*Updated post-audit: 2026-06-25*
