var WebpackDevServer = require("webpack-dev-server");
var webpack = require('webpack');

const path = require('path');

const PATHS = {
  test: path.join(__dirname, './test')
};

module.exports = {
  entry: path.join(PATHS.test, 'app.js'),
  output: {
    filename: "bundle.js",
    path: PATHS.test
  },
  devServer: {
    contentBase: PATHS.test,
    inline: true,
    port: 3000,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader'
      }
    ]
  }
}
