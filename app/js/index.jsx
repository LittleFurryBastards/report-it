var React = require('react');
var ReactDOM = require('react-dom');
var Layout = require('./components/Layout.jsx');

require('../css/main.scss');

ReactDOM.render(
  <Layout/>,
  document.getElementById('app')
);
