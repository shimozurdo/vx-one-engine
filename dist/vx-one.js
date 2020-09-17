(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vx", [], factory);
	else if(typeof exports === 'object')
		exports["vx"] = factory();
	else
		root["vx"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "GameObject", function() { return /* reexport */ game_object; });
__webpack_require__.d(__webpack_exports__, "Render", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "Scene", function() { return /* reexport */ scene; });
__webpack_require__.d(__webpack_exports__, "TileMap", function() { return /* reexport */ tile_map; });
__webpack_require__.d(__webpack_exports__, "Game", function() { return /* reexport */ game; });
__webpack_require__.d(__webpack_exports__, "Text", function() { return /* reexport */ src_text; });
__webpack_require__.d(__webpack_exports__, "Sprite", function() { return /* reexport */ sprite; });
__webpack_require__.d(__webpack_exports__, "math", function() { return /* reexport */ utils; });

// CONCATENATED MODULE: ./src/game.object.js
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

/* harmony default export */ var game_object = (GameObject);
// CONCATENATED MODULE: ./src/render.js
function render_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function render_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function render_createClass(Constructor, protoProps, staticProps) { if (protoProps) render_defineProperties(Constructor.prototype, protoProps); if (staticProps) render_defineProperties(Constructor, staticProps); return Constructor; }

var Render = /*#__PURE__*/function () {
  function Render(config) {
    render_classCallCheck(this, Render);

    var canvas = document.createElement("canvas");
    this.width = canvas.width = config.width;
    this.height = canvas.height = config.height;
    this.view = canvas;
    this.ctx = canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.textBaseline = "top";
    this.backgroundColor = config.backgroundColor;
  }

  render_createClass(Render, [{
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

/* harmony default export */ var render = (Render);
// CONCATENATED MODULE: ./src/scene.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function scene_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function scene_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function scene_createClass(Constructor, protoProps, staticProps) { if (protoProps) scene_defineProperties(Constructor.prototype, protoProps); if (staticProps) scene_defineProperties(Constructor, staticProps); return Constructor; }

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

    scene_classCallCheck(this, Scene);

    _this = _super.call(this, "", pos, size, active, active);
    _this.sleep = !active;
    _this.key = key;
    return _this;
  }

  scene_createClass(Scene, [{
    key: "setSleep",
    value: function setSleep(v) {
      this.sleep = v;
    }
  }]);

  return Scene;
}(game_object);

/* harmony default export */ var scene = (Scene);
// CONCATENATED MODULE: ./src/constants.js
var STEP = 1 / 60;
var MAX_FRAME = STEP * 5;
// CONCATENATED MODULE: ./src/game.js
function game_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function game_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function game_createClass(Constructor, protoProps, staticProps) { if (protoProps) game_defineProperties(Constructor.prototype, protoProps); if (staticProps) game_defineProperties(Constructor, staticProps); return Constructor; }





var game_Game = /*#__PURE__*/function () {
  function Game(config) {
    game_classCallCheck(this, Game);

    this.width = config.width;
    this.height = config.height;
    this.debug = config.debug;
    this.render = new render({
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

  game_createClass(Game, [{
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
        dt = Math.min(t - last, MAX_FRAME);
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

/* harmony default export */ var game = (game_Game);
// CONCATENATED MODULE: ./src/text.js
function text_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { text_typeof = function _typeof(obj) { return typeof obj; }; } else { text_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return text_typeof(obj); }

function text_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function text_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) text_setPrototypeOf(subClass, superClass); }

function text_setPrototypeOf(o, p) { text_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return text_setPrototypeOf(o, p); }

function text_createSuper(Derived) { var hasNativeReflectConstruct = text_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = text_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = text_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return text_possibleConstructorReturn(this, result); }; }

function text_possibleConstructorReturn(self, call) { if (call && (text_typeof(call) === "object" || typeof call === "function")) { return call; } return text_assertThisInitialized(self); }

function text_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function text_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function text_getPrototypeOf(o) { text_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return text_getPrototypeOf(o); }



var Text = /*#__PURE__*/function (_GameObject) {
  text_inherits(Text, _GameObject);

  var _super = text_createSuper(Text);

  function Text() {
    var _this;

    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      x: 0,
      y: 0
    };
    var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var active = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    text_classCallCheck(this, Text);

    _this = _super.call(this, "", pos, null, active, active);
    _this.text = text;
    _this.style = style;
    return _this;
  }

  return Text;
}(game_object);

/* harmony default export */ var src_text = (Text);
// CONCATENATED MODULE: ./src/utils.js
function utils_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function utils_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function utils_createClass(Constructor, protoProps, staticProps) { if (protoProps) utils_defineProperties(Constructor.prototype, protoProps); if (staticProps) utils_defineProperties(Constructor, staticProps); return Constructor; }

var Vector2 = /*#__PURE__*/function () {
  function Vector2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    utils_classCallCheck(this, Vector2);

    this.x = x;
    this.y = y;
  }

  utils_createClass(Vector2, [{
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

var utils_RGBA = function RGBA() {
  var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  return "rgba(".concat(r * 255 | 0, ",").concat(g * 255 | 0, ",").concat(b * 255 | 0, ",").concat(a, ")");
};

function rand(min, max) {
  return Math.floor(randf(min, max));
}

/* harmony default export */ var utils = ({
  Vector2: Vector2,
  RGBA: utils_RGBA,
  rand: rand
});
// CONCATENATED MODULE: ./src/sprite.js
function sprite_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var sprite_Sprite = function Sprite(texture, pos) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : RGBA(255, 0, 0, 1);

  sprite_classCallCheck(this, Sprite);

  this.texture = texture;
  this.pos = pos;
  this.scale = new utils.Vector2(1, 1);
  this.pivot = new utils.Vector2(0, 0);
  this.rotation = 0;
};

/* harmony default export */ var sprite = (sprite_Sprite);
// CONCATENATED MODULE: ./src/tile.map.js
function tile_map_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tile_map_typeof = function _typeof(obj) { return typeof obj; }; } else { tile_map_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tile_map_typeof(obj); }

function tile_map_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tile_map_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) tile_map_setPrototypeOf(subClass, superClass); }

function tile_map_setPrototypeOf(o, p) { tile_map_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return tile_map_setPrototypeOf(o, p); }

function tile_map_createSuper(Derived) { var hasNativeReflectConstruct = tile_map_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = tile_map_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = tile_map_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return tile_map_possibleConstructorReturn(this, result); }; }

function tile_map_possibleConstructorReturn(self, call) { if (call && (tile_map_typeof(call) === "object" || typeof call === "function")) { return call; } return tile_map_assertThisInitialized(self); }

function tile_map_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function tile_map_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function tile_map_getPrototypeOf(o) { tile_map_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return tile_map_getPrototypeOf(o); }



var TileMap = /*#__PURE__*/function (_GameObject) {
  tile_map_inherits(TileMap, _GameObject);

  var _super = tile_map_createSuper(TileMap);

  function TileMap(type, mapW, mapH, tileW, tileH, level) {
    var _this;

    tile_map_classCallCheck(this, TileMap);

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
}(game_object);

/* harmony default export */ var tile_map = (TileMap);
// CONCATENATED MODULE: ./src/vx-one.js










/***/ })
/******/ ]);
});