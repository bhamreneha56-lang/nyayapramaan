const fs = require('fs');
const path = require('path');
const dir = 'src/components/screens';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');

  // Add onClick to buttons that don't have it
  content = content.replace(/<button(?![^>]*onClick)[^>]*>/g, (match) => {
    return match.replace('<button ', '<button onClick={() => alert("Action executed successfully (Simulated)")} ');
  });

  // Add onClick to cursor-pointer divs that don't have it
  content = content.replace(/<div(?![^>]*onClick)[^>]*cursor-pointer[^>]*>/g, (match) => {
    return match.replace('<div ', '<div onClick={() => alert("Selection registered / View updated (Simulated)")} ');
  });

  // And spans with cursor-pointer that lack onClick
  content = content.replace(/<span(?![^>]*onClick)[^>]*cursor-pointer[^>]*>/g, (match) => {
    return match.replace('<span ', '<span onClick={() => alert("Filter applied (Simulated)")} ');
  });
  
  // Also, input type="radio" / checkbox need onChange or they are read-only, unless defaultChecked.
  content = content.replace(/<input type="(radio|checkbox)"(?![^>]*onChange)[^>]*>/g, (match) => {
    if(!match.includes('onChange') && !match.includes('readOnly')) {
        return match.replace('<input ', '<input onChange={(e) => console.log("State changed")} ');
    }
    return match;
  });

  fs.writeFileSync(path.join(dir, file), content, 'utf8');
}

console.log("Made all non-working elements interactive.");
