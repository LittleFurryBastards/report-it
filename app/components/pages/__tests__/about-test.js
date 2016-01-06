// A sample test

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import About from '../about.jsx';

describe('ShallowRenderTest', () => {
  it('render div with about text', () => {
    const aboutDiv = TestUtils.renderIntoDocument(<About />),
      aboutDivNode = ReactDOM.findDOMNode(aboutDiv);

    expect(aboutDivNode.textContent).toEqual('About Page');
  });
});
