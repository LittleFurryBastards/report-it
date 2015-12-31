'use strict';

import React from 'react';
import {Link} from 'react-router';

require('./lfb-navigation.scss');

export default React.createClass({
  render() {
    return (
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    );
  }
});
