'use strict';

import React from 'react';
require('./styles.scss');

export default React.createClass({
  render() {
    return (
      <nav className="navigation">
        <ul>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
        </ul>
      </nav>
    );
  }
});
