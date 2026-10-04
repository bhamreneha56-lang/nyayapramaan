const fs = require('fs');

// 1. Update HTML
let html = fs.readFileSync('index.html', 'utf8');

// Remove the existing lawyer-intro-container block
const containerRegex = /\s*<div class="lawyer-intro-container">\s*<img src="scales-icon\.png" alt="Scales of Justice" class="scales-intro-icon" \/>\s*<\/div>/;
html = html.replace(containerRegex, '');

// Insert it right above the brand-title
const iconHtml = `
      <div class="scales-wrapper">
        <img src="scales-icon.png" alt="Scales of Justice" class="scales-intro-icon" />
      </div>`;
html = html.replace('<h1 class="brand-title">', iconHtml + '\n      <h1 class="brand-title">');

fs.writeFileSync('index.html', html, 'utf8');


// 2. Update CSS
let css = fs.readFileSync('styles.css', 'utf8');

// Replace the old scales-intro-icon css
const oldScalesCssRegex = /\.scales-intro-icon\s*\{[^}]*\}/;
css = css.replace(oldScalesCssRegex, '');

// Add new styling for scales merging with text, and animated text
const newCss = `
.scales-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -30px; /* Negative margin to merge with title */
  position: relative;
  z-index: 2;
  animation: slideDownFade 1.5s ease-out forwards;
}

.scales-intro-icon {
  width: 140px;
  height: auto;
  filter: drop-shadow(0 4px 15px rgba(0,0,0,0.6));
  animation: floatGentle 4s ease-in-out infinite;
}

@keyframes slideDownFade {
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes floatGentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.brand-blue {
  color: #3b82f6;
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
  display: inline-block;
  animation: textPulseBlue 3s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

.brand-gold {
  color: #fbbf24;
  text-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
  display: inline-block;
  animation: textPulseGold 3s ease-in-out infinite;
  animation-delay: 0.5s; /* slightly offset from blue */
  position: relative;
  z-index: 1;
}

@keyframes textPulseBlue {
  0%, 100% { filter: brightness(1); text-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
  50% { filter: brightness(1.3); text-shadow: 0 0 35px rgba(59, 130, 246, 0.9); }
}

@keyframes textPulseGold {
  0%, 100% { filter: brightness(1); text-shadow: 0 0 20px rgba(251, 191, 36, 0.4); }
  50% { filter: brightness(1.3); text-shadow: 0 0 35px rgba(251, 191, 36, 0.9); }
}
`;

// Also clean up old .brand-blue / .brand-gold if they exist
css = css.replace(/\.brand-blue\s*\{[^}]*\}/, '');
css = css.replace(/\.brand-gold\s*\{[^}]*\}/, '');

css += newCss;

fs.writeFileSync('styles.css', css, 'utf8');
console.log("Updated intro layout and animations!");
