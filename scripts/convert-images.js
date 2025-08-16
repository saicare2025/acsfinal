import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const ASSETS_DIR = path.join(__dirname, '../app/assets');
const QUALITY = 85;
const MAX_WIDTH = 1200;

// Image optimization settings
const optimizationSettings = {
  hero: { quality: 85, maxWidth: 1200, targetSize: 50 }, // KB
  company: { quality: 75, maxWidth: 800, targetSize: 10 }, // KB
  review: { quality: 80, maxWidth: 600, targetSize: 20 }, // KB
  logo: { quality: 90, maxWidth: 400, targetSize: 15 }, // KB
  general: { quality: 85, maxWidth: 1200, targetSize: 100 } // KB
};

async function getImageType(filename) {
  if (filename.includes('hero')) return 'hero';
  if (filename.includes('company')) return 'company';
  if (filename.includes('review')) return 'review';
  if (filename.includes('logo')) return 'logo';
  return 'general';
}

async function convertImage(inputPath, outputPath, settings) {
  try {
    const originalSize = fs.statSync(inputPath).size;
    const originalSizeKB = (originalSize / 1024).toFixed(1);
    
    console.log(`🔄 Converting: ${path.basename(inputPath)} (${originalSizeKB}KB)`);
    
    // Process image with Sharp
    const image = sharp(inputPath);
    
    // Get image metadata
    const metadata = await image.metadata();
    
    // Resize if needed
    if (metadata.width > settings.maxWidth) {
      image.resize(settings.maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Convert to WebP with specified quality
    await image
      .webp({ 
        quality: settings.quality,
        effort: 6, // Higher effort = better compression but slower
        nearLossless: false
      })
      .toFile(outputPath);
    
    // Get new file size
    const newSize = fs.statSync(outputPath).size;
    const newSizeKB = (newSize / 1024).toFixed(1);
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Converted: ${path.basename(outputPath)} (${newSizeKB}KB) - ${reduction}% reduction`);
    
    // Check if target size is met
    if (newSizeKB <= settings.targetSize) {
      console.log(`🎯 Target met: ${newSizeKB}KB <= ${settings.targetSize}KB`);
    } else {
      console.log(`⚠️  Target missed: ${newSizeKB}KB > ${settings.targetSize}KB`);
    }
    
    return { originalSizeKB, newSizeKB, reduction };
    
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
    return null;
  }
}

async function processDirectory(dirPath) {
  const results = [];
  
  try {
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Recursively process subdirectories
        const subResults = await processDirectory(filePath);
        results.push(...subResults);
      } else if (file.toLowerCase().endsWith('.png')) {
        // Process PNG files
        const imageType = await getImageType(file);
        const settings = optimizationSettings[imageType];
        
        const outputPath = filePath.replace(/\.png$/i, '.webp');
        
        const result = await convertImage(filePath, outputPath, settings);
        if (result) {
          results.push({
            file,
            type: imageType,
            ...result
          });
        }
      }
    }
  } catch (error) {
    console.error(`❌ Error reading directory ${dirPath}:`, error.message);
  }
  
  return results;
}

async function main() {
  console.log('🚀 Starting PNG to WebP conversion...\n');
  
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`❌ Assets directory not found: ${ASSETS_DIR}`);
    return;
  }
  
  const results = await processDirectory(ASSETS_DIR);
  
  if (results.length === 0) {
    console.log('ℹ️  No PNG files found to convert.');
    return;
  }
  
  // Summary
  console.log('\n📊 Conversion Summary:');
  console.log('======================');
  
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  
  results.forEach(result => {
    totalOriginalSize += parseFloat(result.originalSizeKB);
    totalNewSize += parseFloat(result.newSizeKB);
    
    console.log(`${result.file}: ${result.originalSizeKB}KB → ${result.newSizeKB}KB (${result.reduction}% reduction)`);
  });
  
  const totalReduction = ((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1);
  
  console.log('\n🎯 Overall Results:');
  console.log(`Total original size: ${totalOriginalSize.toFixed(1)}KB`);
  console.log(`Total new size: ${totalNewSize.toFixed(1)}KB`);
  console.log(`Total reduction: ${totalReduction}%`);
  
  console.log('\n💡 Next steps:');
  console.log('1. Update your import statements to use .webp files');
  console.log('2. Test the performance improvements');
  console.log('3. Consider removing the original .png files after testing');
  
  console.log('\n✅ Conversion complete!');
}

main().catch(console.error);
