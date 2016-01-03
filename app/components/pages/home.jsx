'use strict';

import React from 'react';
import List from '../ui/lfb-list/index.jsx';

import store from '../../js/store/app.jsx';
import actions from '../../js/store/actions/actions.jsx';

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

store.dispatch(actions.addCategory('Added Category'));
store.dispatch(actions.addCategory('Second Custom Category'));
