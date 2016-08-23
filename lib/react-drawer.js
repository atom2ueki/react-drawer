(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactDrawer"] = factory(require("React"));
	else
		root["ReactDrawer"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _ReactDrawer = __webpack_require__(1);

	var _ReactDrawer2 = _interopRequireDefault(_ReactDrawer);

	var _animate = __webpack_require__(2);

	var _animate2 = _interopRequireDefault(_animate);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*!
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ReactDrawer
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the MIT license
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016 Tony Li
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ReactDrawer = function (_React$Component) {
	  _inherits(ReactDrawer, _React$Component);

	  function ReactDrawer(props) {
	    _classCallCheck(this, ReactDrawer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ReactDrawer).call(this, props));

	    _this.openDrawer = _this.openDrawer.bind(_this);
	    _this.closeDrawer = _this.closeDrawer.bind(_this);
	    _this.onAnimationEnded = _this.onAnimationEnded.bind(_this);
	    return _this;
	  }

	  _createClass(ReactDrawer, [{
	    key: 'onAnimationEnded',
	    value: function onAnimationEnded() {
	      if (!this.state.open) {
	        this.setState({
	          hiddenOverlay: true,
	          hiddenDrawer: true
	        });
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.state = {
	        open: this.props.open,
	        hiddenOverlay: true,
	        hiddenDrawer: true
	      };
	    }
	  }, {
	    key: 'closeDrawer',
	    value: function closeDrawer() {
	      this.setState({
	        open: false
	      });
	      if (this.props.onClose) {
	        this.props.onClose();
	      }
	    }
	  }, {
	    key: 'openDrawer',
	    value: function openDrawer() {
	      this.setState({
	        hiddenOverlay: false,
	        hiddenDrawer: false,
	        open: true
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.open != this.state.open) {
	        nextProps.open ? this.openDrawer() : this.closeDrawer();
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.drawer.addEventListener('webkitAnimationEnd', this.onAnimationEnded);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.drawer.removeEventListener('webkitAnimationEnd', this.onAnimationEnded);
	    }
	  }, {
	    key: 'getOverlayClassName',
	    value: function getOverlayClassName(theme, animate) {
	      var _classNames;

	      return (0, _classnames2.default)('react-drawer-overlay', theme.overlay, animate.animated, (_classNames = {}, _defineProperty(_classNames, '' + animate.fadeIn, this.state.open), _defineProperty(_classNames, '' + animate.fadeOut, !this.state.open), _defineProperty(_classNames, '' + theme.hidden, this.state.hiddenOverlay), _classNames));
	    }
	  }, {
	    key: 'getDrawerClassName',
	    value: function getDrawerClassName(theme, animate) {
	      var position = this.props.position || 'right';
	      var themeAttr = 'drawer-' + position;
	      var drawerTheme = theme[themeAttr];
	      var direction = void 0,
	          start = void 0;
	      if (this.state.open) {
	        direction = 'In';
	        switch (position) {
	          case 'top':
	            start = 'Down';break;
	          case 'bottom':
	            start = 'Up';break;
	          case 'left':
	            start = 'Left';break;
	          case 'right':
	            start = 'Right';break;
	        }
	      } else {
	        direction = 'Out';
	        switch (position) {
	          case 'top':
	            start = 'Up';break;
	          case 'bottom':
	            start = 'Down';break;
	          case 'left':
	            start = 'Left';break;
	          case 'right':
	            start = 'Right';break;
	        }
	      }
	      var fade = animate['fade' + direction + start];
	      return (0, _classnames2.default)('react-drawer-drawer', theme.drawer, drawerTheme, animate.animated, fade, _defineProperty({}, '' + theme.hidden, this.state.hiddenDrawer));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var overlayClass = this.getOverlayClassName(_ReactDrawer2.default, _animate2.default);
	      var drawerClass = this.getDrawerClassName(_ReactDrawer2.default, _animate2.default);

	      return _react2.default.createElement(
	        'div',
	        null,
	        !this.props.noOverlay ? _react2.default.createElement('div', {
	          ref: function ref(c) {
	            return _this2.overlay = c;
	          },
	          className: overlayClass,
	          onClick: this.closeDrawer }) : null,
	        _react2.default.createElement(
	          'div',
	          {
	            className: drawerClass,
	            ref: function ref(c) {
	              return _this2.drawer = c;
	            } },
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return ReactDrawer;
	}(_react2.default.Component);

	ReactDrawer.propTypes = {
	  open: _react2.default.PropTypes.bool.isRequired,
	  onClose: _react2.default.PropTypes.func,
	  position: _react2.default.PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
	  noOverlay: _react2.default.PropTypes.bool
	};

	// ReactDrawer.defaultProps = {
	//   open: false, // default status of the drawer
	//   transform: 0 // 0: inital close, 1: from open to close, 2: from close to open
	// };

	exports.default = ReactDrawer;

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"drawer":"ReactDrawer__drawer","drawer-top":"ReactDrawer__drawer-top","drawer-bottom":"ReactDrawer__drawer-bottom","drawer-left":"ReactDrawer__drawer-left","drawer-right":"ReactDrawer__drawer-right","hidden":"ReactDrawer__hidden","overlay":"ReactDrawer__overlay"};

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"animated":"animate__animated","infinite":"animate__infinite","hinge":"animate__hinge","flipOutX":"animate__flipOutX","flipOutY":"animate__flipOutY","bounceIn":"animate__bounceIn","bounceOut":"animate__bounceOut","bounce":"animate__bounce","flash":"animate__flash","pulse":"animate__pulse","rubberBand":"animate__rubberBand","shake":"animate__shake","headShake":"animate__headShake","swing":"animate__swing","tada":"animate__tada","wobble":"animate__wobble","jello":"animate__jello","bounceInDown":"animate__bounceInDown","bounceInLeft":"animate__bounceInLeft","bounceInRight":"animate__bounceInRight","bounceInUp":"animate__bounceInUp","bounceOutDown":"animate__bounceOutDown","bounceOutLeft":"animate__bounceOutLeft","bounceOutRight":"animate__bounceOutRight","bounceOutUp":"animate__bounceOutUp","fadeIn":"animate__fadeIn","fadeInDown":"animate__fadeInDown","fadeInDownBig":"animate__fadeInDownBig","fadeInLeft":"animate__fadeInLeft","fadeInLeftBig":"animate__fadeInLeftBig","fadeInRight":"animate__fadeInRight","fadeInRightBig":"animate__fadeInRightBig","fadeInUp":"animate__fadeInUp","fadeInUpBig":"animate__fadeInUpBig","fadeOut":"animate__fadeOut","fadeOutDown":"animate__fadeOutDown","fadeOutDownBig":"animate__fadeOutDownBig","fadeOutLeft":"animate__fadeOutLeft","fadeOutLeftBig":"animate__fadeOutLeftBig","fadeOutRight":"animate__fadeOutRight","fadeOutRightBig":"animate__fadeOutRightBig","fadeOutUp":"animate__fadeOutUp","fadeOutUpBig":"animate__fadeOutUpBig","flip":"animate__flip","flipInX":"animate__flipInX","flipInY":"animate__flipInY","lightSpeedIn":"animate__lightSpeedIn","lightSpeedOut":"animate__lightSpeedOut","rotateIn":"animate__rotateIn","rotateInDownLeft":"animate__rotateInDownLeft","rotateInDownRight":"animate__rotateInDownRight","rotateInUpLeft":"animate__rotateInUpLeft","rotateInUpRight":"animate__rotateInUpRight","rotateOut":"animate__rotateOut","rotateOutDownLeft":"animate__rotateOutDownLeft","rotateOutDownRight":"animate__rotateOutDownRight","rotateOutUpLeft":"animate__rotateOutUpLeft","rotateOutUpRight":"animate__rotateOutUpRight","rollIn":"animate__rollIn","rollOut":"animate__rollOut","zoomIn":"animate__zoomIn","zoomInDown":"animate__zoomInDown","zoomInLeft":"animate__zoomInLeft","zoomInRight":"animate__zoomInRight","zoomInUp":"animate__zoomInUp","zoomOut":"animate__zoomOut","zoomOutDown":"animate__zoomOutDown","zoomOutLeft":"animate__zoomOutLeft","zoomOutRight":"animate__zoomOutRight","zoomOutUp":"animate__zoomOutUp","slideInDown":"animate__slideInDown","slideInLeft":"animate__slideInLeft","slideInRight":"animate__slideInRight","slideInUp":"animate__slideInUp","slideOutDown":"animate__slideOutDown","slideOutLeft":"animate__slideOutLeft","slideOutRight":"animate__slideOutRight","slideOutUp":"animate__slideOutUp"};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }
/******/ ])
});
;