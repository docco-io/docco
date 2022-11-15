import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import externals from 'rollup-plugin-node-externals';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import sourceMaps from 'rollup-plugin-sourcemaps';
import filesize from 'rollup-plugin-filesize';
import license from 'rollup-plugin-license';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');
const input = './src/index.tsx';
const sourcemap = false;
const banner = `
/** @license Docco ${pkg.version}
 *
 * This source code is licensed under the ${pkg.license} license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * ${pkg.repository.url}
 */`;
const globals = {
  react: 'React',
  'react-dom/client': 'ReactDOM',
};
const plugins = [
  postcss(),
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  }),
  json(),
  typescript({
    tsconfig: './tsconfig.json',
  }),
  resolve(),
  commonjs(),
  sourceMaps(),
  filesize({
    showMinifiedSize: false,
    showGzippedSize: true,
  }),
  license({ banner }),
];

export default [
  {
    input,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap,
        exports: 'auto',
        plugins: [terser()],
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap,
        exports: 'auto',
        plugins: [terser()],
      },
      {
        file: pkg.browser,
        format: 'umd',
        sourcemap,
        exports: 'auto',
        name: 'Docco',
        plugins: [terser()],
        globals,
      },
      {
        file: 'dist/docco.js',
        format: 'cjs',
        sourcemap,
        exports: 'auto',
      },
    ],
    watch: {
      include: 'src/**',
    },
    plugins: [externals({ exclude: 'remount' }), ...plugins],
  },
  {
    input,
    output: {
      file: pkg.standalone,
      format: 'umd',
      sourcemap,
      name: 'Docco',
      plugins: [terser()],
    },
    plugins,
  },
];
