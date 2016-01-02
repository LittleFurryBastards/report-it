'use strict';

const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const stylelintConfig = require('./stylelintrc.json');
const baseConfig = require('./webpack.base.config');

const config = Object.assign({}, baseConfig);

config.entry.app.unshift('webpack-hot-middleware/client?reload=true');

config.module.preLoaders = [{
  test: /\.(es6|jsx)$/,
  loaders: ['eslint'],
  exclude: 'node_modules'
}];

config.module.postcss = function () {
  return [
    require('stylelint')(stylelintConfig),
    require('autoprefixer')({browsers: ['last 4 version']})
  ];
};

config.plugins.push(
  new Webpack.HotModuleReplacementPlugin(),
  new Webpack.optimize.CommonsChunkPlugin('vendor', 'js/[name].js'),
  new Webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),
  new ExtractTextPlugin('css/[name].css')
);

module.exports = config;
