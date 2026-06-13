# Section 4 — Case studies (rework of /results)

> Replaces the four empty `[X]` cards. Based on the REAL ecosystem (META-README), anonymised.
> Proof is PROCESS-FIRST (architecture, scope, what was built) — hard numbers get swapped in
> after first client deliveries. Each card has an honest „measurement" line, not a fake metric.

## Copy (source of truth)

**Eyebrow:** // Proof
**H2:** Real systems, already running.
**Lead:** These aren't slides — they're systems built and operating inside a live business
ecosystem. Names are withheld; the architecture is real. As client engagements report hard
numbers, they'll appear here in place of the estimates.

**4 case studies (anonymised, process-proof):**

### Case 1 — The self-running back-office (Inbox Killer, live)
- **Context:** A small NL service business drowning in mixed email — leads, invoices, noise in one pile.
- **System:** An agent that reads the inbox, classifies (lead / client / invoice / noise), and drafts replies. `classify → plan → diff → approve`. Nothing sends without approval.
- **What's real:** Running on a live mailbox, 100+ messages/scan, human-in-the-loop on every send.
- **Measurement:** Time-saved metric to be confirmed per client (estimate: a few hours/week).

### Case 2 — A multi-agent orchestrator (Jadzia-Core)
- **Context:** Coordinating a whole business — orders, content, CRM — without spreadsheets everywhere.
- **System:** A FastAPI + LangGraph agent engine on a VPS, governed by a single source of truth, agent cards and fixed rules (planner → coder → tester → review).
- **What's real:** Production engine on a VPS, SSoT architecture, guardrails, 12-step workflow.
- **Measurement:** Process proof — architecture diagram available on request.

### Case 3 — A self-service quote & onboarding wizard (ZZP configurator)
- **Context:** The same „what do you charge?" questions answered by hand, all day.
- **System:** A 7-step SPA configurator with open pricing and payment — qualifies, quotes and books without a phone call.
- **What's real:** Working funnel: pick options → upload logo → see price → pay.
- **Measurement:** Fewer manual quote emails (to be quantified with first client).

### Case 4 — Modernisation + AI assistant for an advisory firm (anonymised)
- **Context:** A Rotterdam accounting office with a strong offer but an outdated, static site and no lead capture.
- **System:** Site modernisation + a lead-qualifying AI assistant (no tax advice — qualification only) + an AI-assisted, human-approved content engine, with a signed AVG/data-processing agreement.
- **What's real:** Full scope designed, security & AVG layer specified, staged delivery.
- **Measurement:** Engagement in delivery — outcomes reported once live.

**CTA:** Let's find what's worth automating in your business. → Book your Automation Map → /book-discovery/

---

## HTML (paste-ready; replaces the /results cards)

```html
<section class="qf-section" id="case-studies" aria-labelledby="qf-cases-title">
  <div class="qf-wrap">
    <span class="qf-eyebrow">// Proof</span>
    <h2 class="qf-h2" id="qf-cases-title">Real systems, already running.</h2>
    <p class="qf-lead">These aren't slides — they're systems built and operating inside a live
      business ecosystem. Names are withheld; the architecture is real. As client engagements
      report hard numbers, they'll appear here in place of the estimates.</p>

    <div class="qf-cases">
      <article class="qf-case">
        <span class="qf-case-no">01</span>
        <h3>The self-running back-office</h3>
        <p class="qf-case-meta">Inbox Killer · live</p>
        <p><b>Context:</b> A small NL service business drowning in mixed email — leads, invoices, noise in one pile.</p>
        <p><b>System:</b> An agent that reads the inbox, classifies (lead / client / invoice / noise) and drafts replies. Nothing sends without approval.</p>
        <p class="qf-real">Real: live mailbox, 100+ messages/scan, human-in-the-loop on every send.</p>
        <p class="qf-measure">Measurement: estimate ~ a few hours/week — confirmed per client.</p>
      </article>

      <article class="qf-case">
        <span class="qf-case-no">02</span>
        <h3>A multi-agent orchestrator</h3>
        <p class="qf-case-meta">Agent engine · production</p>
        <p><b>Context:</b> Coordinating a whole business — orders, content, CRM — without spreadsheets everywhere.</p>
        <p><b>System:</b> A FastAPI + LangGraph engine on a VPS, governed by a single source of truth, agent cards and fixed rules (planner → coder → tester → review).</p>
        <p class="qf-real">Real: production engine, SSoT architecture, guardrails, 12-step workflow.</p>
        <p class="qf-measure">Measurement: process proof — architecture diagram on request.</p>
      </article>

      <article class="qf-case">
        <span class="qf-case-no">03</span>
        <h3>Self-service quote &amp; onboarding</h3>
        <p class="qf-case-meta">Sales Funnel Engine</p>
        <p><b>Context:</b> The same „what do you charge?" questions answered by hand, all day.</p>
        <p><b>System:</b> A 7-step configurator with open pricing and payment — qualifies, quotes and books without a phone call.</p>
        <p class="qf-real">Real: working funnel — pick options → upload logo → see price → pay.</p>
        <p class="qf-measure">Measurement: fewer manual quote emails (to be quantified).</p>
      </article>

      <article class="qf-case">
        <span class="qf-case-no">04</span>
        <h3>Modernisation + AI assistant for an advisory firm</h3>
        <p class="qf-case-meta">Web Upgrade + assistant · anonymised</p>
        <p><b>Context:</b> A Rotterdam accounting office with a strong offer but an outdated site and no lead capture.</p>
        <p><b>System:</b> Site modernisation + a lead-qualifying AI assistant (qualification only, no tax advice) + a human-approved content engine, with a signed data-processing agreement.</p>
        <p class="qf-real">Real: full scope designed, security &amp; AVG layer specified, staged delivery.</p>
        <p class="qf-measure">Measurement: in delivery — outcomes reported once live.</p>
      </article>
    </div>

    <div class="qf-cta-row">
      <p>Let's find what's worth automating in your business.</p>
      <a class="qf-cta" href="/book-discovery/">Book your Automation Map →</a>
    </div>
  </div>
</section>
```
