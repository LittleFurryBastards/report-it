var Webpack = require('webpack');
var path = require('path');

const PATH = {
  main: path.resolve(__dirname, 'app', 'js', 'main.js'),
  build: path.resolve(__dirname, 'app', 'js'),
  nodeModules: path.resolve(__dirname, 'node_modules')
};

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    PATH.main
  ],
  output: {
    path:     PATH.build,
    publicPath: '/js/', //TODO make this more transparent
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: PATH.nodeModules,
        loader: 'jsx-loader'
      }
    ]
  },

  plugins: [new Webpack.HotModuleReplacementPlugin()]
};
