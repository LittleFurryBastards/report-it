'use strict';

import React from 'react';
import createHashHistory from 'history/lib/createHashHistory';
import {Router, Route, IndexRoute} from 'react-router';

import Layout from '../components/ui/lfb-main-layout/index.jsx';
import Home from '../components/pages/home.jsx';
import About from '../components/pages/about.jsx';

const history = createHashHistory({
  queryKey: false
});

export default (
  <Router history={history}>
    <Route component={Layout} path="/">
      <IndexRoute component={Home} />
      <Route component={About} path="/about" />
    </Route>
  </Router>
);
