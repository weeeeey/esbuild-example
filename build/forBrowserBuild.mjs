import * as esbuild from 'esbuild';

await esbuild.build({
    entryPoints: ['app.jsx'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    outfile: 'out.js',
});
