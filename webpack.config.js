const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');

const PATH = {
  src: path.join(__dirname, './src'),
  lib: path.join(__dirname, './lib'),
  dist: path.join(__dirname, './dist'),
  example: path.join(__dirname, './example'),
  root: path.join(__dirname, './')
};
const css = 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';
const sass = `${css}!sass`;
const extractCSS = new ExtractTextPlugin('style.css', {allChunks: true});
var copyLib = new CopyPlugin([{ from: 'lib', to: 'lib' }]);
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
module.exports = [umd, example];
