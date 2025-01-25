import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  input: './src/grad-motion.js', // Entry point
  output: [
    {
      file: 'dist/js/grad-motion.cjs.js',
      format: 'cjs', // CommonJS
    },
    {
      file: 'dist/js/grad-motion.esm.js',
      format: 'esm', // ES Modules
    },
    {
      file: 'dist/js/grad-motion.umd.js',
      format: 'umd', // Universal Module Definition
      name: 'GradMotion', // Global name for UMD builds
    },
    {
      file: 'dist/js/grad-motion.js',
      format: 'iife', // IIFE format (browser-specific)
      name: 'GradMotion', // Global name for the IIFE
    },
    {
      file: 'dist/js/grad-motion.min.js',
      format: 'iife', // IIFE format (browser-specific)
      name: 'GradMotion', // Global name for the IIFE
      plugins: [terser()]
    }
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
  ],
});
