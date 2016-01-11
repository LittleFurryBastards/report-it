'use strict';

import React from 'react';

// Styles
import styles from './lfb-icon.scss';
require('./theming/lfb-icon.scss');

export default React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      className: ''
    };
  },

  render() {
    const iconIsClickable = this.props.onClick ? `${styles.icon}--is-clickable` : '';

    return (<img
      className={`${styles.icon} ${this.props.className} ${iconIsClickable}`}
      onClick={this.props.onClick}
      src={require(`./svg/${this.props.type}.svg`)}/>);
  }
});
