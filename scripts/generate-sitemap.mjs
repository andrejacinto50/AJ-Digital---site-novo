/**
 * Gera public/sitemap.xml e public/robots.txt a partir das rotas reais.
 * Roda automaticamente no `npm run build`, então projeto novo no portfólio
 * já entra no sitemap sem ninguém lembrar.
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

import { SITE_URL } from '../src/data/seo.js';
import { projects } from '../src/data/projects.js';

const today = new Date().toISOString().slice(0, 10);

const routes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/servicos', priority: '0.9', changefreq: 'monthly' },
  { path: '/portfolio', priority: '0.9', changefreq: 'monthly' },
  { path: '/contato', priority: '0.8', changefreq: 'yearly' },
  { path: '/sobre', priority: '0.7', changefreq: 'yearly' },
  { path: '/processo', priority: '0.7', changefreq: 'yearly' },
  ...projects.map((project) => ({
    path: `/portfolio/${project.slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  }))
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${SITE_URL}${route.path === '/' ? '/' : route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

await writeFile(path.resolve('public/sitemap.xml'), sitemap, 'utf8');
await writeFile(path.resolve('public/robots.txt'), robots, 'utf8');

console.log(`sitemap.xml gerado com ${routes.length} URLs`);
