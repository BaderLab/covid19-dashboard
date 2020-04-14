/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/client/index.js","deps"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/client/components/controller.js":
/*!*********************************************!*\
  !*** ./src/client/components/controller.js ***!
  \*********************************************/
/*! exports provided: Controller, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Controller = /*#__PURE__*/function () {
  function Controller(data) {
    _classCallCheck(this, Controller);

    this.bus = new eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a();
    this.data = [];
  }

  _createClass(Controller, [{
    key: "refresh",
    value: function refresh(data) {
      this.data = data;
      console.log(data);
      this.bus.emit('refresh');
    }
  }, {
    key: "setViewport",
    value: function setViewport() {}
  }]);

  return Controller;
}();
/* harmony default export */ __webpack_exports__["default"] = (Controller);

/***/ }),

/***/ "./src/client/components/dashboard.js":
/*!********************************************!*\
  !*** ./src/client/components/dashboard.js ***!
  \********************************************/
/*! exports provided: Dashboard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard", function() { return Dashboard; });
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hyperscript */ "./node_modules/react-hyperscript/index.js");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ "./src/client/components/map.js");
/* harmony import */ var _feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feed */ "./src/client/components/feed.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller */ "./src/client/components/controller.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Dashboard = /*#__PURE__*/function (_Component) {
  _inherits(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _super.call(this, props);
    _this.controller = new _controller__WEBPACK_IMPORTED_MODULE_4__["default"]();
    return _this;
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var getData = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var res, data;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch('/test-data.json');

                case 2:
                  res = _context.sent;
                  _context.next = 5;
                  return res.json();

                case 5:
                  data = _context.sent;

                  _this2.controller.refresh(data);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function getData() {
          return _ref.apply(this, arguments);
        };
      }();

      getData();
    }
  }, {
    key: "render",
    value: function render() {
      var controller = this.controller;
      return react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.dashboard', [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.dashboard-viz', [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()(_map__WEBPACK_IMPORTED_MODULE_2__["Map"], {
        controller: controller
      })]), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.dashboard-info-panel', [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()(_feed__WEBPACK_IMPORTED_MODULE_3__["Feed"], {
        controller: controller
      })])]);
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./src/client/components/feed.js":
/*!***************************************!*\
  !*** ./src/client/components/feed.js ***!
  \***************************************/
/*! exports provided: Feed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feed", function() { return Feed; });
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hyperscript */ "./node_modules/react-hyperscript/index.js");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util */ "./src/util/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Feed = /*#__PURE__*/function (_Component) {
  _inherits(Feed, _Component);

  var _super = _createSuper(Feed);

  function Feed(props) {
    var _this;

    _classCallCheck(this, Feed);

    _this = _super.call(this, props);
    _this.busProxy = new _util__WEBPACK_IMPORTED_MODULE_2__["EventEmitterProxy"](props.controller.bus);
    return _this;
  }

  _createClass(Feed, [{
    key: "dirty",
    value: function dirty() {
      this.setState({
        dirty: Date.now()
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.busProxy.addListener('refresh', function () {
        return _this2.dirty();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.busProxy.removeAllListeners();
    }
  }, {
    key: "render",
    value: function render() {
      var controller = this.props.controller;
      var now = new Date();
      return react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed', controller.data.map(function (entry) {
        var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["parseISO"])(entry.timestamp);
        var relativeDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["formatDistance"])(date, now) + ' ago';
        var absoluteDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(date, 'yyyy-MM-dd');
        var _entry$patient_inform = entry.patient_information,
            age = _entry$patient_inform.age,
            sex = _entry$patient_inform.sex;
        var _entry$symptoms = entry.symptoms,
            fever = _entry$symptoms.fever,
            cough = _entry$symptoms.cough,
            fatigue = _entry$symptoms.fatigue;

        var Symptom = function Symptom(_ref) {
          var hasSymptom = _ref.hasSymptom,
              icon = _ref.icon;
          return react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-symptom', {
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
              'feed-symptom-true': hasSymptom
            })
          }, [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()("i.fas.fa-fw.fa-".concat(icon))]);
        };

        return react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-entry', [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-title', [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-patient', [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-patient-descr', [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-age', age), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-sex', sex)]), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-symptoms', [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()(Symptom, {
          hasSymptom: fever,
          icon: 'thermometer-three-quarters'
        }), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()(Symptom, {
          hasSymptom: cough,
          icon: 'head-side-cough'
        }), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()(Symptom, {
          hasSymptom: fatigue,
          icon: 'bed'
        })])]), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-date', [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-date-relative', relativeDate), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-date-absolute', absoluteDate)])]), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-tests', [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-test', {
          style: {
            width: '100%'
          }
        }), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-test', {
          style: {
            width: '66%'
          }
        }), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed-test', {
          style: {
            width: '33%'
          }
        })])]);
      }));
    }
  }]);

  return Feed;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Feed);

/***/ }),

/***/ "./src/client/components/map.js":
/*!**************************************!*\
  !*** ./src/client/components/map.js ***!
  \**************************************/
/*! exports provided: Map, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hyperscript */ "./node_modules/react-hyperscript/index.js");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Map = /*#__PURE__*/function (_Component) {
  _inherits(Map, _Component);

  var _super = _createSuper(Map);

  function Map(props) {
    _classCallCheck(this, Map);

    return _super.call(this, props);
  }

  _createClass(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initMap();
    }
  }, {
    key: "initMap",
    value: function initMap() {
      var map = this.map = leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.map(this.mapContainer); // TODO set this based on gps query -- currently using leaflet demo coords

      map.setView([51.505, -0.09], 13); // add the background tiles for the map viz

      leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      }).addTo(this.map); // alt tile layer -- dark mode, could be useful for colour highlights on the map
      // var Stadia_AlidadeSmoothDark = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      //   maxZoom: 20,
      //   attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      // });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var controller = this.props.controller;
      return react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.map', {
        ref: function ref(el) {
          return _this.mapContainer = el;
        }
      });
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./src/client/components/page-not-found.js":
/*!*************************************************!*\
  !*** ./src/client/components/page-not-found.js ***!
  \*************************************************/
/*! exports provided: PageNotFound, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFound", function() { return PageNotFound; });
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hyperscript */ "./node_modules/react-hyperscript/index.js");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_0__);

var PageNotFound = function PageNotFound() {
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('span', 'Page not found');
};
/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ "./src/client/debug.js":
/*!*****************************!*\
  !*** ./src/client/debug.js ***!
  \*****************************/
/*! exports provided: debug, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony import */ var fready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fready */ "./node_modules/fready/fready.js");
/* harmony import */ var fready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fready__WEBPACK_IMPORTED_MODULE_0__);


var sync = function sync() {
  var script = document.createElement('script');
  script.src = 'http://' + window.location.hostname + ':35729/livereload.js';
  document.head.insertBefore(script, document.head.firstChild);
};

var debug = {
  enabled: function enabled(on) {
    if (arguments.length === 0) {
      if (this._enabled != null) {
        return this._enabled;
      } else {
        return window.DEBUG || "development" !== 'production';
      }
    } else {
      this._enabled = !!on;
    }
  },
  init: function init() {
    fready__WEBPACK_IMPORTED_MODULE_0___default()(sync);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (debug);

/***/ }),

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet-providers */ "./node_modules/leaflet-providers/leaflet-providers.js");
/* harmony import */ var leaflet_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug */ "./src/client/debug.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hyperscript */ "./node_modules/react-hyperscript/index.js");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router */ "./src/client/router.js");
// must include this polyfill here b/c generators change syntax
// (all async/generator functions get transformed to use the runtime, no matter the browser)







if (_debug__WEBPACK_IMPORTED_MODULE_2__["default"].enabled()) {
  _debug__WEBPACK_IMPORTED_MODULE_2__["default"].init();
}

var div = document.createElement('div');
div.setAttribute('id', 'root');
document.body.appendChild(div);
react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(react_hyperscript__WEBPACK_IMPORTED_MODULE_4___default()(_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), div);

/***/ }),

/***/ "./src/client/router.js":
/*!******************************!*\
  !*** ./src/client/router.js ***!
  \******************************/
/*! exports provided: Router, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hyperscript */ "./node_modules/react-hyperscript/index.js");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard */ "./src/client/components/dashboard.js");
/* harmony import */ var _components_page_not_found__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-not-found */ "./src/client/components/page-not-found.js");





var routes = [{
  path: '/',
  render: function render() {
    return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_components_dashboard__WEBPACK_IMPORTED_MODULE_3__["default"]);
  }
}, {
  render: function render() {
    return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_components_page_not_found__WEBPACK_IMPORTED_MODULE_4__["default"]);
  },
  status: 404
}];
var Router = function Router() {
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["BrowserRouter"], [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Switch"], routes.map(function (spec) {
    spec = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.defaults(spec, {
      exact: true
    });
    return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Route"], spec);
  }))]);
};
/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./src/util/event-emitter-proxy.js":
/*!*****************************************!*\
  !*** ./src/util/event-emitter-proxy.js ***!
  \*****************************************/
/*! exports provided: EventEmitterProxy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitterProxy", function() { return EventEmitterProxy; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * An object that acts as a proxy to an `EventEmitter`.  The primary use for this proxy
 * is to keep track of listeners that you register on the target emitter.  You can
 * `removeAllListeners()` on the proxy object to remove just your listeners, while keeping
 * listeners that you didn't register on the target emitter as-is.  This makes it much
 * easier to maintain destructor functions.
 */

var EventEmitterProxy = /*#__PURE__*/function () {
  /**
   * Create the `EventEmitterProxy`.
   * @param {EventEmitter} target The event emitter to be proxied.
   */
  function EventEmitterProxy(target) {
    _classCallCheck(this, EventEmitterProxy);

    this.target = target;
    this.listeners = [];
  }
  /**
   * Add a listener to the target event emitter.  The listener is appened to the proxy's
   * listener list.
   * @param {String} event The event name to listen to.
   * @param {Function} handler The event handler callback function.  It it called on the specified `event`.
   */


  _createClass(EventEmitterProxy, [{
    key: "on",
    value: function on(event, handler) {
      this.target.on(event, handler);
      this.listeners.push({
        event: event,
        handler: handler
      });
      return this;
    }
    /**
     * Add a listener to the target event emitter.  The listener is appened to the proxy's
     * listener list.
     * @alias on
     * @param {String} event The event name to listen to.
     * @param {Function} handler The event handler callback function.  It it called on the specified `event`.
     */

  }, {
    key: "addListener",
    value: function addListener(event, handler) {
      return this.on(event, handler);
    }
    /**
     * Remove a listener on the target emitter.  The listener is removed from the proxy's
     * listener list.
     * @param {String} event The event name.
     * @param {Function} handler The callback handler function.
     */

  }, {
    key: "removeListener",
    value: function removeListener(event, handler) {
      this.target.removeListener(event, handler);

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pullAllBy(this.listeners, function (l) {
        return l.event === event && l.handler === handler;
      });

      return this;
    }
    /**
     * Remove all listeners that have been registered through the proxy.
     */

  }, {
    key: "removeAllListeners",
    value: function removeAllListeners() {
      for (var i = this.listeners.length - 1; i >= 0; i--) {
        var _this$listeners$i = this.listeners[i],
            event = _this$listeners$i.event,
            handler = _this$listeners$i.handler;
        this.target.removeListener(event, handler);
        this.listeners.splice(i, 1); // remove ith
      }

      return this;
    }
  }]);

  return EventEmitterProxy;
}();
/* harmony default export */ __webpack_exports__["default"] = (EventEmitterProxy);

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! exports provided: EventEmitterProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_emitter_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-emitter-proxy */ "./src/util/event-emitter-proxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventEmitterProxy", function() { return _event_emitter_proxy__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9mZWVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9ldmVudC1lbWl0dGVyLXByb3h5LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJkYXRhIiwiYnVzIiwiRXZlbnRFbWl0dGVyIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJEYXNoYm9hcmQiLCJwcm9wcyIsImNvbnRyb2xsZXIiLCJnZXREYXRhIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwicmVmcmVzaCIsImgiLCJNYXAiLCJGZWVkIiwiQ29tcG9uZW50IiwiYnVzUHJveHkiLCJFdmVudEVtaXR0ZXJQcm94eSIsInNldFN0YXRlIiwiZGlydHkiLCJEYXRlIiwibm93IiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJtYXAiLCJlbnRyeSIsImRhdGUiLCJwYXJzZUlTTyIsInRpbWVzdGFtcCIsInJlbGF0aXZlRGF0ZSIsImZvcm1hdERpc3RhbmNlIiwiYWJzb2x1dGVEYXRlIiwiZm9ybWF0IiwicGF0aWVudF9pbmZvcm1hdGlvbiIsImFnZSIsInNleCIsInN5bXB0b21zIiwiZmV2ZXIiLCJjb3VnaCIsImZhdGlndWUiLCJTeW1wdG9tIiwiaGFzU3ltcHRvbSIsImljb24iLCJjbGFzc05hbWUiLCJjbGFzc05hbWVzIiwic3R5bGUiLCJ3aWR0aCIsImluaXRNYXAiLCJMIiwibWFwQ29udGFpbmVyIiwic2V0VmlldyIsInRpbGVMYXllciIsIm1heFpvb20iLCJhdHRyaWJ1dGlvbiIsImFkZFRvIiwicmVmIiwiZWwiLCJQYWdlTm90Rm91bmQiLCJzeW5jIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsImhlYWQiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiZGVidWciLCJlbmFibGVkIiwib24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJfZW5hYmxlZCIsIkRFQlVHIiwicHJvY2VzcyIsImluaXQiLCJkb21SZWFkeSIsImRpdiIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiUm91dGVyIiwicm91dGVzIiwicGF0aCIsInN0YXR1cyIsIkJyb3dzZXJSb3V0ZXIiLCJTd2l0Y2giLCJzcGVjIiwiXyIsImRlZmF1bHRzIiwiZXhhY3QiLCJSb3V0ZSIsInRhcmdldCIsImxpc3RlbmVycyIsImV2ZW50IiwiaGFuZGxlciIsInB1c2giLCJyZW1vdmVMaXN0ZW5lciIsInB1bGxBbGxCeSIsImwiLCJpIiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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T0FEc0MscUJBQ3RDQSxPQURzQztBQUduRCxhQUFLSCxNQUFMLENBQVlLLGNBQVosQ0FBMkJILEtBQTNCLEVBQWtDQyxPQUFsQztBQUNBLGFBQUtGLFNBQUwsQ0FBZVEsTUFBZixDQUFzQkQsQ0FBdEIsRUFBeUIsQ0FBekIsRUFKbUQsQ0FJdEI7QUFDOUI7O0FBRUQsYUFBTyxJQUFQO0FBQ0Q7QUEzREg7O0FBQUE7QUFBQTtBQThEZXZGLGdGQUFmLEU7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2NsaWVudC9pbmRleC5qc1wiLFwiZGVwc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnZXZlbnRlbWl0dGVyMyc7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoZGF0YSl7XG4gICAgdGhpcy5idXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5kYXRhID0gW107XG4gIH1cblxuICByZWZyZXNoKGRhdGEpe1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHRoaXMuYnVzLmVtaXQoJ3JlZnJlc2gnKTtcbiAgfVxuXG4gIHNldFZpZXdwb3J0KCl7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyOyIsImltcG9ydCBoIGZyb20gJ3JlYWN0LWh5cGVyc2NyaXB0JztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcCB9IGZyb20gJy4vbWFwJztcbmltcG9ydCB7IEZlZWQgfSBmcm9tICcuL2ZlZWQnO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVyJztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy90ZXN0LWRhdGEuanNvbicpO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAgIHRoaXMuY29udHJvbGxlci5yZWZyZXNoKGRhdGEpO1xuICAgIH07XG5cbiAgICBnZXREYXRhKCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGNvbnRyb2xsZXIgfSA9IHRoaXM7XG5cbiAgICByZXR1cm4gaCgnZGl2LmRhc2hib2FyZCcsIFtcbiAgICAgIGgoJ2Rpdi5kYXNoYm9hcmQtdml6JywgW1xuICAgICAgICBoKE1hcCwgeyBjb250cm9sbGVyIH0pXG4gICAgICBdKSxcbiAgICAgIGgoJ2Rpdi5kYXNoYm9hcmQtaW5mby1wYW5lbCcsIFtcbiAgICAgICAgaChGZWVkLCB7IGNvbnRyb2xsZXIgfSlcbiAgICAgIF0pXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyIsImltcG9ydCBoIGZyb20gJ3JlYWN0LWh5cGVyc2NyaXB0JztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEV2ZW50RW1pdHRlclByb3h5IH0gZnJvbSAnLi4vLi4vdXRpbCc7XG5pbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0RGlzdGFuY2UsIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgY2xhc3MgRmVlZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5idXNQcm94eSA9IG5ldyBFdmVudEVtaXR0ZXJQcm94eShwcm9wcy5jb250cm9sbGVyLmJ1cyk7XG4gIH1cblxuICBkaXJ0eSgpe1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXJ0eTogRGF0ZS5ub3coKSB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5idXNQcm94eS5hZGRMaXN0ZW5lcigncmVmcmVzaCcsICgpID0+IHRoaXMuZGlydHkoKSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xuICAgIHRoaXMuYnVzUHJveHkucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGNvbnRyb2xsZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblxuICAgIHJldHVybiBoKCdkaXYuZmVlZCcsIGNvbnRyb2xsZXIuZGF0YS5tYXAoZW50cnkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlSVNPKGVudHJ5LnRpbWVzdGFtcCk7XG4gICAgICBjb25zdCByZWxhdGl2ZURhdGUgPSBmb3JtYXREaXN0YW5jZShkYXRlLCBub3cpICsgJyBhZ28nO1xuICAgICAgY29uc3QgYWJzb2x1dGVEYXRlID0gZm9ybWF0KGRhdGUsICd5eXl5LU1NLWRkJyk7XG4gICAgICBjb25zdCB7IGFnZSwgc2V4IH0gPSBlbnRyeS5wYXRpZW50X2luZm9ybWF0aW9uO1xuICAgICAgY29uc3QgeyBmZXZlciwgY291Z2gsIGZhdGlndWUgfSA9IGVudHJ5LnN5bXB0b21zO1xuICAgICAgXG4gICAgICBjb25zdCBTeW1wdG9tID0gKHsgaGFzU3ltcHRvbSwgaWNvbiB9KSA9PiBoKCdkaXYuZmVlZC1zeW1wdG9tJywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoeyAnZmVlZC1zeW1wdG9tLXRydWUnOiBoYXNTeW1wdG9tIH0pXG4gICAgICB9LCBbXG4gICAgICAgIGgoYGkuZmFzLmZhLWZ3LmZhLSR7aWNvbn1gKVxuICAgICAgXSk7XG5cbiAgICAgIHJldHVybiBoKCdkaXYuZmVlZC1lbnRyeScsIFtcbiAgICAgICAgaCgnZGl2LmZlZWQtdGl0bGUnLCBbXG4gICAgICAgICAgaCgnZGl2LmZlZWQtcGF0aWVudCcsIFtcbiAgICAgICAgICAgIGgoJ2Rpdi5mZWVkLXBhdGllbnQtZGVzY3InLCBbXG4gICAgICAgICAgICAgIGgoJ2Rpdi5mZWVkLWFnZScsIGFnZSksXG4gICAgICAgICAgICAgIGgoJ2Rpdi5mZWVkLXNleCcsIHNleClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgaCgnZGl2LmZlZWQtc3ltcHRvbXMnLCBbXG4gICAgICAgICAgICAgIGgoU3ltcHRvbSwgeyBoYXNTeW1wdG9tOiBmZXZlciwgaWNvbjogJ3RoZXJtb21ldGVyLXRocmVlLXF1YXJ0ZXJzJyB9KSxcbiAgICAgICAgICAgICAgaChTeW1wdG9tLCB7IGhhc1N5bXB0b206IGNvdWdoLCBpY29uOiAnaGVhZC1zaWRlLWNvdWdoJyB9KSxcbiAgICAgICAgICAgICAgaChTeW1wdG9tLCB7IGhhc1N5bXB0b206IGZhdGlndWUsIGljb246ICdiZWQnIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBoKCdkaXYuZmVlZC1kYXRlJywgW1xuICAgICAgICAgICAgaCgnZGl2LmZlZWQtZGF0ZS1yZWxhdGl2ZScsIHJlbGF0aXZlRGF0ZSksXG4gICAgICAgICAgICBoKCdkaXYuZmVlZC1kYXRlLWFic29sdXRlJywgYWJzb2x1dGVEYXRlKVxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgICAgaCgnZGl2LmZlZWQtdGVzdHMnLCBbXG4gICAgICAgICAgaCgnZGl2LmZlZWQtdGVzdCcsIHsgc3R5bGU6IHsgd2lkdGg6ICcxMDAlJyB9IH0pLFxuICAgICAgICAgIGgoJ2Rpdi5mZWVkLXRlc3QnLCB7IHN0eWxlOiB7IHdpZHRoOiAnNjYlJyB9IH0pLFxuICAgICAgICAgIGgoJ2Rpdi5mZWVkLXRlc3QnLCB7IHN0eWxlOiB7IHdpZHRoOiAnMzMlJyB9IH0pXG4gICAgICAgIF0pXG4gICAgICBdKTtcbiAgICB9KSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVlZDsiLCJpbXBvcnQgaCBmcm9tICdyZWFjdC1oeXBlcnNjcmlwdCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcblxuZXhwb3J0IGNsYXNzIE1hcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuaW5pdE1hcCgpO1xuICB9XG5cbiAgaW5pdE1hcCgpe1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwID0gTC5tYXAodGhpcy5tYXBDb250YWluZXIpO1xuXG4gICAgLy8gVE9ETyBzZXQgdGhpcyBiYXNlZCBvbiBncHMgcXVlcnkgLS0gY3VycmVudGx5IHVzaW5nIGxlYWZsZXQgZGVtbyBjb29yZHNcbiAgICBtYXAuc2V0VmlldyhbNTEuNTA1LCAtMC4wOV0sIDEzKTtcblxuICAgIC8vIGFkZCB0aGUgYmFja2dyb3VuZCB0aWxlcyBmb3IgdGhlIG1hcCB2aXpcbiAgICBMLnRpbGVMYXllcignaHR0cHM6Ly90aWxlcy5zdGFkaWFtYXBzLmNvbS90aWxlcy9hbGlkYWRlX3Ntb290aC97en0ve3h9L3t5fXtyfS5wbmcnLCB7XG4gICAgICBtYXhab29tOiAyMCxcbiAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3N0YWRpYW1hcHMuY29tL1wiPlN0YWRpYSBNYXBzPC9hPiwgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL29wZW5tYXB0aWxlcy5vcmcvXCI+T3Blbk1hcFRpbGVzPC9hPiAmY29weTsgPGEgaHJlZj1cImh0dHA6Ly9vcGVuc3RyZWV0bWFwLm9yZ1wiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICB9KS5hZGRUbyh0aGlzLm1hcCk7XG5cbiAgICAvLyBhbHQgdGlsZSBsYXllciAtLSBkYXJrIG1vZGUsIGNvdWxkIGJlIHVzZWZ1bCBmb3IgY29sb3VyIGhpZ2hsaWdodHMgb24gdGhlIG1hcFxuICAgIC8vIHZhciBTdGFkaWFfQWxpZGFkZVNtb290aERhcmsgPSBMLnRpbGVMYXllcignaHR0cHM6Ly90aWxlcy5zdGFkaWFtYXBzLmNvbS90aWxlcy9hbGlkYWRlX3Ntb290aF9kYXJrL3t6fS97eH0ve3l9e3J9LnBuZycsIHtcbiAgICAvLyAgIG1heFpvb206IDIwLFxuICAgIC8vICAgYXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vc3RhZGlhbWFwcy5jb20vXCI+U3RhZGlhIE1hcHM8L2E+LCAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vb3Blbm1hcHRpbGVzLm9yZy9cIj5PcGVuTWFwVGlsZXM8L2E+ICZjb3B5OyA8YSBocmVmPVwiaHR0cDovL29wZW5zdHJlZXRtYXAub3JnXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgIC8vIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBjb250cm9sbGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIGgoJ2Rpdi5tYXAnLCB7XG4gICAgICByZWY6IGVsID0+IHRoaXMubWFwQ29udGFpbmVyID0gZWxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXA7IiwiaW1wb3J0IGggZnJvbSAncmVhY3QtaHlwZXJzY3JpcHQnO1xuXG5leHBvcnQgY29uc3QgUGFnZU5vdEZvdW5kID0gKCkgPT4ge1xuICByZXR1cm4gaCgnc3BhbicsICdQYWdlIG5vdCBmb3VuZCcpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZU5vdEZvdW5kOyIsImltcG9ydCBkb21SZWFkeSBmcm9tICdmcmVhZHknO1xuXG5jb25zdCBzeW5jID0gZnVuY3Rpb24oKXtcbiAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gJ2h0dHA6Ly8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJzozNTcyOS9saXZlcmVsb2FkLmpzJztcblxuICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZSggc2NyaXB0LCBkb2N1bWVudC5oZWFkLmZpcnN0Q2hpbGQgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWJ1ZyA9IHtcbiAgZW5hYmxlZDogZnVuY3Rpb24oIG9uICl7XG4gICAgaWYoIGFyZ3VtZW50cy5sZW5ndGggPT09IDAgKXtcbiAgICAgIGlmKCB0aGlzLl9lbmFibGVkICE9IG51bGwgKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gd2luZG93LkRFQlVHIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSAhIW9uO1xuICAgIH1cbiAgfSxcblxuICBpbml0OiBmdW5jdGlvbigpe1xuICAgIGRvbVJlYWR5KCBzeW5jICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlYnVnOyIsIi8vIG11c3QgaW5jbHVkZSB0aGlzIHBvbHlmaWxsIGhlcmUgYi9jIGdlbmVyYXRvcnMgY2hhbmdlIHN5bnRheFxuLy8gKGFsbCBhc3luYy9nZW5lcmF0b3IgZnVuY3Rpb25zIGdldCB0cmFuc2Zvcm1lZCB0byB1c2UgdGhlIHJ1bnRpbWUsIG5vIG1hdHRlciB0aGUgYnJvd3NlcilcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcbmltcG9ydCAnbGVhZmxldC1wcm92aWRlcnMnO1xuXG5pbXBvcnQgZGVidWcgZnJvbSAnLi9kZWJ1Zyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBoIGZyb20gJ3JlYWN0LWh5cGVyc2NyaXB0JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4vcm91dGVyJztcblxuaWYoIGRlYnVnLmVuYWJsZWQoKSApe1xuICBkZWJ1Zy5pbml0KCk7XG59XG5cbmxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jvb3QnKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZGl2ICk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgaChSb3V0ZXIpLFxuICBkaXZcbik7XG4iLCJpbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBoIGZyb20gJ3JlYWN0LWh5cGVyc2NyaXB0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQnO1xuaW1wb3J0IFBhZ2VOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQnO1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgcmVuZGVyOiAoKSA9PiB7XG4gICAgICByZXR1cm4gaChEYXNoYm9hcmQpO1xuICAgIH1cbiAgfSxcbiAge1xuICAgIHJlbmRlcjogKCkgPT4ge1xuICAgICAgcmV0dXJuIGgoUGFnZU5vdEZvdW5kKTtcbiAgICB9LFxuICAgIHN0YXR1czogNDA0XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBSb3V0ZXIgPSAoKSA9PiAoXG4gIGgoIEJyb3dzZXJSb3V0ZXIsIFtcbiAgICBoKCBTd2l0Y2gsIHJvdXRlcy5tYXAoIHNwZWMgPT4ge1xuICAgICAgc3BlYyA9IF8uZGVmYXVsdHMoIHNwZWMsIHtcbiAgICAgICAgZXhhY3Q6IHRydWVcbiAgICAgIH0gKTtcblxuICAgICAgcmV0dXJuIGgoIFJvdXRlLCBzcGVjICk7XG4gICAgfSApIClcbiAgXSApXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7IiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuLyoqXG4gKiBBbiBvYmplY3QgdGhhdCBhY3RzIGFzIGEgcHJveHkgdG8gYW4gYEV2ZW50RW1pdHRlcmAuICBUaGUgcHJpbWFyeSB1c2UgZm9yIHRoaXMgcHJveHlcbiAqIGlzIHRvIGtlZXAgdHJhY2sgb2YgbGlzdGVuZXJzIHRoYXQgeW91IHJlZ2lzdGVyIG9uIHRoZSB0YXJnZXQgZW1pdHRlci4gIFlvdSBjYW5cbiAqIGByZW1vdmVBbGxMaXN0ZW5lcnMoKWAgb24gdGhlIHByb3h5IG9iamVjdCB0byByZW1vdmUganVzdCB5b3VyIGxpc3RlbmVycywgd2hpbGUga2VlcGluZ1xuICogbGlzdGVuZXJzIHRoYXQgeW91IGRpZG4ndCByZWdpc3RlciBvbiB0aGUgdGFyZ2V0IGVtaXR0ZXIgYXMtaXMuICBUaGlzIG1ha2VzIGl0IG11Y2hcbiAqIGVhc2llciB0byBtYWludGFpbiBkZXN0cnVjdG9yIGZ1bmN0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50RW1pdHRlclByb3h5IHtcbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgYEV2ZW50RW1pdHRlclByb3h5YC5cbiAgICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IHRhcmdldCBUaGUgZXZlbnQgZW1pdHRlciB0byBiZSBwcm94aWVkLlxuICAgKi9cbiAgY29uc3RydWN0b3IodGFyZ2V0KXtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpc3RlbmVyIHRvIHRoZSB0YXJnZXQgZXZlbnQgZW1pdHRlci4gIFRoZSBsaXN0ZW5lciBpcyBhcHBlbmVkIHRvIHRoZSBwcm94eSdzXG4gICAqIGxpc3RlbmVyIGxpc3QuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG8uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGV2ZW50IGhhbmRsZXIgY2FsbGJhY2sgZnVuY3Rpb24uICBJdCBpdCBjYWxsZWQgb24gdGhlIHNwZWNpZmllZCBgZXZlbnRgLlxuICAgKi9cbiAgb24oZXZlbnQsIGhhbmRsZXIpe1xuICAgIHRoaXMudGFyZ2V0Lm9uKGV2ZW50LCBoYW5kbGVyKTtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKHsgZXZlbnQsIGhhbmRsZXIgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBsaXN0ZW5lciB0byB0aGUgdGFyZ2V0IGV2ZW50IGVtaXR0ZXIuICBUaGUgbGlzdGVuZXIgaXMgYXBwZW5lZCB0byB0aGUgcHJveHknc1xuICAgKiBsaXN0ZW5lciBsaXN0LlxuICAgKiBAYWxpYXMgb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0by5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgZXZlbnQgaGFuZGxlciBjYWxsYmFjayBmdW5jdGlvbi4gIEl0IGl0IGNhbGxlZCBvbiB0aGUgc3BlY2lmaWVkIGBldmVudGAuXG4gICAqL1xuICBhZGRMaXN0ZW5lcihldmVudCwgaGFuZGxlcil7XG4gICAgcmV0dXJuIHRoaXMub24oZXZlbnQsIGhhbmRsZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGxpc3RlbmVyIG9uIHRoZSB0YXJnZXQgZW1pdHRlci4gIFRoZSBsaXN0ZW5lciBpcyByZW1vdmVkIGZyb20gdGhlIHByb3h5J3NcbiAgICogbGlzdGVuZXIgbGlzdC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBjYWxsYmFjayBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgKi9cbiAgcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpe1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICBfLnB1bGxBbGxCeSh0aGlzLmxpc3RlbmVycywgbCA9PiBsLmV2ZW50ID09PSBldmVudCAmJiBsLmhhbmRsZXIgPT09IGhhbmRsZXIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgdGhhdCBoYXZlIGJlZW4gcmVnaXN0ZXJlZCB0aHJvdWdoIHRoZSBwcm94eS5cbiAgICovXG4gIHJlbW92ZUFsbExpc3RlbmVycygpe1xuICAgIGZvciggbGV0IGkgPSB0aGlzLmxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSApe1xuICAgICAgbGV0IHsgZXZlbnQsIGhhbmRsZXIgfSA9IHRoaXMubGlzdGVuZXJzW2ldO1xuXG4gICAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaSwgMSk7IC8vIHJlbW92ZSBpdGhcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudEVtaXR0ZXJQcm94eTsiLCJpbXBvcnQgRXZlbnRFbWl0dGVyUHJveHkgZnJvbSAnLi9ldmVudC1lbWl0dGVyLXByb3h5JztcblxuZXhwb3J0IHsgRXZlbnRFbWl0dGVyUHJveHkgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=