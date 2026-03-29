import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {pathToFileURL} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const entryServerPath = path.resolve(distDir, 'server', 'entry-server.js');
const {render} = await import(pathToFileURL(entryServerPath).href);

const indexPath = path.resolve(distDir, 'index.html');
const html = await fs.readFile(indexPath, 'utf-8');
const appHtml = render();

const rendered = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

await fs.writeFile(indexPath, rendered, 'utf-8');