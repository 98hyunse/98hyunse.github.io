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
if (html.includes('id="research"') || html.includes('class="research-list"')) throw new Error('Separate research list remains');
if ((html.match(/class="paper-description"/g) || []).length !== 6) throw new Error('Each publication must have a research explanation');
if (!html.includes('/assets/hyunse-lee.png')) throw new Error('New portrait is missing');
if (html.includes('paper-card')) throw new Error('Draft card design must not be deployed');
if (!html.includes('href="mailto:98hyunse@gmail.com"')) throw new Error('Contact email is missing');
const articles = [...html.matchAll(/<article>([\s\S]*?)<\/article>/g)];
if (articles.length !== 6 || articles.some(([, article]) => article.indexOf('class="venue"') < 0 || article.indexOf('class="venue"') > article.indexOf('<h3>'))) {
  throw new Error('Publication venue and status must precede each title');
}
if ((html.match(/class="education-entry"><p class="date"/g) || []).length !== 3) throw new Error('Education dates must lead each entry');
if (html.includes('RESEARCH APPOINTMENT')) throw new Error('Outdated research appointment heading remains');
if (html.indexOf('id="ongoing-title"') > html.indexOf('id="publications"')) throw new Error('Ongoing work must precede Publications');
for (const url of ['https://github.com/l3umblee/duet-sfda', 'https://github.com/capableofanything/SKETCH']) {
  if (!html.includes(url)) throw new Error(`Missing supplied code link: ${url}`);
}
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
