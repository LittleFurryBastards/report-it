'use strict';

import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Router, Route, IndexRoute} from 'react-router';

import Layout from '../components/ui/lfb-main-layout/index.jsx';
import Home from '../components/pages/home.jsx';
import About from '../components/pages/about.jsx';
import Contacts from '../components/pages/contacts.jsx';
import Logout from '../components/pages/logout.jsx';
import Profile from '../components/pages/profile.jsx';
import NotFound from '../components/pages/notFound.jsx';

export default (
  <Router history={createBrowserHistory()}>
    <Route component={Layout} path="/">
      <IndexRoute component={Home} />
      <Route component={About} path="/about" />
      <Route component={Contacts} path="/contacts" />
      <Route component={Logout} path="/logout" />
      <Route component={Profile} path="/profile" />
      <Route component={NotFound} path="*" />
    </Route>
  </Router>
);
