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





var Dashboard = /*#__PURE__*/function (_Component) {
  _inherits(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _super.call(this, props);
    _this.controller = {}; // TODO

    return _this;
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      var controller = this.controller;
      return react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.dashboard', [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.dashboard-viz', [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()(_map__WEBPACK_IMPORTED_MODULE_2__["Map"], {
        controller: controller
      })]), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.dashboard-info-panel', [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()(_feed__WEBPACK_IMPORTED_MODULE_3__["Feed"])])]);
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

var Feed = function Feed() {
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('div.feed', 'Feed component');
};
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9mZWVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JvdXRlci5qcyJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJwcm9wcyIsImNvbnRyb2xsZXIiLCJoIiwiTWFwIiwiRmVlZCIsIkNvbXBvbmVudCIsImluaXRNYXAiLCJtYXAiLCJMIiwibWFwQ29udGFpbmVyIiwic2V0VmlldyIsInRpbGVMYXllciIsIm1heFpvb20iLCJhdHRyaWJ1dGlvbiIsImFkZFRvIiwicmVmIiwiZWwiLCJQYWdlTm90Rm91bmQiLCJzeW5jIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsImhlYWQiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiZGVidWciLCJlbmFibGVkIiwib24iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJfZW5hYmxlZCIsIkRFQlVHIiwicHJvY2VzcyIsImluaXQiLCJkb21SZWFkeSIsImRpdiIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiUm91dGVyIiwicm91dGVzIiwicGF0aCIsInN0YXR1cyIsIkJyb3dzZXJSb3V0ZXIi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ZCxDQUEyQkgsR0FBM0I7QUFFQUksZ0RBQVEsQ0FBQ0MsTUFBVCxDQUNFMUMsd0RBQUMsQ0FBQzJDLDhDQUFELENBREgsRUFFRU4sR0FGRixFOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1PLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLE1BQUksRUFBRSxHQURSO0FBRUVILFFBQU0sRUFBRSxrQkFBTTtBQUNaLFdBQU8xQyx3REFBQyxDQUFDSCw2REFBRCxDQUFSO0FBQ0Q7QUFKSCxDQURhLEVBT2I7QUFDRTZDLFFBQU0sRUFBRSxrQkFBTTtBQUNaLFdBQU8xQyx3REFBQyxDQUFDZSxrRUFBRCxDQUFSO0FBQ0QsR0FISDtBQUlFK0IsUUFBTSxFQUFFO0FBSlYsQ0FQYSxDQUFmO0FBZU8sSUFBTUgsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUNwQjNDLHdEQUFDLENBQUUrQyw4REFBRixFQUFpQixDQUNoQi9DLHdEQUFDLENBQUVnRCx1REFBRixFQUFVSixNQUFNLENBQUN2QyxHQUFQLENBQVksVUFBQTRDLElBQUksRUFBSTtBQUM3QkEsUUFBSSxHQUFHQyw2Q0FBQyxDQUFDQyxRQUFGLENBQVlGLElBQVosRUFBa0I7QUFDdkJHLFdBQUssRUFBRTtBQURnQixLQUFsQixDQUFQO0FBSUEsV0FBT3BELHdEQUFDLENBQUVxRCxzREFBRixFQUFTSixJQUFULENBQVI7QUFDRCxHQU5VLENBQVYsQ0FEZSxDQUFqQixDQURtQjtBQUFBLENBQWY7QUFZUU4scUVBQWYsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9jbGllbnQvaW5kZXguanNcIixcImRlcHNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgaCBmcm9tICdyZWFjdC1oeXBlcnNjcmlwdCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXAgfSBmcm9tICcuL21hcCc7XG5pbXBvcnQgeyBGZWVkIH0gZnJvbSAnLi9mZWVkJztcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmNvbnRyb2xsZXIgPSB7fTsgLy8gVE9ET1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBjb250cm9sbGVyIH0gPSB0aGlzO1xuXG4gICAgcmV0dXJuIGgoJ2Rpdi5kYXNoYm9hcmQnLCBbXG4gICAgICBoKCdkaXYuZGFzaGJvYXJkLXZpeicsIFtcbiAgICAgICAgaChNYXAsIHsgY29udHJvbGxlciB9KVxuICAgICAgXSksXG4gICAgICBoKCdkaXYuZGFzaGJvYXJkLWluZm8tcGFuZWwnLCBbXG4gICAgICAgIGgoRmVlZClcbiAgICAgIF0pXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyIsImltcG9ydCBoIGZyb20gJ3JlYWN0LWh5cGVyc2NyaXB0JztcblxuZXhwb3J0IGNvbnN0IEZlZWQgPSAoKSA9PiB7XG4gIHJldHVybiBoKCdkaXYuZmVlZCcsICdGZWVkIGNvbXBvbmVudCcpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZDsiLCJpbXBvcnQgaCBmcm9tICdyZWFjdC1oeXBlcnNjcmlwdCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcblxuZXhwb3J0IGNsYXNzIE1hcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHRoaXMuaW5pdE1hcCgpO1xuICB9XG5cbiAgaW5pdE1hcCgpe1xuICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwID0gTC5tYXAodGhpcy5tYXBDb250YWluZXIpO1xuXG4gICAgLy8gVE9ETyBzZXQgdGhpcyBiYXNlZCBvbiBncHMgcXVlcnkgLS0gY3VycmVudGx5IHVzaW5nIGxlYWZsZXQgZGVtbyBjb29yZHNcbiAgICBtYXAuc2V0VmlldyhbNTEuNTA1LCAtMC4wOV0sIDEzKTtcblxuICAgIC8vIGFkZCB0aGUgYmFja2dyb3VuZCB0aWxlcyBmb3IgdGhlIG1hcCB2aXpcbiAgICBMLnRpbGVMYXllcignaHR0cHM6Ly90aWxlcy5zdGFkaWFtYXBzLmNvbS90aWxlcy9hbGlkYWRlX3Ntb290aC97en0ve3h9L3t5fXtyfS5wbmcnLCB7XG4gICAgICBtYXhab29tOiAyMCxcbiAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3N0YWRpYW1hcHMuY29tL1wiPlN0YWRpYSBNYXBzPC9hPiwgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL29wZW5tYXB0aWxlcy5vcmcvXCI+T3Blbk1hcFRpbGVzPC9hPiAmY29weTsgPGEgaHJlZj1cImh0dHA6Ly9vcGVuc3RyZWV0bWFwLm9yZ1wiPk9wZW5TdHJlZXRNYXA8L2E+IGNvbnRyaWJ1dG9ycydcbiAgICB9KS5hZGRUbyh0aGlzLm1hcCk7XG5cbiAgICAvLyBhbHQgdGlsZSBsYXllciAtLSBkYXJrIG1vZGUsIGNvdWxkIGJlIHVzZWZ1bCBmb3IgY29sb3VyIGhpZ2hsaWdodHMgb24gdGhlIG1hcFxuICAgIC8vIHZhciBTdGFkaWFfQWxpZGFkZVNtb290aERhcmsgPSBMLnRpbGVMYXllcignaHR0cHM6Ly90aWxlcy5zdGFkaWFtYXBzLmNvbS90aWxlcy9hbGlkYWRlX3Ntb290aF9kYXJrL3t6fS97eH0ve3l9e3J9LnBuZycsIHtcbiAgICAvLyAgIG1heFpvb206IDIwLFxuICAgIC8vICAgYXR0cmlidXRpb246ICcmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vc3RhZGlhbWFwcy5jb20vXCI+U3RhZGlhIE1hcHM8L2E+LCAmY29weTsgPGEgaHJlZj1cImh0dHBzOi8vb3Blbm1hcHRpbGVzLm9yZy9cIj5PcGVuTWFwVGlsZXM8L2E+ICZjb3B5OyA8YSBocmVmPVwiaHR0cDovL29wZW5zdHJlZXRtYXAub3JnXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJ1xuICAgIC8vIH0pO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgY29uc3QgeyBjb250cm9sbGVyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIGgoJ2Rpdi5tYXAnLCB7XG4gICAgICByZWY6IGVsID0+IHRoaXMubWFwQ29udGFpbmVyID0gZWxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXA7IiwiaW1wb3J0IGggZnJvbSAncmVhY3QtaHlwZXJzY3JpcHQnO1xuXG5leHBvcnQgY29uc3QgUGFnZU5vdEZvdW5kID0gKCkgPT4ge1xuICByZXR1cm4gaCgnc3BhbicsICdQYWdlIG5vdCBmb3VuZCcpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZU5vdEZvdW5kOyIsImltcG9ydCBkb21SZWFkeSBmcm9tICdmcmVhZHknO1xuXG5jb25zdCBzeW5jID0gZnVuY3Rpb24oKXtcbiAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gJ2h0dHA6Ly8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJzozNTcyOS9saXZlcmVsb2FkLmpzJztcblxuICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZSggc2NyaXB0LCBkb2N1bWVudC5oZWFkLmZpcnN0Q2hpbGQgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWJ1ZyA9IHtcbiAgZW5hYmxlZDogZnVuY3Rpb24oIG9uICl7XG4gICAgaWYoIGFyZ3VtZW50cy5sZW5ndGggPT09IDAgKXtcbiAgICAgIGlmKCB0aGlzLl9lbmFibGVkICE9IG51bGwgKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuYWJsZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gd2luZG93LkRFQlVHIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2VuYWJsZWQgPSAhIW9uO1xuICAgIH1cbiAgfSxcblxuICBpbml0OiBmdW5jdGlvbigpe1xuICAgIGRvbVJlYWR5KCBzeW5jICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlYnVnOyIsIi8vIG11c3QgaW5jbHVkZSB0aGlzIHBvbHlmaWxsIGhlcmUgYi9jIGdlbmVyYXRvcnMgY2hhbmdlIHN5bnRheFxuLy8gKGFsbCBhc3luYy9nZW5lcmF0b3IgZnVuY3Rpb25zIGdldCB0cmFuc2Zvcm1lZCB0byB1c2UgdGhlIHJ1bnRpbWUsIG5vIG1hdHRlciB0aGUgYnJvd3NlcilcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcbmltcG9ydCAnbGVhZmxldC1wcm92aWRlcnMnO1xuXG5pbXBvcnQgZGVidWcgZnJvbSAnLi9kZWJ1Zyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBoIGZyb20gJ3JlYWN0LWh5cGVyc2NyaXB0JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4vcm91dGVyJztcblxuaWYoIGRlYnVnLmVuYWJsZWQoKSApe1xuICBkZWJ1Zy5pbml0KCk7XG59XG5cbmxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Jvb3QnKTtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggZGl2ICk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgaChSb3V0ZXIpLFxuICBkaXZcbik7XG4iLCJpbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBoIGZyb20gJ3JlYWN0LWh5cGVyc2NyaXB0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQnO1xuaW1wb3J0IFBhZ2VOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQnO1xuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgcmVuZGVyOiAoKSA9PiB7XG4gICAgICByZXR1cm4gaChEYXNoYm9hcmQpO1xuICAgIH1cbiAgfSxcbiAge1xuICAgIHJlbmRlcjogKCkgPT4ge1xuICAgICAgcmV0dXJuIGgoUGFnZU5vdEZvdW5kKTtcbiAgICB9LFxuICAgIHN0YXR1czogNDA0XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCBSb3V0ZXIgPSAoKSA9PiAoXG4gIGgoIEJyb3dzZXJSb3V0ZXIsIFtcbiAgICBoKCBTd2l0Y2gsIHJvdXRlcy5tYXAoIHNwZWMgPT4ge1xuICAgICAgc3BlYyA9IF8uZGVmYXVsdHMoIHNwZWMsIHtcbiAgICAgICAgZXhhY3Q6IHRydWVcbiAgICAgIH0gKTtcblxuICAgICAgcmV0dXJuIGgoIFJvdXRlLCBzcGVjICk7XG4gICAgfSApIClcbiAgXSApXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==