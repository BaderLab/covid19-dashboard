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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
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
    var _this;

    _classCallCheck(this, Map);

    _this = _super.call(this, props);
    _this.busProxy = new _util__WEBPACK_IMPORTED_MODULE_3__["EventEmitterProxy"](props.controller.bus);
    return _this;
  }

  _createClass(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.initMap();
      this.busProxy.addListener('refresh', function () {
        return _this2.updatePOIs();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.busProxy.removeAllListeners();
    }
  }, {
    key: "initMap",
    value: function initMap() {
      var map = this.map = leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.map(this.mapContainer); // TODO set this based on gps query -- currently using canned value from example data

      map.setView([43.83155486662417, -79.37278747558595], 10);
      window.map = map; // add the background tiles for the map viz

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
    key: "updatePOIs",
    value: function updatePOIs() {
      var _this3 = this;

      var data = this.props.controller.data;

      var makeGeo = function makeGeo(entry) {
        return leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.geoJSON(entry.location, {
          pointToLayer: function pointToLayer(feature, latlng) {
            return leaflet__WEBPACK_IMPORTED_MODULE_2___default.a.circleMarker(latlng, {
              radius: 8,
              fillColor: "#ff7800",
              color: "#000",
              weight: 1,
              opacity: 1,
              fillOpacity: 0.8
            });
          }
        }).addTo(_this3.map);
      };

      data.forEach(makeGeo);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var controller = this.props.controller;
      return react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.map', {
        ref: function ref(el) {
          return _this4.mapContainer = el;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9mZWVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9ldmVudC1lbWl0dGVyLXByb3h5LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJkYXRhIiwiYnVzIiwiRXZlbnRFbWl0dGVyIiwiY29uc29sZSIsImxvZyIsImVtaXQiLCJEYXNoYm9hcmQiLCJwcm9wcyIsImNvbnRyb2xsZXIiLCJnZXREYXRhIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwicmVmcmVzaCIsImgiLCJNYXAiLCJGZWVkIiwiQ29tcG9uZW50IiwiYnVzUHJveHkiLCJFdmVudEVtaXR0ZXJQcm94eSIsInNldFN0YXRlIiwiZGlydHkiLCJEYXRlIiwibm93IiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJtYXAiLCJlbnRyeSIsImRhdGUiLCJwYXJzZUlTTyIsInRpbWVzdGFtcCIsInJlbGF0aXZlRGF0ZSIsImZvcm1hdERpc3RhbmNlIiwiYWJzb2x1dGVEYXRlIiwiZm9ybWF0IiwicGF0aWVudF9pbmZvcm1hdGlvbiIsImFnZSIsInNleCIsInN5bXB0b21zIiwiZmV2ZXIiLCJjb3VnaCIsImZhdGlndWUiLCJTeW1wdG9tIiwiaGFzU3ltcHRvbSIsImljb24iLCJjbGFzc05hbWUiLCJjbGFzc05hbWVzIiwic3R5bGUiLCJ3aWR0aCIsImluaXRNYXAiLCJ1cGRhdGVQT0lzIiwiTCIsIm1hcENvbnRhaW5lciIsInNldFZpZXciLCJ3aW5kb3ciLCJ0aWxlTGF5ZXIiLCJtYXhab29tIiwiYXR0cmlidXRpb24iLCJhZGRUbyIsIm1ha2VHZW8iLCJnZW9KU09OIiwibG9jYXRpb24iLCJwb2ludFRvTGF5ZXIiLCJmZWF0dXJlIiwibGF0bG5nIiwiY2lyY2xlTWFya2VyIiwicmFkaXVzIiwiZmlsbENvbG9yIiwiY29sb3IiLCJ3ZWlnaHQiLCJvcGFjaXR5IiwiZmlsbE9wYWNpdHkiLCJmb3JFYWNoIiwicmVmIiwiZWwiLCJQYWdlTm90Rm91bmQiLCJzeW5jIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiaG9zdG5hbWUiLCJoZWFkIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsImRlYnVnIiwiZW5hYmxlZCIsIm9uIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiX2VuYWJsZWQiLCJERUJVRyIsInByb2Nlc3MiLCJpbml0IiwiZG9tUmVhZHkiLCJkaXYiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJSZWFjdERPTSIsInJlbmRlciIsIlJvdXRlciIsInJvdXRlcyIsInBhdGgiLCJzdGF0dXMiLCJCcm93c2VyUm91dGVyIiwiU3dpdGNoIiwic3BlYyIsIl8iLCJkZWZhdWx0cyIsImV4YWN0IiwiUm91dGUiLCJ0YXJnZXQiLCJsaXN0ZW5lcnMiLCJldmVudCIsImhhbmRsZXIiLCJwdXNoIiwicmVtb3ZlTGlzdGVuZXIiLCJwdWxsQWxsQnkiLCJsIiwiaSIsInNwbGljZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FB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Q0FBQyxFQUFqRCxFQUFxRDtBQUFBLGdDQUMxQixLQUFLUCxTQUFMLENBQWVPLENBQWYsQ0FEMEI7QUFBQSxZQUM3Q04sS0FENkMscUJBQzdDQSxLQUQ2QztBQUFBLFlBQ3RDQyxPQURzQyxxQkFDdENBLE9BRHNDO0FBR25ELGFBQUtILE1BQUwsQ0FBWUssY0FBWixDQUEyQkgsS0FBM0IsRUFBa0NDLE9BQWxDO0FBQ0EsYUFBS0YsU0FBTCxDQUFlUSxNQUFmLENBQXNCRCxDQUF0QixFQUF5QixDQUF6QixFQUptRCxDQUl0QjtBQUM5Qjs7QUFFRCxhQUFPLElBQVA7QUFDRDtBQTNESDs7QUFBQTtBQUFBO0FBOERlckcsZ0ZBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvY2xpZW50L2luZGV4LmpzXCIsXCJkZXBzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudGVtaXR0ZXIzJztcblxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihkYXRhKXtcbiAgICB0aGlzLmJ1cyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgfVxuXG4gIHJlZnJlc2goZGF0YSl7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgdGhpcy5idXMuZW1pdCgncmVmcmVzaCcpO1xuICB9XG5cbiAgc2V0Vmlld3BvcnQoKXtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7IiwiaW1wb3J0IGggZnJvbSAncmVhY3QtaHlwZXJzY3JpcHQnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFwIH0gZnJvbSAnLi9tYXAnO1xuaW1wb3J0IHsgRmVlZCB9IGZyb20gJy4vZmVlZCc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL3Rlc3QtZGF0YS5qc29uJyk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgdGhpcy5jb250cm9sbGVyLnJlZnJlc2goZGF0YSk7XG4gICAgfTtcblxuICAgIGdldERhdGEoKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgY29udHJvbGxlciB9ID0gdGhpcztcblxuICAgIHJldHVybiBoKCdkaXYuZGFzaGJvYXJkJywgW1xuICAgICAgaCgnZGl2LmRhc2hib2FyZC12aXonLCBbXG4gICAgICAgIGgoTWFwLCB7IGNvbnRyb2xsZXIgfSlcbiAgICAgIF0pLFxuICAgICAgaCgnZGl2LmRhc2hib2FyZC1pbmZvLXBhbmVsJywgW1xuICAgICAgICBoKEZlZWQsIHsgY29udHJvbGxlciB9KVxuICAgICAgXSlcbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7IiwiaW1wb3J0IGggZnJvbSAncmVhY3QtaHlwZXJzY3JpcHQnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyUHJveHkgfSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCB7IHBhcnNlSVNPLCBmb3JtYXREaXN0YW5jZSwgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBjbGFzcyBGZWVkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLmJ1c1Byb3h5ID0gbmV3IEV2ZW50RW1pdHRlclByb3h5KHByb3BzLmNvbnRyb2xsZXIuYnVzKTtcbiAgfVxuXG4gIGRpcnR5KCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpcnR5OiBEYXRlLm5vdygpIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICB0aGlzLmJ1c1Byb3h5LmFkZExpc3RlbmVyKCdyZWZyZXNoJywgKCkgPT4gdGhpcy5kaXJ0eSgpKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCl7XG4gICAgdGhpcy5idXNQcm94eS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgY29udHJvbGxlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgcmV0dXJuIGgoJ2Rpdi5mZWVkJywgY29udHJvbGxlci5kYXRhLm1hcChlbnRyeSA9PiB7XG4gICAgICBjb25zdCBkYXRlID0gcGFyc2VJU08oZW50cnkudGltZXN0YW1wKTtcbiAgICAgIGNvbnN0IHJlbGF0aXZlRGF0ZSA9IGZvcm1hdERpc3RhbmNlKGRhdGUsIG5vdykgKyAnIGFnbyc7XG4gICAgICBjb25zdCBhYnNvbHV0ZURhdGUgPSBmb3JtYXQoZGF0ZSwgJ3l5eXktTU0tZGQnKTtcbiAgICAgIGNvbnN0IHsgYWdlLCBzZXggfSA9IGVudHJ5LnBhdGllbnRfaW5mb3JtYXRpb247XG4gICAgICBjb25zdCB7IGZldmVyLCBjb3VnaCwgZmF0aWd1ZSB9ID0gZW50cnkuc3ltcHRvbXM7XG4gICAgICBcbiAgICAgIGNvbnN0IFN5bXB0b20gPSAoeyBoYXNTeW1wdG9tLCBpY29uIH0pID0+IGgoJ2Rpdi5mZWVkLXN5bXB0b20nLCB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyh7ICdmZWVkLXN5bXB0b20tdHJ1ZSc6IGhhc1N5bXB0b20gfSlcbiAgICAgIH0sIFtcbiAgICAgICAgaChgaS5mYXMuZmEtZncuZmEtJHtpY29ufWApXG4gICAgICBdKTtcblxuICAgICAgcmV0dXJuIGgoJ2Rpdi5mZWVkLWVudHJ5JywgW1xuICAgICAgICBoKCdkaXYuZmVlZC10aXRsZScsIFtcbiAgICAgICAgICBoKCdkaXYuZmVlZC1wYXRpZW50JywgW1xuICAgICAgICAgICAgaCgnZGl2LmZlZWQtcGF0aWVudC1kZXNjcicsIFtcbiAgICAgICAgICAgICAgaCgnZGl2LmZlZWQtYWdlJywgYWdlKSxcbiAgICAgICAgICAgICAgaCgnZGl2LmZlZWQtc2V4Jywgc2V4KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBoKCdkaXYuZmVlZC1zeW1wdG9tcycsIFtcbiAgICAgICAgICAgICAgaChTeW1wdG9tLCB7IGhhc1N5bXB0b206IGZldmVyLCBpY29uOiAndGhlcm1vbWV0ZXItdGhyZWUtcXVhcnRlcnMnIH0pLFxuICAgICAgICAgICAgICBoKFN5bXB0b20sIHsgaGFzU3ltcHRvbTogY291Z2gsIGljb246ICdoZWFkLXNpZGUtY291Z2gnIH0pLFxuICAgICAgICAgICAgICBoKFN5bXB0b20sIHsgaGFzU3ltcHRvbTogZmF0aWd1ZSwgaWNvbjogJ2JlZCcgfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGgoJ2Rpdi5mZWVkLWRhdGUnLCBbXG4gICAgICAgICAgICBoKCdkaXYuZmVlZC1kYXRlLXJlbGF0aXZlJywgcmVsYXRpdmVEYXRlKSxcbiAgICAgICAgICAgIGgoJ2Rpdi5mZWVkLWRhdGUtYWJzb2x1dGUnLCBhYnNvbHV0ZURhdGUpXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBoKCdkaXYuZmVlZC10ZXN0cycsIFtcbiAgICAgICAgICBoKCdkaXYuZmVlZC10ZXN0JywgeyBzdHlsZTogeyB3aWR0aDogJzEwMCUnIH0gfSksXG4gICAgICAgICAgaCgnZGl2LmZlZWQtdGVzdCcsIHsgc3R5bGU6IHsgd2lkdGg6ICc2NiUnIH0gfSksXG4gICAgICAgICAgaCgnZGl2LmZlZWQtdGVzdCcsIHsgc3R5bGU6IHsgd2lkdGg6ICczMyUnIH0gfSlcbiAgICAgICAgXSlcbiAgICAgIF0pO1xuICAgIH0pKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWVkOyIsImltcG9ydCBoIGZyb20gJ3JlYWN0LWh5cGVyc2NyaXB0JztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyUHJveHkgfSBmcm9tICcuLi8uLi91dGlsJztcbmltcG9ydCB7IGFkZCB9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGNsYXNzIE1hcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmJ1c1Byb3h5ID0gbmV3IEV2ZW50RW1pdHRlclByb3h5KHByb3BzLmNvbnRyb2xsZXIuYnVzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgdGhpcy5pbml0TWFwKCk7XG5cbiAgICB0aGlzLmJ1c1Byb3h5LmFkZExpc3RlbmVyKCdyZWZyZXNoJywgKCkgPT4gdGhpcy51cGRhdGVQT0lzKCkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcbiAgICB0aGlzLmJ1c1Byb3h5LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICB9XG5cbiAgaW5pdE1hcCgpe1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwID0gTC5tYXAodGhpcy5tYXBDb250YWluZXIpO1xuXG4gICAgLy8gVE9ETyBzZXQgdGhpcyBiYXNlZCBvbiBncHMgcXVlcnkgLS0gY3VycmVudGx5IHVzaW5nIGNhbm5lZCB2YWx1ZSBmcm9tIGV4YW1wbGUgZGF0YVxuICAgIG1hcC5zZXRWaWV3KFs0My44MzE1NTQ4NjY2MjQxNywgLTc5LjM3Mjc4NzQ3NTU4NTk1XSwgMTApO1xuXG4gICAgd2luZG93Lm1hcCA9IG1hcDtcblxuICAgIC8vIGFkZCB0aGUgYmFja2dyb3VuZCB0aWxlcyBmb3IgdGhlIG1hcCB2aXpcbiAgICBMLnRpbGVMYXllcignaHR0cHM6Ly90aWxlcy5zdGFkaWFtYXBzLmNvbS90aWxlcy9hbGlkYWRlX3Ntb290aC97en0ve3h9L3t5fXtyfS5wbmcnLCB7XG4gICAgICBtYXhab29tOiAyMCxcbiAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3N0YWRpYW1hcHMuY29tL1wiPlN0YWRpYSBNYXBzPC9hPiwgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL29wZW5tYXB0aWxlcy5vcmcvXCI+T3Blbk1hcFRpbGVzPC9hPiAmY29weTsgPGEgaHJlZj1cImh0dHA6Ly9vcGVuc3RyZWV0bWFwLm9yZ1wiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICB9KS5hZGRUbyh0aGlzLm1hcCk7XG5cbiAgICAvLyBhbHQgdGlsZSBsYXllciAtLSBkYXJrIG1vZGUsIGNvdWxkIGJlIHVzZWZ1bCBmb3IgY29sb3VyIGhpZ2hsaWdodHMgb24gdGhlIG1hcFxuICAgIC8vIHZhciBTdGFkaWFfQWxpZGFkZVNtb290aERhcmsgPSBMLnRpbGVMYXllcignaHR0cHM6Ly90aWxlcy5zdGFkaWFtYXBzLmNvbS90aWxlcy9hbGlkYWRlX3Ntb290aF9kYXJrL3t6fS97eH0ve3l9e3J9LnBuZycsIHtcbiAgICAvLyAgIG1heFpvb206IDIwLFxuICAgIC8vICAgYXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vc3RhZGlhbWFwcy5jb20vXCI+U3RhZGlhIE1hcHM8L2E+LCAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vb3Blbm1hcHRpbGVzLm9yZy9cIj5PcGVuTWFwVGlsZXM8L2E+ICZjb3B5OyA8YSBocmVmPVwiaHR0cDovL29wZW5zdHJlZXRtYXAub3JnXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgIC8vIH0pO1xuICB9XG5cbiAgdXBkYXRlUE9Jcygpe1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wcy5jb250cm9sbGVyO1xuXG4gICAgY29uc3QgbWFrZUdlbyA9IGVudHJ5ID0+IEwuZ2VvSlNPTihlbnRyeS5sb2NhdGlvbiwge1xuICAgICAgcG9pbnRUb0xheWVyOiAoZmVhdHVyZSwgbGF0bG5nKSA9PiB7XG4gICAgICAgIHJldHVybiBMLmNpcmNsZU1hcmtlcihsYXRsbmcsIHtcbiAgICAgICAgICByYWRpdXM6IDgsXG4gICAgICAgICAgZmlsbENvbG9yOiBcIiNmZjc4MDBcIixcbiAgICAgICAgICBjb2xvcjogXCIjMDAwXCIsXG4gICAgICAgICAgd2VpZ2h0OiAxLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgZmlsbE9wYWNpdHk6IDAuOFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KS5hZGRUbyh0aGlzLm1hcCk7XG5cbiAgICBkYXRhLmZvckVhY2gobWFrZUdlbyk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBjb25zdCB7IGNvbnRyb2xsZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gaCgnZGl2Lm1hcCcsIHtcbiAgICAgIHJlZjogZWwgPT4gdGhpcy5tYXBDb250YWluZXIgPSBlbFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDsiLCJpbXBvcnQgaCBmcm9tICdyZWFjdC1oeXBlcnNjcmlwdCc7XG5cbmV4cG9ydCBjb25zdCBQYWdlTm90Rm91bmQgPSAoKSA9PiB7XG4gIHJldHVybiBoKCdzcGFuJywgJ1BhZ2Ugbm90IGZvdW5kJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlTm90Rm91bmQ7IiwiaW1wb3J0IGRvbVJlYWR5IGZyb20gJ2ZyZWFkeSc7XG5cbmNvbnN0IHN5bmMgPSBmdW5jdGlvbigpe1xuICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdC5zcmMgPSAnaHR0cDovLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnOjM1NzI5L2xpdmVyZWxvYWQuanMnO1xuXG4gIGRvY3VtZW50LmhlYWQuaW5zZXJ0QmVmb3JlKCBzY3JpcHQsIGRvY3VtZW50LmhlYWQuZmlyc3RDaGlsZCApO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlYnVnID0ge1xuICBlbmFibGVkOiBmdW5jdGlvbiggb24gKXtcbiAgICBpZiggYXJndW1lbnRzLmxlbmd0aCA9PT0gMCApe1xuICAgICAgaWYoIHRoaXMuX2VuYWJsZWQgIT0gbnVsbCApe1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5hYmxlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuREVCVUcgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZW5hYmxlZCA9ICEhb247XG4gICAgfVxuICB9LFxuXG4gIGluaXQ6IGZ1bmN0aW9uKCl7XG4gICAgZG9tUmVhZHkoIHN5bmMgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVidWc7IiwiLy8gbXVzdCBpbmNsdWRlIHRoaXMgcG9seWZpbGwgaGVyZSBiL2MgZ2VuZXJhdG9ycyBjaGFuZ2Ugc3ludGF4XG4vLyAoYWxsIGFzeW5jL2dlbmVyYXRvciBmdW5jdGlvbnMgZ2V0IHRyYW5zZm9ybWVkIHRvIHVzZSB0aGUgcnVudGltZSwgbm8gbWF0dGVyIHRoZSBicm93c2VyKVxuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuaW1wb3J0ICdsZWFmbGV0LXByb3ZpZGVycyc7XG5cbmltcG9ydCBkZWJ1ZyBmcm9tICcuL2RlYnVnJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGggZnJvbSAncmVhY3QtaHlwZXJzY3JpcHQnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInO1xuXG5pZiggZGVidWcuZW5hYmxlZCgpICl7XG4gIGRlYnVnLmluaXQoKTtcbn1cblxubGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAncm9vdCcpO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCBkaXYgKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICBoKFJvdXRlciksXG4gIGRpdlxuKTtcbiIsImltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGggZnJvbSAncmVhY3QtaHlwZXJzY3JpcHQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZCc7XG5pbXBvcnQgUGFnZU5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZCc7XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICByZW5kZXI6ICgpID0+IHtcbiAgICAgIHJldHVybiBoKERhc2hib2FyZCk7XG4gICAgfVxuICB9LFxuICB7XG4gICAgcmVuZGVyOiAoKSA9PiB7XG4gICAgICByZXR1cm4gaChQYWdlTm90Rm91bmQpO1xuICAgIH0sXG4gICAgc3RhdHVzOiA0MDRcbiAgfVxuXTtcblxuZXhwb3J0IGNvbnN0IFJvdXRlciA9ICgpID0+IChcbiAgaCggQnJvd3NlclJvdXRlciwgW1xuICAgIGgoIFN3aXRjaCwgcm91dGVzLm1hcCggc3BlYyA9PiB7XG4gICAgICBzcGVjID0gXy5kZWZhdWx0cyggc3BlYywge1xuICAgICAgICBleGFjdDogdHJ1ZVxuICAgICAgfSApO1xuXG4gICAgICByZXR1cm4gaCggUm91dGUsIHNwZWMgKTtcbiAgICB9ICkgKVxuICBdIClcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjsiLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG4vKipcbiAqIEFuIG9iamVjdCB0aGF0IGFjdHMgYXMgYSBwcm94eSB0byBhbiBgRXZlbnRFbWl0dGVyYC4gIFRoZSBwcmltYXJ5IHVzZSBmb3IgdGhpcyBwcm94eVxuICogaXMgdG8ga2VlcCB0cmFjayBvZiBsaXN0ZW5lcnMgdGhhdCB5b3UgcmVnaXN0ZXIgb24gdGhlIHRhcmdldCBlbWl0dGVyLiAgWW91IGNhblxuICogYHJlbW92ZUFsbExpc3RlbmVycygpYCBvbiB0aGUgcHJveHkgb2JqZWN0IHRvIHJlbW92ZSBqdXN0IHlvdXIgbGlzdGVuZXJzLCB3aGlsZSBrZWVwaW5nXG4gKiBsaXN0ZW5lcnMgdGhhdCB5b3UgZGlkbid0IHJlZ2lzdGVyIG9uIHRoZSB0YXJnZXQgZW1pdHRlciBhcy1pcy4gIFRoaXMgbWFrZXMgaXQgbXVjaFxuICogZWFzaWVyIHRvIG1haW50YWluIGRlc3RydWN0b3IgZnVuY3Rpb25zLlxuICovXG5leHBvcnQgY2xhc3MgRXZlbnRFbWl0dGVyUHJveHkge1xuICAvKipcbiAgICogQ3JlYXRlIHRoZSBgRXZlbnRFbWl0dGVyUHJveHlgLlxuICAgKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gdGFyZ2V0IFRoZSBldmVudCBlbWl0dGVyIHRvIGJlIHByb3hpZWQuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQpe1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgbGlzdGVuZXIgdG8gdGhlIHRhcmdldCBldmVudCBlbWl0dGVyLiAgVGhlIGxpc3RlbmVyIGlzIGFwcGVuZWQgdG8gdGhlIHByb3h5J3NcbiAgICogbGlzdGVuZXIgbGlzdC5cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lIHRvIGxpc3RlbiB0by5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgZXZlbnQgaGFuZGxlciBjYWxsYmFjayBmdW5jdGlvbi4gIEl0IGl0IGNhbGxlZCBvbiB0aGUgc3BlY2lmaWVkIGBldmVudGAuXG4gICAqL1xuICBvbihldmVudCwgaGFuZGxlcil7XG4gICAgdGhpcy50YXJnZXQub24oZXZlbnQsIGhhbmRsZXIpO1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goeyBldmVudCwgaGFuZGxlciB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGxpc3RlbmVyIHRvIHRoZSB0YXJnZXQgZXZlbnQgZW1pdHRlci4gIFRoZSBsaXN0ZW5lciBpcyBhcHBlbmVkIHRvIHRoZSBwcm94eSdzXG4gICAqIGxpc3RlbmVyIGxpc3QuXG4gICAqIEBhbGlhcyBvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBldmVudCBoYW5kbGVyIGNhbGxiYWNrIGZ1bmN0aW9uLiAgSXQgaXQgY2FsbGVkIG9uIHRoZSBzcGVjaWZpZWQgYGV2ZW50YC5cbiAgICovXG4gIGFkZExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKXtcbiAgICByZXR1cm4gdGhpcy5vbihldmVudCwgaGFuZGxlcik7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGEgbGlzdGVuZXIgb24gdGhlIHRhcmdldCBlbWl0dGVyLiAgVGhlIGxpc3RlbmVyIGlzIHJlbW92ZWQgZnJvbSB0aGUgcHJveHknc1xuICAgKiBsaXN0ZW5lciBsaXN0LlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIGNhbGxiYWNrIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAqL1xuICByZW1vdmVMaXN0ZW5lcihldmVudCwgaGFuZGxlcil7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgIF8ucHVsbEFsbEJ5KHRoaXMubGlzdGVuZXJzLCBsID0+IGwuZXZlbnQgPT09IGV2ZW50ICYmIGwuaGFuZGxlciA9PT0gaGFuZGxlcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGxpc3RlbmVycyB0aGF0IGhhdmUgYmVlbiByZWdpc3RlcmVkIHRocm91Z2ggdGhlIHByb3h5LlxuICAgKi9cbiAgcmVtb3ZlQWxsTGlzdGVuZXJzKCl7XG4gICAgZm9yKCBsZXQgaSA9IHRoaXMubGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tICl7XG4gICAgICBsZXQgeyBldmVudCwgaGFuZGxlciB9ID0gdGhpcy5saXN0ZW5lcnNbaV07XG5cbiAgICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpLCAxKTsgLy8gcmVtb3ZlIGl0aFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlclByb3h5OyIsImltcG9ydCBFdmVudEVtaXR0ZXJQcm94eSBmcm9tICcuL2V2ZW50LWVtaXR0ZXItcHJveHknO1xuXG5leHBvcnQgeyBFdmVudEVtaXR0ZXJQcm94eSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==