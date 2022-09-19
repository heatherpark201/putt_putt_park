const Ball = require("./ball.js");
const Utils = require("./utils.js");
const Hole = require("./hole.js")
// const Putter = require("./putter.js");


class Game {
    constructor(bg, dim_x, dim_y, ctx) {
        this.bg = bg;
        this.dim_x = dim_x;
        this.dim_y = dim_y;
        this.ctx = ctx;
        this.ball = new Ball ([20, 15]);
        this.hole = new Hole([780, 480]);
    };
};


Game.prototype.allObjects = function allObjects() {
    return [].concat(this.ball, this.hole);
  };


Game.prototype.draw = function draw(ctx) {
    this.ctx = ctx;
    ctx.fillStyle = this.bg;
    ctx.fillRect(0,0, this.dim_x, this.dim_y);

    this.allObjects().forEach(function(object) {
        object.draw(ctx);
    });
};



Game.prototype.isOutOfBounds = function isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
};
  
Game.prototype.step = function () {
    setInterval(() => this.ball.move(), 20);
    setInterval(() => this.draw(this.ctx), 20);
};

Game.prototype.handleClick = function(e) {
    if isMoving(this.ball) {
        
    }
    this.step();


};


/* 
  get function created to make sure ball is in hole class;
*/

//   Game.prototype.inTheHole = function () {

//   }
  
  module.exports = Game;