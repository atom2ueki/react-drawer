var WebpackDevServer = require("webpack-dev-server");
var webpack = require('webpack');

const path = require('path');

const PATH = {
  src: path.join(__dirname, './src'),
  lib: path.join(__dirname, './lib'),
  dist: path.join(__dirname, './dist'),
  example: path.join(__dirname, './example'),
  root: path.join(__dirname, './'),
};
const CONFIG = {
  entry: path.join(PATH.src, 'ReactDrawer.js'),
  externals: {
    'react': 'React'
  },
  devServer: {
    contentBase: PATH.root,
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
        test: /\.css$/,
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      }, {
        test: /\.scss$/,
        loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader'
      }
    ]
  }
}
const umd = Object.assign({}, CONFIG, {
  output: {
    libraryTarget: 'umd',
    library: 'react-drawer',
    filename: "react-drawer.js",
    path: PATH.lib
  }
});
const script = Object.assign({}, CONFIG, {
  output: {
    libraryTarget: 'var',
    library: 'ReactDrawer',
    filename: "react-drawer.js",
    path: PATH.dist
  }
});
const example = Object.assign({}, CONFIG, {
  entry: path.join(PATH.example, 'app.js'),
  output: {
    filename: 'example.js',
    path: PATH.example
  },
  externals: {
    'react-drawer': 'umd'
  }
});
module.exports = [script, umd, example];
