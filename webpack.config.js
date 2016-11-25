var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.join('public', 'js'),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.svg$/,
        loader: "url-loader"
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url-loader'
      }
    ]
  }
}