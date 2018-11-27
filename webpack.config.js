'use strict';

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client.jsx',
  output: {
    path: path.resolve( __dirname, 'build' ),
    filename: 'bundle.js'
  },
  performance: {
    hints: 'warning'
  },
  devtool: 'source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};