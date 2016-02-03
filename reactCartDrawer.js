/**
 * This is a thrid party component created by Tony Li
 *
 * all right reserved by @author Tony Li
 *
 */
"use strict";
import './animate.css';
import './cart-drawer.css';

import React from 'react'

class CartDrawer extends React.Component {
  constructor() {
    suprt();
  }

  handleOperation() {
    if (this.state.transform == 0 || 1) {
      this.setState({transform: 2});
    }else {
      this.setState({transform: 1});
    }
    if (this.state.open == true) {
      this.setState({open: false});
    }else {
      this.setState({open: true});
    }
  }

  render() {
    return (
      <div>
        {this.state.transform == 0 ?
        <div className="drawer" style={{display: 'none'}}><h2>test word</h2></div>:
        this.state.transform == 1 && this.state.open ?
        <div className="drawer animated fadeOutRight"><h2>test word</h2></div>:
        <div className="drawer animated bounceInRight"><h2>test word</h2></div>}
      </div>
    )
  }
}

CartDrawer.propTypes = {
  open: React.PropTypes.bool.isRequired,
  transform: React.PropTypes.number.isRequired
};

CartDrawer.defaultProps = {
  open: false, // default status of the drawer
  transform: 0 // 0: inital close, 1: from open to close, 2: from close to open
};

export default CartDrawer
