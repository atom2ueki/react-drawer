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
import DrawerReact from './DrawerReact'

class Main extends DrawerReact {
  render() {
    return (
      <div>
        <div className="button" onClick={this.handleOperation}>this is a button</div>
        <DrawerReact>
          <h2>djoisajdioas</h2>
        </DrawerReact>
      </div>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('app'));
