'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/ui/lfb-main-layout/index.jsx';

// Create separated .css file
require('../css/main.scss');

ReactDOM.render(
  <Layout/>,
  document.getElementById('app')
);
