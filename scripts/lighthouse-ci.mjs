/**
 * Lighthouse CI gate — requires lighthouse CLI installed globally or via npx.
 * Thresholds per brain.md §9
 */
import { spawnSync } from 'node:child_process';

const url = process.env.LIGHTHOUSE_URL ?? 'http://localhost:3000';
const thresholds = {
  performance: 85,
  accessibility: 95,
  'best-practices': 95,
  seo: 95,
};

const result = spawnSync(
  'npx',
  [
    'lighthouse',
    url,
    '--output=json',
    '--quiet',
    '--chrome-flags=--headless --no-sandbox',
    '--only-categories=performance,accessibility,best-practices,seo',
  ],
  { encoding: 'utf8', shell: true }
);

if (result.status !== 0) {
  console.error('lighthouse failed — install with: npm i -D lighthouse');
  console.error(result.stderr || result.stdout);
  process.exit(1);
}

let report;
try {
  report = JSON.parse(result.stdout);
} catch {
  console.error('Could not parse lighthouse JSON output');
  process.exit(1);
}

const categories = report.categories ?? {};
let failed = false;

for (const [key, min] of Object.entries(thresholds)) {
  const score = Math.round((categories[key]?.score ?? 0) * 100);
  const ok = score >= min;
  console.log(`${key}: ${score} (min ${min}) ${ok ? 'PASS' : 'FAIL'}`);
  if (!ok) failed = true;
}

process.exit(failed ? 1 : 0);
