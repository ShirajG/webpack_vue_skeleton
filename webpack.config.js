var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.join('public', 'js'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css"}
    ]
  }
}