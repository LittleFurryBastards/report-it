'use strict';

import React from 'react';
import Header from '../lfb-header/index.jsx';
import Navigation from '../lfb-navigation/index.jsx';

// Styles
import styles from './lfb-main-layout.scss';
require('./theming/lfb-main-layout.scss');

export default React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },

  getInitialState() {
    return {
      isAsideVisible: false
    };
  },

  render() {
    const asideIsVisible = this.state.isAsideVisible ? `${styles.aside}--is-visible` : '',
      overlayIsVisible = this.state.isAsideVisible ? `${styles.overlay}--is-visible` : '';

    return (
      <main className={styles.wrapper}>
        <Header onMenuButtonClick={this.toggleAside}/>

        <article className={styles.content}>{this.props.children}</article>

        <aside className={`${styles.aside} ${asideIsVisible}`}>
          <Navigation items={this._getVerticalNavigationLinks()} onNavigationItemClick={this.toggleAside}/>
        </aside>

        <footer className={styles.footer}>
          <Navigation isVertical={false} items={this._getHorizontalNavigationLinks()}/>
        </footer>

        <div className={`${styles.overlay} ${overlayIsVisible}`} onClick={this.toggleAside}></div>
      </main>
    );
  },

  toggleAside() {
    this.setState({isAsideVisible: !this.state.isAsideVisible});
  },

  _getVerticalNavigationLinks() {
    return [
      {icon: 'plus32', rout: '', routLinkText: 'Home'},
      {icon: 'plus32', rout: 'profile', routLinkText: 'Profile'},
      {icon: 'plus32', rout: 'about', routLinkText: 'About'},
      {icon: 'plus32', rout: 'contacts', routLinkText: 'Contact us'},
      {icon: 'plus32', rout: 'logout', routLinkText: 'Logout'}
    ];
  },

  _getHorizontalNavigationLinks() {
    return [
      {icon: 'plus32', rout: '', routLinkText: 'Home'},
      {icon: 'plus32', rout: 'profile', routLinkText: 'Profile'},
      {icon: 'plus32', rout: 'logout', routLinkText: 'Logout'}
    ];
  }
});
