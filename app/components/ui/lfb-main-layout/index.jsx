'use strict';

import React from 'react';
import Header from '../lfb-header/index.jsx';
import Navigation from '../lfb-navigation/index.jsx';
require('./styles.scss');

export default React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },

  getInitialState() {
    return {
      isOpen: true
    };
  },

  render() {
    let asideClassName = 'aside ';

    asideClassName += this.state.isOpen ? 'aside--open' : '';

    return (
      <main className="lfb-main-layout__wrapper">
        <Header onMenuClick={this.toggleMenu}/>

        <article className="content">{this.props.children}</article>

        <aside className={asideClassName} onClick={this.toggleMenu}>
          <Navigation/>
        </aside>

        <footer className="footer">Footer</footer>
      </main>
    );
  },

  toggleMenu() {
    this.setState({isOpen: !this.state.isOpen});
  }
});
