"use strict";

import React from 'react';

// Styles
import styles from './lfb-icon.scss';
require('./theming/lfb-icon.scss');

export default React.createClass({
  propTypes: {
    type: React.PropTypes.string,
    className: React.PropTypes.string
  },
  render() {
    const iconClassName = styles.icon + ' ' + this.props.className || '';

    return <img className={iconClassName} src={require(`./svg/${this.props.type}.svg`)}/>;
  }
});
