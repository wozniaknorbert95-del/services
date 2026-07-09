/**
 * Expert audit slice — interactive LOS diagram (founder + owner-ecosystem) + static SSoT.
 * Usage: node scripts/audit-los-diagram.mjs [baseUrl]
 */
import { chromium } from 'playwright';
import { runStaticLosAudit, staticLosVerdict } from './validate-static-los.mjs';

const BASE = process.argv[2] ?? 'http://localhost:3000';

const findings = [];

function record(severity, area, message, detail = {}) {
  findings.push({ severity, area, message, ...detail });
}

async function auditFounder(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
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
  const svgOnStory = await svg.count();
  if (svgOnStory > 0) {
    record('high', 'founder', 'SVG present on story default — should be hidden until Technical map');
  }

  const opsStep = page.getByRole('button', { name: /Operations/ }).first();
  if ((await opsStep.count()) > 0) {
    await opsStep.click();
    await page.waitForTimeout(300);
    const jadziaPanel = page.locator('text=Jadzia COI').first();
    if ((await jadziaPanel.count()) === 0) {
      record('high', 'founder', 'Jadzia story step did not open detail panel');
    }
  }

  await page.getByRole('tab', { name: 'Technical map' }).click();
  await page.waitForTimeout(500);

  if ((await svg.count()) === 0) {
    record('critical', 'founder', 'Technical map SVG missing after toggle');
    return;
  }

  const nodes = svg.locator('[role="button"]');
  const nodeCount = await nodes.count();
  if (nodeCount < 10) {
    record('high', 'founder', `Technical map expected 10+ slot nodes, found ${nodeCount}`);
  }

  const actNodeCount = await svg.evaluate((el) => {
    const actMin = 370;
    const actMax = 430;
    let count = 0;
    el.querySelectorAll('[role="button"] rect').forEach((rect) => {
      const y = parseFloat(rect.getAttribute('y') ?? '0');
      const h = parseFloat(rect.getAttribute('height') ?? '0');
      const cy = y + h / 2;
      if (cy >= actMin && cy <= actMax) count += 1;
    });
    return count;
  });
  if (actNodeCount < 3) {
    record('high', 'founder', `ACT layer expected 3+ nodes, found ${actNodeCount}`);
  }

  const guardBanner = await svg.locator('text=GUARD').count();
  if (guardBanner === 0) {
    record('medium', 'founder', 'Guard banner text missing from Technical map');
  }

  const wizardSlots = await svg.locator('text=Wizard').count();
  if (wizardSlots < 2) {
    record('high', 'founder', `Expected Wizard in Sense+Act slots, found ${wizardSlots}`);
  }

  const desktopOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2);
  if (desktopOverflow) {
    record('high', 'founder', 'Horizontal page overflow at 1280px on Technical map');
  }

  if (nodeCount > 0) {
    await nodes.first().click();
    await page.waitForTimeout(300);
    const panel = page.locator('[role="dialog"]');
    if ((await panel.count()) === 0) {
      record('high', 'founder', 'Click node did not open detail panel');
    }
  }

  const walkBtn = page.getByRole('button', { name: 'Walk the loop' });
  if ((await walkBtn.count()) > 0) {
    await walkBtn.click();
    await page.waitForTimeout(2500);
    const activePhase = await page.locator('.bg-\\[var\\(--qf-accent\\)\\].text-black').count();
    if (activePhase === 0) record('low', 'founder', 'Walk the loop may not highlight phases');
  }

  const svgLink = page.getByRole('link', { name: /Download static SVG/i });
  if ((await svgLink.count()) === 0) record('medium', 'founder', 'Missing static SVG download link');

  if (consoleErrors.length) {
    record('critical', 'founder', `Console errors: ${consoleErrors.length}`, { consoleErrors });
  }
  if (failed.length) {
    record('high', 'founder', `HTTP errors: ${failed.length}`, { failed });
  }
}

async function auditFounderMobile(browser) {
  const page = await browser.newPage();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(`${BASE}/founder/#system-diagram`, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForSelector('#system-diagram', { timeout: 15000 });
  await page.waitForSelector('button:has-text("Entry")', { timeout: 10000 }).catch(() => {});

  const storySteps = await page.locator('button').filter({ hasText: /^0?1/ }).count();
  if (storySteps < 1) {
    const alt = await page.getByRole('button', { name: /Entry/ }).count();
    if (alt < 1) record('high', 'mobile', `Mobile story steps missing (found ${alt})`);
  }

  await page.getByRole('tab', { name: 'Technical map' }).click();
  await page.waitForTimeout(400);

  const svg = page.locator('[aria-label="Living Operating System interactive diagram"]');
  const svgVisible = await svg.isVisible().catch(() => false);
  if (svgVisible) {
    record('high', 'mobile', 'Technical map SVG visible on mobile — accordion only expected');
  }

  const accordionButtons = await page.locator('#system-diagram [aria-expanded]').count();
  if (accordionButtons < 5) {
    record('medium', 'mobile', `Mobile accordion expected 5+ modules, found ${accordionButtons}`);
  }

  const bodyOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2);
  if (bodyOverflow) record('high', 'mobile', 'Horizontal page overflow at 375px');

  await page.close();
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

async function auditHowItWorks(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`${BASE}/how-it-works/`, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(500);

  const img = page.locator('img[alt*="Living Operating System"]');
  if ((await img.count()) === 0) {
    record('high', 'how-it-works', 'Static LOS diagram image missing');
    return;
  }

  const src = await img.first().getAttribute('src');
  if (!src?.includes('los-architecture.svg')) {
    record('high', 'how-it-works', 'Expected los-architecture.svg on how-it-works', { src });
  }

  const deadLink = page.getByRole('link', { name: /los-teaser|See full LOS on home/i });
  if ((await deadLink.count()) > 0) {
    record('high', 'how-it-works', 'Stale los-teaser link still present');
  }

  const founderLink = page.getByRole('link', { name: /interactive Technical map/i });
  if ((await founderLink.count()) === 0) {
    record('medium', 'how-it-works', 'Missing link to /founder/#system-diagram');
  } else {
    const href = await founderLink.first().getAttribute('href');
    if (!href?.includes('founder') || !href?.includes('system-diagram')) {
      record('high', 'how-it-works', 'Technical map link href incorrect', { href });
    }
  }
}

async function main() {
  const staticFindings = runStaticLosAudit();
  for (const f of staticFindings) {
    record(f.severity, f.area ?? 'static', f.message, f);
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await auditFounder(page);
  await auditFounderMobile(browser);
  await auditOwnerEcosystem(page);
  await auditHowItWorks(page);
  await auditHomeNoDiagram(page);

  await browser.close();

  const critical = findings.filter((f) => f.severity === 'critical');
  const high = findings.filter((f) => f.severity === 'high');
  const staticVerdict = staticLosVerdict(staticFindings);
  const verdict =
    staticVerdict === 'FAIL' || critical.length > 0
      ? 'FAIL'
      : high.length > 0
        ? 'CONDITIONAL'
        : findings.length > 0
          ? 'CONDITIONAL_PASS'
          : 'PASS';

  console.log(
    JSON.stringify(
      {
        base: BASE,
        staticVerdict,
        verdict,
        summary: {
          critical: critical.length,
          high: high.length,
          medium: findings.filter((f) => f.severity === 'medium').length,
          low: findings.filter((f) => f.severity === 'low').length,
        },
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
