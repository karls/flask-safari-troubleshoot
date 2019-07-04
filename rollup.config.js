import fs from 'fs';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'public/main.js'
  },
  plugins: [
    !production && serve({
      contentBase: 'public',
      historyApiFallback: true,
      host: 'safari-frontend-test.development',
      port: 5051,
      /* https: {
       *   key: fs.readFileSync('./key.pem'),
       *   cert: fs.readFileSync('./cert.pem')
       * } */
    }),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload({
      watch: 'public',
      /* https: {
       *   key: fs.readFileSync('./key.pem'),
       *   cert: fs.readFileSync('./cert.pem')
       * } */
    }),
  ],
  watch: {
    clearScreen: false
  }
};
