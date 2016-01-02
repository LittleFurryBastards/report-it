'use strict';

import React from 'react';

// Styles
import styles from './lfb-header.scss';
require('./theming/lfb-header.scss');

export default React.createClass({
  propTypes: {
    onMenuButtonClick: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <header className={styles.header}>
        <button data-can-toggle-aside="true" onClick={this.props.onMenuButtonClick}>menu</button>
      </header>
    );
  }
});
