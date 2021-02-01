const path = require('path');
var ClearFiles = require("./plugins/clear-files")

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[hash]bundle.js'
  },
  module: {
    rules: [
      { test: /\.testf$/, use: path.resolve('./loaders/my-first-loader.js') },
    ]
  },
  plugins: [new ClearFiles()]
};