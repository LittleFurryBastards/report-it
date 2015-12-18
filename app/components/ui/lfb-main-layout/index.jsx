import React from 'react';
import styles from './styles.scss';

let Navigation = React.createClass({
  render: function () {
    return (
      <nav className="navigation">
        <ul>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
        </ul>
      </nav>
    );
  }
});

let Layout = React.createClass({
  getInitialState: function () {
    return {
      isOpen: true
    }
  },
  render: function () {
    var asideClassName = this.state.isOpen ? 'aside aside--open' : 'aside';

    return (
      <main className="wrapper">
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

export default Layout;
