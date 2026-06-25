/**
 * Regenerates public/sitemap.xml from ROUTES in src/lib/sitemap-routes.ts
 * Run: node scripts/generate-sitemap.mjs
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const ROUTES = [
  '/',
  '/solutions/',
  '/solutions/inbox-killer/',
  '/solutions/web-upgrade/',
  '/solutions/sales-funnel/',
  '/solutions/lead-magnet-game/',
  '/solutions/managed-automation/',
  '/pricing/',
  '/how-it-works/',
  '/results/',
  '/results/inbox-killer/',
  '/results/agent-orchestrator/',
  '/results/sales-funnel/',
  '/results/lead-magnet/',
  '/results/jadzia-coi/',
  '/results/advisory-modernisation/',
  '/results/owner-ecosystem/',
  '/book-discovery/',
  '/founder/',
  '/about/',
  '/trust/',
  '/legal/',
  '/blog/',
];

const base = 'https://quietforge.flexgrafik.nl';
const lastmod = new Date().toISOString().slice(0, 10);

const urls = ROUTES.map(
  (path) => `  <url>
    <loc>${base}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`
).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(join(root, 'public', 'sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml updated (${ROUTES.length} routes)`);
