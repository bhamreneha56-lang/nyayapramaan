const fs = require('fs');

// --- UPDATE HTML ---
let html = fs.readFileSync('index.html', 'utf8');

// Replace the title
html = html.replace(
  '<h1 class="brand-title">NYAYAPRAMAAN</h1>',
  '<h1 class="brand-title"><span class="brand-blue">NYAYA</span><span class="brand-gold">PRAMAAN</span></h1>'
);

// Replace the tagline
const oldTagline = '<p class="brand-tagline" style="color: #334155; font-weight: 700; text-shadow: 0 2px 10px rgba(255,255,255,0.8);">"Where Law Meets Evidence."</p>';
const newTagline = `
      <div class="tagline-wrapper">
        <span class="tagline-line"></span>
        <p class="brand-tagline">"Where Law Meets Evidence."</p>
        <span class="tagline-line"></span>
      </div>
`;
html = html.replace(oldTagline, newTagline);

// Replace the lawyer image with scales icon
html = html.replace(
  '<img src="lawyer-avatar.png" alt="Praman AI Lawyer" class="lawyer-intro-avatar" />',
  '<img src="scales-icon.png" alt="Scales of Justice" class="scales-intro-icon" />'
);

fs.writeFileSync('index.html', html, 'utf8');


// --- UPDATE CSS ---
let css = fs.readFileSync('styles.css', 'utf8');

// Update brand-title to remove background-clip
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
  }`
);

// Add new classes for title parts
const newStyles = `
.brand-blue {
  color: #3b82f6;
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
}
.brand-gold {
  color: #fbbf24;
  text-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
}

.tagline-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}
.tagline-line {
  height: 2px;
  width: 60px;
  background: linear-gradient(90deg, transparent, #fbbf24);
}
.tagline-wrapper .tagline-line:last-child {
  background: linear-gradient(270deg, transparent, #fbbf24);
}
.tagline-wrapper .brand-tagline {
  color: #f8fafc;
  font-family: 'Merriweather', serif;
  font-style: italic;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.8);
}

.scales-intro-icon {
  width: 120px;
  height: auto;
  margin: 20px auto 0;
  filter: drop-shadow(0 4px 10px rgba(0,0,0,0.5));
  animation: slideUpFade 1.5s ease-out forwards;
}
`;

css += newStyles;

// Clear the video filters to make it natural and clear looking
css = css.replace(
  '#mainVideo {\n    filter: brightness(1.3) contrast(1.15) saturate(1.1);',
  '#mainVideo {\n    filter: none;'
);

// Make the overlay slightly dark again so the bright text stands out, as per their image which has a dark background
css = css.replace(
  /\.cinematic-overlay\s*\{[^}]*\}/,
  `.cinematic-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
    pointer-events: none;
  }`
);

fs.writeFileSync('styles.css', css, 'utf8');
console.log("Updated styling to match user images");
