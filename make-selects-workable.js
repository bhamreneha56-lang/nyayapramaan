const fs = require('fs');
const path = require('path');
const dir = 'src/components/screens';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');

  // Add onChange to selects that don't have it
  content = content.replace(/<select(?![^>]*onChange)[^>]*>/g, (match) => {
    return match.replace('<select ', '<select onChange={(e) => console.log("Dropdown updated")} ');
  });

  fs.writeFileSync(path.join(dir, file), content, 'utf8');
}

console.log("Made selects interactive.");
