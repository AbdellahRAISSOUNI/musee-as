// Simple deployment script to ensure CSS is properly included
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to recursively delete a directory
function deleteFolderRecursive(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    console.log(`Removing ${directoryPath}...`);
    try {
      // On Windows, sometimes rmSync with recursive doesn't work well
      // Use rimraf command which is more reliable for directory deletion
      execSync(`rimraf "${directoryPath}"`, { stdio: 'inherit' });
      console.log(`Successfully removed ${directoryPath}`);
    } catch (error) {
      console.log(`Failed to remove using rimraf, trying alternative method...`);
      try {
        // Alternative: use rd command on Windows
        execSync(`rd /s /q "${directoryPath}"`, { stdio: 'inherit' });
        console.log(`Successfully removed ${directoryPath} with rd command`);
      } catch (err) {
        console.error(`Error removing directory: ${err.message}`);
      }
    }
  }
}

// Check if the .next directory exists and remove it to ensure a clean build
const nextDir = path.join(__dirname, '.next');
if (fs.existsSync(nextDir)) {
  console.log('Removing existing .next directory for clean build...');
  deleteFolderRecursive(nextDir);
}

// Run the build process
console.log('Building Next.js application...');
execSync('npm run build', { stdio: 'inherit' });

// Deploy to Vercel
console.log('Deploying to Vercel...');
execSync('vercel --prod', { stdio: 'inherit' });

console.log('Deployment complete! Your site should be live with all CSS intact.'); 