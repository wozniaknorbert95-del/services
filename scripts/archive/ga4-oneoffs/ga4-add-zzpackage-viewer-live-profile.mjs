/** Use live Chrome profile (Chrome must be closed). */
import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROFILE = path.join(process.env.LOCALAPPDATA ?? '', 'Google', 'Chrome', 'User Data');
const SA_EMAIL = 'quietforge-ga-reader-712@flexgrafik.iam.gserviceaccount.com';
const URL =
  'https://analytics.google.com/analytics/web/#/a337818458p528785553/admin/property/access-management';

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const context = await chromium.launchPersistentContext(PROFILE, {
    channel: 'chrome',
    headless: false,
    args: ['--profile-directory=Default'],
    viewport: { width: 1440, height: 900 },
  });
  const page = context.pages()[0] ?? (await context.newPage());
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 120_000 });
  for (let i = 0; i < 45; i++) {
    const t = await page.locator('body').innerText().catch(() => '');
    if (t.includes('Property access') || t.includes('Dostęp do usługi') || t.includes('Gebruikerstoegang')) break;
    await sleep(4000);
  }
  const add = page.getByRole('button', { name: /Add users|Dodaj|Toevoegen|\+/i }).first();
  if (await add.isVisible({ timeout: 15_000 }).catch(() => false)) await add.click();
  await sleep(2000);
  const input = page.locator('input').first();
  if (await input.isVisible({ timeout: 10_000 }).catch(() => false)) await input.fill(SA_EMAIL);
  const viewer = page.getByText(/^Viewer$|Czytelnik|Lezer/i).first();
  if (await viewer.isVisible({ timeout: 5000 }).catch(() => false)) await viewer.click();
  const submit = page.getByRole('button', { name: /Add|Dodaj|Toevoegen/i }).last();
  if (await submit.isVisible({ timeout: 5000 }).catch(() => false)) await submit.click();
  await sleep(8000);
  console.log('done', page.url());
  await context.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
