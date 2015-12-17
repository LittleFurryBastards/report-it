var Webpack = require('webpack');
var path = require('path');

const PATH = {
  app: path.resolve(__dirname, 'app', 'js', 'index.jsx'),
  build: path.resolve(__dirname, 'build'),
  assets: path.resolve(__dirname, 'build', 'assets', 'js'),
  nodeModules: path.resolve(__dirname, 'node_modules')
};

module.exports = {

  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    PATH.app
  ],

  output: {
    path: PATH.assets,
    publicPath: '/assets/js/',
    filename: 'bundle.js'
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
        test: /\.scss$/,
        exclude: PATH.nodeModules,
        loader: 'style!css!sass'
      }
    ]
  },

  plugins: [new Webpack.HotModuleReplacementPlugin()]
};
