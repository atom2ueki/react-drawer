/*!
 * ReactDrawer
 * Version - 1.0.0
 * Licensed under the MIT license
 *
 * Copyright (c) 2016 Tony Li
 */

"use strict";
import './css/animate.css';
import './css/drawer.css';

import React from 'react';
import classNames from 'classnames'

class ReactDrawer extends React.Component {
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

    console.log(this.state.hiddenOverlay);

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
    var overlayClass = classNames('overlay', {
      'animated fadeIn': this.state.showOverlay,
      'animated fadeOut': !this.state.showOverlay,
      'hidden': this.state.hiddenOverlay
    });

    var drawerClass = classNames('drawer', {
      'animated fadeInRight': this.state.showDrawer,
      'animated fadeOutRight': !this.state.showDrawer,
      'hidden': this.state.hiddenDrawer
    });

    return (
      <div>
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

// ReactDrawer.propTypes = {
//   open: React.PropTypes.bool.isRequired,
//   transform: React.PropTypes.number.isRequired
// };
//
// ReactDrawer.defaultProps = {
//   open: false, // default status of the drawer
//   transform: 0 // 0: inital close, 1: from open to close, 2: from close to open
// };

export default ReactDrawer
