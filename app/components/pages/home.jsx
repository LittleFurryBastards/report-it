'use strict';

import React from 'react';
import List from '../ui/lfb-list/index.jsx';

import store from '../../js/store/app.jsx';

export default React.createClass({
  render() {
    return (
      <div>
        Home Page
        <List items={store.getState().categories} />
      </div>
    );
  }
});


store.dispatch({
  type: 'ADD_CATEGORY',
  category: 'Added Category'
});


store.dispatch({
  type: 'ADD_CATEGORY',
  category: 'Second Custom Category'
});
