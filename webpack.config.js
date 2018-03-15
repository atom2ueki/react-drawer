const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATH = {
  src: path.join(__dirname, './src'),
  lib: path.join(__dirname, './lib'),
  dist: path.join(__dirname, './dist'),
  example: path.join(__dirname, './example'),
  root: path.join(__dirname, './')
};
const css = 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]';
const sass = `${css}!sass`;
const extractCSS = new ExtractTextPlugin({filename: 'react-drawer.css', allChunks: true});
const uglify = new webpack.optimize.UglifyJsPlugin({
  sourceMap: true,
  minimize: true,
  compress: {
    warnings: false
  }
});

const CONFIG = {
  entry: path.join(PATH.src, 'ReactDrawer.js'),
  externals: {
    'react': 'react'
  },
  devServer: {
    contentBase: PATH.root,
    inline: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: css
            }
          }
        })
      },
      {
        test: /\.scss$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: [{
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: sass
            }
          },{
            loader: 'sass-loader'
          }]
        })
      }
    ]
  },
  plugins: [
    extractCSS
  ]
};

const umd = Object.assign({}, CONFIG, {
  output: {
    libraryTarget: 'umd',
    library: 'ReactDrawer',
    filename: 'react-drawer.js',
    path: PATH.lib
  }
});

const umdMinified = Object.assign({}, umd, {
  output: {
    libraryTarget: 'umd',
    library: 'ReactDrawer',
    filename: 'react-drawer.min.js',
    path: PATH.lib
  },
  plugins: [
    extractCSS,
    uglify
  ]
});

module.exports = [umd, umdMinified];
