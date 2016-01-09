"use strict";

import React from 'react';
import Icon from '../lfb-icon/index.jsx';

// Styles
import styles from './lfb-item.scss';
require('./theming/lfb-item.scss');

export default React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    subtext: React.PropTypes.string
  },
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.textWrapper}>
          <Icon className={styles.icon} type="plus32" />
          <span className={styles.text}>{this.props.text}</span>
        </div>
        <div className={styles.subtextWrapper}>
          <Icon className={styles.subIcon} type="plus32" />
          <span className={styles.text}>{this.props.subtext}</span>
        </div>
      </div>
    );
  }
});
