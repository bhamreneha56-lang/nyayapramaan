const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(/<p class="brand-tagline">.*?<\/p>/, '<p class="brand-tagline" style="color: #334155; font-weight: 700; text-shadow: 0 2px 10px rgba(255,255,255,0.8);">"Where Law Meets Evidence."</p>');

fs.writeFileSync('index.html', html, 'utf8');
