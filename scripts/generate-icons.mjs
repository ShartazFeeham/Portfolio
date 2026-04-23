import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const outDir = path.resolve("public");

const iconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#2c2a25"/>
  <path d="M18 44h28v4H18z" fill="#e8e1cf"/>
  <path d="M22 18h20v18H22z" fill="#e8e1cf" opacity="0.9"/>
  <path d="M26 22h12v2H26zm0 6h12v2H26zm0 6h8v2H26z" fill="#2c2a25"/>
</svg>`;

await fs.mkdir(outDir, { recursive: true });

const icon = sharp(Buffer.from(iconSvg));

// Favicons
await icon.resize(32, 32).toFile(path.join(outDir, "favicon.png"));
await icon.resize(48, 48).toFile(path.join(outDir, "favicon-48.png"));
await icon
  .resize(256, 256)
  .toFile(path.join(outDir, "apple-touch-icon.png"));

// PWA icons
await icon.resize(192, 192).toFile(path.join(outDir, "icon-192.png"));
await icon.resize(512, 512).toFile(path.join(outDir, "icon-512.png"));

// .ico (multi-size)
const icoPng16 = await sharp(Buffer.from(iconSvg)).resize(16, 16).png().toBuffer();
const icoPng32 = await sharp(Buffer.from(iconSvg)).resize(32, 32).png().toBuffer();
const icoPng48 = await sharp(Buffer.from(iconSvg)).resize(48, 48).png().toBuffer();
const ico = await toIco([icoPng16, icoPng32, icoPng48]);
await fs.writeFile(path.join(outDir, "favicon.ico"), ico);

// Optional SVG favicon for modern browsers
await fs.writeFile(path.join(outDir, "favicon.svg"), iconSvg, "utf8");

console.log("Icons generated in public/.");

