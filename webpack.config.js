'use strict';

const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const config = Object.assign({}, baseConfig);

config.entry.app.unshift('webpack-hot-middleware/client?reload=true');

config.plugins.push(
  new Webpack.HotModuleReplacementPlugin(),
  new Webpack.optimize.CommonsChunkPlugin('vendor', 'js/[name].js'),
  new Webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
  new ExtractTextPlugin('css/[name].css')
);

module.exports = config;
