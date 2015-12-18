import React from 'react';
import styles from './styles.scss';
import Navigation from '../lfb-navigation/index.jsx';

export default React.createClass({
  getInitialState: function () {
    return {
      isOpen: true
    }
  },
  render: function () {
    let asideClassName = this.state.isOpen ? 'aside aside--open' : 'aside';

    return (
      <main className="lfb-main-layout__wrapper">
        <div className="header">
          <button onClick={this.showAside}>menu</button>
        </div>
        <article className="content">3</article>
        <aside className={asideClassName} onClick={this.hideAside}>
          <Navigation/>
        </aside>
        <footer className="footer">2</footer>
      </main>
    );
  },

  showAside: function (event) {
    this.setState({isOpen: true});
  },

  hideAside: function (event) {
    if (event.target.classList.contains('aside--open')) {
      this.setState({isOpen: false});
    }
  }
});
