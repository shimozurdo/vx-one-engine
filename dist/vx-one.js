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

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STEP": () => /* binding */ STEP,
/* harmony export */   "MAX_FRAME": () => /* binding */ MAX_FRAME
/* harmony export */ });
var STEP = 1 / 60;
var MAX_FRAME = STEP * 5;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene.js */ "./src/scene.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.js */ "./src/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game = /*#__PURE__*/function () {
  function Game(config) {
    _classCallCheck(this, Game);

    this.width = config.width;
    this.height = config.height;
    this.debug = config.debug;
    this.render = new _render_js__WEBPACK_IMPORTED_MODULE_0__.default({
      width: this.width,
      height: this.height,
      backgroundColor: config.backgroundColor
    });
    config.parent = config.parent || "game";
    var el = document.querySelector(config.parent);

    if (!el) {
      document.body.innerHTML = '<div id="' + config.parent + '"' + '></div>';
    }

    document.getElementById(config.parent).appendChild(this.render.view);
    this.scenes = [];
    this.scene;
  }

  _createClass(Game, [{
    key: "addScene",
    value: function addScene(scene) {
      this.scenes.push(scene);
      this.scene = scene;
      return scene;
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      var dt = 0;
      var last = 0;
      var fps = 0;

      var mainloop = function mainloop(ms) {
        requestAnimationFrame(mainloop); //create delta

        var t = ms / 1000;
        dt = Math.min(t - last, _constants_js__WEBPACK_IMPORTED_MODULE_2__.MAX_FRAME);
        last = t;
        fps = Math.round(1 / dt); //

        _this.scenes.forEach(function (scene) {
          scene.update(dt, t);

          _this.render.render(scene, {
            debug: _this.debug,
            fps: fps
          });
        });
      };

      requestAnimationFrame(mainloop);
    }
  }]);

  return Game;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);

/***/ }),

/***/ "./src/game.object.js":
/*!****************************!*\
  !*** ./src/game.object.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameObject = /*#__PURE__*/function () {
  function GameObject(name) {
    var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      x: 0,
      y: 0
    };
    var size = arguments.length > 2 ? arguments[2] : undefined;
    var visible = arguments.length > 3 ? arguments[3] : undefined;
    var active = arguments.length > 4 ? arguments[4] : undefined;

    _classCallCheck(this, GameObject);

    this.name = name;
    this.size = size;
    this.pos = pos;
    this.children = [];
    this.visible = visible;
    this.active = active;
  }

  _createClass(GameObject, [{
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
  }, {
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
  }]);

  return GameObject;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameObject);

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Render = /*#__PURE__*/function () {
  function Render(config) {
    _classCallCheck(this, Render);

    var canvas = document.createElement("canvas");
    this.width = canvas.width = config.width;
    this.height = canvas.height = config.height;
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.textBaseline = "top";
    this.backgroundColor = config.backgroundColor;
  }

  _createClass(Render, [{
    key: "render",
    value: function render(scene, debugObj) {
      var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (scene.active == false) {
        return;
      }

      var ctx = this.ctx,
          width = this.width,
          height = this.height,
          backgroundColor = this.backgroundColor;
      ctx.save();
      ctx.fillStyle = backgroundColor || "black";
      ctx.fillRect(0, 0, width, height);

      function renderRec(scene) {
        // Render the container children
        scene.children.forEach(function (child) {
          if (child.visible == false) {
            return;
          } // Handle transforms


          if (child.pos) {
            ctx.translate(Math.round(child.pos.x), Math.round(child.pos.y));
          }

          if (child.anchor) ctx.translate(child.anchor.x, child.anchor.y);
          if (child.scale) ctx.scale(child.scale.x, child.scale.y);

          if (child.rotation) {
            var px = child.pivot ? child.pivot.x : 0;
            var py = child.pivot ? child.pivot.y : 0;
            ctx.translate(px, py);
            ctx.rotate(child.rotation);
            ctx.translate(-px, -py);
          }

          if (debugObj.debug) {
            // Debug mode    
            ctx.textAlign = "left"; // ctx.translate(100, 100);

            ctx.fillStyle = 'black';
            ctx.fillText("FPS: " + debugObj.fps, -width / 2, -height / 2);
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
          } else if (child.texture) {
            var img = child.texture.img;

            if (child.tileW) {
              ctx.drawImage(img, child.frame.x * child.tileW, child.frame.y * child.tileH, child.tileW, child.tileH, 0, 0, child.tileW, child.tileH);
            }
          } else if (child.tileW) {
            ctx.fillStyle = "red";
            ctx.fillRect(child.pos.x * child.tileW * child.tileH, child.pos.y, child.tileW, child.tileH);
          } // Render any child sub-nodes


          if (child.children) {
            renderRec(child);
          }

          ctx.restore();
        });
      }

      if (clear) {
        ctx.clearRect(0, 0, this.w, this.h);
      }

      renderRec(scene);
    }
  }]);

  return Render;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Render);

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _game_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.object.js */ "./src/game.object.js");
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



var Scene = /*#__PURE__*/function (_GameObject) {
  _inherits(Scene, _GameObject);

  var _super = _createSuper(Scene);

  function Scene(key) {
    var _this;

    var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var active = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    _classCallCheck(this, Scene);

    _this = _super.call(this, "", pos, size, active, active);
    _this.sleep = !active;
    _this.key = key;
    return _this;
  }

  _createClass(Scene, [{
    key: "setSleep",
    value: function setSleep(v) {
      this.sleep = v;
    }
  }]);

  return Scene;
}(_game_object_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scene);

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Sprite = function Sprite(texture, pos) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : RGBA(255, 0, 0, 1);

  _classCallCheck(this, Sprite);

  this.texture = texture;
  this.pos = pos;
  this.scale = new _utils_js__WEBPACK_IMPORTED_MODULE_0__.default.Vector2(1, 1);
  this.pivot = new _utils_js__WEBPACK_IMPORTED_MODULE_0__.default.Vector2(0, 0);
  this.rotation = 0;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);

/***/ }),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _game_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.object.js */ "./src/game.object.js");
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
    var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      x: 0,
      y: 0
    };
    var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var active = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    _classCallCheck(this, Text);

    _this = _super.call(this, "", pos, null, active, active);
    _this.text = text;
    _this.style = style;
    return _this;
  }

  return Text;
}(_game_object_js__WEBPACK_IMPORTED_MODULE_0__.default);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ "./src/tile.map.js":
/*!*************************!*\
  !*** ./src/tile.map.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _game_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.object.js */ "./src/game.object.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var TileMap = /*#__PURE__*/function (_GameObject) {
  _inherits(TileMap, _GameObject);

  var _super = _createSuper(TileMap);

  function TileMap(type, mapW, mapH, tileW, tileH, level) {
    var _this;

    _classCallCheck(this, TileMap);

    _this = _super.call(this);
    _this.mapW = mapW;
    _this.mapH = mapH;
    _this.tileW = tileW;
    _this.tileH = tileH;
    _this.w = mapW * tileW;
    _this.h = mapH * tileH;
    _this.type = type;
    return _this;
  }

  return TileMap;
}(_game_object_js__WEBPACK_IMPORTED_MODULE_0__.default);

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

function rand(min, max) {
  return Math.floor(randf(min, max));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  Vector2: Vector2,
  RGBA: RGBA,
  rand: rand
});

/***/ }),

/***/ "./src/vx-one.js":
/*!***********************!*\
  !*** ./src/vx-one.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameObject": () => /* reexport safe */ _game_object_js__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "Render": () => /* reexport safe */ _render_js__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "Scene": () => /* reexport safe */ _scene_js__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "TileMap": () => /* reexport safe */ _tile_map_js__WEBPACK_IMPORTED_MODULE_6__.default,
/* harmony export */   "Game": () => /* reexport safe */ _game_js__WEBPACK_IMPORTED_MODULE_3__.default,
/* harmony export */   "Text": () => /* reexport safe */ _text_js__WEBPACK_IMPORTED_MODULE_4__.default,
/* harmony export */   "Sprite": () => /* reexport safe */ _sprite_js__WEBPACK_IMPORTED_MODULE_5__.default,
/* harmony export */   "math": () => /* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_7__.default
/* harmony export */ });
/* harmony import */ var _game_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.object.js */ "./src/game.object.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/render.js");
/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene.js */ "./src/scene.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text.js */ "./src/text.js");
/* harmony import */ var _sprite_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sprite.js */ "./src/sprite.js");
/* harmony import */ var _tile_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tile.map.js */ "./src/tile.map.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");










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