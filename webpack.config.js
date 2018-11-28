'use strict';

const SassPlugin = require('sass-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client.jsx',
  plugins: [
    new SassPlugin('theme/styles/global.scss')
  ],
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
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'sass-loader',
          'css-loader'
        ]
      }
    ]
  }
};