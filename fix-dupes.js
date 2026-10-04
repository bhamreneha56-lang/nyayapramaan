const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// Remove all standalone .brand-title blocks that only set animation
css = css.replace(/\.brand-title\s*\{\s*position:\s*relative;\s*overflow:\s*visible;\s*\}/g, '');
css = css.replace(/\.brand-title\s*\{\s*position:\s*relative;\s*overflow:\s*visible;\s*animation:\s*floatTitle3D[^}]*\}/g, '');

// Re-apply the master .brand-title block to the top definition
css = css.replace(
  /\.brand-title\s*\{[^}]*\}/,
  `.brand-title {
    font-family: 'Merriweather', Georgia, serif;
    font-size: clamp(2.8rem, 7.5vw, 6.2rem);
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: visible;
    animation: floatTitle3D 6s ease-in-out infinite, letterSpacingIn 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    transform-style: preserve-3d;
    perspective: 1000px;
    margin: 0;
  }`
);

fs.writeFileSync('styles.css', css, 'utf8');
console.log("Fixed duplicate CSS");
