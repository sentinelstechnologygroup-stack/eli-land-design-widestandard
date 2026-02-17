// scripts/verify-media.mjs
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const PUB = path.join(ROOT, "public");

function walk(dir, out = []) {
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) walk(p, out);
    else if (/\.(ts|tsx|js|jsx)$/.test(d.name)) out.push(p);
  }
  return out;
}

const files = walk(SRC);
const illegal = [];
const missing = [];

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");

  // Rule 1: NEVER reference "public/images" or "public/video" in code (URL must start at root)
  const bad = text.match(/["'`]public\/(images|video)\//g);
  if (bad) illegal.push({ file, bad });

  // Rule 2: Every "/images/..." or "/video/..." literal must exist on disk under /public
  const refs = [
    ...text.matchAll(
      /["'`](\/(images|video)\/[^"'`]+?\.(png|jpg|jpeg|webp|svg|mp4|webm))["'`]/g
    )
  ];

  for (const r of refs) {
    const url = r[1]; // "/images/..."
    const disk = path.join(PUB, url.replace(/^\//, "")); // "public/images/..."
    if (!fs.existsSync(disk)) missing.push({ file, url });
  }
}

if (illegal.length || missing.length) {
  console.error("\n❌ MEDIA STANDARD VIOLATION\n");

  if (illegal.length) {
    console.error("Illegal references found (remove 'public/' — URLs must start with '/images' or '/video'):\n");
    for (const x of illegal) {
      console.error(`- ${x.file}`);
      x.bad.forEach((b) => console.error(`   ${b}`));
    }
    console.error("");
  }

  if (missing.length) {
    console.error("Missing public files for referenced URLs:\n");
    for (const m of missing) console.error(`- ${m.file} -> ${m.url}`);
    console.error("");
  }

  process.exit(1);
}

console.log("✅ Media verified.");
