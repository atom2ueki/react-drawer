/*!
 * ReactDrawer
 * Licensed under the MIT license
 *
 * Copyright (c) 2016 Tony Li
 */

import theme from './ReactDrawer.scss';
import 'animate.css';
import React from 'react';
import classNames from 'classnames';

class ReactDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.onAnimationEnded = this.onAnimationEnded.bind(this);
  }

  onAnimationEnded() {
    if (!this.state.open) {
      this.setState({hiddenOverlay: true});
    }
  }

  componentWillMount() {
    this.state = {
      open: this.props.open,
      hiddenOverlay: true,
      hiddenDrawer: true
    };
  }

  toggleDrawer() {
    this.setState({
      hiddenOverlay: false,
      hiddenDrawer: false
    });

    this.setState({
      open: !this.state.open
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open != this.state.open) {
      this.toggleDrawer();
      this.setState({open: nextProps.open});
    } else {
      this.toggleDrawer();
    }
  }

  componentDidMount () {
    this.overlay.addEventListener('webkitAnimationEnd', this.onAnimationEnded);
  }

  componentWillUnmount() {
    this.overlay.removeEventListener('webkitAnimationEnd', this.onAnimationEnded);
  }

  render() {
    var overlayClass = classNames(theme.overlay, 'animated', {
      'fadeIn': this.state.open,
      'fadeOut': !this.state.open,
      [`${theme.hidden}`]: this.state.hiddenOverlay
    });

    var drawerClass = classNames(theme.drawer, 'animated', {
      'fadeInRight': this.state.open,
      'fadeOutRight': !this.state.open,
      [`${theme.hidden}`]: this.state.hiddenDrawer
    });

    return (
      <div>
        <div ref={(c) => this.overlay = c} className={overlayClass} onClick={this.toggleDrawer}></div>
        <div className={drawerClass}>
          {this.props.children}
        </div>
      </div>
    );
  }

}

ReactDrawer.propTypes = {
  open: React.PropTypes.bool.isRequired
};

// ReactDrawer.defaultProps = {
//   open: false, // default status of the drawer
//   transform: 0 // 0: inital close, 1: from open to close, 2: from close to open
// };

export default ReactDrawer;
