import { cpSync, mkdirSync, readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// Only public static output is deployed, never server code or local CV sources.
const source = resolve('dist/client');
const target = resolve('out');
const html = readFileSync(resolve(source, 'index.html'), 'utf8');
for (const expected of ['Hyunse Lee', 'SafeBranch', 'SeMoBridge', 'Under revision', 'On-going', '4.13']) {
  if (!html.includes(expected)) throw new Error(`Missing expected content: ${expected}`);
}
if (html.includes('Your site is taking shape')) throw new Error('Starter content remains');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
for (const match of html.matchAll(/href="#([^"]+)"/g)) {
  if (!ids.has(match[1])) throw new Error(`Broken section link: ${match[1]}`);
}
for (const match of html.matchAll(/(?:src|href)="(\/[^"?#]*)/g)) {
  if (!existsSync(resolve(source, '.' + match[1]))) throw new Error(`Missing public asset: ${match[1]}`);
}
mkdirSync(target, { recursive: true });
for (const name of ['index.html', 'index.rsc', '_next', 'assets', 'favicon.svg', '.nojekyll']) {
  cpSync(resolve(source, name), resolve(target, name), { recursive: true });
}
console.log('Validated content, section links, and asset paths. GitHub Pages output: out/');
