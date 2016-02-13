/*!
 * ReactDrawer
 * Version - 1.0.0
 * Licensed under the MIT license
 *
 * Copyright (c) 2016 Tony Li
 */

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./css/animate.css');

require('./css/drawer.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactDrawer = function (_React$Component) {
  _inherits(ReactDrawer, _React$Component);

  function ReactDrawer() {
    _classCallCheck(this, ReactDrawer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactDrawer).call(this));
  }

  _createClass(ReactDrawer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.state = {
        hiddenOverlay: true,
        hiddenDrawer: true,
        showDrawer: false,
        showOverlay: false
      };
      this.handleOperation = this.handleOperation.bind(this);
    }
  }, {
    key: 'handleOperation',
    value: function handleOperation() {
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
      } else {
        this.setState({
          showDrawer: false,
          showOverlay: false
        });
        console.log("trigger from open to close");
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'render',
    value: function render() {
      var overlayClass = (0, _classnames2.default)('overlay', {
        'animated fadeIn': this.state.showOverlay,
        'animated fadeOut': !this.state.showOverlay,
        'hidden': this.state.hiddenOverlay
      });

      var drawerClass = (0, _classnames2.default)('drawer', {
        'animated fadeInRight': this.state.showDrawer,
        'animated fadeOutRight': !this.state.showDrawer,
        'hidden': this.state.hiddenDrawer
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { id: 'overlay', className: overlayClass, onClick: this.handleOperation }),
        _react2.default.createElement(
          'div',
          { className: drawerClass },
          _react2.default.createElement('i', { onClick: this.handleOperation, className: 'icono-cross' }),
          this.props.children
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      document.getElementById("overlay").addEventListener("webkitAnimationEnd", function () {
        if (!_this2.state.showOverlay) {
          _this2.setState({ hiddenOverlay: true });
        }
      });
    }
  }]);

  return ReactDrawer;
}(_react2.default.Component);

// ReactDrawer.propTypes = {
//   open: React.PropTypes.bool.isRequired,
//   transform: React.PropTypes.number.isRequired
// };
//
// ReactDrawer.defaultProps = {
//   open: false, // default status of the drawer
//   transform: 0 // 0: inital close, 1: from open to close, 2: from close to open
// };

exports.default = ReactDrawer;