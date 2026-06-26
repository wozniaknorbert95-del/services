/**
 * GA4 prod smoke — quietforge.flexgrafik.nl
 * Run: node scripts/ga4-prod-smoke.mjs
 */
import { chromium } from 'playwright';

const BASE = 'https://quietforge.flexgrafik.nl';
const MEASUREMENT_ID = 'G-LY0E7MW0HF';

async function snapshotEvents(page) {
  return page.evaluate(() =>
    (window.dataLayer || [])
      .map((e) => {
        if (Array.isArray(e) && e[0] === 'event') {
          return { event: e[1], ...(e[2] || {}) };
        }
        if (e && typeof e === 'object' && e.event && !String(e.event).startsWith('gtm.')) {
          return e;
        }
        return null;
      })
      .filter(Boolean)
  );
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const collects = [];
  page.on('request', (req) => {
    const url = req.url();
    if (url.includes('google-analytics.com') || url.includes('googletagmanager.com')) {
      collects.push(url);
    }
  });

  await page.goto(BASE + '/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  const gtagCheck = await page.evaluate((mid) => ({
    hasGtag: typeof window.gtag === 'function',
    hasDataLayer: Array.isArray(window.dataLayer),
    measurementInHtml: document.documentElement.innerHTML.includes(mid),
  }), MEASUREMENT_ID);

  await page.locator('[data-home-section="hero"] a[href="/book-discovery/"]').first().click();
  await page.waitForURL(/book-discovery/);
  await page.waitForTimeout(500);
  const afterHero = await page.evaluate(() => JSON.stringify((window.dataLayer || []).slice(-8)));

  await page.goto(BASE + '/pricing/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  const afterPricing = await page.evaluate(() => JSON.stringify((window.dataLayer || []).slice(-8)));

  await page.goto(BASE + '/book-discovery/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  const afterBookDiscovery = await page.evaluate(() => JSON.stringify((window.dataLayer || []).slice(-8)));

  console.log(
    JSON.stringify(
      {
        gtagCheck,
        collectRequests: collects.length,
        collectHasMeasurementId: collects.some((u) => u.includes(MEASUREMENT_ID)),
        eventsAfterHeroClick: afterHero,
        eventsAfterPricing: afterPricing,
        eventsAfterBookDiscovery: afterBookDiscovery,
      },
      null,
      2
    )
  );

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
