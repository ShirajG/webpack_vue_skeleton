var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry:[
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './src/js/app.js'
  ],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/js'
  },
  target: 'web',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash',
      Vue: 'vue',
      Vuex: 'vuex'
    }),
    new webpack.HotModuleReplacementPlugin()
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
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        loader: 'url-loader'
      }
    ]
  }
};
