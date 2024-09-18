import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Define the source and destination folders
const sourceFolder = path.join(process.cwd(), 'static', 'mugshots');
const destinationFolder = path.join(process.cwd(), 'static', 'mugshots-webp');

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
    const outputFilePath = path.join(destinationFolder, `${path.basename(file, '.png')}.webp`);

    // Convert the file to WebP format using sharp with a quality setting
    sharp(filePath)
      .toFormat('webp', { quality: 80 })  // Adjusted quality to 80 for high visual fidelity
      .toFile(outputFilePath, (err, info) => {
        if (err) {
          console.error(`Error converting ${file} to WebP:`, err);
        } else {
          console.log(`Converted ${file} to WebP:`, info);
        }
      });
  });
});
