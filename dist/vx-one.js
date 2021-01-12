(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vx", [], factory);
	else if(typeof exports === 'object')
		exports["vx"] = factory();
	else
		root["vx"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/AnimManager.js":
/*!****************************!*\
  !*** ./src/AnimManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Anim = /*#__PURE__*/function () {
  function Anim(frames, rate) {
    _classCallCheck(this, Anim);

    this.frames = frames;
    this.rate = rate;
    this.reset();
  }

  _createClass(Anim, [{
    key: "reset",
    value: function reset() {
      this.frame = this.frames[0];
      this.curFrame = 0;
      this.curTime = 0;
    }
  }, {
    key: "update",
    value: function update(dt) {
      var rate = this.rate,
          frames = this.frames;

      if ((this.curTime += dt) > rate) {
        this.curFrame++;
        this.frame = frames[this.curFrame % frames.length];
        this.curTime -= rate;
      }
    }
  }]);

  return Anim;
}();

var AnimManager = /*#__PURE__*/function () {
  function AnimManager() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      x: 0,
      y: 0
    };

    _classCallCheck(this, AnimManager);

    this.anims = {};
    this.running = false;
    this.frameSource = e.frame || e;
    this.current = null;
  }

  _createClass(AnimManager, [{
    key: "add",
    value: function add(name, frames, speed) {
      this.anims[name] = new Anim(frames, speed);
      return this.anims[name];
    }
  }, {
    key: "update",
    value: function update(dt) {
      var current = this.current,
          anims = this.anims,
          frameSource = this.frameSource;

      if (!current) {
        return;
      }

      var anim = anims[current];
      anim.update(dt); // Sync the tileSprite frame

      frameSource.x = anim.frame.x;
      frameSource.y = anim.frame.y;
    }
  }, {
    key: "play",
    value: function play(anim) {
      var current = this.current,
          anims = this.anims;

      if (anim === current) {
        return;
      }

      this.current = anim;
      anims[anim].reset();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.current = null;
    }
  }]);

  return AnimManager;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimManager);

/***/ }),

/***/ "./src/Camera.js":
/*!***********************!*\
  !*** ./src/Camera.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container.js */ "./src/Container.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Camera = /*#__PURE__*/function (_Container) {
  _inherits(Camera, _Container);

  var _super = _createSuper(Camera);

  function Camera(subject, viewport) {
    var _this;

    var worldSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : viewport;

    _classCallCheck(this, Camera);

    _this = _super.call(this);
    _this.w = viewport.w;
    _this.h = viewport.h;
    _this.worldSize = worldSize;

    _this.setSubject(subject);

    return _this;
  }

  _createClass(Camera, [{
    key: "setSubject",
    value: function setSubject(e) {
      this.subject = e ? e.pos || e : this.pos;
      this.offset = {
        x: 0,
        y: 0
      }; // Center on the entity

      if (e && e.w) {
        this.offset.x += e.w / 2;
        this.offset.y += e.h / 2;
      }

      if (e && e.anchor) {
        this.offset.x -= e.anchor.x;
        this.offset.y -= e.anchor.y;
      }

      this.focus();
    }
  }, {
    key: "focus",
    value: function focus() {
      var pos = this.pos,
          w = this.w,
          h = this.h,
          worldSize = this.worldSize,
          subject = this.subject,
          offset = this.offset;
      var centeredX = subject.x + offset.x - w / 2;
      var maxX = worldSize.w - w;
      var x = -_utils_js__WEBPACK_IMPORTED_MODULE_1__.default.clamp(centeredX, 0, maxX);
      var centeredY = subject.y + offset.y - h / 2;
      var maxY = worldSize.h - h;
      var y = -_utils_js__WEBPACK_IMPORTED_MODULE_1__.default.clamp(centeredY, 0, maxY);
      pos.x = x;
      pos.y = y;
    }
  }, {
    key: "update",
    value: function update(dt, t) {
      _get(_getPrototypeOf(Camera.prototype), "update", this).call(this, dt, t);

      if (this.subject) {
        this.focus();
      }
    }
  }]);

  return Camera;
}(_Container_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Camera);

/***/ }),

/***/ "./src/Constants.js":
/*!**************************!*\
  !*** ./src/Constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scale": () => /* binding */ Scale,
/* harmony export */   "State": () => /* binding */ State,
/* harmony export */   "Graph": () => /* binding */ Graph
/* harmony export */ });
var Scale = {
  RESIZE: 0,
  NONE: 1
};
var State = {
  NONE: 0,
  LOADING: 1,
  READY: 2,
  RUNNING: 3,
  SLEEPING: 4
};
var Graph = {
  ROUND_RECT: 0,
  RECT: 1
};


/***/ }),

/***/ "./src/Container.js":
/*!**************************!*\
  !*** ./src/Container.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Container = /*#__PURE__*/function () {
  function Container() {
    _classCallCheck(this, Container);

    this.pos = {
      x: 0,
      y: 0
    };
    this.children = [];
  }

  _createClass(Container, [{
    key: "update",
    value: function update(dt, t) {
      var _this = this;

      this.children = this.children.filter(function (child) {
        if (child.update) {
          child.update(dt, t, _this);
        }

        return child.dead ? false : true;
      });
    }
  }, {
    key: "add",
    value: function add(child) {
      this.children.push(child);
      return child;
    }
  }, {
    key: "remove",
    value: function remove(child) {
      this.children = this.children.filter(function (c) {
        return c !== child;
      });
      return child;
    }
  }, {
    key: "map",
    value: function map(f) {
      return this.children.map(f);
    }
  }]);

  return Container;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./src/Debug.js":
/*!**********************!*\
  !*** ./src/Debug.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container.js */ "./src/Container.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Text.js */ "./src/Text.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Debug = /*#__PURE__*/function (_Container) {
  _inherits(Debug, _Container);

  var _super = _createSuper(Debug);

  function Debug() {
    var _this;

    _classCallCheck(this, Debug);

    _this = _super.call(this);
    _this.active = false;
    var fpsTxt = new _Text_js__WEBPACK_IMPORTED_MODULE_1__.default('fps: ');
    fpsTxt.name = 'fps';
    fpsTxt.pos = {
      x: 5,
      y: 15
    };
    fpsTxt.style = {
      font: '16px Arial',
      fill: 'red',
      align: 'left'
    };

    _this.add(fpsTxt);

    return _this;
  }

  return Debug;
}(_Container_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Debug);

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer.js */ "./src/Renderer.js");
/* harmony import */ var _Inputs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inputs.js */ "./src/Inputs.js");
/* harmony import */ var _Debug_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Debug.js */ "./src/Debug.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Game = /*#__PURE__*/function () {
  function Game(config) {
    _classCallCheck(this, Game);

    _defineProperty(this, "step", 1 / 60);

    _defineProperty(this, "MAX_FRAME", this.step * 5);

    this.w = config.w;
    this.h = config.h;
    this.renderer = this.createRenderer(config);
    this.scenes = [];
    this.scene;
    this.textures;
    this.controls = new _Inputs_js__WEBPACK_IMPORTED_MODULE_1__.KeyControls();
    this.debug = new _Debug_js__WEBPACK_IMPORTED_MODULE_2__.default();
    this.debug.active = config.debugMode;
  }

  _createClass(Game, [{
    key: "addScene",
    value: function addScene(scene) {
      if (this.debug.active) scene.add(this.debug);
      if (!this.scene) this.scene = scene;
      this.scenes.push(scene);
    }
  }, {
    key: "launchScene",
    value: function launchScene(sceneName) {
      this.scene = this.scenes.find(function (s) {
        return s.key === sceneName;
      });
      this.scene.init();
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      var gameUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      var MAX_FRAME = this.MAX_FRAME;
      var dt = 0;
      var last = 0;
      var fps = 0;

      var mainloop = function mainloop(ms) {
        requestAnimationFrame(mainloop); // create delta

        var t = ms / 1000;
        dt = Math.min(t - last, MAX_FRAME);
        last = t;
        fps = Math.round(1 / dt);
        if (!_this.scene && _this.debug.active) return;
        if (_this.debug.active) _this.scene.children.find(function (child) {
          return child instanceof _Debug_js__WEBPACK_IMPORTED_MODULE_2__.default;
        }).children.find(function (c) {
          return c.name === "fps";
        }).text = 'fps: ' + fps;

        _this.scene.update(dt, t);

        gameUpdate(dt, t, _this.controls);

        _this.renderer.render(_this.scene);
      };

      requestAnimationFrame(mainloop);
    }
  }, {
    key: "createRenderer",
    value: function createRenderer(config) {
      var renderer = new _Renderer_js__WEBPACK_IMPORTED_MODULE_0__.default(config);
      var parent = config.parent || "game";
      var el = document.querySelector(config.parent);

      if (!el) {
        document.body.innerHTML = '<div id="' + parent + '"></div>';
      }

      document.getElementById(parent).appendChild(renderer.view);
      return renderer;
    }
  }]);

  return Game;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/GameObject.js":
/*!***************************!*\
  !*** ./src/GameObject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container.js */ "./src/Container.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var GameObject = function GameObject() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  _classCallCheck(this, GameObject);

  this.name = name;
  this.pos = {
    x: 0,
    y: 0
  };
  this.scale = {
    x: 1,
    y: 1
  };
  this.anchor = {
    x: 0,
    y: 0
  };
  this.pivot = {
    x: 0,
    y: 0
  };
  this.rotation = 0;
  this.visible = true;
  this.zIndex = 1;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameObject);

/***/ }),

/***/ "./src/Graphics.js":
/*!*************************!*\
  !*** ./src/Graphics.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ "./src/GameObject.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Graphics = /*#__PURE__*/function (_GameObject) {
  _inherits(Graphics, _GameObject);

  var _super = _createSuper(Graphics);

  function Graphics() {
    var _this;

    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, Graphics);

    _this = _super.call(this);
    _this.type = type;
    _this.src = {};
    return _this;
  }

  return Graphics;
}(_GameObject_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graphics);

/***/ }),

/***/ "./src/Inputs.js":
/*!***********************!*\
  !*** ./src/Inputs.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyControls": () => /* binding */ KeyControls,
/* harmony export */   "MouseControls": () => /* binding */ MouseControls
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var KeyControls = /*#__PURE__*/function () {
  function KeyControls() {
    var _this = this;

    _classCallCheck(this, KeyControls);

    this.keys = {};
    document.addEventListener("keydown", function (e) {
      // Check is a trick to stop the browser scrolling if the game is embedded in a web page that has scrollbars
      if ([37, 38, 39, 40, 32].indexOf(e.which) >= 0) {
        e.preventDefault();
      }

      _this.keys[e.keyCode] = true;
    }, false);
    document.addEventListener("keyup", function (e) {
      _this.keys[e.which] = false;
    }, false);
  }

  _createClass(KeyControls, [{
    key: "key",
    value: function key(_key, value) {
      if (value !== undefined) {
        this.keys[_key] = value;
      }

      return this.keys[_key];
    }
  }, {
    key: "reset",
    value: function reset() {
      for (var key in this.keys) {
        this.keys[key] = false;
      }
    } // Handle key actions

  }, {
    key: "action",
    get: function get() {
      return this.keys[32];
    }
  }, {
    key: "x",
    get: function get() {
      // left arrow or A key
      if (this.keys[37] || this.keys[65]) {
        return -1;
      } // right arrow or D key


      if (this.keys[39] || this.keys[68]) {
        return 1;
      }

      return 0;
    }
  }, {
    key: "y",
    get: function get() {
      // up arrow or W key
      if (this.keys[38] || this.keys[87]) {
        return -1;
      } // down arrow or S key


      if (this.keys[40] || this.keys[83]) {
        return 1;
      }

      return 0;
    }
  }]);

  return KeyControls;
}();

var MouseControls = /*#__PURE__*/function () {
  function MouseControls(container) {
    var _this2 = this;

    _classCallCheck(this, MouseControls);

    this.el = container || document.body;
    this.pos = {
      x: 0,
      y: 0
    };
    this.isDown = false;
    this.pressed = false;
    this.released = false; // Handlers

    document.addEventListener("mousedown", function (e) {
      return _this2.down(e);
    }, false);
    document.addEventListener("mouseup", function (e) {
      return _this2.up(e);
    }, false);
    document.addEventListener("mousemove", function (e) {
      return _this2.move(e);
    }, false);
  }

  _createClass(MouseControls, [{
    key: "mousePosFromEvent",
    value: function mousePosFromEvent(_ref) {
      var clientX = _ref.clientX,
          clientY = _ref.clientY;
      var el = this.el,
          pos = this.pos;
      var rect = el.getBoundingClientRect();
      var xr = el.width / el.clientWidth;
      var yr = el.height / el.clientHeight;
      pos.x = (clientX - rect.left) * xr;
      pos.y = (clientY - rect.top) * yr;
    }
  }, {
    key: "down",
    value: function down(e) {
      this.isDown = true;
      this.pressed = true;
      this.mousePosFromEvent(e);
    }
  }, {
    key: "up",
    value: function up() {
      this.isDown = false;
      this.released = true;
    }
  }, {
    key: "move",
    value: function move(e) {
      this.mousePosFromEvent(e);
    }
  }, {
    key: "update",
    value: function update() {
      this.released = false;
      this.pressed = false;
    }
  }]);

  return MouseControls;
}();



/***/ }),

/***/ "./src/Renderer.js":
/*!*************************!*\
  !*** ./src/Renderer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite.js */ "./src/Sprite.js");
/* harmony import */ var _Graphics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graphics.js */ "./src/Graphics.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants.js */ "./src/Constants.js");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Render = /*#__PURE__*/function () {
  function Render(config) {
    _classCallCheck(this, Render);

    var canvas = document.createElement("canvas");
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.textBaseline = "top";
    this.w = canvas.width = config.w;
    this.h = canvas.height = config.h;

    if (config.pixel) {
      canvas.style.imageRendering = 'pixelated';
      this.ctx.imageSmoothingEnabled = false;
    }
  }

  _createClass(Render, [{
    key: "render",
    value: function render(scene) {
      var clear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (scene.active == false) {
        return;
      }

      var ctx = this.ctx,
          w = this.w,
          h = this.h;

      function renderRec(scene) {
        // Render the container children
        scene.children.forEach(function (child) {
          if (child.visible == false) {
            return;
          }

          ctx.save(); // Handle transforms

          if (child.pos) {
            ctx.translate(Math.round(child.pos.x), Math.round(child.pos.y));
          }

          if (child.anchor) {
            ctx.translate(child.anchor.x, child.anchor.y);
          }

          if (child.scale) {
            ctx.scale(child.scale.x, child.scale.y);
          }

          if (child.rotation) {
            var px = child.pivot ? child.pivot.x : 0;
            var py = child.pivot ? child.pivot.y : 0;
            ctx.translate(px, py);
            ctx.rotate(child.rotation);
            ctx.translate(-px, -py);
          } // Draw the leaf nodes


          if (child.text) {
            var _child$style = child.style,
                font = _child$style.font,
                fill = _child$style.fill,
                align = _child$style.align;
            if (font) ctx.font = font;
            if (fill) ctx.fillStyle = fill;
            if (align) ctx.textAlign = align;
            ctx.fillText(child.text, 0, 0);
          } else if (child instanceof _Sprite_js__WEBPACK_IMPORTED_MODULE_0__.default && child.texture) {
            var img = child.texture;

            if (child.tileW) {
              ctx.drawImage(img, child.frame.x * child.tileW, child.frame.y * child.tileH, child.tileW, child.tileH, 0, 0, child.tileW, child.tileH);
            } else {
              ctx.drawImage(img, 0, 0);
            }
          } else if (child instanceof _Graphics_js__WEBPACK_IMPORTED_MODULE_1__.default) {
            if (child.type === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.Graph.ROUND_RECT) {
              var _child$src = child.src,
                  _w = _child$src.w,
                  _h = _child$src.h,
                  r = _child$src.r,
                  _fill = _child$src.fill;
              var _child$pos = child.pos,
                  x = _child$pos.x,
                  y = _child$pos.y;
              ctx.strokeStyle = _fill;
              if (_w < 2 * r) r = (_readOnlyError("r"), _w / 2);
              if (_h < 2 * r) r = (_readOnlyError("r"), _h / 2);
              ctx.beginPath();
              ctx.moveTo(x + r, y);
              ctx.arcTo(x + _w, y, x + _w, y + _h, r);
              ctx.arcTo(x + _w, y + _h, x, y + _h, r);
              ctx.arcTo(x, y + _h, x, y, r);
              ctx.arcTo(x, y, x + _w, y, r);
              ctx.stroke();
              ctx.closePath();
            } else if (child.type === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.Graph.RECT) {
              var _child$src2 = child.src,
                  _w2 = _child$src2.w,
                  _h2 = _child$src2.h,
                  _fill2 = _child$src2.fill;
              ctx.fillStyle = _fill2;
              ctx.fillRect(0, 0, _w2, _h2);
            }
          } // Render any child sub-nodes


          if (child.children) {
            renderRec(child);
          }

          ctx.restore();
        });
      }

      if (clear) {
        ctx.clearRect(0, 0, w, h);
      }

      renderRec(scene);
    }
  }]);

  return Render;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Render);

/***/ }),

/***/ "./src/Scene.js":
/*!**********************!*\
  !*** ./src/Scene.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container.js */ "./src/Container.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Constants.js */ "./src/Constants.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Scene = /*#__PURE__*/function (_Container) {
  _inherits(Scene, _Container);

  var _super = _createSuper(Scene);

  function Scene(key) {
    var _this;

    var isActive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, Scene);

    _this = _super.call(this);
    _this.key = key;
    _this.active = isActive;
    _this.state = _Constants_js__WEBPACK_IMPORTED_MODULE_1__.State.NONE;
    _this.controls;
    return _this;
  }

  return Scene;
}(_Container_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scene);

/***/ }),

/***/ "./src/Sprite.js":
/*!***********************!*\
  !*** ./src/Sprite.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ "./src/GameObject.js");
/* harmony import */ var _AnimManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimManager.js */ "./src/AnimManager.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Sprite = /*#__PURE__*/function (_GameObject) {
  _inherits(Sprite, _GameObject);

  var _super = _createSuper(Sprite);

  function Sprite() {
    var _this;

    var texture = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var h = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Sprite);

    _this = _super.call(this);
    _this.texture = texture;
    _this.tileW = w;
    _this.tileH = h;
    _this.frame = {
      x: 0,
      y: 0
    };
    _this.anims = new _AnimManager_js__WEBPACK_IMPORTED_MODULE_1__.default(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Sprite, [{
    key: "update",
    value: function update(dt) {
      this.anims.update(dt);
    }
  }, {
    key: "w",
    get: function get() {
      return this.tileW * Math.abs(this.scale.x);
    }
  }, {
    key: "h",
    get: function get() {
      return this.tileH * Math.abs(this.scale.y);
    }
  }]);

  return Sprite;
}(_GameObject_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);

/***/ }),

/***/ "./src/Text.js":
/*!*********************!*\
  !*** ./src/Text.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ "./src/GameObject.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Text = /*#__PURE__*/function (_GameObject) {
  _inherits(Text, _GameObject);

  var _super = _createSuper(Text);

  function Text() {
    var _this;

    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

    _classCallCheck(this, Text);

    _this = _super.call(this);
    _this.text = text;
    _this.style;
    return _this;
  }

  return Text;
}(_GameObject_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ "./src/TextureManager.js":
/*!*******************************!*\
  !*** ./src/TextureManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextureManager = /*#__PURE__*/function () {
  function TextureManager(urls) {
    _classCallCheck(this, TextureManager);

    this.urls = urls;
    this.imgs = {};
  }

  _createClass(TextureManager, [{
    key: "load",
    value: function load(callback) {
      var _this = this;

      var p = this.urls.map(function (i) {
        return _this.loadImage(i);
      });
      Promise.all(p).then(function (res) {
        var o = _this.imgs = Object.assign.apply(Object, _toConsumableArray(res));
        return callback(o);
      })["catch"](function (err) {
        return callback(err);
      });
    }
  }, {
    key: "loadImage",
    value: function loadImage(i) {
      return new Promise(function (resolve, reject) {
        var img = new Image();
        img.addEventListener('load', function () {
          var o = _defineProperty({}, i[0], img);

          resolve(o);
        });
        img.addEventListener('error', function () {
          console.error('Error when loading an image');
          reject();
        });
        img.src = i[1];
      });
    }
  }]);

  return TextureManager;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextureManager);

/***/ }),

/***/ "./src/TileMap.js":
/*!************************!*\
  !*** ./src/TileMap.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container.js */ "./src/Container.js");
/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprite.js */ "./src/Sprite.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var TileMap = /*#__PURE__*/function (_Container) {
  _inherits(TileMap, _Container);

  var _super = _createSuper(TileMap);

  function TileMap() {
    var _this;

    var texture = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, TileMap);

    _this = _super.call(this);
    _this.mapW;
    _this.mapH;
    _this.tileW;
    _this.tileH;
    _this.texture = texture;
    _this.children = [];
    return _this;
  }

  _createClass(TileMap, [{
    key: "addTiles",
    value: function addTiles(tiles) {
      var _this2 = this;

      var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      // Add all tile sprites
      this.children = tiles.map(function (frame, i) {
        var s = new _Sprite_js__WEBPACK_IMPORTED_MODULE_1__.default();
        s.frame = frame;
        s.scale = {
          x: scale,
          y: scale
        };
        s.pos.x = i % _this2.mapW * _this2.tileW;
        s.pos.y = Math.floor(i / _this2.mapW) * _this2.tileH;
        s.tileW = _this2.tileW;
        s.tileH = _this2.tileH;
        s.texture = _this2.texture;
        return s;
      });
    }
  }]);

  return TileMap;
}(_Container_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TileMap);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vector2 = /*#__PURE__*/function () {
  function Vector2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector2);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector2, [{
    key: "add",
    value: function add(v) {
      v instanceof Vector2 ? (this.x += v.x, this.y += v.y) : (this.x += v, this.y += v);
      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(v) {
      this.x -= v.x, this.y -= v.y;
      return this;
    }
  }, {
    key: "multiply",
    value: function multiply(v) {
      v instanceof Vector2 ? (this.x *= v.x, this.y *= v.y) : (this.x *= v, this.y *= v);
      return this;
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var scale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var l = this.Length();
      return l > 0 ? this.Multiply(scale / l) : this.Set(scale, y = 0);
    }
  }, {
    key: "length",
    value: function length() {
      return Math.hypot(this.x, this.y);
    }
  }]);

  return Vector2;
}();

var RGBA = function RGBA() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  return "rgba(".concat(r * 255 | 0, ",").concat(g * 255 | 0, ",").concat(b * 255 | 0, ",").concat(a, ")");
};

function randf(min, max) {
  if (max == null) {
    max = min || 1;
    min = 0;
  }

  return Math.random() * (max - min) + min;
}

function rand(min, max) {
  return Math.floor(randf(min, max));
}

function clamp(x, min, max) {
  return Math.max(min, Math.min(x, max));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Vector2: Vector2,
  RGBA: RGBA,
  rand: rand,
  randf: randf,
  clamp: clamp
});

/***/ }),

/***/ "./src/vx-one.js":
/*!***********************!*\
  !*** ./src/vx-one.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => /* reexport safe */ _Game_js__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "Scene": () => /* reexport safe */ _Scene_js__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "Text": () => /* reexport safe */ _Text_js__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "Sprite": () => /* reexport safe */ _Sprite_js__WEBPACK_IMPORTED_MODULE_3__.default,
/* harmony export */   "TextureManager": () => /* reexport safe */ _TextureManager_js__WEBPACK_IMPORTED_MODULE_4__.default,
/* harmony export */   "Container": () => /* reexport safe */ _Container_js__WEBPACK_IMPORTED_MODULE_5__.default,
/* harmony export */   "TileMap": () => /* reexport safe */ _TileMap_js__WEBPACK_IMPORTED_MODULE_6__.default,
/* harmony export */   "Camera": () => /* reexport safe */ _Camera_js__WEBPACK_IMPORTED_MODULE_7__.default,
/* harmony export */   "Graphics": () => /* reexport safe */ _Graphics_js__WEBPACK_IMPORTED_MODULE_8__.default,
/* harmony export */   "Scale": () => /* reexport safe */ _Constants_js__WEBPACK_IMPORTED_MODULE_9__.Scale,
/* harmony export */   "State": () => /* reexport safe */ _Constants_js__WEBPACK_IMPORTED_MODULE_9__.State,
/* harmony export */   "Graph": () => /* reexport safe */ _Constants_js__WEBPACK_IMPORTED_MODULE_9__.Graph,
/* harmony export */   "math": () => /* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_10__.default
/* harmony export */ });
/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene.js */ "./src/Scene.js");
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.js */ "./src/Game.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text.js */ "./src/Text.js");
/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sprite.js */ "./src/Sprite.js");
/* harmony import */ var _TextureManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextureManager.js */ "./src/TextureManager.js");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Container.js */ "./src/Container.js");
/* harmony import */ var _TileMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TileMap.js */ "./src/TileMap.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Camera.js */ "./src/Camera.js");
/* harmony import */ var _Graphics_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Graphics.js */ "./src/Graphics.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Constants.js */ "./src/Constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");













/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/vx-one.js");
/******/ })()
;
});
//# sourceMappingURL=vx-one.js.map