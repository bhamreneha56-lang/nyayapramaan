const esbuild = require('esbuild');

console.log('Building NyayaPraman application bundle...');

esbuild
  .build({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outfile: 'app.bundle.js',
    minify: true,
    sourcemap: true,
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    loader: {
      '.tsx': 'tsx',
      '.ts': 'ts',
    },
  })
  .then(() => {
    console.log('✓ Build succeeded: app.bundle.js generated successfully!');
  })
  .catch((err) => {
    console.error('✗ Build failed:', err);
    process.exit(1);
  });
