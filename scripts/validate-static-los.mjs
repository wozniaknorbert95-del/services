/**
 * Static SSoT audit — los-architecture.svg, layout JSON, dead los-teaser links.
 * Usage: node scripts/validate-static-los.mjs
 * Exit 1 on high/critical findings.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

const findings = [];

function record(severity, area, message, detail = {}) {
  findings.push({ severity, area, message, ...detail });
}

const SVG_PATH = join(ROOT, 'public/gratka/los-architecture.svg');
const MD_PATH = join(ROOT, 'public/gratka/los-architecture.md');
const LAYOUT_PATH = join(ROOT, 'docs/design/los-diagram-layout.json');

const REQUIRED_SVG_LABELS = [
  'Wizard',
  'Lead Game',
  'Trust Portal',
  'Jadzia COI',
  'Mission Ctrl',
  'VCMS',
  'Agent OS',
  'Constitution',
  'Living Operating System',
  'GUARD',
];

const FORBIDDEN_PATTERNS = [
  { pattern: /Jadzia Strategist/i, reason: 'Strategist weekly brief is PLANNED, not LIVE truth' },
  { pattern: /los-teaser/i, reason: 'Home los-teaser section removed — use /founder/#system-diagram' },
  { pattern: /<text[^>]*>zzpackage<\/text>/i, reason: 'Static SVG must use human canvas labels, not repo keys' },
];

function walkDir(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (name === 'node_modules' || name === '.next' || name === '.git') continue;
    const st = statSync(full);
    if (st.isDirectory()) walkDir(full, files);
    else if (/\.(tsx?|jsx?|mdx?|md)$/.test(name)) files.push(full);
  }
  return files;
}

function auditSvg() {
  const svg = readFileSync(SVG_PATH, 'utf8');
  for (const label of REQUIRED_SVG_LABELS) {
    if (!svg.includes(label)) {
      record('high', 'svg', `Missing required label: ${label}`);
    }
  }
  for (const { pattern, reason } of FORBIDDEN_PATTERNS) {
    if (pattern.test(svg)) {
      record('high', 'svg', reason, { pattern: pattern.toString() });
    }
  }
  if (!svg.includes('Bounded writes — checkout, deploy, publish')) {
    record('medium', 'svg', 'ACT subtitle should match layout JSON bounded-writes copy');
  }
  if (!svg.includes('Jadzia COI — orders, leads, analytics, content')) {
    record('high', 'svg', 'THINK subtitle must reflect LIVE COI capabilities');
  }
  const wizardCount = (svg.match(/>Wizard</g) ?? []).length;
  if (wizardCount < 2) {
    record('high', 'svg', `Wizard expected in Sense+Act slots, found ${wizardCount}`);
  }
}

function auditLayoutJson() {
  const layout = JSON.parse(readFileSync(LAYOUT_PATH, 'utf8'));
  const thinkSub = layout.layers?.think?.subtitle ?? '';
  if (/Strategist/i.test(thinkSub)) {
    record('high', 'layout', 'layout.json think.subtitle still references Strategist');
  }
  if (!thinkSub.includes('Jadzia COI')) {
    record('high', 'layout', 'layout.json think.subtitle must reference Jadzia COI');
  }
}

function auditCompanionMd() {
  const md = readFileSync(MD_PATH, 'utf8');
  for (const { pattern, reason } of FORBIDDEN_PATTERNS) {
    if (pattern.test(md)) {
      record('high', 'md', reason);
    }
  }
  if (!md.includes('founder/#system-diagram')) {
    record('high', 'md', 'Companion MD must link to interactive Technical map on /founder/');
  }
}

function auditSourceLinks() {
  const srcRoot = join(ROOT, 'src');
  const files = walkDir(srcRoot);
  for (const file of files) {
    const content = readFileSync(file, 'utf8');
    if (content.includes('los-teaser')) {
      record('high', 'src', `Stale los-teaser reference`, { file: relative(ROOT, file) });
    }
  }
}

export function runStaticLosAudit() {
  findings.length = 0;
  auditSvg();
  auditLayoutJson();
  auditCompanionMd();
  auditSourceLinks();
  return [...findings];
}

export function staticLosVerdict(findingsList = findings) {
  const critical = findingsList.filter((f) => f.severity === 'critical');
  const high = findingsList.filter((f) => f.severity === 'high');
  if (critical.length > 0) return 'FAIL';
  if (high.length > 0) return 'FAIL';
  if (findingsList.length > 0) return 'CONDITIONAL_PASS';
  return 'PASS';
}

function main() {
  const results = runStaticLosAudit();
  const verdict = staticLosVerdict(results);
  console.log(
    JSON.stringify(
      {
        verdict,
        summary: {
          critical: results.filter((f) => f.severity === 'critical').length,
          high: results.filter((f) => f.severity === 'high').length,
          medium: results.filter((f) => f.severity === 'medium').length,
        },
        findings: results,
      },
      null,
      2
    )
  );
  process.exitCode = verdict === 'FAIL' ? 1 : 0;
}

const isMain = process.argv[1]?.replace(/\\/g, '/').endsWith('validate-static-los.mjs');
if (isMain) main();
