/**
 * Extended nav audit: footer, assets, mobile menu, intent router card count.
 */
import { chromium } from 'playwright';

const BASE = process.argv[2] ?? 'http://localhost:3001';

const FOOTER_ROUTES = [
  '/results/',
  '/how-it-works/',
  '/results/owner-ecosystem/#los',
  '/pricing/',
  '/trust/',
  '/about/',
  '/founder/',
  '/blog/',
  '/legal/',
  '/book-discovery/',
];

const ASSETS = [
  '/gratka/los-architecture.svg',
  '/gratka/los-architecture.pdf',
  '/og/legal.svg',
];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const fails = [];

  for (const route of FOOTER_ROUTES) {
    const res = await page.goto(`${BASE}${route}`, { waitUntil: 'domcontentloaded' });
    if ((res?.status() ?? 0) !== 200) {
      fails.push({ kind: 'footer', route, status: res?.status() });
    }
  }

  for (const asset of ASSETS) {
    const res = await page.request.get(`${BASE}${asset}`);
    if (res.status() !== 200) {
      fails.push({ kind: 'asset', asset, status: res.status() });
    }
  }

  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.getByRole('link', { name: "Founder's System", exact: true }).first().click();
  await page.waitForURL('**/founder/**');
  const founderH1 = (await page.locator('h1').first().textContent())?.trim() ?? '';

  await page.goto(`${BASE}/#repo-router`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const routerSection = page.locator('[data-home-section="repo-router"]');
  const cardCount = await routerSection.locator('a[href]').count();

  await browser.close();

  const report = {
    base: BASE,
    footerRoutes: FOOTER_ROUTES.length,
    assets: ASSETS.length,
    fails,
    mobileMenuFounderH1: founderH1,
    intentRouterLinkCount: cardCount,
    verdict: fails.length === 0 && cardCount >= 8 ? 'PASS' : 'FAIL',
  };

  console.log(JSON.stringify(report, null, 2));
  process.exitCode = report.verdict === 'PASS' ? 0 : 1;
}

main();
