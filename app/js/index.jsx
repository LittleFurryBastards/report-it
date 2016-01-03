'use strict';

import ReactDOM from 'react-dom';
import routes from './routes.jsx';
import store from './store/app.jsx';

// Create separated .css file
require('../css/main.scss');

const render = () => {
  ReactDOM.render(
    routes,
    document.getElementById('app')
  );
};

store.subscribe(() => {
  render();
});

render();
