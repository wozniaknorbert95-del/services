import { readFileSync, existsSync } from 'node:fs';

const proof = readFileSync('src/content/proof.ts', 'utf8');
const refs = [...proof.matchAll(/\/gratka\/[^'"]+/g)].map((m) => m[0]);
const missing = refs.filter((r) => !existsSync('public' + r));
console.log('Missing local:', missing);
