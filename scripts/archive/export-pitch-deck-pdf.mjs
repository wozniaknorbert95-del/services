import { chromium } from 'playwright';
import { pathToFileURL } from 'url';
import path from 'path';
import { fileURLToPath } from 'url';

const root = 'C:/Users/FlexGrafik/FlexGrafik';
const htmlPath = path.join(root, 'quietforge-pitch-deck-v2.html');
const pdfPath = path.join(root, 'QuietForge-Pitch-Deck-2026.pdf');
const fileUrl = pathToFileURL(htmlPath).href;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto(fileUrl, { waitUntil: 'networkidle' });
await page.waitForTimeout(2000);

await page.pdf({
  path: pdfPath,
  width: '1920px',
  height: '1080px',
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
});

await browser.close();
const fs = await import('fs');
const stat = fs.statSync(pdfPath);
console.log(`OK ${pdfPath} (${stat.size} bytes)`);
