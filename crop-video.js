const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// The video CSS block:
// #mainVideo {
//   width: 100vw;
//   height: 100vh;
//   object-fit: cover;
//   filter: none;
// }
// Let's replace it with a scaled version
css = css.replace(
  /#mainVideo\s*\{[^}]*\}/,
  `#mainVideo {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: none;
    transform: scale(1.15); /* Scale up by 15% to crop out the Gemini watermark in the bottom right corner */
    transform-origin: center center;
  }`
);

fs.writeFileSync('styles.css', css, 'utf8');
console.log("Video scaled to crop watermark");
