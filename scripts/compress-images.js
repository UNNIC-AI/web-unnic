import sharp from "sharp"
import { readdir, stat, writeFile } from "fs/promises"
import { join, extname } from "path"

const PUBLIC_DIR = "/app/public"
const JPEG_QUALITY = 75
const PNG_QUALITY = 80
const WEBP_QUALITY = 75

let totalSaved = 0
let totalFiles = 0

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      const subFiles = await getFiles(fullPath)
      files.push(...subFiles)
    } else {
      const ext = extname(entry.name).toLowerCase()
      if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
        files.push(fullPath)
      }
    }
  }
  return files
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase()
  const before = (await stat(filePath)).size

  try {
    const image = sharp(filePath)
    let buffer

    if (ext === ".jpg" || ext === ".jpeg") {
      buffer = await image.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer()
    } else if (ext === ".png") {
      buffer = await image.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer()
    } else if (ext === ".webp") {
      buffer = await image.webp({ quality: WEBP_QUALITY }).toBuffer()
    }

    // Only overwrite if smaller
    if (buffer && buffer.length < before) {
      await writeFile(filePath, buffer)
      const saved = before - buffer.length
      totalSaved += saved
      totalFiles++
      console.log(`✓ ${filePath.replace(PUBLIC_DIR, "")} | ${(before / 1024).toFixed(0)}KB → ${(buffer.length / 1024).toFixed(0)}KB (saved ${(saved / 1024).toFixed(0)}KB)`)
    } else {
      console.log(`- ${filePath.replace(PUBLIC_DIR, "")} | already optimal, skipped`)
    }
  } catch (err) {
    console.log(`✗ ${filePath.replace(PUBLIC_DIR, "")} | error: ${err.message}`)
  }
}

const files = await getFiles(PUBLIC_DIR)
console.log(`Found ${files.length} images to process...\n`)

for (const file of files) {
  await compressImage(file)
}

console.log(`\nDone! Compressed ${totalFiles} files. Total saved: ${(totalSaved / 1024).toFixed(0)}KB (${(totalSaved / 1024 / 1024).toFixed(2)}MB)`)
