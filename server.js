import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';

/* eslint-disable no-process-env */
const isDeveloping = process.env.NODE_ENV !== 'production',
  port = isDeveloping ? 8080 : process.env.PORT,
  app = express();

/* eslint-enable no-process-env */

if (isDeveloping) {
  const compiler = webpack(config),
    middleware = webpackMiddleware(compiler, {
      publicPath: config.output.publicPath,
      contentBase: 'build',
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  /* eslint-disable no-sync */
  app.get('*', (req, res) => {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')));
    res.end();
  });

  /* eslint-enable no-sync*/
} else {
  app.use(express.static(path.join(__dirname, '/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
  });
}

/* eslint-disable no-console */
app.listen(port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }

  console.info('Open up http://localhost:%s/ in your browser.', port);
});

/* eslint-enable no-console */
