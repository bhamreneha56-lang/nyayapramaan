const fs = require('fs');

// 1. Fix styles.css
let css = fs.readFileSync('styles.css', 'utf8');

css = css.replace(
  'background: radial-gradient(circle at center, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.45) 80%, rgba(0, 0, 0, 0.75) 100%),\n                linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, transparent 35%, transparent 60%, rgba(0, 0, 0, 0.7) 100%);',
  'background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.5) 80%, rgba(255, 255, 255, 0.7) 100%);\n    backdrop-filter: blur(2px);'
);

css = css.replace(
  'color: #000fff;\n    background: linear-gradient(135deg, #000fff 0%, #f7e7c4 30%, #e8cd8c 60%, #d4af37 100%);\n    -webkit-background-clip: text;\n    background-clip: text;\n    -webkit-text-fill-color: transparent;',
  'color: #0f172a;\n    text-shadow: 0 4px 20px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.1);'
);

// Slogan styling
css = css.replace(
  'color: #f1f5f9;', // if it's there
  'color: #334155;'
);

// Add lawyer animation styles
const lawyerStyles = `

.lawyer-intro-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideUpFade 1.5s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.lawyer-intro-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #f59e0b;
  box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.4);
  animation: floatBounce 3s ease-in-out infinite;
}

@keyframes slideUpFade {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
`;
if (!css.includes('.lawyer-intro-container')) {
  css += lawyerStyles;
}
fs.writeFileSync('styles.css', css, 'utf8');

// 2. Fix index.html
let html = fs.readFileSync('index.html', 'utf8');

// The tagline is currently `<p class="brand-tagline">“Where Law Meets Evidence.”</p>`
// Let's make it dark too if it was light
html = html.replace(
  '<p class="brand-tagline">“Where Law Meets Evidence.”</p>',
  '<p class="brand-tagline" style="color: #334155; font-weight: 700; text-shadow: 0 2px 10px rgba(255,255,255,0.8);">“Where Law Meets Evidence.”</p>'
);
html = html.replace(
  '<p class="brand-tagline">?oWhere Law Meets Evidence.??</p>',
  '<p class="brand-tagline" style="color: #334155; font-weight: 700; text-shadow: 0 2px 10px rgba(255,255,255,0.8);">"Where Law Meets Evidence."</p>'
);

// Add lawyer img
const lawyerHtml = `
      <div class="lawyer-intro-container">
        <img src="lawyer-avatar.png" alt="Praman AI Lawyer" class="lawyer-intro-avatar" />
      </div>
`;
if (!html.includes('lawyer-intro-avatar')) {
  html = html.replace('</div>\n\n    <!-- Bottom Enter Button -->', lawyerHtml + '    </div>\n\n    <!-- Bottom Enter Button -->');
}

// Fix the enter button to look good on light theme
html = html.replace(
  'class="btn-enter"',
  'class="btn-enter" style="background: rgba(255, 255, 255, 0.9); color: #0f172a; border-color: #f59e0b; box-shadow: 0 4px 15px rgba(245, 158, 11, 0.2);"'
);

fs.writeFileSync('index.html', html, 'utf8');

console.log("Intro Screen fixed");
