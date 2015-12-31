'use strict';

const path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const stylelintConfig = require('./stylelintrc.json');

const FOLDER = {
  assets: 'assets',
  build: 'build',
  components: 'components',
  javascript: 'js',
  nodeModules: 'node_modules',
  source: 'app',
  styles: 'css',
  vendor: 'vendor'
};

const PATH = {
  assets: path.resolve(__dirname, FOLDER.build, FOLDER.assets),
  components: path.resolve(__dirname, FOLDER.source, FOLDER.components),
  entry: path.resolve(__dirname, FOLDER.source, FOLDER.javascript, 'index.jsx'),
  styles: path.resolve(__dirname, FOLDER.source, FOLDER.styles)
};

module.exports = {

  entry: {
    app: [
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      PATH.entry
    ],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: PATH.assets,
    publicPath: FOLDER.assets,
    filename: FOLDER.javascript + '/bundle.js'
  },

  devServer: {
    contentBase: FOLDER.build
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {

    preLoaders: [
      {
        test: /\.(es6|jsx)$/,
        loaders: ['eslint'],
        exclude: FOLDER.nodeModules
      }
    ],

    loaders: [
      {
        test: /\.(es6|jsx)$/,
        exclude: FOLDER.nodeModules,
        loaders: ['react-hot', 'babel']
      },

      // Build inline styles for all components
      {
        test: /\.scss/,
        exclude: [FOLDER.nodeModules, PATH.styles],
        loader: 'style!css?modules&localIdentName=[name]__[local]!postcss!sass'
      },

      // Build main styles
      {
        test: /\.scss$/,
        exclude: [FOLDER.nodeModules, PATH.components],
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]__[local]!postcss!sass')
      }
    ]
  },

  postcss: function () {
    return [
      require('stylelint')(stylelintConfig),
      require('autoprefixer')({browsers: ['last 4 version']})
    ];
  },

  plugins: [
    new Webpack.optimize.CommonsChunkPlugin('vendor', FOLDER.javascript + '/' + FOLDER.vendor + '/bundle.js'),
    new ExtractTextPlugin(FOLDER.styles + '/styles.css')
  ]
};
