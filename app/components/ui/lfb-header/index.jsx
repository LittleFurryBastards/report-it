'use strict';

import React from 'react';
require('./styles.scss');

export default React.createClass({
  propTypes: {
    onMenuClick: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <header className="lfb-header">
        <button onClick={this.props.onMenuClick}>menu</button>
      </header>
    );
  }
});
