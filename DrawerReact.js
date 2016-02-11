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
import classNames from 'classnames'

export default class DrawerReact extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.state = {
      hiddenOverlay: true,
      hiddenDrawer: true,
      showDrawer: false,
      showOverlay: false
    };
    this.handleOperation = this.handleOperation.bind(this);
  }

  handleOperation() {
    this.setState({
      hiddenOverlay: false,
      hiddenDrawer: false
    });
    if (!this.state.showDrawer) {
      this.setState({
        showDrawer: true,
        showOverlay: true
      });
      console.log("trigger from close to open");
    }else {
      this.setState({
        showDrawer: false,
        showOverlay: false
      });
      console.log("trigger from open to close");
    }
  }

  componentWillUnmount () {

  }

  componentWillReceiveProps(nextProps){

  }

  render() {
    var overlayClass = classNames({
      'overlay': true,
      'hidden': this.state.hiddenOverlay,
      'animated fadeIn': this.state.showOverlay,
      'animated fadeOut': !this.state.showOverlay
    });
    var drawerClass = classNames({
      'drawer': true,
      'hidden': this.state.hiddenDrawer,
      'animated fadeInRight': this.state.showDrawer,
      'animated fadeOutRight': !this.state.showDrawer
    });
    return (
      <div>
        // <div className="button" onClick={this.handleOperation}>this is a button</div>
        <div id="overlay" className={overlayClass} onClick={this.handleOperation}></div>
        <div className={drawerClass}>
          <i onClick={this.handleOperation} className="icono-cross"></i>
          {this.props.children}
        </div>
      </div>
    );
  }

  componentDidMount () {
    document.getElementById("overlay").addEventListener("webkitAnimationEnd", ()=>{
      if(!this.state.showOverlay) {
        this.setState({hiddenOverlay: true});
      }
    });
  }
}

// class Drawer extends React.Component {
//
// }

// CartDrawer.propTypes = {
//   open: React.PropTypes.bool.isRequired,
//   transform: React.PropTypes.number.isRequired
// };

// CartDrawer.defaultProps = {
//   open: false, // default status of the drawer
//   transform: 0 // 0: inital close, 1: from open to close, 2: from close to open
// };

// export default Drawer
// export {Drawer, handleOperation as Operation}
