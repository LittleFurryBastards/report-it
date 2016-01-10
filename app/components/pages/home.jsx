'use strict';

import React from 'react';
import List from '../ui/lfb-list/index.jsx';
import Item from '../ui/lfb-item/index.jsx';

import store from '../../js/store/app.jsx';
import actions from '../../js/store/actions/actions.jsx';

export default React.createClass({
  render() {
    return (
      <div>
        <Item subtext="subtext goes here" text="Main Text" />
        <List
          items={store.getState().get('categories')} />
      </div>
    );
  }
});

store.dispatch(actions.addCategory('Added Category'));
store.dispatch(actions.addCategory('Second Custom Category'));
