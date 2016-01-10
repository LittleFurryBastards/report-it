"use strict";

import React from 'react';

// Styles
import styles from './lfb-icon.scss';
require('./theming/lfb-icon.scss');

export default React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired,
    className: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      className: ''
    };
  },
  render() {
    return <img className={`${styles.icon} ${this.props.className}`} src={require(`./svg/${this.props.type}.svg`)}/>;
  }
});
