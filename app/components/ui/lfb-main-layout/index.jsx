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
      isOpen: false
    };
  },

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  },

  render() {
    const openStyle = this.state.isOpen && `${styles.aside}--open`;

    return (
      <main className={styles.wrapper}>
        <Header onMenuClick={this.toggleMenu}/>

        <article className={styles.content}>{this.props.children}</article>

        <aside className={`${styles.aside} ${openStyle}`} onClick={this.toggleMenu}>
          <Navigation/>
        </aside>

        <footer className={styles.footer}>Footer</footer>
      </main>
    );
  }
});
