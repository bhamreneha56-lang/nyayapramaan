const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const lawyerHtml = `
      <div class="lawyer-intro-container">
        <img src="lawyer-avatar.png" alt="Praman AI Lawyer" class="lawyer-intro-avatar" />
      </div>
`;

if (!html.includes('lawyer-intro-avatar')) {
  html = html.replace('</div>\n\n    <!-- Tap To Start', '</div>\n' + lawyerHtml + '\n    <!-- Tap To Start');
}

// Fix tap to start button style
html = html.replace(
  'class="tap-to-start-btn"',
  'class="tap-to-start-btn" style="background: rgba(255, 255, 255, 0.9); color: #0f172a; border-color: #f59e0b; box-shadow: 0 4px 15px rgba(245, 158, 11, 0.2); font-weight: bold;"'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log("Intro Lawyer added");
