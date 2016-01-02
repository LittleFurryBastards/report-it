'use strict';

const Webpack = require('webpack');
const StatsPlugin = require('stats-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./webpack.base.config');

const config = Object.assign({}, baseConfig);

config.plugins.push(
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
  }),
  new Webpack.optimize.CommonsChunkPlugin('vendor', 'js/[name].min-[hash].js'),
  new ExtractTextPlugin('css/[name].min-[hash].css')
);

config.module.postcss = function () {
  return [
    require('autoprefixer')({browsers: ['last 4 version']})
  ];
};

config.output.filename = 'js/[name].min-[hash].js';

module.exports = config;
