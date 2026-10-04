const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// 1. Aggressive background removal for the icon
css = css.replace(
  /\.scales-intro-icon\s*\{[^}]*\}/,
  `.scales-intro-icon {
    width: 140px;
    height: auto;
    mix-blend-mode: color-dodge; /* Better for non-black dark backgrounds */
    filter: contrast(1.8) brightness(1.1) saturate(1.2) drop-shadow(0 0 10px rgba(59, 130, 246, 0.5));
    animation: floatGentle 4s ease-in-out infinite;
    position: relative;
    z-index: 5;
  }`
);

// 2. Add highly attractive visuals to the name (Light sweep animation)
const textEffects = `
.brand-title {
  position: relative;
  overflow: visible;
}

/* Light sweep reflection across the whole title */
.brand-title::after {
  content: '';
  position: absolute;
  top: 0;
  left: -150%;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent);
  transform: skewX(-25deg);
  animation: textShineSweep 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  pointer-events: none;
  z-index: 10;
  mix-blend-mode: overlay;
}

@keyframes textShineSweep {
  0% { left: -150%; }
  25% { left: 200%; }
  100% { left: 200%; }
}

.brand-blue, .brand-gold {
  position: relative;
}

/* Add a glowing underline or magical particles */
.tagline-wrapper {
  animation: glowPulseTagline 4s ease-in-out infinite;
}
@keyframes glowPulseTagline {
  0%, 100% { filter: drop-shadow(0 0 5px rgba(251, 191, 36, 0.3)); }
  50% { filter: drop-shadow(0 0 15px rgba(251, 191, 36, 0.8)); }
}
`;

css += '\n' + textEffects;

fs.writeFileSync('styles.css', css, 'utf8');
console.log("Visuals upgraded!");
