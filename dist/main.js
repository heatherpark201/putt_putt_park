/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// document.addEventListener(\"DOMContentLoaded\", () => {\n//   const canvas = document.querySelector(\".game\");\n//   console.log(canvas);\n//   const ctx = canvas.getContext(\"2d\");\n//     ctx.fillStyle = \"green\";\n//     ctx.fillRect(0, 0, 500, 500);\n//     ctx.beginPath();\n//     ctx.arc(100,100,10,0, 2 * Math.PI, true);\n//     ctx.strokeStyle = 'white';\n//     ctx.lineWidth = 1;\n//     ctx.stroke();\n//     ctz.fillStyle = 'white';\n//     ctx.fill();\n// });\nconst Game = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\"); // const GameView = require(\"./scripts/game_view\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n  canvasEl.width = Game.DIM_X;\n  canvasEl.height = Game.DIM_Y;\n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new Game();\n  console.log(game); // new GameView(game, ctx).start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyw2Q0FBRCxDQUFwQixDLENBQ0E7OztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0VBQ3hELE1BQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFqQjtFQUNBRCxRQUFRLENBQUNFLEtBQVQsR0FBaUJOLElBQUksQ0FBQ08sS0FBdEI7RUFDQUgsUUFBUSxDQUFDSSxNQUFULEdBQWtCUixJQUFJLENBQUNTLEtBQXZCO0VBRUEsTUFBTUMsR0FBRyxHQUFHTixRQUFRLENBQUNPLFVBQVQsQ0FBb0IsSUFBcEIsQ0FBWjtFQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJWixJQUFKLEVBQWI7RUFFQWEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFSd0QsQ0FTeEQ7QUFDRCxDQVZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHV0dF9wdXR0X3BhcmsvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lXCIpO1xuLy8gICBjb25zb2xlLmxvZyhjYW52YXMpO1xuXG4vLyAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4vLyAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcbi8vICAgICBjdHguZmlsbFJlY3QoMCwgMCwgNTAwLCA1MDApO1xuXG4vLyAgICAgY3R4LmJlZ2luUGF0aCgpO1xuLy8gICAgIGN0eC5hcmMoMTAwLDEwMCwxMCwwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4vLyAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcbi8vICAgICBjdHgubGluZVdpZHRoID0gMTtcbi8vICAgICBjdHguc3Ryb2tlKCk7XG4vLyAgICAgY3R6LmZpbGxTdHlsZSA9ICd3aGl0ZSc7XG4vLyAgICAgY3R4LmZpbGwoKTtcbi8vIH0pO1xuXG5cbmNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWVcIik7XG4vLyBjb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZV92aWV3XCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XG4gIGNhbnZhc0VsLndpZHRoID0gR2FtZS5ESU1fWDtcbiAgY2FudmFzRWwuaGVpZ2h0ID0gR2FtZS5ESU1fWTtcblxuICBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuXG4gIGNvbnNvbGUubG9nKGdhbWUpO1xuICAvLyBuZXcgR2FtZVZpZXcoZ2FtZSwgY3R4KS5zdGFydCgpO1xufSk7XG5cbiJdLCJuYW1lcyI6WyJHYW1lIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc0VsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ3aWR0aCIsIkRJTV9YIiwiaGVpZ2h0IiwiRElNX1kiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module) {

eval("// const Ball = require(\"./ball\");\n// const Utils = require(\"./utils\");\n// Game.BG_COLOR = \"green\";\n// Game.DIM_X = 1000;\n// Game.DIM_Y = 600;\nclass Game {\n  constructor(color, dim_x, dim_y) {\n    this.color = 'green';\n    this.dim_x = 1000;\n    this.dim_y = 600;\n  }\n\n}\n\n;\n\nGame.prototype.draw = function draw(ctx) {\n  ctx.clearRect(0, 0, 1000, 600);\n  ctx.fillStyle = 'green';\n  ctx.fillRect(0, 0, 1000, 600);\n  this.allObjects().forEach(function (object) {\n    object.draw(ctx);\n  });\n};\n\nGame.prototype.isOutOfBounds = function isOutOfBounds(pos) {\n  return pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y;\n};\n\nGame.prototype.moveBall = function moveBall(delta) {\n  this.ball().forEach(function (object) {\n    object.move(delta);\n  });\n};\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibmFtZXMiOlsiR2FtZSIsImNvbnN0cnVjdG9yIiwiY29sb3IiLCJkaW1feCIsImRpbV95IiwicHJvdG90eXBlIiwiZHJhdyIsImN0eCIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYWxsT2JqZWN0cyIsImZvckVhY2giLCJvYmplY3QiLCJpc091dE9mQm91bmRzIiwicG9zIiwiRElNX1giLCJESU1fWSIsIm1vdmVCYWxsIiwiZGVsdGEiLCJiYWxsIiwibW92ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3B1dHRfcHV0dF9wYXJrLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IEJhbGwgPSByZXF1aXJlKFwiLi9iYWxsXCIpO1xuLy8gY29uc3QgVXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxuLy8gR2FtZS5CR19DT0xPUiA9IFwiZ3JlZW5cIjtcbi8vIEdhbWUuRElNX1ggPSAxMDAwO1xuLy8gR2FtZS5ESU1fWSA9IDYwMDtcblxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY29sb3IsIGRpbV94LCBkaW1feSkge1xuICAgICAgICB0aGlzLmNvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgdGhpcy5kaW1feCA9IDEwMDA7XG4gICAgICAgIHRoaXMuZGltX3kgPSA2MDA7XG4gICAgfTtcbn07XG5cblxuR2FtZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIGRyYXcoY3R4KSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCAxMDAwLCA2MDApO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCAxMDAwLCA2MDApO1xuICBcbiAgICB0aGlzLmFsbE9iamVjdHMoKS5mb3JFYWNoKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgb2JqZWN0LmRyYXcoY3R4KTtcbiAgICB9KTtcbiAgfTtcbiAgXG4gIEdhbWUucHJvdG90eXBlLmlzT3V0T2ZCb3VuZHMgPSBmdW5jdGlvbiBpc091dE9mQm91bmRzKHBvcykge1xuICAgIHJldHVybiAocG9zWzBdIDwgMCkgfHwgKHBvc1sxXSA8IDApIHx8XG4gICAgICAocG9zWzBdID4gR2FtZS5ESU1fWCkgfHwgKHBvc1sxXSA+IEdhbWUuRElNX1kpO1xuICB9O1xuICBcbiAgR2FtZS5wcm90b3R5cGUubW92ZUJhbGwgPSBmdW5jdGlvbiBtb3ZlQmFsbChkZWx0YSkge1xuICAgIHRoaXMuYmFsbCgpLmZvckVhY2goZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICBvYmplY3QubW92ZShkZWx0YSk7XG4gICAgfSk7XG4gIH07XG4gIFxuICBtb2R1bGUuZXhwb3J0cyA9IEdhbWU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsSUFBTixDQUFXO0VBQ1BDLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWVDLEtBQWYsRUFBc0I7SUFDN0IsS0FBS0YsS0FBTCxHQUFhLE9BQWI7SUFDQSxLQUFLQyxLQUFMLEdBQWEsSUFBYjtJQUNBLEtBQUtDLEtBQUwsR0FBYSxHQUFiO0VBQ0g7O0FBTE07O0FBTVY7O0FBR0RKLElBQUksQ0FBQ0ssU0FBTCxDQUFlQyxJQUFmLEdBQXNCLFNBQVNBLElBQVQsQ0FBY0MsR0FBZCxFQUFtQjtFQUNyQ0EsR0FBRyxDQUFDQyxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixJQUFwQixFQUEwQixHQUExQjtFQUNBRCxHQUFHLENBQUNFLFNBQUosR0FBZ0IsT0FBaEI7RUFDQUYsR0FBRyxDQUFDRyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixJQUFuQixFQUF5QixHQUF6QjtFQUVBLEtBQUtDLFVBQUwsR0FBa0JDLE9BQWxCLENBQTBCLFVBQVNDLE1BQVQsRUFBaUI7SUFDekNBLE1BQU0sQ0FBQ1AsSUFBUCxDQUFZQyxHQUFaO0VBQ0QsQ0FGRDtBQUdELENBUkg7O0FBVUVQLElBQUksQ0FBQ0ssU0FBTCxDQUFlUyxhQUFmLEdBQStCLFNBQVNBLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0VBQ3pELE9BQVFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFWLElBQWlCQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBMUIsSUFDSkEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTZixJQUFJLENBQUNnQixLQURWLElBQ3FCRCxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNmLElBQUksQ0FBQ2lCLEtBRDFDO0FBRUQsQ0FIRDs7QUFLQWpCLElBQUksQ0FBQ0ssU0FBTCxDQUFlYSxRQUFmLEdBQTBCLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0VBQ2pELEtBQUtDLElBQUwsR0FBWVIsT0FBWixDQUFvQixVQUFTQyxNQUFULEVBQWlCO0lBQ25DQSxNQUFNLENBQUNRLElBQVAsQ0FBWUYsS0FBWjtFQUNELENBRkQ7QUFHRCxDQUpEOztBQU1BRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ2QixJQUFqQiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXR0X3B1dHRfcGFyay8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;