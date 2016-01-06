module.exports = function (config) {
  config.set({
    browsers: ['Chrome'], // run in Chrome
    singleRun: true, // just run once by default
    frameworks: ['mocha'], // use the mocha test framework
    files: [
      'webpack.test.config.js' // just load this file
    ],
    plugins: ['karma-chrome-launcher', 'karma-mocha',
      'karma-sourcemap-loader', 'karma-webpack', 'karma-coverage',
      'karma-mocha-reporter'
    ],
    preprocessors: {
      'webpack.test.config.js': ['webpack', 'sourcemap'] // preprocess with webpack and our sourcemap loader
    },
    reporters: ['mocha', 'coverage'], // report results in this format
    webpack: { // kind of a copy of your webpack config
      devtool: 'inline-source-map', // just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader'
          }
        ],
        postLoaders: [{ // delays coverage til after tests are run, fixing transpiled source coverage error
          test: /\.jsx?$/,
          exclude: /(__test__|node_modules)\//,
          loader: 'istanbul-instrumenter'
        }]
      }
    },
    webpackServer: {
      noInfo: true // please don't spam the console when running in karma!
    },
    coverageReporter: {
      type: 'html', // produces a html document after code is run
      dir: 'coverage/' // path to created html doc
    }
  });
};
