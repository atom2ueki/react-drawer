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
	module.exports = {"drawer":"ReactDrawer__drawer___2r5VH","drawer-top":"ReactDrawer__drawer-top___1dfbB","drawer-bottom":"ReactDrawer__drawer-bottom___2f9G_","drawer-left":"ReactDrawer__drawer-left___2xURN","drawer-right":"ReactDrawer__drawer-right___h_uSC","hidden":"ReactDrawer__hidden___12vbU","overlay":"ReactDrawer__overlay___2QFmC"};

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"animated":"animate__animated___2O131","infinite":"animate__infinite___3ditF","hinge":"animate__hinge___1gC1I","flipOutX":"animate__flipOutX___14JIh","flipOutY":"animate__flipOutY___3-fcT","bounceIn":"animate__bounceIn___A5DKu","bounceOut":"animate__bounceOut___1cFbR","bounce":"animate__bounce___2lrL7","flash":"animate__flash___1cEFo","pulse":"animate__pulse___2PvmM","rubberBand":"animate__rubberBand___2EGEd","shake":"animate__shake___2DAZ4","headShake":"animate__headShake___3XmHP","swing":"animate__swing___3C_jC","tada":"animate__tada___Qt5PH","wobble":"animate__wobble___SKKSi","jello":"animate__jello___1vLIG","bounceInDown":"animate__bounceInDown___ZnhIW","bounceInLeft":"animate__bounceInLeft___3RKRN","bounceInRight":"animate__bounceInRight___1fPzt","bounceInUp":"animate__bounceInUp___3be9U","bounceOutDown":"animate__bounceOutDown___2bUPG","bounceOutLeft":"animate__bounceOutLeft___2Q63A","bounceOutRight":"animate__bounceOutRight___360fD","bounceOutUp":"animate__bounceOutUp___3XAFf","fadeIn":"animate__fadeIn___3bQIe","fadeInDown":"animate__fadeInDown___dGqol","fadeInDownBig":"animate__fadeInDownBig___1FQOh","fadeInLeft":"animate__fadeInLeft___2Rcw5","fadeInLeftBig":"animate__fadeInLeftBig___2VDk0","fadeInRight":"animate__fadeInRight___uwTeO","fadeInRightBig":"animate__fadeInRightBig___3Xcl7","fadeInUp":"animate__fadeInUp___2xZln","fadeInUpBig":"animate__fadeInUpBig___zqLD5","fadeOut":"animate__fadeOut___1eBhz","fadeOutDown":"animate__fadeOutDown___2VkMZ","fadeOutDownBig":"animate__fadeOutDownBig___3TYAD","fadeOutLeft":"animate__fadeOutLeft___2jmiI","fadeOutLeftBig":"animate__fadeOutLeftBig___1FJrH","fadeOutRight":"animate__fadeOutRight___hdB_e","fadeOutRightBig":"animate__fadeOutRightBig___2DPtr","fadeOutUp":"animate__fadeOutUp___3e5Sp","fadeOutUpBig":"animate__fadeOutUpBig___1jhuD","flip":"animate__flip___mEy1R","flipInX":"animate__flipInX___3AYWx","flipInY":"animate__flipInY___kBUzo","lightSpeedIn":"animate__lightSpeedIn___23y_G","lightSpeedOut":"animate__lightSpeedOut___c7ISu","rotateIn":"animate__rotateIn___1rIe1","rotateInDownLeft":"animate__rotateInDownLeft___1Yg3C","rotateInDownRight":"animate__rotateInDownRight___23mEq","rotateInUpLeft":"animate__rotateInUpLeft___7696c","rotateInUpRight":"animate__rotateInUpRight___yaDuX","rotateOut":"animate__rotateOut___3wKvg","rotateOutDownLeft":"animate__rotateOutDownLeft___3ULiD","rotateOutDownRight":"animate__rotateOutDownRight___2Ecbu","rotateOutUpLeft":"animate__rotateOutUpLeft___3Bn0k","rotateOutUpRight":"animate__rotateOutUpRight___12d5z","rollIn":"animate__rollIn___qdqqO","rollOut":"animate__rollOut___2jQO8","zoomIn":"animate__zoomIn___3rhkD","zoomInDown":"animate__zoomInDown___JG8EB","zoomInLeft":"animate__zoomInLeft___qAe_q","zoomInRight":"animate__zoomInRight___3tQ-_","zoomInUp":"animate__zoomInUp___1ctD0","zoomOut":"animate__zoomOut___1qWDJ","zoomOutDown":"animate__zoomOutDown___35vfM","zoomOutLeft":"animate__zoomOutLeft___2eFQd","zoomOutRight":"animate__zoomOutRight___1qxrO","zoomOutUp":"animate__zoomOutUp___kSWPE","slideInDown":"animate__slideInDown___35wHN","slideInLeft":"animate__slideInLeft___1ImeA","slideInRight":"animate__slideInRight___3K8gk","slideInUp":"animate__slideInUp___zy0K5","slideOutDown":"animate__slideOutDown___19w6V","slideOutLeft":"animate__slideOutLeft___LIyk1","slideOutRight":"animate__slideOutRight___2xauG","slideOutUp":"animate__slideOutUp___12ncd"};

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