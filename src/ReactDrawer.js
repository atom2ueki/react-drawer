/*!
 * ReactDrawer
 * Licensed under the MIT license
 *
 * Copyright (c) 2016 Tony Li
 */

import theme from './ReactDrawer.scss';
import animate from 'animate.css';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class ReactDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onAnimationEnded = this.onAnimationEnded.bind(this);
  }

  onAnimationEnded() {
    if (!this.state.open) {
      this.setState({
        hiddenOverlay: true,
        hiddenDrawer: true
      });
    }
  }

  componentWillMount() {
    this.setState({
      open: this.props.open,
      hiddenOverlay: true,
      hiddenDrawer: true
    });
  }

  closeDrawer() {
    this.setState({
      open: false
    });
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
  openDrawer() {
    this.setState({
      hiddenOverlay: false,
      hiddenDrawer: false,
      open: true
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open != this.state.open) {
      nextProps.open ? this.openDrawer(): this.closeDrawer();
    }
  }

  componentDidMount () {
    this.drawer.addEventListener('webkitAnimationEnd', this.onAnimationEnded);
  }

  componentWillUnmount() {
    this.drawer.removeEventListener('webkitAnimationEnd', this.onAnimationEnded);
  }

  getOverlayClassName(theme, animate) {
    return classNames(
      'react-drawer-overlay',
      theme.overlay,
      animate.animated,
      {
        [`${animate.fadeIn}`]: this.state.open,
        [`${animate.fadeOut}`]: !this.state.open,
        [`${theme.hidden}`]: this.state.hiddenOverlay
      }
    );
  }

  getDrawerClassName(theme, animate) {
    const position = this.props.position || 'right';
    const themeAttr = `drawer-${position}`;
    const drawerTheme = theme[themeAttr];
    let direction, start;
    if (this.state.open) {
      direction = 'In';
      switch(position) {
      case 'top':
        start = 'Down'; break;
      case 'bottom':
        start = 'Up'; break;
      case 'left':
        start = 'Left'; break;
      case 'right':
        start = 'Right'; break;
      }
    } else {
      direction = 'Out';
      switch(position) {
      case 'top':
        start = 'Up'; break;
      case 'bottom':
        start = 'Down'; break;
      case 'left':
        start = 'Left'; break;
      case 'right':
        start = 'Right'; break;
      }
    }
    const fade = animate[`fade${direction}${start}`];
    return classNames(
      'react-drawer-drawer',
      theme.drawer,
      drawerTheme,
      animate.animated,
      fade,
      {
        [`${theme.hidden}`]: this.state.hiddenDrawer
      }
    );
  }
  render() {
    const overlayClass = this.getOverlayClassName(theme, animate);
    const drawerClass = this.getDrawerClassName(theme, animate);

    return (
      <div>
        {!this.props.noOverlay ? <div
          ref={(c) => this.overlay = c}
          className={overlayClass}
          onClick={this.closeDrawer}>
        </div>: null}
        <div
          className={drawerClass}
          ref={(c) => this.drawer = c}>
          {this.props.children}
        </div>
      </div>
    );
  }

}

ReactDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
  noOverlay: PropTypes.bool
};

export default ReactDrawer;
