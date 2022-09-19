// const Ball = require("./ball");
// const Utils = require("./utils");

// Game.BG_COLOR = "green";
// Game.DIM_X = 1000;
// Game.DIM_Y = 600;

class Game {
    constructor(color, dim_x, dim_y) {
        this.color = 'green';
        this.dim_x = 1000;
        this.dim_y = 600;
    };
};


Game.prototype.draw = function draw(ctx) {
    ctx.clearRect(0, 0, 1000, 600);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 1000, 600);
  
    this.allObjects().forEach(function(object) {
      object.draw(ctx);
    });
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
  
  module.exports = Game;