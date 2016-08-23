const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PATH = {
  src: path.join(__dirname, './src'),
  lib: path.join(__dirname, './lib'),
  dist: path.join(__dirname, './dist'),
  example: path.join(__dirname, './example'),
  root: path.join(__dirname, './')
};
const css = 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';
const sass = `${css}!sass`;
const extractCSS = new ExtractTextPlugin('react-drawer.css', {allChunks: true});
const uglify = new webpack.optimize.UglifyJsPlugin();


var copyLib = new CopyPlugin([
  { from: 'lib', to: 'lib' },
  { from: 'coverage/lcov-report', 'to': 'coverage'}
]);
const CONFIG = {
  entry: path.join(PATH.src, 'ReactDrawer.js'),
  externals: {
    'react': 'React'
  },
  devServer: {
    contentBase: PATH.root,
    inline: true,
    port: 3000
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
        loader: extractCSS.extract('style', css)
      }, {
        test: /\.scss$/,
        loader: extractCSS.extract('style', sass)
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [extractCSS]
};
const umd = Object.assign({}, CONFIG, {
  output: {
    libraryTarget: 'umd',
    library: 'ReactDrawer',
    filename: 'react-drawer.js',
    path: PATH.lib
  },
  globals: {
    'animate.css': 'var'
  }
});
const umdMinified = Object.assign({}, umd, {
  output: {
    libraryTarget: 'umd',
    library: 'ReactDrawer',
    filename: 'react-drawer.min.js',
    path: PATH.lib
  },
  plugins: [extractCSS, uglify]
});
const example = Object.assign({}, CONFIG, {
  entry: path.join(PATH.example, 'app.js'),
  output: {
    filename: 'example.js',
    path: PATH.example
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-drawer': 'ReactDrawer'
  },
  globals: {
    'animate.css': 'var'
  },
  plugins: [extractCSS, copyLib]
});
module.exports = [umd, umdMinified, example];
