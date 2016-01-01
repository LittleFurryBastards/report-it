'use strict';

const path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const stylelintConfig = require('./stylelintrc.json');
const StatsPlugin = require('stats-webpack-plugin');
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
    filename: 'js/[name].min-[hash].js'
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
        loaders: ['babel']
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
    new CopyWebpackPlugin([
      { from: 'app' }
    ], {
      ignore: ['*.html', 'css/*', 'js/*', 'components/**/**']
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new Webpack.optimize.CommonsChunkPlugin('vendor', 'js/[name].min-[hash].js'),
    new ExtractTextPlugin('css/[name].min-[hash].css'),
    new Webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
