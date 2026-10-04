const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

css = css.replace(
  /\.fullscreen-video-container video\s*\{[^}]*\}/,
  `.fullscreen-video-container video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.15); /* Scale up by 15% to crop out the Gemini watermark */
  transform-origin: center center;
}`
);

fs.writeFileSync('styles.css', css, 'utf8');
console.log("Video scaled successfully!");
