import React from 'react';
import styles from './styles.scss';

export default React.createClass({
  render: function () {
    return (
      <header className="lfb-header">
        <button onClick={this.props.onMenuClick}>menu</button>
      </header>
    );
  }
});
