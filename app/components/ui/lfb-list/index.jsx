"use strict";

import React from 'react';

// Styles
import styles from './lfb-list.scss';
require('./theming/lfb-list.scss');

export default React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },
  getDefaultProps() {
    return {
      items: ['Huskey', 'Richback', 'Labrador', 'Corgie', 'Mastiff']
    };
  },
  render() {
    return (
      <div>
        <header className={styles.header}>
          <input className={styles.filterInput} ref="input"/>
        </header>
        {this.renderItems()}
      </div>
    );
  },
  renderItems() {
    return (
      <ul className={styles.list}>
        {this.props.items.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    );
  }
});
