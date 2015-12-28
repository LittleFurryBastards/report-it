'use strict';

import React from 'react';
require('./styles.scss');

export default React.createClass({
  render: function() {
    const items = ['Pothole', 'Broken lights', 'Trash'];

    return (
      <div className="lfb-list">
        <header>
          <input type="search" placeholder="filter ..."/>
        </header>
        <ul>
          {items.map(function (item) {
            return <li key={ item }>{ item }</li>;
          })}
        </ul>
      </div>
    );
  }
});
