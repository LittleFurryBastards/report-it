import React from 'react';
import styles from './styles.scss';

export default React.createClass({
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
