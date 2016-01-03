'use strict';

import React from 'react';
import {Link} from 'react-router';

// Styles
import styles from './lfb-navigation.scss';
require('./theming/lfb-navigation.scss');

export default React.createClass({

  propTypes: {
    isHorizontal: React.PropTypes.bool.isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onNavigationItemClick: React.PropTypes.func.isRequired
  },

  getDefaultProps() {
    return {
      isHorizontal: false,
      items: [
        {icon: 'plus32', rout: '', routLinkText: 'Home'},
        {icon: 'plus32', rout: 'profile', routLinkText: 'Profile'},
        {icon: 'plus32', rout: 'about', routLinkText: 'About'},
        {icon: 'plus32', rout: 'contacts', routLinkText: 'Contact us'},
        {icon: 'plus32', rout: 'logout', routLinkText: 'Logout'}
      ]
    };
  },


  render() {
    const navigationStyle = this.props.isHorizontal ? `${styles.navigation}--is-horizontal}` : '';

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
          return (
            <li key={item.rout}>
              <Link to={`/${item.rout}`}>
                <img className={styles.icon} src={require(`./svg/${item.icon}.svg`)}/>
                <span>{item.routLinkText}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
});
