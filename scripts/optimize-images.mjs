/**
 * Gera versões WebP otimizadas das imagens de public/.
 * Uso: npm run images
 *
 * Os PNG originais continuam no repositório (servem de fallback e de fonte
 * para novas gerações). O site referencia apenas os .webp.
 */
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');

// Prints de projeto: aparecem em cards recortados (object-fit: cover),
// com no máximo ~1200px de largura no desktop.
const SHOT_WIDTH = 1280;
const SHOT_QUALITY = 78;

// Logo: usada em 44px (header) e 58px (rodapé). 192px cobre telas 3x.
const LOGO_WIDTH = 192;
const LOGO_FILE = 'ajdigital.png';

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

async function convert(file) {
  const input = path.join(PUBLIC_DIR, file);
  const output = input.replace(/\.png$/i, '.webp');
  const isLogo = file === LOGO_FILE;

  await sharp(input)
    .resize({ width: isLogo ? LOGO_WIDTH : SHOT_WIDTH, withoutEnlargement: true })
    .webp({ quality: isLogo ? 90 : SHOT_QUALITY })
    .toFile(output);

  const before = (await stat(input)).size;
  const after = (await stat(output)).size;
  const saved = Math.round((1 - after / before) * 100);

  console.log(`${file.padEnd(24)} ${kb(before).padStart(9)} -> ${kb(after).padStart(8)}  (-${saved}%)`);
}

async function ogImage() {
  const output = path.join(PUBLIC_DIR, 'og-image.jpg');
  const logo = await sharp(path.join(PUBLIC_DIR, LOGO_FILE))
    .resize({ width: 320 })
    .toBuffer();

  await sharp({
    create: { width: 1200, height: 630, channels: 3, background: '#050505' }
  })
    .composite([{ input: logo, gravity: 'center' }])
    .jpeg({ quality: 88 })
    .toFile(output);

  console.log(`og-image.jpg gerada       ${kb((await stat(output)).size).padStart(21)}`);
}

const files = (await readdir(PUBLIC_DIR)).filter((f) => f.toLowerCase().endsWith('.png'));

for (const file of files) {
  await convert(file);
}

await ogImage();
