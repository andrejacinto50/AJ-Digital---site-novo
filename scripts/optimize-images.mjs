/**
 * Gera versões WebP otimizadas das imagens de public/.
 * Uso: npm run images
 *
 * Os originais (PNG/JPG) continuam no repositório: servem de fonte para novas
 * gerações e de fallback para quem não lê WebP (previews de link). O site
 * referencia apenas os .webp.
 */
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');

const SOURCE_PATTERN = /\.(png|jpe?g)$/i;

/** Arquivos gerados por este script — não servem de fonte para eles mesmos. */
const GENERATED = ['og-image.jpg'];

const LOGO_FILE = 'ajdigital.png';

/**
 * Largura e qualidade por tipo de imagem. A primeira regra que casar vence;
 * o padrão vale para os prints de projeto, que aparecem em cards recortados
 * (object-fit: cover) com no máximo ~1200px de largura no desktop.
 */
const RULES = [
  // Logo: usada em 44px (header) e 58px (rodapé). 192px cobre telas 3x.
  { match: /^ajdigital\.png$/i, width: 192, quality: 90 },
  // Foto do fundador: aparece em ~520px no Sobre e ~180px no Início.
  { match: /^andre\./i, width: 900, quality: 82 }
];

const DEFAULT_RULE = { width: 1280, quality: 78 };

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

async function convert(file) {
  const input = path.join(PUBLIC_DIR, file);
  const output = input.replace(SOURCE_PATTERN, '.webp');
  const { width, quality } = RULES.find((rule) => rule.match.test(file)) || DEFAULT_RULE;

  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(output);

  const before = (await stat(input)).size;
  const after = (await stat(output)).size;
  const saved = Math.round((1 - after / before) * 100);

  console.log(`${file.padEnd(24)} ${kb(before).padStart(9)} -> ${kb(after).padStart(8)}  (-${saved}%)`);
}

/**
 * Recorte quadrado da foto do fundador, usado no bloco do Inicio.
 * A estrategia "attention" do sharp escolhe a regiao mais relevante da imagem
 * (na pratica, o rosto), evitando chutar object-position no CSS.
 */
async function fotoQuadrada() {
  const entrada = path.join(PUBLIC_DIR, 'andre.jpeg');
  const saida = path.join(PUBLIC_DIR, 'andre-quadrado.webp');

  await sharp(entrada)
    .resize(600, 600, { fit: 'cover', position: sharp.strategy.attention })
    .webp({ quality: 82 })
    .toFile(saida);

  console.log(`andre-quadrado.webp        ${kb((await stat(saida)).size).padStart(21)}`);
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

const files = (await readdir(PUBLIC_DIR)).filter(
  (f) => SOURCE_PATTERN.test(f) && !GENERATED.includes(f.toLowerCase())
);

for (const file of files) {
  await convert(file);
}

await fotoQuadrada();
await ogImage();
