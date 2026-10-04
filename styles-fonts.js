const fs = require('fs');

function replaceFont(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/'Plus Jakarta Sans'/g, "'Inter'");
  content = content.replace(/'Cinzel'/g, "'Merriweather'");
  content = content.replace(/'Playfair Display'/g, "'EB Garamond'");
  
  fs.writeFileSync(file, content, 'utf8');
}

replaceFont('styles.css');
replaceFont('home.css');
