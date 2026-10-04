const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

css = css.replace(
  /\.brand-title\s*\{[^}]*\}/,
  `.brand-title {
    font-family: 'Merriweather', Georgia, serif;
    font-size: clamp(2.8rem, 7.5vw, 6.2rem);
    font-weight: 900;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    background: linear-gradient(135deg, #d97706 0%, #fbbf24 40%, #fcd34d 60%, #d97706 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1), 0 0 40px rgba(245, 158, 11, 0.5);
    filter: drop-shadow(0px 4px 2px rgba(0,0,0,0.1));
  }`
);

fs.writeFileSync('styles.css', css, 'utf8');
console.log("Title fixed!");
