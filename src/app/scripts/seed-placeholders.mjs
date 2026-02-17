// scripts/seed-placeholders.mjs
import fs from "node:fs";
import path from "node:path";

/**

 *
 * This seeds required placeholder JPGs so dev + CI never break.
 */
const JPEG_1x1_BASE64 =
  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCABkAGQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAG8f//EABQQAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQEAAQUCj//EABQRAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Bp//EABQRAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Bp//EABQQAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQEABj8Cj//Z";

const PLACEHOLDERS = [
  // Home panels (must exist)
  "public/images/home/design.jpg",
  "public/images/home/construction.jpg",
  "public/images/home/projects.jpg",
  "public/images/home/about.jpg",

  // Global fallback used by ClientImg (must exist)
  "public/images/fallback.jpg",

  // Project template referenced in src/content/projects.ts
  "public/images/projects/project-title-example/hero.jpg",
  "public/images/projects/project-title-example/01.jpg",
  "public/images/projects/project-title-example/02.jpg"
];

const root = process.cwd();
const buf = Buffer.from(JPEG_1x1_BASE64, "base64");

for (const rel of PLACEHOLDERS) {
  const abs = path.join(root, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  if (!fs.existsSync(abs)) fs.writeFileSync(abs, buf);
}

console.log(`✅ Seeded placeholder images: ${PLACEHOLDERS.length}`);
