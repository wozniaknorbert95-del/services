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

  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('#system-diagram', { timeout: 15000 });
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

  const storyCount = await page.getByRole('button', { name: /Entry|Revenue|Leads|Operations|Execution|Supervision/ }).count();
  if (storyCount < 6) {
    record('high', 'founder', `Story view expected 6 steps, found ${storyCount}`);
  }

  const svg = page.locator('[aria-label="Living Operating System interactive diagram"]');
  const svgVisible = await svg.isVisible().catch(() => false);
  if (svgVisible) record('medium', 'founder', 'Architecture SVG visible on founder — story should be default');

  // Click Operations (Jadzia) step
  const opsStep = page.getByRole('button', { name: /Operations/ }).first();
  if ((await opsStep.count()) > 0) {
    await opsStep.click();
    await page.waitForTimeout(300);
    const jadziaPanel = page.locator('[role="dialog"]').filter({ hasText: /Jadzia/ });
    if ((await jadziaPanel.count()) === 0) {
      record('high', 'founder', 'Jadzia story step did not open detail panel');
    } else {
      const chips = await jadziaPanel.locator('text=Order intelligence').count();
      if (chips === 0) record('medium', 'founder', 'Jadzia capability chips missing in panel');
    }
  }

  // Technical map toggle
  await page.getByRole('tab', { name: 'Technical map' }).click();
  await page.waitForTimeout(500);
  if ((await svg.count()) === 0) {
    record('critical', 'founder', 'Technical map SVG missing after toggle');
  }

  const nodes = page.locator('[aria-label="Living Operating System interactive diagram"] [role="button"]');
  const nodeCount = await nodes.count();
  if (nodeCount < 7) {
    record('high', 'founder', `Technical map expected 7+ nodes, found ${nodeCount}`);
  }

  // Click first node on technical map
  if (nodeCount > 0) {
    await nodes.first().click();
    await page.waitForTimeout(300);
    const panel = page.locator('[role="dialog"]');
    if ((await panel.count()) === 0) {
      record('high', 'founder', 'Click node did not open detail panel');
    }
  }

  // SMB Funnel toggle — skip on founder (no smb tab)
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
  await page.goto(`${BASE}/founder/#system-diagram`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('#system-diagram', { timeout: 15000 });
  await page.waitForTimeout(500);

  const storySteps = await page.getByRole('button', { name: /Entry|Revenue|Leads/ }).count();
  if (storySteps < 3) record('high', 'mobile', `Mobile story steps missing (found ${storySteps})`);

  const bodyOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2);
  if (bodyOverflow) record('high', 'mobile', 'Horizontal page overflow at 375px');
}

async function auditOwnerEcosystem(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`${BASE}/results/owner-ecosystem/#los`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForSelector('#los', { timeout: 15000 });
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
  await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded', timeout: 60000 });
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
