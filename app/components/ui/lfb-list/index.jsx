"use strict";

import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

// Styles
import styles from './lfb-list.scss';
require('./theming/lfb-list.scss');

export default React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },
  mixins: [LinkedStateMixin],
  getDefaultProps() {
    return {
      items: []
    };
  },
  getInitialState() {
    return {
      filterText: ''
    };
  },
  render() {
    return (
      <div>
        <header className={styles.header}>
          <input
            className={styles.filterInput}
            placeholder="filter"
            valueLink={this.linkState('filterText')}/>
        </header>
        {this.renderItems()}
      </div>
    );
  },
  renderItems() {
    if (!this.state) {
      return (<ul />);
    }

    const filterText = this.state.filterText.trim().toLowerCase(),
      filteredItems = this.props.items.filter((item) => {
        return item.toLowerCase().indexOf(filterText) !== -1;
      });

    return (
      <ul className={styles.list}>
        {filteredItems.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    );
  },
  handleFilterChange() {
    this.render();
  }
});
