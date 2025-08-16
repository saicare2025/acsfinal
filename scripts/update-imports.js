import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files that need import updates
const filesToUpdate = [
  'components/homepage/HeroSection.js',
  'components/homepage/HeroSection2.js',
  'components/homepage/HeroSection3.js',
  'components/homepage/HeroSection4.js',
  'components/homepage/TransformationalJourney.js',
  'components/homepage/CompanySection.js',
  'components/Header.js',
  'components/Logo.js',
  'app/meeting-schedule/page.js'
];

function updateImports(filePath) {
  try {
    const fullPath = path.join(__dirname, '..', filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    let updated = false;
    
    // Update import statements from .png to .webp
    const importRegex = /import\s+(\w+)\s+from\s+["']([^"']*\.png)["']/g;
    const matches = [...content.matchAll(importRegex)];
    
    matches.forEach(match => {
      const [fullMatch, importName, importPath] = match;
      const newPath = importPath.replace(/\.png$/i, '.webp');
      const newImport = `import ${importName} from "${newPath}"`;
      
      content = content.replace(fullMatch, newImport);
      updated = true;
      
      console.log(`✅ Updated: ${importPath} → ${newPath}`);
    });
    
    if (updated) {
      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`📝 Updated file: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No PNG imports found in: ${filePath}`);
      return false;
    }
    
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔄 Updating import statements from PNG to WebP...\n');
  
  let updatedCount = 0;
  
  filesToUpdate.forEach(filePath => {
    if (updateImports(filePath)) {
      updatedCount++;
    }
  });
  
  console.log(`\n✅ Updated ${updatedCount} files successfully!`);
  
  console.log('\n💡 Next steps:');
  console.log('1. Test your application to ensure everything works');
  console.log('2. Run npm run build to verify no errors');
  console.log('3. Test performance improvements with Lighthouse');
  console.log('4. Consider removing original .png files after confirming everything works');
  
  console.log('\n🎯 Expected performance improvements:');
  console.log('- LCP: Should improve by 2-3 seconds');
  console.log('- Total Blocking Time: Should reduce by 1-2 seconds');
  console.log('- Speed Index: Should improve by 1-2 seconds');
}

main();
