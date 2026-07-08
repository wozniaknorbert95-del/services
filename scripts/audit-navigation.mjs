/**
 * Comprehensive navigation + home section audit (Playwright).
 * Usage: node scripts/audit-navigation.mjs [baseUrl]
 * Default base: http://localhost:3000
 */
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const BASE = process.argv[2] ?? 'http://localhost:3000';

const sitemap = readFileSync('public/sitemap.xml', 'utf8');
const SITEMAP_ROUTES = [...sitemap.matchAll(/<loc>https:\/\/quietforge\.flexgrafik\.nl([^<]*)<\/loc>/g)].map(
  (m) => m[1] || '/'
);

const NAV_LINKS = [
  '/results/',
  '/how-it-works/',
  '/solutions/',
  '/solutions/inbox-killer/',
  '/solutions/sales-funnel/',
  '/solutions/web-upgrade/',
  '/solutions/lead-magnet-game/',
  '/solutions/managed-automation/',
  '/pricing/',
  '/founder/',
  '/founder/#system-diagram',
  '/book-discovery/',
  '/results/owner-ecosystem/#los',
  '/about/',
  '/trust/',
  '/blog/',
  '/legal/',
];

const HOME_SECTIONS = [
  'hero',
  'los-teaser',
  'built-vs-planned',
  'repo-router',
  'pain-grid',
  'spearhead',
  'owner-ecosystem',
  'system-metrics',
  'results-teaser',
  'behind-the-scenes',
  'how-i-work',
  'why-this-works',
  'trust-safety',
  'pricing',
  'final-cta',
];

const HOME_ANCHORS = ['los-teaser', 'repo-router', 'owner-ecosystem', 'trust-safety', 'how-i-work'];

function pathOf(url) {
  try {
    const u = new URL(url);
    return u.pathname + u.hash;
  } catch {
    return url;
  }
}

async function checkRoute(page, route) {
  const url = `${BASE}${route}`;
  const failed = [];
  const handler = (res) => {
    const s = res.status();
    const u = res.url();
    if (s >= 400 && u.startsWith(BASE) && !u.includes('_rsc=')) failed.push({ status: s, url: u });
  };
  page.on('response', handler);
  let status = 0;
  let title = '';
  let h1Count = 0;
  let error = null;
  try {
    const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    status = res?.status() ?? 0;
    await page.waitForTimeout(400);
    title = await page.title();
    h1Count = await page.locator('h1').count();
  } catch (e) {
    error = e.message;
  }
  page.removeListener('response', handler);
  return { route, url, status, title, h1Count, failed, error };
}

async function checkHomeSections(page) {
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle', timeout: 60000 });
  const missing = [];
  const empty = [];
  for (const section of HOME_SECTIONS) {
    const el = page.locator(`[data-home-section="${section}"]`).first();
    const count = await el.count();
    if (count === 0) {
      missing.push(section);
      continue;
    }
    const text = (await el.innerText()).trim();
    if (text.length < 20) empty.push(section);
  }
  return { missing, empty };
}

async function checkHomeAnchors(page) {
  const results = [];
  for (const id of HOME_ANCHORS) {
    await page.goto(`${BASE}/#${id}`, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(2000);
    const hash = await page.evaluate(() => window.location.hash);
    const target = page.locator(`#${id}`).first();
    const exists = (await target.count()) > 0;
    let inView = false;
    if (exists) {
      inView = await target.evaluate((el) => {
        const nav = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 64;
        const r = el.getBoundingClientRect();
        return r.top >= nav && r.top < window.innerHeight * 0.85;
      });
    }
    results.push({ id, hash, exists, inView });
  }
  return results;
}

async function checkFounderDiagram(page) {
  await page.goto(`${BASE}/founder/#system-diagram`, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(600);
  const section = page.locator('#system-diagram').first();
  const exists = (await section.count()) > 0;
  const diagram = page.locator('[aria-label="Living Operating System interactive diagram"]').first();
  const hasDiagram = (await diagram.count()) > 0;
  let inView = false;
  if (exists) {
    inView = await section.evaluate((el) => {
      const r = el.getBoundingClientRect();
      return r.top >= -120 && r.top < window.innerHeight * 0.7;
    });
  }
  return { exists, hasDiagram, inView };
}

async function checkOwnerEcosystemLos(page) {
  await page.goto(`${BASE}/results/owner-ecosystem/#los`, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(600);
  const los = page.locator('#los').first();
  const exists = (await los.count()) > 0;
  const diagram = page.locator(
    '[aria-label="Living Operating System interactive diagram"], img[alt*="Living Operating System"]'
  ).first();
  const hasDiagram = (await diagram.count()) > 0;
  let inView = false;
  if (exists) {
    inView = await los.evaluate((el) => {
      const r = el.getBoundingClientRect();
      return r.top >= -120 && r.top < window.innerHeight * 0.7;
    });
  }
  return { exists, hasDiagram, inView };
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  const routeResults = [];
  for (const route of [...new Set([...SITEMAP_ROUTES, ...NAV_LINKS])]) {
    routeResults.push(await checkRoute(page, route));
  }

  const homeSections = await checkHomeSections(page);
  const homeAnchors = await checkHomeAnchors(page);
  const founderDiagram = await checkFounderDiagram(page);
  const losAnchor = await checkOwnerEcosystemLos(page);

  // Header link smoke from home
  await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded' });
  const headerLinks = await page.locator('header nav[aria-label="Primary"] a').evaluateAll((els) =>
    els.map((a) => ({ href: a.getAttribute('href'), text: a.textContent?.trim() }))
  );

  await browser.close();

  const routeFails = routeResults.filter((r) => r.status !== 200 || r.error || r.h1Count === 0);
  const assetFails = routeResults.flatMap((r) =>
    r.failed.map((f) => ({ route: r.route, ...f }))
  );

  const report = {
    base: BASE,
    routes: { total: routeResults.length, failed: routeFails.length, details: routeFails },
    assets404: assetFails,
    homeSections,
    homeAnchors,
    founderDiagram,
    ownerEcosystemLos: losAnchor,
    headerLinks,
    verdict:
      routeFails.length === 0 &&
      homeSections.missing.length === 0 &&
      homeAnchors.every((a) => a.exists && a.inView) &&
      founderDiagram.exists &&
      founderDiagram.hasDiagram &&
      losAnchor.exists &&
      losAnchor.inView
        ? 'PASS'
        : 'FAIL',
  };

  console.log(JSON.stringify(report, null, 2));
  process.exitCode = report.verdict === 'PASS' ? 0 : 1;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
