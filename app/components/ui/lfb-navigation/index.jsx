'use strict';

import React from 'react';
import {Link} from 'react-router';

// Styles
import styles from './lfb-navigation.scss';
require('./theming/lfb-navigation.scss');

export default React.createClass({

  propTypes: {
    isVertical: React.PropTypes.bool.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onNavigationItemClick: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      isVertical: true
    };
  },


  render() {
    let navigationStyle;

    if (this.props.isVertical === true) {
      navigationStyle = `${styles.navigation}--is-vertical`;
    } else {
      navigationStyle = `${styles.navigation}--is-horizontal`;
    }

    return (
      <nav className={`${styles.navigation} ${navigationStyle}`}>
        {this.renderItems()}
      </nav>
    );
  },

  renderItems() {
    return (
      <ul onClick={this.props.onNavigationItemClick}>
        {this.props.items.map((item) => {
          const {rout, icon, routLinkText} = item;

          return (
            <li key={rout}>
              <Link to={`/${rout}`}>
                <img className={styles.icon} src={require(`./svg/${icon}.svg`)}/>
                <span>{routLinkText}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
});
