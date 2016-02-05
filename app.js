/**
 * This is a thrid party component created by Tony Li
 *
 * all right reserved by @author Tony Li
 *
 */
"use strict";

import React from 'react'
import ReactDOM from 'react-dom'
import CartDrawer from './reactCartDrawer'

class Main extends React.Component {
  render() {
    return (
      <CartDrawer>
        <h2>djoisajdioas</h2>
      </CartDrawer>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('app'));
