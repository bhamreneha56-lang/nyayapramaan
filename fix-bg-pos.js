const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

// 1. Remove background of the icon
css = css.replace(
  '.scales-intro-icon {',
  '.scales-intro-icon {\n  mix-blend-mode: screen;\n  filter: contrast(1.2) brightness(1.1) drop-shadow(0 4px 15px rgba(0,0,0,0.6));'
);

// 2. Move the whole hero-content higher up on the screen
css = css.replace(
  '.hero-content {',
  '.hero-content {\n  transform: translateY(-15vh);\n'
);

fs.writeFileSync('styles.css', css, 'utf8');
console.log("Updated background and position");
