var WebpackDevServer = require("webpack-dev-server");
var webpack = require('webpack');

const path = require('path');

const PATHS = {
  app: path.join(__dirname, './'),
  public: path.join(__dirname, './')
};

module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js",
    path: './'
  },
  devServer: {
    contentBase: PATHS.public,
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
