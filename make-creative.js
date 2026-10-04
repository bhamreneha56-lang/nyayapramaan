const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');

// 1. Brighten the background video
css = css.replace(
  '#mainVideo {',
  '#mainVideo {\n    filter: brightness(1.3) contrast(1.15) saturate(1.1);'
);

// 2. Fix cinematic overlay to be very light and not dark
css = css.replace(
  'background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.5) 80%, rgba(255, 255, 255, 0.7) 100%);\n    backdrop-filter: blur(2px);',
  'background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(4px);'
);

// 3. Make the Title attractive (Golden Gradient with 3D shadow)
css = css.replace(
  'color: #0f172a;\n    text-shadow: 0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.1);',
  'background: linear-gradient(135deg, #d97706 0%, #fbbf24 40%, #fcd34d 60%, #d97706 100%);\n    -webkit-background-clip: text;\n    color: transparent;\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.1), 0 0 40px rgba(245, 158, 11, 0.4);\n    filter: drop-shadow(0px 4px 2px rgba(0,0,0,0.1));'
);

// 4. Creative Button styling
const creativeBtnCss = `
.tap-to-start-btn {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.25) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5) !important;
  color: #0f172a !important;
  padding: 16px 40px;
  border-radius: 50px;
  font-weight: 900 !important;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px -10px rgba(245, 158, 11, 0.5) !important;
  display: flex;
  align-items: center;
  gap: 12px;
}

.tap-to-start-btn:hover {
  transform: translateY(-5px) scale(1.05);
  background: rgba(255, 255, 255, 0.9) !important;
  box-shadow: 0 15px 40px -10px rgba(245, 158, 11, 0.8) !important;
}

.tap-to-start-btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 50%; height: 100%;
  background: linear-gradient(to right, transparent, rgba(255,255,255,0.8), transparent);
  transform: skewX(-20deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% { left: -100%; }
  20% { left: 200%; }
  100% { left: 200%; }
}
`;

// Remove old button styles from css if they exist to avoid conflicts
css = css.replace(/\.tap-to-start-btn \{[\s\S]*?\}/g, '');
css += '\n' + creativeBtnCss;

fs.writeFileSync('styles.css', css, 'utf8');

let html = fs.readFileSync('index.html', 'utf8');

// Replace the inline style on the button to allow css classes to work
html = html.replace(
  'class="tap-to-start-btn" style="background: rgba(255, 255, 255, 0.9); color: #0f172a; border-color: #f59e0b; box-shadow: 0 4px 15px rgba(245, 158, 11, 0.2); font-weight: bold;" id="tapToStartBtn"',
  'class="tap-to-start-btn" id="tapToStartBtn"'
);

// Add a glowing icon inside the button
html = html.replace(
  '<span class="btn-text">TAP TO START</span>',
  '<span class="btn-text">ENTER WORKSPACE</span>'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Creative Intro applied.");
