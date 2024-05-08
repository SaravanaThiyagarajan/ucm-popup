import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/entry.js',
  output: {
    dir: 'loader',
    format: 'cjs'
  },
  plugins: [commonjs()]
};