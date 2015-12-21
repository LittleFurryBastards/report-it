'use strict';

import React from 'react';
import Header from '../lfb-header/index.jsx';
import Navigation from '../lfb-navigation/index.jsx';
import List from '../lfb-filtered-list/index.jsx';
require('./styles.scss');

export default React.createClass({
  getInitialState: function () {
    return {
      isOpen: false
    };
  },
  render: function () {
    let asideClassName = 'aside ';

    asideClassName += this.state.isOpen ? 'aside--open' : '';

    return (
      <main className="lfb-main-layout__wrapper">
        <Header onMenuClick={this.toggleMenu}/>

        <article className="content">
          <List />
        </article>

        <aside className={asideClassName} onClick={this.toggleMenu}>
          <Navigation/>
        </aside>

        <footer className="footer">2</footer>
      </main>
    );
  },

  toggleMenu: function () {
    this.setState({isOpen: !this.state.isOpen});
  }
});
