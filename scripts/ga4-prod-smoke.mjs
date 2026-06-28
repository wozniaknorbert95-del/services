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

async function collectHits(page) {
  const hits = [];
  const handler = (req) => {
    const url = req.url();
    if (url.includes('/g/collect') || url.includes('/collect?')) {
      const q = new URL(url).searchParams;
      hits.push({ en: q.get('en'), tid: q.get('tid') });
    }
  };
  page.on('request', handler);
  return {
    hits,
    detach: () => page.off('request', handler),
  };
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const { hits: loadHits, detach } = await collectHits(page);

  await page.goto(BASE + '/', { waitUntil: 'load' });
  await page.waitForTimeout(6000);
  detach();

  const pageViewOnLoad = loadHits.some(
    (h) => h.en === 'page_view' && h.tid === MEASUREMENT_ID
  );

  const collects = [];
  page.on('request', (req) => {
    const url = req.url();
    if (url.includes('google-analytics.com') || url.includes('googletagmanager.com')) {
      collects.push(url);
    }
  });

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
        pageViewOnLoad,
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

  if (!pageViewOnLoad) {
    console.error('FAIL: no page_view collect on initial load — check gtag.ts gaPageView');
    process.exit(1);
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
