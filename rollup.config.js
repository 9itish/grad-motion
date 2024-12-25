import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  input: './src/neat-gradient.js', // Entry point
  output: [
    {
      file: 'dist/js/neat-gradient.cjs.js',
      format: 'cjs', // CommonJS
    },
    {
      file: 'dist/js/neat-gradient.esm.js',
      format: 'esm', // ES Modules
    },
    {
      file: 'dist/js/neat-gradient.umd.js',
      format: 'umd', // Universal Module Definition
      name: 'NeatAnimatedGradient', // Global name for UMD builds
    },
    {
      file: 'dist/js/neat-gradient.js',
      format: 'iife', // IIFE format (browser-specific)
      name: 'NeatAnimatedGradient', // Global name for the IIFE
    },
    {
      file: 'dist/js/neat-gradient.min.js',
      format: 'iife', // IIFE format (browser-specific)
      name: 'NeatAnimatedGradient', // Global name for the IIFE
      plugins: [terser()]
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
  ],
});
