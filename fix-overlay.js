const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// Use regex to replace the entire cinematic overlay block
css = css.replace(
  /\.cinematic-overlay\s*\{[^}]*\}/,
  `.cinematic-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(3px);
    pointer-events: none;
  }`
);

fs.writeFileSync('styles.css', css, 'utf8');
console.log("Cinematic overlay fixed!");
