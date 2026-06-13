import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const dir = join(process.cwd(), 'public', 'gratka');

const replacements = [
  [/\u0014/g, ' - '],
  [/\u0019/g, '·'],
  [/â€"/g, ' - '],
  [/â€™/g, "'"],
  [/ï¿½/g, '·'],
  [/\uFFFD/g, '·'],
  [/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, ''],
];

for (const file of readdirSync(dir).filter((f) => f.endsWith('.svg'))) {
  const path = join(dir, file);
  let content = readFileSync(path, 'utf8');
  for (const [pattern, value] of replacements) {
    content = content.replace(pattern, value);
  }
  writeFileSync(path, content, 'utf8');

  const bad = [...content].filter((ch) => {
    const c = ch.charCodeAt(0);
    return (c < 32 && c !== 9 && c !== 10 && c !== 13) || c === 127;
  }).length;

  console.log(`${file}: bad_chars=${bad}`);
}
