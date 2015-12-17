const path = require('path');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const FOLDER = {
  assets: 'assets',
  build: 'build',
  javascript: 'js',
  nodeModules: 'node_modules',
  source: 'app',
  styles: 'css',
  vendor: 'vendor'
};

const PATH = {
  entry: path.resolve(__dirname, FOLDER.source, FOLDER.javascript, 'index.jsx'),
  assets: path.resolve(__dirname, FOLDER.build, FOLDER.assets)
};

module.exports = {

  entry: {
    app: [
      'webpack/hot/dev-server',
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
    loaders: [
      {
        test: /\.(es6|jsx)$/,
        exclude: FOLDER.nodeModules,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css/,
        exclude: FOLDER.nodeModules,
        loader: 'style!css!autoprefixer-loader?browsers=last 2 versions!sass'
      },
      {
        test: /\.scss$/,
        exclude: FOLDER.nodeModules,
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer-loader?browsers=last 2 versions!sass')
      }
    ]
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.optimize.CommonsChunkPlugin('vendor', FOLDER.javascript + '/' + FOLDER.vendor + '/bundle.js'),
    new ExtractTextPlugin(FOLDER.styles + '/styles.css')
  ]
};
