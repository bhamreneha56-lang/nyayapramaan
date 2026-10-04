const fs = require('fs');

function replaceFont(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    /family=Cinzel:.*?&family=Playfair\+Display:.*?&family=Plus\+Jakarta\+Sans:.*?&/,
    'family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Inter:wght@300;400;500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&'
  );
  
  content = content.replace(/'"Plus Jakarta Sans"', 'sans-serif'/, '\'"Inter"\', \'sans-serif\'');
  content = content.replace(/'"Cinzel"', 'Georgia', 'serif'/, '\'"Merriweather"\', \'Georgia\', \'serif\'');
  content = content.replace(/'"Playfair Display"', 'Georgia', 'serif'/, '\'"EB Garamond"\', \'Georgia\', \'serif\'');
  
  fs.writeFileSync(file, content, 'utf8');
}

replaceFont('home.html');
replaceFont('index.html');
