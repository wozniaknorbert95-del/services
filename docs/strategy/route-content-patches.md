# Route Content Patches — Quietforge Professional Fixes

**Version:** 1.0  
**Use:** Copy/content patches to apply in `src/content/*`, page components or CMS equivalents.  
**Status:** Ready for implementation.

---

## 1. Global pricing object

Use one source of truth.

```ts
export const PRICING = {
  automationMap: {
    label: 'Automation Map',
    price: '€290',
    note: 'credited toward your first project',
  },
  inboxKiller: {
    label: 'Inbox Killer',
    range: '€1,200–€4,800',
  },
  webUpgrade: {
    label: 'Web Upgrade',
    range: '€1,800–€5,500',
  },
  salesFunnel: {
    label: 'Sales Funnel / Wizard Cash Engine',
    range: '€2,400–€6,500',
  },
  leadMagnetGame: {
    label: 'Lead Magnet Game',
    range: '€2,200–€6,500',
  },
  ecosystemBuild: {
    label: 'Ecosystem / Multi-System Build',
    range: '€3,490–€12,000',
  },
  managedAutomation: {
    label: 'Managed Automation',
    range: '€349–€890/mo',
  },
}
```

Remove live fragments:

- `from €99/mo`
- `from €290/mo` for maintenance
- mismatched Web Upgrade / Sales Funnel ranges

---

## 2. `/solutions/` corrected cards

### Page hero

**H1**  
A few sharp systems for the business leak that hurts most.

**Lead**  
Start with the problem: inbox chaos, an outdated website, manual quoting, cold traffic or systems that decay after launch. Each solution is built from modules already running in my own production ecosystem.

**Primary CTA**  
Book Automation Map

**Secondary CTA**  
See how it works

---

### Inbox Killer

**Eyebrow**  
`// STEP 1 — Tame the chaos`

**Title**  
Inbox Killer

**Badge**  
Start here

**For**  
Small businesses drowning in email — consultants, accountants, agencies and service teams.

**Description**  
Your inbox is classified into clear lanes, draft replies are prepared, and every send waits for human approval.

**Bullets**

- Hours back every week
- Fewer lost leads and invoices
- Full control — nothing sends without approval

**Price**  
€1,200–€4,800

**CTA**  
Learn more → `/solutions/inbox-killer/`

---

### Web Upgrade

**Title**  
Web Upgrade

**Description**  
A modern conversion-ready website for businesses whose current site looks outdated, fails on mobile or gives visitors no clear next step.

**Bullets**

- Modern, trustworthy presence
- Lead capture and clear CTAs built in
- Analytics-ready structure

**Price**  
€1,800–€5,500

**CTA**  
Learn more → `/solutions/web-upgrade/`

---

### Sales Funnel / Wizard Cash Engine

**Title**  
Sales Funnel / Wizard Cash Engine

**Description**  
Quotes, bookings and qualifying handled by a guided flow — the visitor answers the right questions, sees the next step, and reaches checkout or a human-approved handoff.

**Bullets**

- End repeated manual quoting
- Structure lead qualification before your time is spent
- Checkout, quote or CRM handoff

**Price**  
€2,400–€6,500

**CTA**  
Learn more → `/solutions/sales-funnel/`

---

### Lead Magnet Game

**Title**  
Lead Magnet Game

**Description**  
Experience-first lead capture for Dutch ZZP: register, play, earn a reward, then move into a self-service wizard handoff.

**Bullets**

- Qualified contacts, not cold forms
- Longer sessions before the ask
- Tracked funnel to quoting

**Price**  
€2,200–€6,500

**CTA**  
Learn more → `/solutions/lead-magnet-game/`

---

### Managed Automation

**Title**  
Managed Automation

**Description**  
Your system stays monitored, tuned and improving after launch — without locking you into a bloated retainer.

**Bullets**

- Monitoring and health checks
- Small improvements as your business changes
- Priority support and quarterly review options

**Price**  
€349–€890/mo

**CTA**  
See Managed Automation → `/solutions/managed-automation/`

---

## 3. `/book-discovery/` professional target copy

### Hero

**H1**  
Book your Automation Map — €290, credited.

**Lead**  
In 60–90 minutes we find your two or three biggest time-and-money leaks, calculate the likely ROI, and decide the right first system to build. You keep the written Map either way.

**Proof/microcopy**  
The €290 fee is credited toward your first project. If there is nothing worth automating, you stop there and keep the document.

**Primary CTA**  
Pay €290 and pick a slot

**Secondary CTA**  
Download sample Map

---

### Section: What you get

**H2**  
What you get for €290

- A focused 60–90 minute working session
- A written Automation Map you keep
- Clear ROI logic for each recommendation
- A recommended first build with fixed quote to follow
- A no-build recommendation if automation is not worth it

---

### Section: Booking flow

**H2**  
Three steps to clarity

1. **Pay & pick a slot**  
   Secure your session and choose a time that works.
2. **Complete the intake**  
   Share your website, current tools and biggest bottleneck.
3. **Leave with a Map**  
   You get a written plan, not a sales pitch.

---

### Form / checkout labels

Preferred live checkout labels:

- Button: `Pay €290 and pick a slot`
- Confirmation: `Your Automation Map is booked.`
- Intake submit: `Send intake details`

If manual fallback is needed:

- H1: `Request your Automation Map slot — €290, credited.`
- Button: `Request my Automation Map slot`
- Microcopy: `If the fit is right, I’ll send a payment link and available times within 24 hours.`

Forbidden button:

- `Send enquiry — I will reply within 24h`

---

## 4. `/pricing/` replacement structure

### Hero

**H1**  
Clear pricing. Start with the Map.

**Lead**  
Every project starts with a paid Automation Map. Then you choose a build that fits the size of the problem — not the size of a retainer.

**Exception copy**  
If you only need a brochure website with no qualification or automation, this is probably not the right fit — and I will tell you before you spend money.

---

### Pricing matrix

| System | Range |
|---|---:|
| Automation Map | €290 credited |
| Inbox Killer | €1,200–€4,800 |
| Web Upgrade | €1,800–€5,500 |
| Sales Funnel / Wizard Cash Engine | €2,400–€6,500 |
| Lead Magnet Game | €2,200–€6,500 |
| Ecosystem / Multi-System Build | €3,490–€12,000 |
| Managed Automation | €349–€890/mo |

**Note**  
Final build price is fixed after the Automation Map, once scope and ROI are clear.

---

### Budget copy

Budget below the project ranges? Start with the Automation Map before committing to a larger build.  
Not ready for a paid Map yet? Read the free practical notes in the blog or download a sample Map to see the level of detail.

Do not link “Under €199? Free guide” to the same Automation Map sample unless a separate guide exists.

---

## 5. `/founder/` replacement copy

### Hero

**Eyebrow**  
`// Behind the systems`

**H1**  
The Founder’s System

**Lead**  
I did not build Quietforge to sell websites. I built a system to run my own business — the pipeline, wizard, inbox logic, AI routing and governance layer — because scattered tools were costing too much time. Quietforge is how I deploy that same architecture for other small businesses.

---

### Replace video placeholder

Remove:

> Video is in production.

Use:

**H2**  
How the system became the offer

**Copy**  
First, I built the workflow for FLEXGRAFIK: a live print and design business with real leads, real orders and real admin. Then I connected the pieces — wizard checkout, inbox classification, Jadzia COI, VCMS governance and Agent OS execution — into one supervised operating loop. Now I use that production-tested structure as the starting point for client systems.

**Proof links**

- See live results → `/results/`
- See owner ecosystem → `/results/owner-ecosystem/`
- See the Wizard Cash Engine → `/results/sales-funnel/`

---

### Fix wording

Replace:

> I built it because I needed it to run my own agency.

With:

> I built it because I needed it to run my own business.

---

## 6. `/results/whatsapp-discovery-pilot/`

### Option A — hide until complete

Recommended now:

- remove from `/results/` hub,
- remove from `sitemap.xml`,
- add `noindex`,
- keep internal route only.

### Option B — minimum public case content

If kept public, add:

**H1**  
WhatsApp discovery — qualify leads without a cold call.

**Lead**  
A pilot flow for mobile-first buyers: the assistant asks 6–8 questions, scores fit, and prepares a short brief for human review before any follow-up.

**Sections**

1. Problem: cold calls and open contact forms waste time
2. System: async WhatsApp qualification
3. Flow: 6–8 questions → scored brief → human review
4. Safety: opt-in, AVG notice, no autonomous promises
5. Status: PILOT
6. Proof: static walkthrough or PDF brief sample when available
7. CTA: Ask on WhatsApp / Book Automation Map

---

## 7. Home first-screen rewrite

### Hero copy

**Eyebrow**  
`// Conversion Systems Architect for NL small business`

**H1**  
Conversion systems that qualify leads, reduce admin and keep humans in control.

**Lead**  
For Dutch small businesses tired of manual quotes, inbox chaos and websites that do not turn visitors into pipeline. I design the system, wire the workflow and keep approval gates where they belong.

**Proof strip**  
Live wizard checkout · 8-repo governance · HITL approval · EU-hosted

**Primary CTA**  
Book Automation Map

**Secondary CTA**  
See live systems

**Tertiary**  
Ask on WhatsApp

---

## 8. Home PainGrid rewrite

**Section eyebrow**  
`// Choose your leak`

**H2**  
Where is the business leaking time or money?

**Lead**  
Start with the operational pain. The architecture comes after we know which leak is worth fixing.

### Card 1

**Title**  
Drowning in email

**Copy**  
Important leads, invoices and customer questions sit in the same pile as noise. The system classifies, drafts and queues replies — you approve every send.

**Fix**  
Inbox Killer

### Card 2

**Title**  
An outdated website

**Copy**  
Visitors arrive, but the page gives them no trust, no clear route and no reason to act. The system turns the site into a conversion path.

**Fix**  
Web Upgrade

### Card 3

**Title**  
Quotes by hand

**Copy**  
You answer the same questions before knowing if the lead is serious. The wizard structures the quote, price logic and next step.

**Fix**  
Sales Funnel / Wizard Cash Engine

### Card 4

**Title**  
Traffic, but no leads

**Copy**  
People visit and disappear. An interactive lead system earns attention first, then hands qualified users into the funnel.

**Fix**  
Lead Magnet Game

---

## 9. Public status labels

Use these visible labels on cards:

- `LIVE`
- `PARTIAL`
- `PILOT`
- `DEMO`
- `PLANNED`

Never imply that pilot/demo/planned items are live production proof.
