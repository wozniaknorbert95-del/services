/**
 * Menu + footer audit — manifest vs live DOM vs strategy canon.
 * Usage: node scripts/audit-menu-footer.mjs [baseUrl]
 */
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE = process.argv[2] ?? 'http://localhost:3000';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// Dynamic import navigation manifest (TS compiled at runtime via ts-node not available — parse statically)
const navSrc = readFileSync(join(root, 'src/lib/navigation.ts'), 'utf8');
const headerLabels = [...navSrc.matchAll(/label: '([^']+)'/g)].slice(0, 5).map((m) => m[1]);
const solutionsLabels = [...navSrc.matchAll(/SOLUTIONS_NAV:[\s\S]*?label: '([^']+)'/g)].map((m) => m[1]);

const EXPECTED_HEADER = ['Systems', 'How It Works', 'Solutions', 'Pricing', "Founder's System"];
const EXPECTED_SOLUTIONS = [
  'Inbox Killer',
  'Sales Funnel',
  'Web Upgrade',
  'Gamified lead system',
  'Managed Automation',
];
const EXPECTED_FOOTER_SOLUTIONS = ['All solutions', ...EXPECTED_SOLUTIONS];
const EXPECTED_FOOTER_COMPANY = [
  'How It Works',
  'Systems & results',
  'Architecture (LOS)',
  'Pricing',
  'Trust & Safety',
  'About',
  "The Founder's System",
  'Blog',
];
const EXPECTED_FOOTER_RESOURCES = ['Legal', 'Automation Map sample', 'Data safety playbook', 'Maintenance handover'];

async function extractChrome(page) {
  return page.evaluate(() => {
    const headerNav = document.querySelector('header nav[aria-label="Primary"]');
    const footer = document.querySelector('footer');
    const getLinks = (root, selector) =>
      root
        ? [...root.querySelectorAll(selector)].map((a) => ({
            label: (a.textContent ?? '').replace(/\s*→\s*$/, '').replace(/\s*↓\s*$/, '').trim(),
            href: a.getAttribute('href') ?? '',
          }))
        : [];

    const headerLinks = getLinks(headerNav, 'a');
    const headerButtons = headerNav
      ? [...headerNav.querySelectorAll('button')].map((b) => (b.textContent ?? '').trim())
      : [];
    const headerCta = headerLinks.find((l) => l.label.includes('Automation Map'));
    const headerNavLabels = [
      ...headerLinks.filter((l) => !l.label.includes('Automation Map')).map((l) => l.label),
      ...headerButtons,
    ];

    const footerCols = footer ? [...footer.querySelectorAll('h4')] : [];
    const solutionsCol = footerCols.find((h) => h.textContent?.trim() === 'Solutions')?.closest('div');
    const companyCol = footerCols.find((h) => h.textContent?.trim() === 'Company')?.closest('div');
    const getStarted = footerCols.find((h) => h.textContent?.trim() === 'Get started')?.closest('div');

    const solutionsLinks = getLinks(solutionsCol, 'a');
    const companyLinks = getLinks(companyCol, 'a');
    const getStartedLinks = getLinks(getStarted, 'a');
    const getStartedText = getStarted?.textContent ?? '';

    const resourcesRow = footer?.querySelector('[class*="border-t"]');
    const resourceLinks = footer
      ? [...footer.querySelectorAll('a')].filter((a) => {
          const t = a.textContent ?? '';
          return t.includes('Legal') || t.includes('playbook') || t.includes('handover') || t.includes('sample');
        }).map((a) => ({
          label: (a.textContent ?? '').replace(/\s*↓\s*$/, '').trim(),
          href: a.getAttribute('href') ?? '',
        }))
      : [];

    return {
      headerNavLinks: headerNavLabels,
      headerCta: headerCta?.label ?? null,
      headerCtaHref: headerCta?.href ?? null,
      solutionsLinks: solutionsLinks.map((l) => l.label),
      companyLinks: companyLinks.map((l) => l.label),
      getStartedHasWhatsApp: /whatsapp/i.test(getStartedText),
      getStartedHasBook: /Automation Map/i.test(getStartedText),
      resourceLabels: resourceLinks.map((l) => l.label.replace(/\s*↓$/, '').trim()),
    };
  });
}

async function testSolutionsDropdown(page) {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  const btn = page.getByRole('button', { name: 'Solutions' });
  await btn.hover();
  await page.waitForTimeout(300);
  const dropdownLinks = await page.locator('.qf-dropdown a').evaluateAll((els) =>
    els.map((a) => ({ label: a.textContent?.trim() ?? '', href: a.getAttribute('href') ?? '' }))
  );
  return dropdownLinks;
}

async function testMobileMenu(page) {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Open menu' }).click();
  const mobileNav = page.locator('[aria-label="Mobile primary"]');
  const labels = await mobileNav.locator('a').evaluateAll((els) =>
    els.map((a) => (a.textContent ?? '').trim())
  );
  return labels;
}

async function testFooterHref(page, href) {
  const url = href.startsWith('http') ? href : `${BASE}${href}`;
  const res = await page.request.get(url);
  return res.status();
}

function diff(expected, actual) {
  const missing = expected.filter((e) => !actual.some((a) => a.includes(e) || e.includes(a)));
  const extra = actual.filter((a) => !expected.some((e) => a.includes(e) || e.includes(a)));
  return { missing, extra, ok: missing.length === 0 && extra.length === 0 };
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  const chrome = await extractChrome(page);
  const dropdown = await testSolutionsDropdown(page);
  const mobile = await testMobileMenu(page);

  const footerHrefs = [
    ...chrome.companyLinks.map((_, i) => null),
  ];
  const companyCol = await page.evaluate(() => {
    const footer = document.querySelector('footer');
    const col = [...footer.querySelectorAll('h4')].find((h) => h.textContent?.trim() === 'Company')?.closest('div');
    return col ? [...col.querySelectorAll('a')].map((a) => a.getAttribute('href') ?? '') : [];
  });
  const hrefChecks = [];
  for (const href of companyCol) {
    if (!href) continue;
    const status = await testFooterHref(page, href);
    hrefChecks.push({ href, status });
  }

  const archHref = companyCol.find((h) => h.includes('#los'));
  let archScrollOk = false;
  if (archHref) {
    await page.goto(`${BASE}${archHref}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000);
    archScrollOk = await page.locator('#los').evaluate((el) => {
      const nav = 64;
      const r = el.getBoundingClientRect();
      return r.top >= nav && r.top < window.innerHeight * 0.85;
    });
  }

  await browser.close();

  const dropdownLabels = dropdown.map((d) => d.label.replace(/\s*(Start here|MRR)$/i, '').trim());
  const dropdownOk =
    dropdown.some((l) => l.label.startsWith('All solutions')) &&
    EXPECTED_SOLUTIONS.every((e) => dropdownLabels.some((d) => d.startsWith(e) || d === e));

  const checks = [
    {
      id: 'header-nav-count',
      rule: 'Header: 5 nav items (site-map §6)',
      ok: chrome.headerNavLinks.length === 5,
      detail: `got ${chrome.headerNavLinks.length}: ${chrome.headerNavLinks.join(', ')}`,
    },
    {
      id: 'header-nav-labels',
      rule: 'Header labels match navigation.ts',
      ok: diff(EXPECTED_HEADER, chrome.headerNavLinks).ok,
      detail: JSON.stringify(diff(EXPECTED_HEADER, chrome.headerNavLinks)),
    },
    {
      id: 'header-cta-l3',
      rule: 'Header CTA = Book Automation Map → /book-discovery/',
      ok: Boolean(chrome.headerCta?.includes('Automation Map')) && chrome.headerCtaHref?.includes('book-discovery'),
      detail: `${chrome.headerCta} → ${chrome.headerCtaHref}`,
    },
    {
      id: 'solutions-dropdown',
      rule: 'Solutions dropdown: All solutions + 5 products',
      ok: dropdownOk,
      detail: dropdown.map((d) => d.label).join(' · '),
    },
    {
      id: 'footer-solutions',
      rule: 'Footer Solutions column',
      ok: diff(EXPECTED_FOOTER_SOLUTIONS, chrome.solutionsLinks).ok,
      detail: JSON.stringify(diff(EXPECTED_FOOTER_SOLUTIONS, chrome.solutionsLinks)),
    },
    {
      id: 'footer-company',
      rule: 'Footer Company column (site-map §6)',
      ok: diff(EXPECTED_FOOTER_COMPANY, chrome.companyLinks).ok,
      detail: JSON.stringify(diff(EXPECTED_FOOTER_COMPANY, chrome.companyLinks)),
    },
    {
      id: 'footer-no-whatsapp-dup',
      rule: 'WhatsApp not duplicated in Get started column',
      ok: !chrome.getStartedHasWhatsApp && chrome.getStartedHasBook,
      detail: `whatsapp=${chrome.getStartedHasWhatsApp}, book=${chrome.getStartedHasBook}`,
    },
    {
      id: 'footer-company-hrefs',
      rule: 'Footer company links HTTP 200',
      ok: hrefChecks.every((h) => h.status === 200),
      detail: hrefChecks.filter((h) => h.status !== 200),
    },
    {
      id: 'footer-arch-los-anchor',
      rule: 'Architecture (LOS) → #los in view',
      ok: archScrollOk,
      detail: archHref ?? 'missing',
    },
    {
      id: 'mobile-menu',
      rule: 'Mobile menu includes header items + solutions sub-links',
      ok:
        EXPECTED_HEADER.every((e) => mobile.some((m) => m.includes(e.replace("'s", '')) || m === e)) &&
        mobile.some((m) => m.includes('Inbox Killer')),
      detail: mobile.slice(0, 12).join(' · '),
    },
  ];

  const failed = checks.filter((c) => !c.ok);
  const report = {
    base: BASE,
    checks,
    verdict: failed.length === 0 ? 'PASS' : 'FAIL',
    failedIds: failed.map((f) => f.id),
  };

  console.log(JSON.stringify(report, null, 2));
  process.exitCode = report.verdict === 'PASS' ? 0 : 1;
}

main();
