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

eval("// document.addEventListener(\"DOMContentLoaded\", () => {\n//   const canvas = document.querySelector(\".game\");\n//   console.log(canvas);\n//   const ctx = canvas.getContext(\"2d\");\n//     ctx.fillStyle = \"green\";\n//     ctx.fillRect(0, 0, 500, 500);\n//     ctx.beginPath();\n//     ctx.arc(100,100,10,0, 2 * Math.PI, true);\n//     ctx.strokeStyle = 'white';\n//     ctx.lineWidth = 1;\n//     ctx.stroke();\n//     ctz.fillStyle = 'white';\n//     ctx.fill();\n// });\nconst Game = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n\nconst GameView = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById('game');\n  const ctx = canvasEl.getContext(\"2d\");\n  const test = new Game('green', 1000, 600);\n  const view = new GameView(test, ctx);\n  const print = view.start();\n  console.log(print);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLE1BQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxnREFBRCxDQUFwQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdELG1CQUFPLENBQUMsMERBQUQsQ0FBeEI7O0FBRUFFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQU07RUFDbEQsTUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBakI7RUFDQSxNQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csVUFBVCxDQUFvQixJQUFwQixDQUFaO0VBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlULElBQUosQ0FBVSxPQUFWLEVBQW1CLElBQW5CLEVBQXlCLEdBQXpCLENBQWI7RUFDQSxNQUFNVSxJQUFJLEdBQUcsSUFBSVIsUUFBSixDQUFjTyxJQUFkLEVBQW9CRixHQUFwQixDQUFiO0VBQ0EsTUFBTUksS0FBSyxHQUFHRCxJQUFJLENBQUNFLEtBQUwsRUFBZDtFQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNELENBUEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXR0X3B1dHRfcGFyay8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVcIik7XG4vLyAgIGNvbnNvbGUubG9nKGNhbnZhcyk7XG5cbi8vICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbi8vICAgICBjdHguZmlsbFN0eWxlID0gXCJncmVlblwiO1xuLy8gICAgIGN0eC5maWxsUmVjdCgwLCAwLCA1MDAsIDUwMCk7XG5cbi8vICAgICBjdHguYmVnaW5QYXRoKCk7XG4vLyAgICAgY3R4LmFyYygxMDAsMTAwLDEwLDAsIDIgKiBNYXRoLlBJLCB0cnVlKTtcbi8vICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnd2hpdGUnO1xuLy8gICAgIGN0eC5saW5lV2lkdGggPSAxO1xuLy8gICAgIGN0eC5zdHJva2UoKTtcbi8vICAgICBjdHouZmlsbFN0eWxlID0gJ3doaXRlJztcbi8vICAgICBjdHguZmlsbCgpO1xuLy8gfSk7XG5cblxuXG5cbmNvbnN0IEdhbWUgPSByZXF1aXJlKFwiLi9zY3JpcHRzL2dhbWUuanNcIik7XG5jb25zdCBHYW1lVmlldyA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZ2FtZV92aWV3LmpzXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjb25zdCB0ZXN0ID0gbmV3IEdhbWUgKCdncmVlbicsIDEwMDAsIDYwMCk7XG4gIGNvbnN0IHZpZXcgPSBuZXcgR2FtZVZpZXcgKHRlc3QsIGN0eCk7XG4gIGNvbnN0IHByaW50ID0gdmlldy5zdGFydCgpO1xuICBjb25zb2xlLmxvZyhwcmludCk7XG59KTtcblxuIl0sIm5hbWVzIjpbIkdhbWUiLCJyZXF1aXJlIiwiR2FtZVZpZXciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXNFbCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInRlc3QiLCJ2aWV3IiwicHJpbnQiLCJzdGFydCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n\nclass Ball {\n  constructor(pos, vel, radius, color) {\n    this.pos = pos;\n    this.vel = vel;\n    this.radius = radius;\n    this.color = color;\n  }\n\n}\n\n;\n\nBall.prototype.draw = function draw(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n  ctx.strokeStyle = 'white';\n  ctx.lineWidth = 1;\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n};\n\nBall.prototype.collideWith = function collideWith(collision) {};\n\nBall.prototype.isCollidedWith = function isCollidedWith(collision) {\n  const centerDist = Util.dist(this.pos, collision.pos);\n  return centerDist < this.radius + collision.radius;\n};\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n\nBall.prototype.move = function move(timeDelta) {\n  const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n        offsetX = this.vel[0] * velocityScale,\n        offsetY = this.vel[1] * velocityScale;\n  this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n  return this.pos;\n};\n\nmodule.exports = Ball;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWxsLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyx1Q0FBRCxDQUFwQjs7QUFFQSxNQUFNQyxJQUFOLENBQVc7RUFDUEMsV0FBVyxDQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsTUFBWCxFQUFtQkMsS0FBbkIsRUFBMEI7SUFDakMsS0FBS0gsR0FBTCxHQUFXQSxHQUFYO0lBQ0EsS0FBS0MsR0FBTCxHQUFXQSxHQUFYO0lBQ0EsS0FBS0MsTUFBTCxHQUFjQSxNQUFkO0lBQ0EsS0FBS0MsS0FBTCxHQUFhQSxLQUFiO0VBQ0g7O0FBTk07O0FBT1Y7O0FBRURMLElBQUksQ0FBQ00sU0FBTCxDQUFlQyxJQUFmLEdBQXNCLFNBQVNBLElBQVQsQ0FBY0MsR0FBZCxFQUFtQjtFQUN2Q0EsR0FBRyxDQUFDQyxTQUFKO0VBQ0FELEdBQUcsQ0FBQ0UsR0FBSixDQUFRLEtBQUtSLEdBQUwsQ0FBUyxDQUFULENBQVIsRUFBcUIsS0FBS0EsR0FBTCxDQUFTLENBQVQsQ0FBckIsRUFBa0MsS0FBS0UsTUFBdkMsRUFBK0MsQ0FBL0MsRUFBa0QsSUFBSU8sSUFBSSxDQUFDQyxFQUEzRCxFQUErRCxJQUEvRDtFQUNBSixHQUFHLENBQUNLLFdBQUosR0FBa0IsT0FBbEI7RUFDQUwsR0FBRyxDQUFDTSxTQUFKLEdBQWdCLENBQWhCO0VBQ0FOLEdBQUcsQ0FBQ08sTUFBSjtFQUNBUCxHQUFHLENBQUNRLFNBQUosR0FBZ0IsS0FBS1gsS0FBckI7RUFDQUcsR0FBRyxDQUFDUyxJQUFKO0FBQ0QsQ0FSRDs7QUFXQWpCLElBQUksQ0FBQ00sU0FBTCxDQUFlWSxXQUFmLEdBQTZCLFNBQVNBLFdBQVQsQ0FBcUJDLFNBQXJCLEVBQWdDLENBQzFELENBREg7O0FBR0FuQixJQUFJLENBQUNNLFNBQUwsQ0FBZWMsY0FBZixHQUFnQyxTQUFTQSxjQUFULENBQXdCRCxTQUF4QixFQUFtQztFQUNqRSxNQUFNRSxVQUFVLEdBQUd2QixJQUFJLENBQUN3QixJQUFMLENBQVUsS0FBS3BCLEdBQWYsRUFBb0JpQixTQUFTLENBQUNqQixHQUE5QixDQUFuQjtFQUNBLE9BQU9tQixVQUFVLEdBQUksS0FBS2pCLE1BQUwsR0FBY2UsU0FBUyxDQUFDZixNQUE3QztBQUNELENBSEQ7O0FBTUEsTUFBTW1CLHVCQUF1QixHQUFHLE9BQU8sRUFBdkM7O0FBQ0F2QixJQUFJLENBQUNNLFNBQUwsQ0FBZWtCLElBQWYsR0FBc0IsU0FBU0EsSUFBVCxDQUFjQyxTQUFkLEVBQXlCO0VBQzdDLE1BQU1DLGFBQWEsR0FBR0QsU0FBUyxHQUFHRix1QkFBbEM7RUFBQSxNQUNJSSxPQUFPLEdBQUcsS0FBS3hCLEdBQUwsQ0FBUyxDQUFULElBQWN1QixhQUQ1QjtFQUFBLE1BRUlFLE9BQU8sR0FBRyxLQUFLekIsR0FBTCxDQUFTLENBQVQsSUFBY3VCLGFBRjVCO0VBSUEsS0FBS3hCLEdBQUwsR0FBVyxDQUFDLEtBQUtBLEdBQUwsQ0FBUyxDQUFULElBQWN5QixPQUFmLEVBQXdCLEtBQUt6QixHQUFMLENBQVMsQ0FBVCxJQUFjMEIsT0FBdEMsQ0FBWDtFQUVBLE9BQU8sS0FBSzFCLEdBQVo7QUFDRCxDQVJEOztBQVdBMkIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCOUIsSUFBakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXR0X3B1dHRfcGFyay8uL3NyYy9zY3JpcHRzL2JhbGwuanM/YTk1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbmNsYXNzIEJhbGwge1xuICAgIGNvbnN0cnVjdG9yKHBvcywgdmVsLCByYWRpdXMsIGNvbG9yKSB7XG4gICAgICAgIHRoaXMucG9zID0gcG9zO1xuICAgICAgICB0aGlzLnZlbCA9IHZlbDtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9O1xufTtcblxuQmFsbC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIGRyYXcoY3R4KSB7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmFyYyh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSwgdHJ1ZSk7XG4gIGN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XG4gIGN0eC5saW5lV2lkdGggPSAxO1xuICBjdHguc3Ryb2tlKCk7XG4gIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICBjdHguZmlsbCgpO1xufTtcblxuXG5CYWxsLnByb3RvdHlwZS5jb2xsaWRlV2l0aCA9IGZ1bmN0aW9uIGNvbGxpZGVXaXRoKGNvbGxpc2lvbikge1xuICB9O1xuXG5CYWxsLnByb3RvdHlwZS5pc0NvbGxpZGVkV2l0aCA9IGZ1bmN0aW9uIGlzQ29sbGlkZWRXaXRoKGNvbGxpc2lvbikge1xuICBjb25zdCBjZW50ZXJEaXN0ID0gVXRpbC5kaXN0KHRoaXMucG9zLCBjb2xsaXNpb24ucG9zKTtcbiAgcmV0dXJuIGNlbnRlckRpc3QgPCAodGhpcy5yYWRpdXMgKyBjb2xsaXNpb24ucmFkaXVzKTtcbn07XG5cblxuY29uc3QgTk9STUFMX0ZSQU1FX1RJTUVfREVMVEEgPSAxMDAwIC8gNjA7XG5CYWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24gbW92ZSh0aW1lRGVsdGEpIHtcbiAgY29uc3QgdmVsb2NpdHlTY2FsZSA9IHRpbWVEZWx0YSAvIE5PUk1BTF9GUkFNRV9USU1FX0RFTFRBLCBcbiAgICAgIG9mZnNldFggPSB0aGlzLnZlbFswXSAqIHZlbG9jaXR5U2NhbGUsXG4gICAgICBvZmZzZXRZID0gdGhpcy52ZWxbMV0gKiB2ZWxvY2l0eVNjYWxlO1xuXG4gIHRoaXMucG9zID0gW3RoaXMucG9zWzBdICsgb2Zmc2V0WCwgdGhpcy5wb3NbMV0gKyBvZmZzZXRZXTtcblxuICByZXR1cm4gdGhpcy5wb3M7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gQmFsbDtcbiJdLCJuYW1lcyI6WyJVdGlsIiwicmVxdWlyZSIsIkJhbGwiLCJjb25zdHJ1Y3RvciIsInBvcyIsInZlbCIsInJhZGl1cyIsImNvbG9yIiwicHJvdG90eXBlIiwiZHJhdyIsImN0eCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNvbGxpZGVXaXRoIiwiY29sbGlzaW9uIiwiaXNDb2xsaWRlZFdpdGgiLCJjZW50ZXJEaXN0IiwiZGlzdCIsIk5PUk1BTF9GUkFNRV9USU1FX0RFTFRBIiwibW92ZSIsInRpbWVEZWx0YSIsInZlbG9jaXR5U2NhbGUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/ball.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("const Ball = __webpack_require__(/*! ./ball */ \"./src/scripts/ball.js\");\n\nconst Utils = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\"); // const Hole = require(\"./hole\");\n// const Putter = require(\"./putter\");\n\n\nclass Game {\n  constructor(bg, dim_x, dim_y) {\n    this.bg = bg;\n    this.dim_x = dim_x;\n    this.dim_y = dim_y;\n  }\n\n}\n\n; // Game.BG_COLOR = \"green\";\n// Game.DIM_X = 1000;\n// Game.DIM_Y = 600;\n\nGame.prototype.draw = function draw(ctx) {\n  ctx.fillStyle = this.bg;\n  ctx.fillRect(0, 0, this.dim_x, this.dim_y);\n  console.log('hello');\n};\n\nGame.prototype.isOutOfBounds = function isOutOfBounds(pos) {\n  return pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y;\n};\n\nGame.prototype.moveBall = function moveBall(delta) {\n  this.ball().forEach(function (object) {\n    object.move(delta);\n  });\n};\n/* \n  get function created to make sure ball is in hole class;\n*/\n//   Game.prototype.inTheHole = function () {\n//   }\n\n\nmodule.exports = Game;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLElBQUksR0FBR0MsbUJBQU8sQ0FBQyxxQ0FBRCxDQUFwQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUdELG1CQUFPLENBQUMsdUNBQUQsQ0FBckIsQyxDQUNBO0FBQ0E7OztBQUVBLE1BQU1FLElBQU4sQ0FBVztFQUNQQyxXQUFXLENBQUNDLEVBQUQsRUFBS0MsS0FBTCxFQUFZQyxLQUFaLEVBQW1CO0lBQzFCLEtBQUtGLEVBQUwsR0FBVUEsRUFBVjtJQUNBLEtBQUtDLEtBQUwsR0FBYUEsS0FBYjtJQUNBLEtBQUtDLEtBQUwsR0FBYUEsS0FBYjtFQUNIOztBQUxNOztBQU1WLEMsQ0FHRDtBQUNBO0FBQ0E7O0FBR0FKLElBQUksQ0FBQ0ssU0FBTCxDQUFlQyxJQUFmLEdBQXNCLFNBQVNBLElBQVQsQ0FBY0MsR0FBZCxFQUFtQjtFQUNyQ0EsR0FBRyxDQUFDQyxTQUFKLEdBQWdCLEtBQUtOLEVBQXJCO0VBQ0FLLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsS0FBS04sS0FBeEIsRUFBK0IsS0FBS0MsS0FBcEM7RUFDQU0sT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNILENBSkQ7O0FBT0FYLElBQUksQ0FBQ0ssU0FBTCxDQUFlTyxhQUFmLEdBQStCLFNBQVNBLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0VBQ3ZELE9BQVFBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUyxDQUFWLElBQWlCQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsQ0FBMUIsSUFDSkEsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTYixJQUFJLENBQUNjLEtBRFYsSUFDcUJELEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU2IsSUFBSSxDQUFDZSxLQUQxQztBQUVILENBSEQ7O0FBS0FmLElBQUksQ0FBQ0ssU0FBTCxDQUFlVyxRQUFmLEdBQTBCLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0VBQy9DLEtBQUtDLElBQUwsR0FBWUMsT0FBWixDQUFvQixVQUFTQyxNQUFULEVBQWlCO0lBQ25DQSxNQUFNLENBQUNDLElBQVAsQ0FBWUosS0FBWjtFQUNELENBRkQ7QUFHSCxDQUpEO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7O0FBRUVLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnZCLElBQWpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHV0dF9wdXR0X3BhcmsvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQmFsbCA9IHJlcXVpcmUoXCIuL2JhbGxcIik7XG5jb25zdCBVdGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuLy8gY29uc3QgSG9sZSA9IHJlcXVpcmUoXCIuL2hvbGVcIik7XG4vLyBjb25zdCBQdXR0ZXIgPSByZXF1aXJlKFwiLi9wdXR0ZXJcIik7XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGJnLCBkaW1feCwgZGltX3kpIHtcbiAgICAgICAgdGhpcy5iZyA9IGJnO1xuICAgICAgICB0aGlzLmRpbV94ID0gZGltX3g7XG4gICAgICAgIHRoaXMuZGltX3kgPSBkaW1feTtcbiAgICB9O1xufTtcblxuICBcbi8vIEdhbWUuQkdfQ09MT1IgPSBcImdyZWVuXCI7XG4vLyBHYW1lLkRJTV9YID0gMTAwMDtcbi8vIEdhbWUuRElNX1kgPSA2MDA7XG5cblxuR2FtZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uIGRyYXcoY3R4KSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmc7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuZGltX3gsIHRoaXMuZGltX3kpO1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpXG59O1xuXG4gIFxuR2FtZS5wcm90b3R5cGUuaXNPdXRPZkJvdW5kcyA9IGZ1bmN0aW9uIGlzT3V0T2ZCb3VuZHMocG9zKSB7XG4gICAgcmV0dXJuIChwb3NbMF0gPCAwKSB8fCAocG9zWzFdIDwgMCkgfHxcbiAgICAgIChwb3NbMF0gPiBHYW1lLkRJTV9YKSB8fCAocG9zWzFdID4gR2FtZS5ESU1fWSk7XG59O1xuICBcbkdhbWUucHJvdG90eXBlLm1vdmVCYWxsID0gZnVuY3Rpb24gbW92ZUJhbGwoZGVsdGEpIHtcbiAgICB0aGlzLmJhbGwoKS5mb3JFYWNoKGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgb2JqZWN0Lm1vdmUoZGVsdGEpO1xuICAgIH0pO1xufTtcblxuLyogXG4gIGdldCBmdW5jdGlvbiBjcmVhdGVkIHRvIG1ha2Ugc3VyZSBiYWxsIGlzIGluIGhvbGUgY2xhc3M7XG4qL1xuXG4vLyAgIEdhbWUucHJvdG90eXBlLmluVGhlSG9sZSA9IGZ1bmN0aW9uICgpIHtcblxuLy8gICB9XG4gIFxuICBtb2R1bGUuZXhwb3J0cyA9IEdhbWU7Il0sIm5hbWVzIjpbIkJhbGwiLCJyZXF1aXJlIiwiVXRpbHMiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJiZyIsImRpbV94IiwiZGltX3kiLCJwcm90b3R5cGUiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjb25zb2xlIiwibG9nIiwiaXNPdXRPZkJvdW5kcyIsInBvcyIsIkRJTV9YIiwiRElNX1kiLCJtb3ZlQmFsbCIsImRlbHRhIiwiYmFsbCIsImZvckVhY2giLCJvYmplY3QiLCJtb3ZlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(module) {

eval("function GameView(game, ctx) {\n  this.ctx = ctx;\n  this.game = game;\n} //   GameView.MOVES = {\n//     w: [0, -1],\n//     a: [-1, 0],\n//     s: [0, 1],\n//     d: [1, 0],\n//   };\n//   GameView.prototypebindKeyHandlers() {\n//     const putter = this.putter;\n//     document.addEventListener(\"keydown\",\n//       e => {\n//         this.changeTheta(e);\n//         this.changeVelocity(e);\n//         this.restart(e);\n//     });\n\n\nGameView.prototype.start = function start() {\n  // this.lastTime = 0;\n  // requestAnimationFrame(this.animate.bind(this));\n  this.game.draw(this.ctx);\n};\n\nGameView.prototype.animate = function animate(time) {\n  const timeDelta = time - this.lastTime;\n  this.game.step(timeDelta);\n  this.game.draw(this.ctx);\n  this.lastTime = time;\n  requestAnimationFrame(this.animate.bind(this));\n};\n\nmodule.exports = GameView;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJuYW1lcyI6WyJHYW1lVmlldyIsImdhbWUiLCJjdHgiLCJwcm90b3R5cGUiLCJzdGFydCIsImRyYXciLCJhbmltYXRlIiwidGltZSIsInRpbWVEZWx0YSIsImxhc3RUaW1lIiwic3RlcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wdXR0X3B1dHRfcGFyay8uL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcz84MGVlIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEdhbWVWaWV3KGdhbWUsIGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gIH1cbiAgXG4vLyAgIEdhbWVWaWV3Lk1PVkVTID0ge1xuLy8gICAgIHc6IFswLCAtMV0sXG4vLyAgICAgYTogWy0xLCAwXSxcbi8vICAgICBzOiBbMCwgMV0sXG4vLyAgICAgZDogWzEsIDBdLFxuLy8gICB9O1xuXG4vLyAgIEdhbWVWaWV3LnByb3RvdHlwZWJpbmRLZXlIYW5kbGVycygpIHtcbi8vICAgICBjb25zdCBwdXR0ZXIgPSB0aGlzLnB1dHRlcjtcbi8vICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLFxuLy8gICAgICAgZSA9PiB7XG4vLyAgICAgICAgIHRoaXMuY2hhbmdlVGhldGEoZSk7XG4vLyAgICAgICAgIHRoaXMuY2hhbmdlVmVsb2NpdHkoZSk7XG4vLyAgICAgICAgIHRoaXMucmVzdGFydChlKTtcbi8vICAgICB9KTtcbiAgXG4gIFxuICBHYW1lVmlldy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAvLyB0aGlzLmxhc3RUaW1lID0gMDtcbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZ2FtZS5kcmF3KHRoaXMuY3R4KTtcbiAgfTtcblxuICBHYW1lVmlldy5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uIGFuaW1hdGUodGltZSkge1xuICAgIGNvbnN0IHRpbWVEZWx0YSA9IHRpbWUgLSB0aGlzLmxhc3RUaW1lO1xuXG4gICAgdGhpcy5nYW1lLnN0ZXAodGltZURlbHRhKTtcbiAgICB0aGlzLmdhbWUuZHJhdyh0aGlzLmN0eCk7XG4gICAgdGhpcy5sYXN0VGltZSA9IHRpbWU7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBHYW1lVmlldztcbiAgIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxRQUFULENBQWtCQyxJQUFsQixFQUF3QkMsR0FBeEIsRUFBNkI7RUFDekIsS0FBS0EsR0FBTCxHQUFXQSxHQUFYO0VBQ0EsS0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0QsQyxDQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdFRCxRQUFRLENBQUNHLFNBQVQsQ0FBbUJDLEtBQW5CLEdBQTJCLFNBQVNBLEtBQVQsR0FBaUI7RUFDMUM7RUFDQTtFQUNBLEtBQUtILElBQUwsQ0FBVUksSUFBVixDQUFlLEtBQUtILEdBQXBCO0FBQ0QsQ0FKRDs7QUFNQUYsUUFBUSxDQUFDRyxTQUFULENBQW1CRyxPQUFuQixHQUE2QixTQUFTQSxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtFQUNsRCxNQUFNQyxTQUFTLEdBQUdELElBQUksR0FBRyxLQUFLRSxRQUE5QjtFQUVBLEtBQUtSLElBQUwsQ0FBVVMsSUFBVixDQUFlRixTQUFmO0VBQ0EsS0FBS1AsSUFBTCxDQUFVSSxJQUFWLENBQWUsS0FBS0gsR0FBcEI7RUFDQSxLQUFLTyxRQUFMLEdBQWdCRixJQUFoQjtFQUVBSSxxQkFBcUIsQ0FBQyxLQUFLTCxPQUFMLENBQWFNLElBQWIsQ0FBa0IsSUFBbEIsQ0FBRCxDQUFyQjtBQUNELENBUkQ7O0FBWUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmQsUUFBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ (function(module) {

eval("const Util = {\n  dir(vec) {\n    const norm = Util.norm(vec);\n    return Util.scale(vec, 1 / norm);\n  },\n\n  dist(pos1, pos2) {\n    // pos1 = (x,y)\n    // pos2 = (x,y)\n    let x1 = pos1[0];\n    let x2 = pos2[0];\n    let y1 = pos1[1];\n    let y2 = pos2[1];\n    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));\n  },\n\n  norm(vec) {\n    return Util.dist([0, 0], vec);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n  inherits(ChildClass, BaseClass) {\n    ChildClass.prototype = Object.create(BaseClass.prototype);\n    ChildClass.prototype.constructor = ChildClass;\n  }\n\n};\nmodule.exports = Util;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlscy5qcy5qcyIsIm5hbWVzIjpbIlV0aWwiLCJkaXIiLCJ2ZWMiLCJub3JtIiwic2NhbGUiLCJkaXN0IiwicG9zMSIsInBvczIiLCJ4MSIsIngyIiwieTEiLCJ5MiIsIk1hdGgiLCJzcXJ0IiwicG93IiwibSIsImluaGVyaXRzIiwiQ2hpbGRDbGFzcyIsIkJhc2VDbGFzcyIsInByb3RvdHlwZSIsIk9iamVjdCIsImNyZWF0ZSIsImNvbnN0cnVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHV0dF9wdXR0X3BhcmsvLi9zcmMvc2NyaXB0cy91dGlscy5qcz9kYjEzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFV0aWwgPSB7XG4gICAgZGlyKHZlYykge1xuICAgICAgY29uc3Qgbm9ybSA9IFV0aWwubm9ybSh2ZWMpO1xuICAgICAgcmV0dXJuIFV0aWwuc2NhbGUodmVjLCAxIC8gbm9ybSk7XG4gICAgfSxcblxuICAgIGRpc3QocG9zMSwgcG9zMikge1xuICAgICAgICAvLyBwb3MxID0gKHgseSlcbiAgICAgICAgLy8gcG9zMiA9ICh4LHkpXG5cbiAgICAgICAgbGV0IHgxID0gcG9zMVswXTtcbiAgICAgICAgbGV0IHgyID0gcG9zMlswXTtcbiAgICAgICAgbGV0IHkxID0gcG9zMVsxXTtcbiAgICAgICAgbGV0IHkyID0gcG9zMlsxXTtcblxuICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdygoeDEgLSB4MiksIDIpICsgTWF0aC5wb3coKHkxIC0geTIpLCAyKSk7XG4gICAgfSxcblxuICAgIG5vcm0odmVjKSB7XG4gICAgICByZXR1cm4gVXRpbC5kaXN0KFswLCAwXSwgdmVjKTtcbiAgICB9LFxuIFxuXG4gICAgc2NhbGUodmVjLCBtKSB7XG4gICAgICByZXR1cm4gW3ZlY1swXSAqIG0sIHZlY1sxXSAqIG1dO1xuICAgIH0sXG5cbiAgICBpbmhlcml0cyhDaGlsZENsYXNzLCBCYXNlQ2xhc3MpIHtcbiAgICAgIENoaWxkQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShCYXNlQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIENoaWxkQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ2hpbGRDbGFzcztcbiAgICB9LFxuXG4gIH07XG4gIFxuICBtb2R1bGUuZXhwb3J0cyA9IFV0aWw7XG4gICJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsSUFBSSxHQUFHO0VBQ1RDLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNO0lBQ1AsTUFBTUMsSUFBSSxHQUFHSCxJQUFJLENBQUNHLElBQUwsQ0FBVUQsR0FBVixDQUFiO0lBQ0EsT0FBT0YsSUFBSSxDQUFDSSxLQUFMLENBQVdGLEdBQVgsRUFBZ0IsSUFBSUMsSUFBcEIsQ0FBUDtFQUNELENBSlE7O0VBTVRFLElBQUksQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWE7SUFDYjtJQUNBO0lBRUEsSUFBSUMsRUFBRSxHQUFHRixJQUFJLENBQUMsQ0FBRCxDQUFiO0lBQ0EsSUFBSUcsRUFBRSxHQUFHRixJQUFJLENBQUMsQ0FBRCxDQUFiO0lBQ0EsSUFBSUcsRUFBRSxHQUFHSixJQUFJLENBQUMsQ0FBRCxDQUFiO0lBQ0EsSUFBSUssRUFBRSxHQUFHSixJQUFJLENBQUMsQ0FBRCxDQUFiO0lBRUYsT0FBT0ssSUFBSSxDQUFDQyxJQUFMLENBQVVELElBQUksQ0FBQ0UsR0FBTCxDQUFVTixFQUFFLEdBQUdDLEVBQWYsRUFBb0IsQ0FBcEIsSUFBeUJHLElBQUksQ0FBQ0UsR0FBTCxDQUFVSixFQUFFLEdBQUdDLEVBQWYsRUFBb0IsQ0FBcEIsQ0FBbkMsQ0FBUDtFQUNELENBaEJROztFQWtCVFIsSUFBSSxDQUFDRCxHQUFELEVBQU07SUFDUixPQUFPRixJQUFJLENBQUNLLElBQUwsQ0FBVSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVYsRUFBa0JILEdBQWxCLENBQVA7RUFDRCxDQXBCUTs7RUF1QlRFLEtBQUssQ0FBQ0YsR0FBRCxFQUFNYSxDQUFOLEVBQVM7SUFDWixPQUFPLENBQUNiLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU2EsQ0FBVixFQUFhYixHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNhLENBQXRCLENBQVA7RUFDRCxDQXpCUTs7RUEyQlRDLFFBQVEsQ0FBQ0MsVUFBRCxFQUFhQyxTQUFiLEVBQXdCO0lBQzlCRCxVQUFVLENBQUNFLFNBQVgsR0FBdUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxTQUFTLENBQUNDLFNBQXhCLENBQXZCO0lBQ0FGLFVBQVUsQ0FBQ0UsU0FBWCxDQUFxQkcsV0FBckIsR0FBbUNMLFVBQW5DO0VBQ0Q7O0FBOUJRLENBQWI7QUFrQ0VNLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnhCLElBQWpCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/utils.js\n");

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