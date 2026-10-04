const fs = require('fs');

let content = fs.readFileSync('src/components/Layout.tsx', 'utf8');

content = content.replace(/<button(?![^>]*onClick)[^>]*>/g, (match) => {
    return match.replace('<button ', '<button onClick={() => alert("Action executed successfully (Simulated)")} ');
});

fs.writeFileSync('src/components/Layout.tsx', content, 'utf8');
console.log("Layout.tsx updated.");
