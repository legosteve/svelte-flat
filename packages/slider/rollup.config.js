export default {
  entry: './src/index.html',
  plugins: [
    require('rollup-plugin-svelte')(),
    require('rollup-plugin-uglify')(),
    require('rollup-plugin-babel')({
      exclude: 'node_modules/**'
    })
  ],
  format: 'umd',
  moduleName: "Slider",
  dest: './dist/index.js'
}