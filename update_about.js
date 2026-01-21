const fs = require('fs');
const path = 'src/components/AboutSection.tsx';
try {
  let content = fs.readFileSync(path, 'utf8');
  const lines = content.split('\n');
  // Line 190 (0-indexed is 189)
  if (lines[189].includes('duration-300 group bg-white')) {
    lines[189] = lines[189].replace('duration-300 group bg-white', 'duration-500 group bg-white hover:bg-[#D5DFE2]');
    fs.writeFileSync(path, lines.join('\n'));
    console.log('Successfully updated line 190');
  } else {
    console.log('Line 190 does not match expected content');
    console.log('Actual:', lines[189]);
  }
} catch (e) {
  console.error(e);
}
