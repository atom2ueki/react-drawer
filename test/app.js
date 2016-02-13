/**
 * This is a thrid party component created by Tony Li
 *
 * all right reserved by @author Tony Li
 *
 */
"use strict";
import './app.css'

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDrawer from 'react-drawer';
// import ReactDrawer from '../src/ReactDrawer';
// var ReactDrawerComponent = ReactDrawer(React);

class Main extends React.Component {
  constructor() {
    super();
    this.manpulate = this.manpulate.bind(this);
  }

  render() {
    return (
      <div>
        <div className="button" onClick={this.manpulate}>this is a button</div>
        <ReactDrawer ref='Drawer'>
          <h2>djoisajdioas</h2>
        </ReactDrawer>
      </div>
    )
  }

  manpulate() {
    this.refs.Drawer.handleOperation()
  }
};

ReactDOM.render(<Main />, document.getElementById('app'));
