'use strict';

import React from 'react';
import {Link} from 'react-router';

// Styles
import styles from './lfb-navigation.scss';
require('./theming/lfb-navigation.scss');

export default React.createClass({
  propTypes: {
    onNavigationItemClick: React.PropTypes.func.isRequired
  },

  render() {
    return (
      <nav className={styles.navigation}>
        <ul onClick={this.props.onNavigationItemClick}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    );
  }
});
