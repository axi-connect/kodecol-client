/**
 * Genera los assets derivados de marca a partir de los originales de public/images/logo/.
 *
 * Uso: pnpm brand:assets
 *
 * Por qué existe: los originales vienen con ~20 % de área de protección baked y a 3840×3840.
 * Servirlos así deja el isotipo diminuto dentro de su caja y descuadra la alineación óptica
 * con el wordmark. Aquí se recortan al contenido real y se generan las variantes que el sitio
 * consume; el aire alrededor del logo se controla desde CSS (docs/DESIGN-SYSTEM.md §6.9).
 *
 * Es determinista: mismo input → mismo output. Los archivos generados se commitean.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const logo_dir = resolve(root, "public/images/logo");
const app_dir = resolve(root, "src/app");

/* Tokens de marca (espejo de @theme en src/app/globals.css). */
const BRAND = {
  bg: "#04110f",
  green_900: "#013a3b",
  green_600: "#00735c",
};

const write_png = async (path, buffer) => {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, buffer);
  const { width, height } = await sharp(buffer).metadata();
  console.log(`  ✓ ${path.replace(`${root}/`, "")} — ${width}×${height}`);
};

/** Recorta el PNG a su contenido real (descarta el padding transparente). */
const trim_to_content = (path) => sharp(path).trim({ threshold: 1 });

/**
 * Recolorea un PNG a blanco puro usando su canal alfa como máscara.
 * Sirve para llevar el imagotipo (verde oscuro) a fondos oscuros sin rehacer el arte.
 */
const recolor_to_white = async (buffer) => {
  const { width, height } = await sharp(buffer).metadata();
  const alpha = await sharp(buffer).ensureAlpha().extractChannel(3).toBuffer();
  const white = await sharp({
    create: { width, height, channels: 3, background: "#ffffff" },
  })
    .png()
    .toBuffer();
  return sharp(white).joinChannel(alpha).png().toBuffer();
};

/** Lienzo sólido o con gradiente diagonal, renderizado vía SVG. */
const make_background = (width, height, from, to) => {
  const svg =
    from === to
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">` +
        `<rect width="${width}" height="${height}" fill="${from}"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">` +
        `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
        `<stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/>` +
        `</linearGradient></defs>` +
        `<rect width="${width}" height="${height}" fill="url(#g)"/></svg>`;
  return sharp(Buffer.from(svg));
};

async function main() {
  console.log("Generando assets de marca…");

  /* ── Isotipo claro recortado: navbar, footer, top bar, 404, placeholders ── */
  const isotipo_white = await trim_to_content(`${logo_dir}/isotipo-white.png`)
    .resize({ height: 534 })
    .png()
    .toBuffer();
  await write_png(`${logo_dir}/isotipo-white-trim.png`, isotipo_white);

  /* ── Render 3D recortado: tarjeta focal del hero (resolución nativa) ── */
  const isotipo_3d = await trim_to_content(`${logo_dir}/isotipo-3d.png`)
    .png()
    .toBuffer();
  await write_png(`${logo_dir}/isotipo-3d-trim.png`, isotipo_3d);

  /* ── Imagotipo en blanco: piezas sobre fondo oscuro (hoy, la OG image) ── */
  const imagotipo_trimmed = await trim_to_content(
    `${logo_dir}/imagotipo_color.png`,
  )
    .resize({ width: 960 })
    .png()
    .toBuffer();
  const imagotipo_white = await recolor_to_white(imagotipo_trimmed);
  await write_png(`${logo_dir}/imagotipo-white.png`, imagotipo_white);

  /* ── OG image (convención de archivo de Next: se cablea sola) ── */
  const og_logo = await sharp(imagotipo_white).resize({ width: 640 }).toBuffer();
  const og = await make_background(1200, 630, BRAND.bg, BRAND.green_900)
    .composite([{ input: og_logo, gravity: "center" }])
    .png()
    .toBuffer();
  await write_png(`${app_dir}/opengraph-image.png`, og);

  /* ── Apple touch icon: isotipo claro sobre el verde de marca ── */
  const apple_logo = await sharp(isotipo_white)
    .resize({ height: 108 })
    .toBuffer();
  const apple = await make_background(180, 180, BRAND.green_600, BRAND.green_600)
    .composite([{ input: apple_logo, gravity: "center" }])
    .png()
    .toBuffer();
  await write_png(`${app_dir}/apple-icon.png`, apple);

  console.log("Listo.");
}

main().catch((error) => {
  console.error("Falló la generación de assets:", error);
  process.exit(1);
});
