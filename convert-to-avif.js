import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Define the source and destination folders
const sourceFolder = path.join(process.cwd(), 'static', 'mugshots');
const destinationFolder = path.join(process.cwd(), 'static', 'mugshots-avif');

// Create the destination folder if it doesn't exist
if (!fs.existsSync(destinationFolder)) {
  fs.mkdirSync(destinationFolder, { recursive: true });
}

// Read all files in the source folder
fs.readdir(sourceFolder, (err, files) => {
  if (err) {
    console.error('Error reading the source folder:', err);
    return;
  }

  // Filter only PNG files
  const pngFiles = files.filter(file => path.extname(file).toLowerCase() === '.png');

  pngFiles.forEach(file => {
    const filePath = path.join(sourceFolder, file);
    const outputFilePath = path.join(destinationFolder, `${path.basename(file, '.png')}.avif`);

    // Convert the file to AVIF format using sharp, preserving transparency
    sharp(filePath)
      .png() // Preprocess to ensure transparency is handled
      .toFormat('avif', { quality: 80 })
      .toFile(outputFilePath, (err, info) => {
        if (err) {
          console.error(`Error converting ${file} to AVIF:`, err);
        } else {
          console.log(`Converted ${file} to AVIF:`, info);
        }
      });
  });
});
