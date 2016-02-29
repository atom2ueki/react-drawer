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
      open: this.props.open,
      hiddenOverlay: true,
      hiddenDrawer: true
    };
    this.handleOperation = this.handleOperation.bind(this);
  }

  handleOperation() {
    this.setState({
      hiddenOverlay: false,
      hiddenDrawer: false
    });

    this.setState({
      open: !this.state.open
    });
  }

  componentWillUnmount() {

  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.open != this.state.open) {
      this.handleOperation();
      this.setState({open: nextProps.open});
    }else {
      this.handleOperation();
    }
  }

  render() {
    var overlayClass = classNames('overlay', {
      'animated fadeIn': this.state.open,
      'animated fadeOut': !this.state.open,
      'hidden': this.state.hiddenOverlay
    });

    var drawerClass = classNames('drawer', {
      'animated fadeInRight': this.state.open,
      'animated fadeOutRight': !this.state.open,
      'hidden': this.state.hiddenDrawer
    });

    return (
      <div>
        <div id="overlay" className={overlayClass} onClick={this.handleOperation}></div>
        <div className={drawerClass}>
          {this.props.children}
        </div>
      </div>
    );
  }

  componentDidMount () {
    document.getElementById("overlay").addEventListener("webkitAnimationEnd", ()=>{
      if(!this.state.open) {
        this.setState({hiddenOverlay: true});
      }
    });
  }
}

ReactDrawer.propTypes = {
  open: React.PropTypes.bool.isRequired
};

// ReactDrawer.defaultProps = {
//   open: false, // default status of the drawer
//   transform: 0 // 0: inital close, 1: from open to close, 2: from close to open
// };

export default ReactDrawer
