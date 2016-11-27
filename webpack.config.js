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
      jQuery: "jquery",
      _: "lodash",
      Vue: "vue",
      Vuex: "vuex"
    })
  ],
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {}
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url-loader'
      }
    ]
  }
}