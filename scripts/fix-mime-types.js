import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all files in a directory
function findFiles(dir, extensions) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(filePath, extensions));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Create _headers file for GitHub Pages
function createHeadersFile() {
  const distDir = path.join(__dirname, '..', 'dist');
  const headersPath = path.join(distDir, '_headers');
  
  let headersContent = '';
  
  // Add headers for all JS files
  headersContent += '/*.js\n';
  headersContent += '  Content-Type: application/javascript; charset=utf-8\n\n';
  
  // Add headers for all MJS files
  headersContent += '/*.mjs\n';
  headersContent += '  Content-Type: application/javascript; charset=utf-8\n\n';
  
  // Add headers for all CSS files
  headersContent += '/*.css\n';
  headersContent += '  Content-Type: text/css; charset=utf-8\n\n';
  
  // Add headers for assets directory
  headersContent += '/assets/*\n';
  headersContent += '  Content-Type: application/javascript; charset=utf-8\n\n';
  
  fs.writeFileSync(headersPath, headersContent);
  console.log('Created _headers file for GitHub Pages');
}

// Create .htaccess file as backup
function createHtaccessFile() {
  const distDir = path.join(__dirname, '..', 'dist');
  const htaccessPath = path.join(distDir, '.htaccess');
  
  let htaccessContent = '';
  htaccessContent += '# Set proper MIME types for JavaScript modules\n';
  htaccessContent += '<FilesMatch "\\.(js|mjs)$">\n';
  htaccessContent += '    Header set Content-Type "application/javascript; charset=utf-8"\n';
  htaccessContent += '</FilesMatch>\n\n';
  
  htaccessContent += '# Set proper MIME type for CSS files\n';
  htaccessContent += '<FilesMatch "\\.css$">\n';
  htaccessContent += '    Header set Content-Type "text/css; charset=utf-8"\n';
  htaccessContent += '</FilesMatch>\n\n';
  
  htaccessContent += '# Enable CORS for assets\n';
  htaccessContent += '<FilesMatch "\\.(js|mjs|css)$">\n';
  htaccessContent += '    Header set Access-Control-Allow-Origin "*"\n';
  htaccessContent += '</FilesMatch>\n';
  
  fs.writeFileSync(htaccessPath, htaccessContent);
  console.log('Created .htaccess file as backup');
}

// Main execution
try {
  createHeadersFile();
  createHtaccessFile();
  console.log('MIME type files created successfully!');
} catch (error) {
  console.error('Error creating MIME type files:', error);
  process.exit(1);
}
