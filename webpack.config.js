var Webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATH = {
  app: path.resolve(__dirname, 'app', 'js', 'index.jsx'),
  build: path.resolve(__dirname, 'build'),
  assets: path.resolve(__dirname, 'build', 'assets'),
  nodeModules: path.resolve(__dirname, 'node_modules')
};

module.exports = {

  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
      PATH.app
    ],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: PATH.assets,
    publicPath: '/assets/',
    filename: '/js/bundle.js'
  },

  devServer: {
    contentBase: PATH.build
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.(es6|jsx)$/,
        exclude: PATH.nodeModules,
        loader: 'babel',
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.css/,
        exclude: PATH.nodeModules,
        loader: 'style!css!autoprefixer-loader?browsers=last 2 versions!sass'
      },
      {
        test: /\.scss$/,
        exclude: PATH.nodeModules,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer-loader?browsers=last 2 versions!sass')
      }
    ]
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor/bundle.js'),
    new ExtractTextPlugin('css/styles.css')
  ]
};
