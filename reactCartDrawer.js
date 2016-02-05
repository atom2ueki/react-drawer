/**
 * This is a thrid party component created by Tony Li
 *
 * all right reserved by @author Tony Li
 *
 */

// click outside panel -- how to do
// http://stackoverflow.com/questions/23821768/listen-for-click-events-that-are-outside-of-a-component

"use strict";
import './animate.css';
import './cart-drawer.css';

import React from 'react'

class CartDrawer extends React.Component {
  constructor() {
    super();
    this.state = {
      showPanel: false,
      open: false, // status of the drawer
      transform: 0, // 0: inital close, 1: from open to close, 2: from close to open
      drawerClass: 'drawer',
      showOverlay: false
    };
    this.handleOperation = this.handleOperation.bind(this);
  }

  handleOperation() {
    this.setState({showPanel: true});
    if (this.state.transform == 0 || this.state.transform == 1) {
      this.setState({
        transform: 2,
        drawerClass: 'drawer animated bounceInRight',
        showOverlay: true
      });
      console.log("trigger from close to open");
    }else {
      this.setState({
        transform: 1,
        drawerClass: 'drawer animated fadeOutRight',
        showOverlay: false
      });
      console.log("trigger from open to close");
    }
    if (this.state.open == true) {
      this.setState({open: false});
      console.log("panel status changed to close");
    }else {
      this.setState({open: true});
      console.log("panel status changed to open");
    }
  }

  componentWillUnmount () {

  }

  componentWillReceiveProps(nextProps){
    // var drawerClass = this.state.transform == 0 ? 'drawer' :
    //   this.state.transform == 1 && this.state.open ? 'drawer animated fadeOutRight' :
    //   'drawer animated bounceInRight';
  }

  render() {
    return (
      <div>
        { this.state.showOverlay? <div className="overlay"></div> : null }
        <div className="button" onClick={this.handleOperation}>test test test</div>
        { this.state.showPanel?
          <div className={this.state.drawerClass}>
            <i onClick={this.handleOperation} className="icono-cross"></i>
            {this.props.children}
          </div> : null }
      </div>
    );
  }

  componentDidMount () {

  }
}

// CartDrawer.propTypes = {
//   open: React.PropTypes.bool.isRequired,
//   transform: React.PropTypes.number.isRequired
// };

// CartDrawer.defaultProps = {
//   open: false, // default status of the drawer
//   transform: 0 // 0: inital close, 1: from open to close, 2: from close to open
// };

export default CartDrawer
