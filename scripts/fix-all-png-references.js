import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to search
const searchDirs = [
  'components',
  'app',
  'lib',
  'utils'
];

// File extensions to search
const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'];

function findPngReferences(dirPath) {
  const references = [];
  
  try {
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Recursively search subdirectories
        const subReferences = findPngReferences(filePath);
        references.push(...subReferences);
      } else if (fileExtensions.some(ext => file.endsWith(ext))) {
        // Search in files
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Find PNG references
        const pngRegex = /\.png/gi;
        const matches = content.match(pngRegex);
        
        if (matches) {
          references.push({
            file: filePath,
            content: content,
            matches: matches.length
          });
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error.message);
  }
  
  return references;
}

function fixPngReferences(filePath, content) {
  let updatedContent = content;
  let changes = 0;
  
  // Fix import statements
  const importRegex = /import\s+(\w+)\s+from\s+["']([^"']*\.png)["']/g;
  updatedContent = updatedContent.replace(importRegex, (match, importName, importPath) => {
    const newPath = importPath.replace(/\.png$/i, '.webp');
    changes++;
    console.log(`✅ Fixed import: ${importPath} → ${newPath}`);
    return `import ${importName} from "${newPath}"`;
  });
  
  // Fix require statements
  const requireRegex = /require\s*\(\s*["']([^"']*\.png)["']\s*\)/g;
  updatedContent = updatedContent.replace(requireRegex, (match, requirePath) => {
    const newPath = requirePath.replace(/\.png$/i, '.webp');
    changes++;
    console.log(`✅ Fixed require: ${requirePath} → ${newPath}`);
    return `require("${newPath}")`;
  });
  
  // Fix src attributes
  const srcRegex = /src\s*=\s*["']([^"']*\.png)["']/g;
  updatedContent = updatedContent.replace(srcRegex, (match, srcPath) => {
    const newPath = srcPath.replace(/\.png$/i, '.webp');
    changes++;
    console.log(`✅ Fixed src: ${srcPath} → ${newPath}`);
    return `src="${newPath}"`;
  });
  
  // Fix href attributes
  const hrefRegex = /href\s*=\s*["']([^"']*\.png)["']/g;
  updatedContent = updatedContent.replace(hrefRegex, (match, hrefPath) => {
    const newPath = hrefPath.replace(/\.png$/i, '.webp');
    changes++;
    console.log(`✅ Fixed href: ${hrefPath} → ${newPath}`);
    return `href="${newPath}"`;
  });
  
  return { updatedContent, changes };
}

function main() {
  console.log('🔍 Searching for PNG references...\n');
  
  const allReferences = [];
  
  searchDirs.forEach(dir => {
    const dirPath = path.join(__dirname, '..', dir);
    if (fs.existsSync(dirPath)) {
      const references = findPngReferences(dirPath);
      allReferences.push(...references);
    }
  });
  
  if (allReferences.length === 0) {
    console.log('✅ No PNG references found!');
    return;
  }
  
  console.log(`📊 Found ${allReferences.length} files with PNG references:\n`);
  
  let totalChanges = 0;
  
  allReferences.forEach(ref => {
    console.log(`📁 ${ref.file} (${ref.matches} references)`);
    
    const { updatedContent, changes } = fixPngReferences(ref.file, ref.content);
    
    if (changes > 0) {
      fs.writeFileSync(ref.file, updatedContent, 'utf8');
      console.log(`📝 Updated ${ref.file} with ${changes} changes\n`);
      totalChanges += changes;
    } else {
      console.log(`ℹ️  No changes needed for ${ref.file}\n`);
    }
  });
  
  console.log(`\n🎯 Summary:`);
  console.log(`- Files processed: ${allReferences.length}`);
  console.log(`- Total changes made: ${totalChanges}`);
  
  if (totalChanges > 0) {
    console.log('\n✅ All PNG references have been converted to WebP!');
    console.log('\n💡 Next steps:');
    console.log('1. Run npm run build to test the changes');
    console.log('2. Check that all images load correctly');
    console.log('3. Test performance improvements');
  } else {
    console.log('\n✅ No changes were needed - all references are already WebP!');
  }
}

main();
