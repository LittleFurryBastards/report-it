'use strict';

import React from 'react';

// Styles
import styles from './lfb-header.scss';
require('./theming/lfb-header.scss');

export default React.createClass({
  propTypes: {
    onMenuClick: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <header className={styles.header}>
        <button onClick={this.props.onMenuClick}>menu</button>
      </header>
    );
  }
});
