const path = require('path');
const webpack = require('webpack');

const PATH = {
  example: path.join(__dirname, './example')
};

const example = {
  entry: path.join(PATH.example, 'app.js'),
  output: {
    filename: 'bundle.js',
    path: PATH.example
  },
  externals: {
    'react': 'react',
    'react-dom': 'ReactDOM',
    'react-drawer': 'ReactDrawer'
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
      }
    ]
  }
};

module.exports = [example];