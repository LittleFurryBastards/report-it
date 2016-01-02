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
    const asideIsVisible = this.state.isAsideVisible && `${styles.aside}--isVisible`,
      overlayIsVisible = this.state.isAsideVisible && `${styles.overlay}--isVisible`;

    return (
      <main className={styles.wrapper}>
        <Header onMenuButtonClick={this.toggleAside}/>

        <article className={styles.content}>{this.props.children}</article>

        <aside className={`${styles.aside} ${asideIsVisible}`}>
          <Navigation onNavigationItemClick={this.toggleAside}/>
        </aside>

        <footer className={styles.footer}>Footer</footer>

        <div className={`${styles.overlay} ${overlayIsVisible}`} onClick={this.toggleAside}></div>
      </main>
    );
  },

  toggleAside() {
    this.setState({isAsideVisible: !this.state.isAsideVisible});
  }
});
