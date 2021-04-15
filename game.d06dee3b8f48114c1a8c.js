/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproyecto_gus"] = self["webpackChunkproyecto_gus"] || []).push([["game"],{

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
eval("/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pixi.js */ \"./node_modules/pixi.js/dist/esm/pixi.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n\n\n\n\n/*\r\n#####################\r\n## START RESOURCES ##\r\n#####################\r\n*/\n\n\n\nfunction import_all_assets(r) {\n  return r.keys().map(r);\n}\n\nvar ASSETS = import_all_assets(__webpack_require__(\"./src/assets sync \\\\.(png|jpe?g|svg)$\"));\n/*\r\n#####################\r\n## END RESOURCES ##\r\n#####################\r\n*/\n\nvar MyGame = /*#__PURE__*/function () {\n  function MyGame() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, MyGame);\n\n    this.options = {\n      width: window.innerWidth,\n      height: window.innerHeight,\n      antialias: true,\n      backgroundAlpha: 1,\n      resolution: 1\n    };\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(MyGame, [{\n    key: \"config\",\n    value: function config() {\n      this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Application(this.options);\n    }\n  }, {\n    key: \"setup\",\n    value: function setup() {\n      this.app.renderer.autoResize = true;\n      this.app.renderer.resize(window.innerWidth, window.innerHeight);\n      document.body.appendChild(this.app.view);\n    }\n  }, {\n    key: \"all_loaded\",\n    value: function all_loaded() {\n      console.log('outside-before');\n      this.create_tube_sheet();\n      console.log('outside-after');\n      this.create_scenario();\n    }\n  }, {\n    key: \"load_everything\",\n    value: function load_everything() {\n      this.app.loader.add(\"tube\", \"./img/Tubo.png\");\n      this.app.loader.load(this.all_loaded);\n    }\n  }, {\n    key: \"create_tube_sheet\",\n    value: function create_tube_sheet() {\n      console.log('inside');\n      var TUBE = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.BaseTexture.from(this.app.loader.resources[\"tube\"].url);\n      var WIDTH_TUBE = 32;\n      var HEIGHT_TUBE = 58;\n      var IMAGE_WIDTH = WIDTH_TUBE * 3;\n      this.tube_sheet = [];\n\n      for (var i = 0; i <= IMAGE_WIDTH; i += WIDTH_TUBE) {\n        this.tube_sheet.push([new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Texture(TUBE, new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Rectangle(i * WIDTH_TUBE, 0, WIDTH_TUBE, HEIGHT_TUBE))]);\n      }\n    }\n  }, {\n    key: \"main_background\",\n    value: function main_background() {\n      var _this = this;\n\n      this.app.loader.add(\"background\", \"./img/Tubo.png\").load(function (loader, resources) {\n        _this.background = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.Sprite(resources.background.texture);\n        _this.background.x = 0;\n        _this.background.y = 0;\n\n        _this.app.stage.addChild(_this.background);\n      });\n    }\n  }, {\n    key: \"create_scenario\",\n    value: function create_scenario() {\n      var tube = new pixi_js__WEBPACK_IMPORTED_MODULE_2__.AnimatedSprite(this.tube_sheet[0]);\n      tube.anchor.set(0.5);\n      tube.animationSpeed = 0.5;\n      tube.loop = true;\n      tube.x = this.app.view.width / 2;\n      tube.y = this.app.view.height / 2;\n      this.app.stage.addChild(tube);\n      tube.play();\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.config();\n      this.setup();\n      this.load_everything(); // this.main_background();\n    }\n  }]);\n\n  return MyGame;\n}();\n\nvar GAME = new MyGame();\nGAME.start();\n\n//# sourceURL=webpack://proyecto-gus/./src/game.js?");

/***/ }),

/***/ "./src/assets/Arrow.png":
/*!******************************!*\
  !*** ./src/assets/Arrow.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Arrow.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Arrow.png?");

/***/ }),

/***/ "./src/assets/Arrows.png":
/*!*******************************!*\
  !*** ./src/assets/Arrows.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Arrows.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Arrows.png?");

/***/ }),

/***/ "./src/assets/Arrows02.png":
/*!*********************************!*\
  !*** ./src/assets/Arrows02.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Arrows02.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Arrows02.png?");

/***/ }),

/***/ "./src/assets/Arrows03.png":
/*!*********************************!*\
  !*** ./src/assets/Arrows03.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Arrows03.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Arrows03.png?");

/***/ }),

/***/ "./src/assets/ArrowsLeft.png":
/*!***********************************!*\
  !*** ./src/assets/ArrowsLeft.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/ArrowsLeft.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/ArrowsLeft.png?");

/***/ }),

/***/ "./src/assets/ArrowsLeft2.png":
/*!************************************!*\
  !*** ./src/assets/ArrowsLeft2.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/ArrowsLeft2.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/ArrowsLeft2.png?");

/***/ }),

/***/ "./src/assets/ArrowsLeft3.png":
/*!************************************!*\
  !*** ./src/assets/ArrowsLeft3.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/ArrowsLeft3.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/ArrowsLeft3.png?");

/***/ }),

/***/ "./src/assets/ArrowsRight.png":
/*!************************************!*\
  !*** ./src/assets/ArrowsRight.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/ArrowsRight.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/ArrowsRight.png?");

/***/ }),

/***/ "./src/assets/ArrowsRight2.png":
/*!*************************************!*\
  !*** ./src/assets/ArrowsRight2.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/ArrowsRight2.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/ArrowsRight2.png?");

/***/ }),

/***/ "./src/assets/ArrowsRight3.png":
/*!*************************************!*\
  !*** ./src/assets/ArrowsRight3.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/ArrowsRight3.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/ArrowsRight3.png?");

/***/ }),

/***/ "./src/assets/Btn01.png":
/*!******************************!*\
  !*** ./src/assets/Btn01.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Btn01.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Btn01.png?");

/***/ }),

/***/ "./src/assets/Circle01.png":
/*!*********************************!*\
  !*** ./src/assets/Circle01.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Circle01.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Circle01.png?");

/***/ }),

/***/ "./src/assets/Circle02.png":
/*!*********************************!*\
  !*** ./src/assets/Circle02.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Circle02.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Circle02.png?");

/***/ }),

/***/ "./src/assets/Circle03.png":
/*!*********************************!*\
  !*** ./src/assets/Circle03.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Circle03.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Circle03.png?");

/***/ }),

/***/ "./src/assets/Close.png":
/*!******************************!*\
  !*** ./src/assets/Close.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Close.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Close.png?");

/***/ }),

/***/ "./src/assets/Icon01.png":
/*!*******************************!*\
  !*** ./src/assets/Icon01.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon01.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon01.png?");

/***/ }),

/***/ "./src/assets/Icon02.png":
/*!*******************************!*\
  !*** ./src/assets/Icon02.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon02.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon02.png?");

/***/ }),

/***/ "./src/assets/Icon03.png":
/*!*******************************!*\
  !*** ./src/assets/Icon03.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon03.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon03.png?");

/***/ }),

/***/ "./src/assets/Icon04.png":
/*!*******************************!*\
  !*** ./src/assets/Icon04.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon04.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon04.png?");

/***/ }),

/***/ "./src/assets/Icon05.png":
/*!*******************************!*\
  !*** ./src/assets/Icon05.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon05.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon05.png?");

/***/ }),

/***/ "./src/assets/Icon06.png":
/*!*******************************!*\
  !*** ./src/assets/Icon06.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon06.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon06.png?");

/***/ }),

/***/ "./src/assets/Icon07.png":
/*!*******************************!*\
  !*** ./src/assets/Icon07.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon07.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon07.png?");

/***/ }),

/***/ "./src/assets/Icon08.png":
/*!*******************************!*\
  !*** ./src/assets/Icon08.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon08.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon08.png?");

/***/ }),

/***/ "./src/assets/Icon09.png":
/*!*******************************!*\
  !*** ./src/assets/Icon09.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon09.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon09.png?");

/***/ }),

/***/ "./src/assets/Icon10.png":
/*!*******************************!*\
  !*** ./src/assets/Icon10.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon10.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon10.png?");

/***/ }),

/***/ "./src/assets/Icon11.png":
/*!*******************************!*\
  !*** ./src/assets/Icon11.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon11.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon11.png?");

/***/ }),

/***/ "./src/assets/Icon12.png":
/*!*******************************!*\
  !*** ./src/assets/Icon12.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon12.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon12.png?");

/***/ }),

/***/ "./src/assets/Icon13.png":
/*!*******************************!*\
  !*** ./src/assets/Icon13.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon13.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon13.png?");

/***/ }),

/***/ "./src/assets/Icon14.png":
/*!*******************************!*\
  !*** ./src/assets/Icon14.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon14.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon14.png?");

/***/ }),

/***/ "./src/assets/Icon15.png":
/*!*******************************!*\
  !*** ./src/assets/Icon15.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon15.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon15.png?");

/***/ }),

/***/ "./src/assets/Icon16.png":
/*!*******************************!*\
  !*** ./src/assets/Icon16.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon16.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon16.png?");

/***/ }),

/***/ "./src/assets/Icon17.png":
/*!*******************************!*\
  !*** ./src/assets/Icon17.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon17.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon17.png?");

/***/ }),

/***/ "./src/assets/Icon18.png":
/*!*******************************!*\
  !*** ./src/assets/Icon18.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon18.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon18.png?");

/***/ }),

/***/ "./src/assets/Icon19.png":
/*!*******************************!*\
  !*** ./src/assets/Icon19.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon19.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon19.png?");

/***/ }),

/***/ "./src/assets/Icon20.png":
/*!*******************************!*\
  !*** ./src/assets/Icon20.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon20.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon20.png?");

/***/ }),

/***/ "./src/assets/Icon21.png":
/*!*******************************!*\
  !*** ./src/assets/Icon21.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon21.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon21.png?");

/***/ }),

/***/ "./src/assets/Icon22.png":
/*!*******************************!*\
  !*** ./src/assets/Icon22.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon22.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon22.png?");

/***/ }),

/***/ "./src/assets/Icon23.png":
/*!*******************************!*\
  !*** ./src/assets/Icon23.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon23.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon23.png?");

/***/ }),

/***/ "./src/assets/Icon24.png":
/*!*******************************!*\
  !*** ./src/assets/Icon24.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon24.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon24.png?");

/***/ }),

/***/ "./src/assets/Icon25.png":
/*!*******************************!*\
  !*** ./src/assets/Icon25.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon25.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon25.png?");

/***/ }),

/***/ "./src/assets/Icon26.png":
/*!*******************************!*\
  !*** ./src/assets/Icon26.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon26.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon26.png?");

/***/ }),

/***/ "./src/assets/Icon27.png":
/*!*******************************!*\
  !*** ./src/assets/Icon27.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon27.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon27.png?");

/***/ }),

/***/ "./src/assets/Icon28.png":
/*!*******************************!*\
  !*** ./src/assets/Icon28.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon28.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon28.png?");

/***/ }),

/***/ "./src/assets/Icon29.png":
/*!*******************************!*\
  !*** ./src/assets/Icon29.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon29.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon29.png?");

/***/ }),

/***/ "./src/assets/Icon30.png":
/*!*******************************!*\
  !*** ./src/assets/Icon30.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon30.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon30.png?");

/***/ }),

/***/ "./src/assets/Icon31.png":
/*!*******************************!*\
  !*** ./src/assets/Icon31.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon31.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon31.png?");

/***/ }),

/***/ "./src/assets/Icon32.png":
/*!*******************************!*\
  !*** ./src/assets/Icon32.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon32.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon32.png?");

/***/ }),

/***/ "./src/assets/Icon33.png":
/*!*******************************!*\
  !*** ./src/assets/Icon33.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon33.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon33.png?");

/***/ }),

/***/ "./src/assets/Icon34.png":
/*!*******************************!*\
  !*** ./src/assets/Icon34.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon34.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon34.png?");

/***/ }),

/***/ "./src/assets/Icon35.png":
/*!*******************************!*\
  !*** ./src/assets/Icon35.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon35.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon35.png?");

/***/ }),

/***/ "./src/assets/Icon36.png":
/*!*******************************!*\
  !*** ./src/assets/Icon36.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon36.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon36.png?");

/***/ }),

/***/ "./src/assets/Icon37.png":
/*!*******************************!*\
  !*** ./src/assets/Icon37.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon37.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon37.png?");

/***/ }),

/***/ "./src/assets/Icon38.png":
/*!*******************************!*\
  !*** ./src/assets/Icon38.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Icon38.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Icon38.png?");

/***/ }),

/***/ "./src/assets/Main.png":
/*!*****************************!*\
  !*** ./src/assets/Main.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Main.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Main.png?");

/***/ }),

/***/ "./src/assets/Panel01.png":
/*!********************************!*\
  !*** ./src/assets/Panel01.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Panel01.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Panel01.png?");

/***/ }),

/***/ "./src/assets/Panel02.png":
/*!********************************!*\
  !*** ./src/assets/Panel02.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Panel02.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Panel02.png?");

/***/ }),

/***/ "./src/assets/Panel03.png":
/*!********************************!*\
  !*** ./src/assets/Panel03.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Panel03.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Panel03.png?");

/***/ }),

/***/ "./src/assets/Panel04.png":
/*!********************************!*\
  !*** ./src/assets/Panel04.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Panel04.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Panel04.png?");

/***/ }),

/***/ "./src/assets/Tubo.png":
/*!*****************************!*\
  !*** ./src/assets/Tubo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"img/Tubo.png\");\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/Tubo.png?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (() => {

"use strict";
eval("// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://proyecto-gus/./src/scss/style.scss?");

/***/ }),

/***/ "./src/assets sync \\.(png|jpe?g|svg)$":
/*!**********************************************************!*\
  !*** ./src/assets/ sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./Arrow.png\": \"./src/assets/Arrow.png\",\n\t\"./Arrows.png\": \"./src/assets/Arrows.png\",\n\t\"./Arrows02.png\": \"./src/assets/Arrows02.png\",\n\t\"./Arrows03.png\": \"./src/assets/Arrows03.png\",\n\t\"./ArrowsLeft.png\": \"./src/assets/ArrowsLeft.png\",\n\t\"./ArrowsLeft2.png\": \"./src/assets/ArrowsLeft2.png\",\n\t\"./ArrowsLeft3.png\": \"./src/assets/ArrowsLeft3.png\",\n\t\"./ArrowsRight.png\": \"./src/assets/ArrowsRight.png\",\n\t\"./ArrowsRight2.png\": \"./src/assets/ArrowsRight2.png\",\n\t\"./ArrowsRight3.png\": \"./src/assets/ArrowsRight3.png\",\n\t\"./Btn01.png\": \"./src/assets/Btn01.png\",\n\t\"./Circle01.png\": \"./src/assets/Circle01.png\",\n\t\"./Circle02.png\": \"./src/assets/Circle02.png\",\n\t\"./Circle03.png\": \"./src/assets/Circle03.png\",\n\t\"./Close.png\": \"./src/assets/Close.png\",\n\t\"./Icon01.png\": \"./src/assets/Icon01.png\",\n\t\"./Icon02.png\": \"./src/assets/Icon02.png\",\n\t\"./Icon03.png\": \"./src/assets/Icon03.png\",\n\t\"./Icon04.png\": \"./src/assets/Icon04.png\",\n\t\"./Icon05.png\": \"./src/assets/Icon05.png\",\n\t\"./Icon06.png\": \"./src/assets/Icon06.png\",\n\t\"./Icon07.png\": \"./src/assets/Icon07.png\",\n\t\"./Icon08.png\": \"./src/assets/Icon08.png\",\n\t\"./Icon09.png\": \"./src/assets/Icon09.png\",\n\t\"./Icon10.png\": \"./src/assets/Icon10.png\",\n\t\"./Icon11.png\": \"./src/assets/Icon11.png\",\n\t\"./Icon12.png\": \"./src/assets/Icon12.png\",\n\t\"./Icon13.png\": \"./src/assets/Icon13.png\",\n\t\"./Icon14.png\": \"./src/assets/Icon14.png\",\n\t\"./Icon15.png\": \"./src/assets/Icon15.png\",\n\t\"./Icon16.png\": \"./src/assets/Icon16.png\",\n\t\"./Icon17.png\": \"./src/assets/Icon17.png\",\n\t\"./Icon18.png\": \"./src/assets/Icon18.png\",\n\t\"./Icon19.png\": \"./src/assets/Icon19.png\",\n\t\"./Icon20.png\": \"./src/assets/Icon20.png\",\n\t\"./Icon21.png\": \"./src/assets/Icon21.png\",\n\t\"./Icon22.png\": \"./src/assets/Icon22.png\",\n\t\"./Icon23.png\": \"./src/assets/Icon23.png\",\n\t\"./Icon24.png\": \"./src/assets/Icon24.png\",\n\t\"./Icon25.png\": \"./src/assets/Icon25.png\",\n\t\"./Icon26.png\": \"./src/assets/Icon26.png\",\n\t\"./Icon27.png\": \"./src/assets/Icon27.png\",\n\t\"./Icon28.png\": \"./src/assets/Icon28.png\",\n\t\"./Icon29.png\": \"./src/assets/Icon29.png\",\n\t\"./Icon30.png\": \"./src/assets/Icon30.png\",\n\t\"./Icon31.png\": \"./src/assets/Icon31.png\",\n\t\"./Icon32.png\": \"./src/assets/Icon32.png\",\n\t\"./Icon33.png\": \"./src/assets/Icon33.png\",\n\t\"./Icon34.png\": \"./src/assets/Icon34.png\",\n\t\"./Icon35.png\": \"./src/assets/Icon35.png\",\n\t\"./Icon36.png\": \"./src/assets/Icon36.png\",\n\t\"./Icon37.png\": \"./src/assets/Icon37.png\",\n\t\"./Icon38.png\": \"./src/assets/Icon38.png\",\n\t\"./Main.png\": \"./src/assets/Main.png\",\n\t\"./Panel01.png\": \"./src/assets/Panel01.png\",\n\t\"./Panel02.png\": \"./src/assets/Panel02.png\",\n\t\"./Panel03.png\": \"./src/assets/Panel03.png\",\n\t\"./Panel04.png\": \"./src/assets/Panel04.png\",\n\t\"./Tubo.png\": \"./src/assets/Tubo.png\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets sync \\\\.(png|jpe?g|svg)$\";\n\n//# sourceURL=webpack://proyecto-gus/./src/assets/_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ })

},
0,[["./src/game.js","runtime","vendors-node_modules_b","vendors-node_modules_earcut_src_earcut_js-56644bbe","vendors-node_modules_lodash_lodash_js-2ef0e502","vendors-node_modules_pa","vendors-node_modules_pixi_accessibility_dist_esm_accessibility_js-46a94a4f","vendors-node_modules_pixi_app_dist_esm_app_js-db8ad973","vendors-node_modules_pixi_compressed-textures_dist_esm_compressed-textures_js-2e521181","vendors-node_modules_pixi_constants_dist_esm_constants_js-0a922574","vendors-node_modules_pixi_core_dist_esm_core_js-758debad","vendors-node_modules_pixi_display_dist_esm_display_js-a96bf9a8","vendors-node_modules_pixi_filter-blur_dist_esm_filter-blur_js-7f6ada33","vendors-node_modules_pixi_filter-color-matrix_dist_esm_filter-color-matrix_js-c1c70f48","vendors-node_modules_pixi_filter-d","vendors-node_modules_pixi_graphics_dist_esm_graphics_js-fea20cbc","vendors-node_modules_pixi_interaction_dist_esm_interaction_js-3f0c9704","vendors-node_modules_pixi_j","vendors-node_modules_pixi_loaders_dist_esm_loaders_js-5d77a096","vendors-node_modules_pixi_math_dist_esm_math_js-a47cbed8","vendors-node_modules_pixi_mesh-extras_dist_esm_mesh-extras_js-634a959b","vendors-node_modules_pixi_mesh_dist_esm_mesh_js-0d108e13","vendors-node_modules_pixi_mixin-cache-as-bitmap_dist_esm_mixin-cache-as-bitmap_js-f58e1eec","vendors-node_modules_pixi_particles_dist_esm_particles_js-f53f66c4","vendors-node_modules_pixi_prepare_dist_esm_prepare_js-4b4b9021","vendors-node_modules_p","vendors-node_modules_pixi_sprite-animated_dist_esm_sprite-animated_js-a0d458f4","vendors-node_modules_pixi_sprite-tiling_dist_esm_sprite-tiling_js-2a49c733","vendors-node_modules_pixi_sprite_dist_esm_sprite_js-358966c8","vendors-node_modules_pixi_spritesheet_dist_esm_spritesheet_js-7fe2618a","vendors-node_modules_pixi_text-bitmap_dist_esm_text-bitmap_js-d1a375de","vendors-node_modules_pixi_text_dist_esm_text_js-d005a9db","vendors-node_modules_pixi_ticker_dist_esm_ticker_js-908df41a","vendors-node_modules_pixi_utils_dist_esm_utils_js-214a8333","vendors-node_modules_resource-loader_dist_resource-loader_esm_js-edd8348a","vendors-node_modules_url_node_modules_punycode_punycode_js-ad6cc8d5","vendors-node_modules_url_url_js-0b163432"]]]);