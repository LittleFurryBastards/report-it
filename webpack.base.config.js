'use strict';

const path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const FOLDER = {
  nodeModules: 'node_modules'
};

module.exports = {
  entry: {
    app: [
      path.join(__dirname, 'app/js/index.jsx')
    ],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: path.join(__dirname, '/build/'),
    publicPath: '/',
    filename: 'js/[name].js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.(es6|jsx)$/,
        exclude: FOLDER.nodeModules,
        loaders: ['react-hot', 'babel']
      },

      // Build inline styles for all components
      {
        test: /\.scss/,
        exclude: [FOLDER.nodeModules, path.join(__dirname, 'app/css')],
        loader: 'style!css?modules&localIdentName=[name]__[local]!postcss!sass'
      },

      // Build main styles
      {
        test: /\.scss$/,
        exclude: [FOLDER.nodeModules, path.join(__dirname, 'app/components')],
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]__[local]!postcss!sass')
      },

      // Load images
      {
        test: /\.(jpe?g|png|gif|svg)/,
        loader: 'url'
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: 'app' }
    ], {
      ignore: ['index.html', 'css/**/**', 'js/**/**', 'components/**/**']
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new Webpack.optimize.OccurenceOrderPlugin()
  ]
};
