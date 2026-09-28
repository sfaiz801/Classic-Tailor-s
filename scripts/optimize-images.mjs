import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const galleryDir = path.resolve('public/images/gallery');
const files = fs.readdirSync(galleryDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

console.log(`Optimizing ${files.length} images...`);

for (const file of files) {
  const filePath = path.join(galleryDir, file);
  const baseName = path.parse(file).name;
  const webpPath = path.join(galleryDir, `${baseName}.webp`);
  
  const originalSize = fs.statSync(filePath).size;

  await sharp(filePath)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(webpPath);

  const newSize = fs.statSync(webpPath).size;
  const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
  console.log(`${file} (${(originalSize/1024).toFixed(0)}KB) -> ${baseName}.webp (${(newSize/1024).toFixed(0)}KB) [${savings}% smaller]`);
}
