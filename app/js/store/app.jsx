'use strict';

import * as Redux from 'redux';
import reducer from './reducers/app.jsx';

const store = Redux.createStore(reducer);

export default store;

