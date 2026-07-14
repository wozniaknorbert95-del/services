/**
 * Layer 4 — prod API smoke (chat + optional generate), no browser.
 * Usage:
 *   node scripts/gate-inspire-api-smoke.mjs           # full chat + generate
 *   node scripts/gate-inspire-api-smoke.mjs --chat-only  # chat only (after E2E used generate quota)
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { Blob } from 'node:buffer';

const API = 'https://api.zzpackage.flexgrafik.nl/api/v1/design-agent';
const PAGE = 'https://zzpackage.flexgrafik.nl/voertuigreclame-ontwerp/';
const OUT = join(process.cwd(), 'docs/operations/media/inspire-screens');
const LOGO = join(OUT, 'schilder-janssen-logo.png');
const REPORT = join(OUT, 'api-generate-report.json');
const CHAT_ONLY = process.argv.includes('--chat-only') || process.env.GATE_SKIP_GENERATE === '1';
const REQUEST_MOCKUP_A_SKU = 'NA-WRAP-PRO';

mkdirSync(OUT, { recursive: true });

function reportAgeMs(path) {
  if (!existsSync(path)) return Infinity;
  try {
    const r = JSON.parse(readFileSync(path, 'utf8'));
    return Date.now() - new Date(r.at).getTime();
  } catch {
    return Infinity;
  }
}

function loadFreshReport() {
  if (!existsSync(REPORT)) return null;
  const age = reportAgeMs(REPORT);
  if (age >= 3_600_000) return null;
  try {
    const r = JSON.parse(readFileSync(REPORT, 'utf8'));
    return r.pass ? r : null;
  } catch {
    return null;
  }
}

async function resolveApiKey() {
  if (process.env.FG_DESIGN_AGENT_KEY) return process.env.FG_DESIGN_AGENT_KEY;
  const html = await (await fetch(PAGE)).text();
  const keyMatch = html.match(/"apiKey"\s*:\s*"([^"]+)"/);
  if (keyMatch?.[1]) return keyMatch[1];
  if (/["']useProxy["']\s*:\s*(true|1|"1")/i.test(html)) return null;
  throw new Error('apiKey not found on prod page (daConfig) and useProxy not detected');
}

function apiHeaders(key, json = false) {
  const h = { 'X-FG-Design-Agent-Key': key };
  if (json) h['Content-Type'] = 'application/json';
  return h;
}

async function isStubPngBytes(buf) {
  if (buf.length >= 5000) return false;
  if (buf.length < 24 || buf[0] !== 0x89) return true;
  const w = (buf[16] << 24) | (buf[17] << 16) | (buf[18] << 8) | buf[19];
  const h = (buf[20] << 24) | (buf[21] << 16) | (buf[22] << 8) | buf[23];
  return w === 640 && h === 360;
}

async function main() {
  if (!existsSync(LOGO)) throw new Error(`Missing logo: ${LOGO}`);
  const report = {
    pass: true,
    errors: [],
    warnings: [],
    at: new Date().toISOString(),
    mode: CHAT_ONLY ? 'chat-only' : 'full',
    checks: {},
  };

  const apiKey = await resolveApiKey();
  if (!apiKey) {
    report.checks.proxy_mode = true;
    if (CHAT_ONLY) {
      const prior = loadFreshReport();
      if (!prior) {
        report.pass = false;
        report.errors.push('chat-only: no fresh PASS api-generate-report.json (<1h)');
      } else {
        report.checks.reused_generate_report = true;
        report.checks.engine_mode = prior.checks?.engine_mode ?? prior.response?.engine_mode;
        report.checks.generator_provider = prior.checks?.generator_provider ?? prior.response?.generator_provider;
        report.response = prior.response;
        if (report.checks.engine_mode !== 'inspirationOnly') {
          report.pass = false;
          report.errors.push(`engine_mode: ${report.checks.engine_mode}`);
        }
        if (report.checks.generator_provider !== 'openrouter') {
          report.pass = false;
          report.errors.push(`generator_provider: ${report.checks.generator_provider}`);
        }
      }
      writeFileSync(REPORT, JSON.stringify(report, null, 2));
      console.log('API smoke', report.pass ? 'PASS' : 'FAIL', report.errors);
      if (!report.pass) process.exit(1);
      return;
    }
    report.pass = false;
    report.errors.push('proxy mode: direct API unavailable — run gate-inspire-e2e.mjs first');
    writeFileSync(REPORT, JSON.stringify(report, null, 2));
    console.log('API smoke', report.pass ? 'PASS' : 'FAIL', report.errors);
    process.exit(1);
  }

  const sessionId = `gate-api-${Date.now()}`;
  const chatRes = await fetch(`${API}/chat`, {
    method: 'POST',
    headers: apiHeaders(apiKey, true),
    body: JSON.stringify({ session_id: sessionId, message: 'Hoi! Ik wil voertuigreclame.' }),
  });
  report.checks.chat_status = chatRes.status;
  if (chatRes.status === 429) {
    report.pass = false;
    report.errors.push('chat: 429 rate limit');
  } else if (!chatRes.ok) {
    report.pass = false;
    report.errors.push(`chat: HTTP ${chatRes.status}`);
  } else {
    const chatBody = await chatRes.json();
    report.checks.chat_reply = (chatBody.reply_nl || '').slice(0, 80);
    report.checks.session_id = chatBody.session_id;
  }

  if (CHAT_ONLY) {
    const prior = loadFreshReport();
    if (!prior) {
      report.pass = false;
      report.errors.push('chat-only: no fresh PASS api-generate-report.json (<1h)');
    } else {
      report.checks.reused_generate_report = true;
      report.checks.engine_mode = prior.checks?.engine_mode ?? prior.response?.engine_mode;
      report.checks.generator_provider = prior.checks?.generator_provider ?? prior.response?.generator_provider;
      report.response = prior.response;
      if (report.checks.engine_mode !== 'inspirationOnly') {
        report.pass = false;
        report.errors.push(`engine_mode: ${report.checks.engine_mode}`);
      }
      if (report.checks.generator_provider !== 'openrouter') {
        report.pass = false;
        report.errors.push(`generator_provider: ${report.checks.generator_provider}`);
      }
    }
    writeFileSync(REPORT, JSON.stringify(report, null, 2));
    console.log('API smoke', report.pass ? 'PASS' : 'FAIL', report.errors);
    if (!report.pass) process.exit(1);
    return;
  }

  const fd = new FormData();
  fd.append('vehicle', 'bus_l');
  fd.append('branche', 'schilder');
  fd.append('bedrijfsnaam', 'Schilder Janssen');
  fd.append('telefoon', '06-98765432');
  fd.append('website', 'www.janssen-schilder.nl');
  fd.append('diensten', 'Binnen- en buitenschilderwerk, behangen');
  fd.append('doelgroep', "Woningeigenaren en VvE's");
  fd.append('positionering', 'balanced');
  fd.append('stijl', 'balanced');
  fd.append('brand_colors', '["#1A5276","#FFFFFF"]');
  fd.append('tekst_opties', '["telefoon","website"]');
  fd.append('mockup_b_sku', 'BLS-SET-LOGO-CONTACT');
  fd.append('mockup_a_sku', REQUEST_MOCKUP_A_SKU);
  fd.append('brief_confirmed', 'true');
  const logoBytes = readFileSync(LOGO);
  fd.append('logo', new Blob([logoBytes], { type: 'image/png' }), 'schilder-janssen-logo.png');

  const genRes = await fetch(`${API}/generate`, {
    method: 'POST',
    headers: apiHeaders(apiKey, false),
    body: fd,
  });
  report.checks.generate_status = genRes.status;
  if (genRes.status === 429) {
    report.pass = false;
    report.errors.push('generate: 429 rate limit');
  } else if (!genRes.ok) {
    const errText = await genRes.text();
    report.pass = false;
    report.errors.push(`generate: HTTP ${genRes.status} ${errText.slice(0, 200)}`);
  } else {
    const body = await genRes.json();
    report.checks.engine_mode = body.engine_mode ?? '';
    report.checks.generator_provider = (body.generator_provider ?? '').toLowerCase();

    if (report.checks.engine_mode !== 'inspirationOnly') {
      report.pass = false;
      report.errors.push(`engine_mode: ${report.checks.engine_mode}`);
    }
    if (report.checks.generator_provider !== 'openrouter') {
      report.pass = false;
      report.errors.push(`generator_provider: ${report.checks.generator_provider || '(missing)'}`);
    }

    report.response = {
      brief_id: body.brief_id,
      mockup_b_sku: body.mockup_b_sku,
      mockup_a_sku: body.mockup_a_sku,
      wizard_deeplink: body.wizard_deeplink,
      engine_mode: body.engine_mode,
      generator_provider: body.generator_provider,
      mockup_count: (body.mockups || []).length,
      mockups: (body.mockups || []).map((m) => ({
        variant: m.variant,
        sku: m.sku,
        label_nl: m.label_nl,
        url: m.url?.startsWith('data:') ? `data:[${m.url.length}chars]` : m.url,
      })),
    };

    if (body.mockup_a_sku && body.mockup_a_sku !== REQUEST_MOCKUP_A_SKU) {
      report.warnings.push(
        `mockup_a_sku mismatch: request ${REQUEST_MOCKUP_A_SKU} got ${body.mockup_a_sku} (recommendation engine override)`
      );
    }

    const mockups = body.mockups || [];
    if (mockups.length < 2) {
      report.pass = false;
      report.errors.push(`mockups: ${mockups.length}`);
    }
    if (!body.mockup_b_sku?.includes('BLS-SET')) {
      report.pass = false;
      report.errors.push(`mockup_b_sku: ${body.mockup_b_sku}`);
    }
    if (!body.wizard_deeplink?.includes('highlight=')) {
      report.pass = false;
      report.errors.push('wizard_deeplink missing highlight=');
    }

    for (let i = 0; i < mockups.length; i++) {
      const m = mockups[i];
      if (m.variant !== 'standard' && m.variant !== 'premium') {
        report.pass = false;
        report.errors.push(`mockup ${i + 1} variant: ${m.variant} (expected standard|premium)`);
      }
      const url = m.url;
      if (!url || url.startsWith('data:')) {
        report.pass = false;
        report.errors.push(`mockup ${i + 1}: missing public URL`);
        continue;
      }
      const imgRes = await fetch(url);
      if (!imgRes.ok) {
        report.pass = false;
        report.errors.push(`mockup ${i + 1} fetch: ${imgRes.status}`);
        continue;
      }
      const buf = Buffer.from(await imgRes.arrayBuffer());
      report.checks[`mockup_${i + 1}_bytes`] = buf.length;
      if (await isStubPngBytes(buf)) {
        report.pass = false;
        report.errors.push(`mockup ${i + 1}: stub PNG`);
      }
      if (buf.length < 50_000) {
        report.pass = false;
        report.errors.push(`mockup ${i + 1}: too small (${buf.length} B)`);
      }
    }
  }

  writeFileSync(REPORT, JSON.stringify(report, null, 2));
  console.log('API smoke', report.pass ? 'PASS' : 'FAIL', report.errors, report.warnings);
  if (!report.pass) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
