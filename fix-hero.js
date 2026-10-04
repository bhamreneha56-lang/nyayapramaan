const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// Move hero-content higher and ensure perfect alignment
css = css.replace(
  /\.hero-content\s*\{[^}]*\}/,
  `.hero-content {
    transform: translateY(-25vh); /* Moved significantly higher */
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    animation: heroEntrance 1.5s cubic-bezier(0.16, 1, 0.3, 1);
  }`
);

// Add entrance and 3D floating animations
const newAnimations = `
@keyframes heroEntrance {
  0% { opacity: 0; transform: translateY(-15vh) scale(0.9); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(-25vh) scale(1); filter: blur(0); }
}

.brand-title {
  position: relative;
  overflow: visible;
  animation: floatTitle3D 6s ease-in-out infinite;
  transform-style: preserve-3d;
  perspective: 1000px;
}

@keyframes floatTitle3D {
  0%, 100% { transform: rotateX(0deg) rotateY(0deg) translateY(0); }
  25% { transform: rotateX(2deg) rotateY(1deg) translateY(-3px); }
  75% { transform: rotateX(-2deg) rotateY(-1deg) translateY(3px); }
}
`;

// Replace existing .brand-title rule block to remove old duplicate/overridden styles
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
    animation: floatTitle3D 6s ease-in-out infinite, letterSpacingIn 2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
    transform-style: preserve-3d;
    perspective: 1000px;
    margin: 0;
  }`
);

const letterSpacingAnim = `
@keyframes letterSpacingIn {
  0% { letter-spacing: -0.05em; opacity: 0; }
  100% { letter-spacing: 0.1em; opacity: 1; }
}
`;

css += '\n' + newAnimations + '\n' + letterSpacingAnim;

fs.writeFileSync('styles.css', css, 'utf8');
console.log("Updated position and added new animations!");
