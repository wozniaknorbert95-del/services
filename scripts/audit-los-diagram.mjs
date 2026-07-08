/**
 * Expert audit slice — interactive LOS diagram (founder + owner-ecosystem).
 * Usage: node scripts/audit-los-diagram.mjs [baseUrl]
 */
import { chromium } from 'playwright';

const BASE = process.argv[2] ?? 'http://localhost:3000';

const findings = [];

function record(severity, area, message, detail = {}) {
  findings.push({ severity, area, message, ...detail });
}

async function auditFounder(page) {
  const url = `${BASE}/founder/#system-diagram`;
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  const failed = [];
  page.on('response', (res) => {
    const s = res.status();
    if (s >= 400 && res.url().startsWith(BASE)) failed.push({ status: s, url: res.url() });
  });

  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(800);

  const section = page.locator('#system-diagram');
  if ((await section.count()) === 0) {
    record('critical', 'founder', 'Missing #system-diagram section');
    return;
  }

  const inView = await section.evaluate((el) => {
    const r = el.getBoundingClientRect();
    return r.top >= -80 && r.top < window.innerHeight * 0.85;
  });
  if (!inView) record('high', 'founder', 'Hash scroll — #system-diagram not in viewport on load');

  const svg = page.locator('[aria-label="Living Operating System interactive diagram"]');
  if ((await svg.count()) === 0) {
    record('critical', 'founder', 'Interactive SVG diagram missing on desktop');
  }

  const nodes = page.locator('[aria-label="Living Operating System interactive diagram"] [role="button"]');
  const nodeCount = await nodes.count();
  if (nodeCount < 9) {
    record('high', 'founder', `Expected 9+ nodes, found ${nodeCount}`);
  }

  // Click first node
  if (nodeCount > 0) {
    await nodes.first().click();
    await page.waitForTimeout(300);
    const panel = page.locator('[role="dialog"]');
    if ((await panel.count()) === 0) {
      record('high', 'founder', 'Click node did not open detail panel');
    } else {
      const asIs = await panel.locator('text=AS-IS LIVE').count();
      if (asIs === 0) record('medium', 'founder', 'Detail panel missing AS-IS section');
    }
    await page.keyboard.press('Escape');
  }

  // SMB Funnel toggle
  await page.getByRole('tab', { name: 'SMB Funnel' }).click();
  await page.waitForTimeout(400);
  const funnelNodes = await page.locator('[aria-label="Living Operating System interactive diagram"] [role="button"]').count();
  if (funnelNodes < 6) {
    record('medium', 'founder', `SMB funnel view has only ${funnelNodes} nodes`);
  }

  // Walk the loop
  await page.getByRole('button', { name: 'Walk the loop' }).click();
  await page.waitForTimeout(2500);
  const activePhase = await page.locator('.bg-\\[var\\(--qf-accent\\)\\].text-black').count();
  if (activePhase === 0) record('low', 'founder', 'Walk the loop may not highlight phases');

  // Static fallback links
  const svgLink = page.getByRole('link', { name: /Download static SVG/i });
  if ((await svgLink.count()) === 0) record('medium', 'founder', 'Missing static SVG download link');

  if (consoleErrors.length) {
    record('critical', 'founder', `Console errors: ${consoleErrors.length}`, { consoleErrors });
  }
  if (failed.length) {
    record('high', 'founder', `HTTP errors: ${failed.length}`, { failed });
  }
}

async function auditFounderMobile(page) {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(`${BASE}/founder/#system-diagram`, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(500);

  const svg = page.locator('[aria-label="Living Operating System interactive diagram"]');
  const svgVisible = await svg.isVisible().catch(() => false);
  if (svgVisible) record('medium', 'mobile', 'SVG still visible at 375px — should use accordion');

  const accordion = page.locator('.md\\:hidden button[aria-expanded]');
  const accCount = await accordion.count();
  if (accCount < 6) record('high', 'mobile', `Mobile accordion has only ${accCount} items`);

  const bodyOverflow = await page.evaluate(() => {
    const doc = document.documentElement;
    return doc.scrollWidth > window.innerWidth + 2;
  });
  if (bodyOverflow) record('high', 'mobile', 'Horizontal page overflow at 375px');

  if (accCount > 0) {
    await accordion.first().click();
    await page.waitForTimeout(200);
    const expanded = await accordion.first().getAttribute('aria-expanded');
    if (expanded !== 'true') record('medium', 'mobile', 'Accordion expand failed');
  }
}

async function auditOwnerEcosystem(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`${BASE}/results/owner-ecosystem/#los`, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(600);

  const los = page.locator('#los');
  if ((await los.count()) === 0) record('critical', 'owner', 'Missing #los section');

  const interactive = page.locator('#los [aria-label="Living Operating System interactive diagram"]');
  if ((await interactive.count()) === 0) record('critical', 'owner', 'Interactive diagram missing in #los');

  const staticImg = page.locator('#los img[alt*="Living Operating System"]');
  if ((await staticImg.count()) === 0) record('medium', 'owner', 'Static SVG fallback missing');
}

async function auditHomeNoDiagram(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle', timeout: 60000 });
  const interactive = page.locator('[aria-label="Living Operating System interactive diagram"]');
  if ((await interactive.count()) > 0) {
    record('critical', 'sr-02', 'Full interactive LOS diagram on home — violates SR-02');
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await auditFounder(page);
  await auditFounderMobile(page);
  await auditOwnerEcosystem(page);
  await auditHomeNoDiagram(page);

  await browser.close();

  const critical = findings.filter((f) => f.severity === 'critical');
  const high = findings.filter((f) => f.severity === 'high');
  const verdict =
    critical.length > 0 ? 'FAIL' : high.length > 0 ? 'CONDITIONAL' : findings.length > 0 ? 'CONDITIONAL_PASS' : 'PASS';

  console.log(
    JSON.stringify(
      {
        base: BASE,
        verdict,
        summary: { critical: critical.length, high: high.length, medium: findings.filter((f) => f.severity === 'medium').length, low: findings.filter((f) => f.severity === 'low').length },
        findings,
      },
      null,
      2
    )
  );
  process.exitCode = critical.length > 0 || high.length > 0 ? 1 : 0;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
