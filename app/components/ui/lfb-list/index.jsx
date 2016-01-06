"use strict";

import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ImmutablePropTypes from 'react-immutable-proptypes';

// Styles
import styles from './lfb-list.scss';
require('./theming/lfb-list.scss');

export default React.createClass({
  propTypes: {
    items: ImmutablePropTypes.list
  },
  mixins: [LinkedStateMixin, PureRenderMixin],
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
  }
});
