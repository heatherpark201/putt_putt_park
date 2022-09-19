const Ball = require("./ball");
const Utils = require("./utils");
// const Hole = require("./hole");
// const Putter = require("./putter");

class Game {
    constructor(bg, dim_x, dim_y) {
        this.bg = bg;
        this.dim_x = dim_x;
        this.dim_y = dim_y;
    };
};

  
// Game.BG_COLOR = "green";
// Game.DIM_X = 1000;
// Game.DIM_Y = 600;


Game.prototype.draw = function draw(ctx) {
    ctx.fillStyle = this.bg;
    ctx.fillRect(0, 0, this.dim_x, this.dim_y);
    console.log('hello')
};

  
Game.prototype.isOutOfBounds = function isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
};
  
Game.prototype.moveBall = function moveBall(delta) {
    this.ball().forEach(function(object) {
      object.move(delta);
    });
};

/* 
  get function created to make sure ball is in hole class;
*/

//   Game.prototype.inTheHole = function () {

//   }
  
  module.exports = Game;