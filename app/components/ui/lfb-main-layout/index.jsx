'use strict';

import React from 'react';
import {Link} from 'react-router';
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

  componentWillMount(nextState) {
    this._setShowButtonState(nextState);
  },

  componentWillReceiveProps() {
    this._setShowButtonState();
  },

  render() {
    const asideIsVisible = this.state.isAsideVisible ? `${styles.aside}--is-visible` : '',
      overlayIsVisible = this.state.isAsideVisible ? `${styles.overlay}--is-visible` : '';

    return (
      <main className={styles.wrapper}>
        <header className={styles.header}>
          <button onClick={this.toggleAside}>menu</button>
          {this._renderHeaderNavigationLink()}
        </header>

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
      {icon: 'home', rout: '', routLinkText: 'Home'},
      {icon: 'add', rout: 'profile', routLinkText: 'Profile'},
      {icon: 'info', rout: 'about', routLinkText: 'About'},
      {icon: 'info', rout: 'contacts', routLinkText: 'Contact us'},
      {icon: 'info', rout: 'logout', routLinkText: 'Logout'}
    ];
  },

  _getHorizontalNavigationLinks() {
    return [
      {icon: 'home', rout: '', routLinkText: 'Home'},
      {icon: 'map', rout: 'signals', routLinkText: 'Signals'},
      {icon: 'people', rout: 'people', routLinkText: 'People'}
    ];
  },

  _renderHeaderNavigationLink() {
    if (this.state.showBackButton) {
      return (<a href="#" onClick={function (event) {
        event.preventDefault();
        window.history.go(-1);
      }}>Cancel X</a>);
    } else {
      return <Link to={"/issue"}><span>Create Signal</span></Link>;
    }
  },

  _setShowButtonState() {
    if (window.location.pathname.indexOf('issue') === -1) {
      this.setState({showBackButton: false});
    } else {
      this.setState({showBackButton: true});
    }
  }
});
