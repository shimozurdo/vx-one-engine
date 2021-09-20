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

      if (e && e.frame.w) {
        this.offset.x += e.frame.w / 2;
        this.offset.y += e.frame.h / 2;
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
  NONE: 0,
  RESIZE: 1
};
var State = {
  NONE: 0,
  LOADING: 1,
  READY: 2,
  RUNNING: 3,
  SLEEPING: 4
};
var Graph = {
  RECT: 0,
  RECT_OUTLINE: 1
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
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rect.js */ "./src/Rect.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Constants.js */ "./src/Constants.js");
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
  } // addDebug(e) {
  //     e.children = e.children || []
  //     const i = new Rect(Graph.RECT_OUTLINE)
  //     i.w = e.frame.w
  //     i.h = e.frame.h
  //     i.style = { fill: 'cyan', lineWidth: 1 }
  //     e.children.push(i)
  //     if (e.hitBox) {
  //         const { x, y, w, h } = e.hitBox;
  //         const hb = new Rect(Graph.RECT_OUTLINE)
  //         hb.style = { fill: 'rgba(255, 0, 0, 0.5)' }
  //         hb.name = "hb"
  //         hb.w = w
  //         hb.h = h
  //         hb.pos = { x, y }
  //         e.children.push(hb);
  //     }
  // }


  _createClass(Debug, [{
    key: "addDebug",
    value: function addDebug(e) {
      e.children = e.children || [];
      var i = new _Rect_js__WEBPACK_IMPORTED_MODULE_2__.default(_Constants_js__WEBPACK_IMPORTED_MODULE_3__.Graph.RECT_OUTLINE);
      i.w = e.frame.w;
      i.h = e.frame.h;
      i.style = {
        fill: 'cyan',
        lineWidth: 1
      };
      e.children.push(i);

      if (e.body) {
        var _e$body = e.body,
            x = _e$body.x,
            y = _e$body.y,
            w = _e$body.w,
            h = _e$body.h;
        var hb = new _Rect_js__WEBPACK_IMPORTED_MODULE_2__.default(_Constants_js__WEBPACK_IMPORTED_MODULE_3__.Graph.RECT_OUTLINE);
        hb.style = {
          fill: 'rgba(255, 0, 0, 1)'
        };
        hb.name = "hb";
        hb.w = w;
        hb.h = h;
        hb.pos = {
          x: x,
          y: y
        };
        e.children.push(hb);
      }
    }
  }]);

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
    this.mouse = new _Inputs_js__WEBPACK_IMPORTED_MODULE_1__.MouseControls(this.renderer.view);
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
        }).text = 'fps-: ' + fps;

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

/***/ "./src/Rect.js":
/*!*********************!*\
  !*** ./src/Rect.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ "./src/GameObject.js");
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




var Rect = /*#__PURE__*/function (_GameObject) {
  _inherits(Rect, _GameObject);

  var _super = _createSuper(Rect);

  function Rect() {
    var _this;

    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _Constants_js__WEBPACK_IMPORTED_MODULE_1__.Graph.RECT;

    _classCallCheck(this, Rect);

    _this = _super.call(this);
    _this.type = type;
    _this.w;
    _this.h;
    _this.style;
    return _this;
  }

  return Rect;
}(_GameObject_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rect);

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
/* harmony import */ var _TileSprite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TileSprite.js */ "./src/TileSprite.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constants.js */ "./src/Constants.js");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rect.js */ "./src/Rect.js");
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
    this.mode = config.mode;
    this.w = this.view.width = config.w;
    this.h = this.view.height = config.h;
    this.pixel = config.pixel;
    this.checkIsPixelConfig();

    if (this.mode === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.Scale.RESIZE) {
      var resizeCanvas = this.resizeCanvas.bind(this);
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas, false);
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
          h = this.h,
          mode = this.mode;

      function renderRec(scene) {
        var isFirstNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        // Render the container children
        scene.children.forEach(function (child) {
          if (child.visible == false) {
            return;
          }

          ctx.save(); // Handle resize

          if (mode === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.Scale.RESIZE && isFirstNode) {
            ctx.translate(Math.round(scene.pos.x), Math.round(scene.pos.y)); // TO DO: Improve this

            if (w > window.innerWidth && h < window.innerHeight) {
              ctx.scale(window.innerWidth * 100 / w / 100, window.innerWidth * 100 / w / 100);
            } else if (h > window.innerHeight && w < window.innerWidth) {
              ctx.scale(window.innerHeight * 100 / h / 100, window.innerHeight * 100 / h / 100);
            } else if (w > window.innerWidth && h > window.innerHeight) {
              if (window.innerWidth > window.innerHeight) ctx.scale(window.innerHeight * 100 / h / 100, window.innerHeight * 100 / h / 100);else ctx.scale(window.innerWidth * 100 / w / 100, window.innerWidth * 100 / w / 100);
            } else if (window.innerHeight > h) {
              ctx.scale(window.innerHeight * 100 / h / 100, window.innerHeight * 100 / h / 100);
            }
          } // Handle transforms


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
          } else if (child instanceof _Sprite_js__WEBPACK_IMPORTED_MODULE_0__.default || child instanceof _TileSprite_js__WEBPACK_IMPORTED_MODULE_1__.default) {
            var img = child.texture;

            if (child.frame) {
              ctx.drawImage(img, child.frame.x * child.frame.w, child.frame.y * child.frame.h, child.frame.w, child.frame.h, 0, 0, child.frame.w, child.frame.h);
            } else {
              ctx.drawImage(img, 0, 0);
            }
          } else if (child instanceof _Rect_js__WEBPACK_IMPORTED_MODULE_3__.default) {
            if (child.type === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.Graph.RECT) {
              var _fill = child.style.fill;
              ctx.fillStyle = _fill;
              ctx.fillRect(0, 0, child.w, child.h);
            } else if (child.type === _Constants_js__WEBPACK_IMPORTED_MODULE_2__.Graph.RECT_OUTLINE) {
              var _child$style2 = child.style,
                  _fill2 = _child$style2.fill,
                  lineWidth = _child$style2.lineWidth;
              ctx.strokeStyle = _fill2;
              ctx.lineWidth = lineWidth;
              ctx.strokeRect(0, 0, child.w, child.h);
            }
          } // Render any child sub-nodes


          if (child.children) {
            renderRec(child, false);
          }

          ctx.restore();
        });
      }

      if (clear) {
        ctx.clearRect(0, 0, w, h);
      }

      renderRec(scene);
    }
  }, {
    key: "resizeCanvas",
    value: function resizeCanvas() {
      this.view.width = window.innerWidth;
      this.view.height = window.innerHeight;
      this.checkIsPixelConfig();
    }
  }, {
    key: "checkIsPixelConfig",
    value: function checkIsPixelConfig() {
      if (this.pixel) {
        this.view.style.imageRendering = 'pixelated';
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;
      }
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

  _createClass(Scene, [{
    key: "getBounds",
    value: function getBounds(entity) {
      var hitBox = entity.hitBox,
          pos = entity.pos;
      var hit = hitBox;
      return {
        x: hit.x + pos.x,
        y: hit.y + pos.y,
        w: hit.w - 1,
        h: hit.h - 1
      };
    }
  }, {
    key: "isOvelapping",
    value: function isOvelapping(e1, e2) {
      var a = this.getBounds(e1);
      var b = this.getBounds(e2);
      return a.x <= b.x + b.w && a.x + a.w >= b.x && a.y <= b.y + b.h && a.y + a.h >= b.y;
    }
  }]);

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
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    var hasAnim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, Sprite);

    _this = _super.call(this);
    _this.texture = texture;
    _this.flipped = {
      x: false,
      y: false
    };
    _this.body = {};
    _this.origin = {
      x: 0,
      y: 0
    };

    if (hasAnim) {
      _this.frame = {
        x: 0,
        y: 0,
        w: texture.width,
        h: texture.height
      };
      _this.anims = new _AnimManager_js__WEBPACK_IMPORTED_MODULE_1__.default(_assertThisInitialized(_this));
    }

    return _this;
  }

  _createClass(Sprite, [{
    key: "setOrigin",
    value: function setOrigin(x, y) {
      var anchor = this.anchor,
          frame = this.frame;

      var _y = y || x;

      anchor.x = -(frame.w * x);
      anchor.y = -(frame.h * _y);
      this.origin = {
        x: x,
        y: _y
      };
    }
  }, {
    key: "setScale",
    value: function setScale(x, y) {
      var scale = this.scale,
          anchor = this.anchor;

      var _y = y || x;

      scale.x = Math.abs(x);
      scale.y = Math.abs(_y); //fix anchor        

      anchor.x = anchor.x * scale.x;
      anchor.y = anchor.y * scale.y;
    }
  }, {
    key: "flip",
    value: function flip(fx) {
      var fy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var scale = this.scale,
          anchor = this.anchor,
          frame = this.frame,
          origin = this.origin;
      this.flipped.x = fx;
      this.flipped.y = fy;
      var fxNo = fx ? -1 : 1;

      if (fx) {
        scale.x = fxNo * Math.abs(scale.x);
        if (origin.x === 0 || origin.x === 1) anchor.x = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.flipAnchor)(true, frame, scale, origin);
      } else {
        scale.x = fxNo * Math.abs(scale.x);
        if (origin.x === 0 || origin.x === 1) anchor.x = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.flipAnchor)(false, frame, scale, origin);
      }

      if (origin.x > 0 && origin.x < 1) anchor.x = scale.x > 0 ? -Math.abs(anchor.x) : Math.abs(anchor.x); // It needs to be improved, just works to flip x 
    }
  }, {
    key: "update",
    value: function update(dt) {
      if (this.anims) this.anims.update(dt);
    }
  }, {
    key: "hitBox",
    set: function set(_ref) {
      var x = _ref.x,
          y = _ref.y,
          w = _ref.w,
          h = _ref.h;
      this.body = {
        x: x,
        y: y,
        w: w,
        h: h
      };
    },
    get: function get() {
      var anchor = this.anchor,
          body = this.body,
          scale = this.scale,
          frame = this.frame,
          flipped = this.flipped,
          origin = this.origin;
      var x, y;
      x = Math.abs(body.x * scale.x);
      y = Math.abs(body.y * scale.y);
      var anchorX = anchor.x;

      if (origin.x === 0 || origin.x === 1) {
        var scaleClone = _objectSpread(_objectSpread({}, scale), {}, {
          x: Math.abs(scale.x)
        });

        anchorX = (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.flipAnchor)(false, frame, scaleClone, origin);
        x = x + anchorX;
      } else {
        if (anchorX !== 0) x = x + anchorX * (flipped.x ? -1 : 1);
      }

      if (anchor.y !== 0) y = y + anchor.y;
      return {
        x: x,
        y: y,
        w: Math.abs(body.w * scale.x),
        h: Math.abs(body.h * scale.y)
      };
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
        return callback(null, o);
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
/* harmony import */ var _TileSprite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TileSprite.js */ "./src/TileSprite.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        var s = new _TileSprite_js__WEBPACK_IMPORTED_MODULE_1__.default(_this2.texture);
        s.frame = _objectSpread(_objectSpread({}, frame), {}, {
          w: _this2.tileW,
          h: _this2.tileH
        });
        s.scale = {
          x: scale,
          y: scale
        };
        s.pos.x = i % _this2.mapW * _this2.tileW;
        s.pos.y = Math.floor(i / _this2.mapW) * _this2.tileH;
        return s;
      });
    }
  }, {
    key: "pixelToMapPos",
    value: function pixelToMapPos(pos) {
      var tileW = this.tileW,
          tileH = this.tileH;
      return {
        x: Math.floor(pos.x / tileW),
        y: Math.floor(pos.y / tileH)
      };
    }
  }, {
    key: "mapToPixelPos",
    value: function mapToPixelPos(mapPos) {
      var tileW = this.tileW,
          tileH = this.tileH;
      return {
        x: mapPos.x * tileW,
        y: mapPos.y * tileH
      };
    }
  }, {
    key: "tileAtMapPos",
    value: function tileAtMapPos(mapPos) {
      return this.children[mapPos.y * this.mapW + mapPos.x];
    }
  }, {
    key: "tileAtPixelPos",
    value: function tileAtPixelPos(pos) {
      return this.tileAtMapPos(this.pixelToMapPos(pos));
    }
  }, {
    key: "setFrameAtMapPos",
    value: function setFrameAtMapPos(mapPos, frame) {
      var tile = this.tileAtMapPos(mapPos);
      tile.frame = frame;
      return tile;
    }
  }, {
    key: "setFrameAtPixelPos",
    value: function setFrameAtPixelPos(pos, frame) {
      return this.setFrameAtMapPos(this.pixelToMapPos(pos), frame);
    }
  }, {
    key: "tilesAtCorners",
    value: function tilesAtCorners(bounds) {
      var _this3 = this;

      var xo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var yo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return [[bounds.x, bounds.y], // Top-left
      [bounds.x + bounds.w, bounds.y], // Top-right
      [bounds.x, bounds.y + bounds.h], // Bottom-left
      [bounds.x + bounds.w, bounds.y + bounds.h] // Bottom-right
      ].map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            x = _ref2[0],
            y = _ref2[1];

        return _this3.tileAtPixelPos({
          x: x + xo,
          y: y + yo
        });
      });
    }
  }]);

  return TileMap;
}(_Container_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TileMap);

/***/ }),

/***/ "./src/TileSprite.js":
/*!***************************!*\
  !*** ./src/TileSprite.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _GameObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameObject.js */ "./src/GameObject.js");
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



var TileSprite = /*#__PURE__*/function (_GameObject) {
  _inherits(TileSprite, _GameObject);

  var _super = _createSuper(TileSprite);

  function TileSprite() {
    var _this;

    var texture = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    _classCallCheck(this, TileSprite);

    _this = _super.call(this);
    _this.texture = texture;
    _this.frame = {
      x: 0,
      y: 0,
      w: texture.width,
      h: texture.height
    };
    return _this;
  }

  _createClass(TileSprite, [{
    key: "w",
    get: function get() {
      return this.frame.w * Math.abs(this.scale.x);
    }
  }, {
    key: "h",
    get: function get() {
      return this.frame.h * Math.abs(this.scale.y);
    }
  }]);

  return TileSprite;
}(_GameObject_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TileSprite);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "flipAnchor": () => /* binding */ flipAnchor
/* harmony export */ });
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

function randOneFrom(items) {
  return items[rand(items.length)];
}

function randOneIn() {
  var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  return rand(0, max) === 0;
}

function flipAnchor(flipped, frame, scale, origin) {
  var anchor;

  if (flipped) {
    if (origin.x === 0) anchor = frame.w * Math.abs(scale.x);else if (origin.x === 1) anchor = 0;
  } else {
    if (origin.x === 0) anchor = 0;else if (origin.x === 1) anchor = -(frame.w * Math.abs(scale.x));
  }

  return anchor;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  rand: rand,
  randf: randf,
  clamp: clamp,
  randOneFrom: randOneFrom,
  randOneIn: randOneIn
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
/* harmony export */   "Rect": () => /* reexport safe */ _Rect_js__WEBPACK_IMPORTED_MODULE_8__.default,
/* harmony export */   "Scale": () => /* reexport safe */ _Constants_js__WEBPACK_IMPORTED_MODULE_9__.Scale,
/* harmony export */   "State": () => /* reexport safe */ _Constants_js__WEBPACK_IMPORTED_MODULE_9__.State,
/* harmony export */   "Graph": () => /* reexport safe */ _Constants_js__WEBPACK_IMPORTED_MODULE_9__.Graph,
/* harmony export */   "math": () => /* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_10__.default,
/* harmony export */   "wallslide": () => /* reexport safe */ _wallslide_js__WEBPACK_IMPORTED_MODULE_11__.default
/* harmony export */ });
/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene.js */ "./src/Scene.js");
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.js */ "./src/Game.js");
/* harmony import */ var _Text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text.js */ "./src/Text.js");
/* harmony import */ var _Sprite_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sprite.js */ "./src/Sprite.js");
/* harmony import */ var _TextureManager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextureManager.js */ "./src/TextureManager.js");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Container.js */ "./src/Container.js");
/* harmony import */ var _TileMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TileMap.js */ "./src/TileMap.js");
/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Camera.js */ "./src/Camera.js");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Rect.js */ "./src/Rect.js");
/* harmony import */ var _Constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Constants.js */ "./src/Constants.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _wallslide_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wallslide.js */ "./src/wallslide.js");














/***/ }),

/***/ "./src/wallslide.js":
/*!**************************!*\
  !*** ./src/wallslide.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function wallslide(ent, map) {
  var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var tiles;
  var tileEdge;
  var hitBox = ent.hitBox,
      pos = ent.pos;
  var hit = hitBox;
  var bounds = {
    x: hit.x + pos.x,
    y: hit.y + pos.y,
    w: hit.w,
    h: hit.h
  }; // Final amounts of movement to allow

  var xo = x;
  var yo = y; // Check vertical movement

  if (y !== 0) {
    tiles = map.tilesAtCorners(bounds, 0, yo);

    var _tiles$map = tiles.map(function (t) {
      return t && t.frame.rigid;
    }),
        _tiles$map2 = _slicedToArray(_tiles$map, 4),
        tl = _tiles$map2[0],
        tr = _tiles$map2[1],
        bl = _tiles$map2[2],
        br = _tiles$map2[3]; // Hit your head


    if (y < 0 && !(tl && tr)) {
      tileEdge = tiles[0].pos.y + tiles[0].frame.h;
      yo = tileEdge - bounds.y + 1;
    } // Hit your feet


    if (y > 0 && !(bl && br)) {
      tileEdge = tiles[2].pos.y - 1;
      yo = tileEdge - (bounds.y + bounds.h);
    }
  } // Check horizontal movement


  if (x !== 0) {
    tiles = map.tilesAtCorners(bounds, xo, yo);

    var _tiles$map3 = tiles.map(function (t) {
      return t && t.frame.rigid;
    }),
        _tiles$map4 = _slicedToArray(_tiles$map3, 4),
        _tl = _tiles$map4[0],
        _tr = _tiles$map4[1],
        _bl = _tiles$map4[2],
        _br = _tiles$map4[3]; // Hit left edge


    if (x < 0 && !(_tl && _bl)) {
      tileEdge = tiles[0].pos.x + tiles[0].frame.w;
      xo = tileEdge - bounds.x + 1;
    } // Hit right edge


    if (x > 0 && !(_tr && _br)) {
      tileEdge = tiles[1].pos.x - 1;
      xo = tileEdge - (bounds.x + bounds.w);
    }
  } // xo & yo contain the amount we're allowed to move by.


  return {
    x: xo,
    y: yo
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wallslide);

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