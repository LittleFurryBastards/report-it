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
      items: [{home: 'Home'}, {profile: 'Profile'}, {about: 'About'}, {contacts: 'Contact us'}, {logout: 'Logout'}]
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
          const rout = Object.keys(item)[0],
            routLinkText = item[rout];
          let link;

          if (rout === 'home') {
            link = <li key={rout}><Link to={`/`}>{routLinkText}</Link></li>;
          } else {
            link = <li key={rout}><Link to={`/${rout}`}>{routLinkText}</Link></li>;
          }

          return link;
        })}
      </ul>
    );
  }
});
