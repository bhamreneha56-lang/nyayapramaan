const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

css = css.replace(
  /\.scales-intro-icon\s*\{[^}]*\}/,
  `.scales-intro-icon {
    width: 140px;
    height: auto;
    mix-blend-mode: screen; /* Removes dark background */
    filter: contrast(1.2) brightness(1.1) drop-shadow(0 4px 15px rgba(0,0,0,0.6));
    animation: floatGentle 4s ease-in-out infinite;
  }`
);

fs.writeFileSync('styles.css', css, 'utf8');
