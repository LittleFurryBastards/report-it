'use strict';

import ReactDOM from 'react-dom';
import routes from './routes.jsx';

// Create separated .css file
require('../css/main.scss');

ReactDOM.render(
  routes,
  document.getElementById('app')
);
