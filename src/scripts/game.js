const Ball = require("./ball.js");
const Utils = require("./utils.js");
const Hole = require("./hole.js")
// const Putter = require("./putter.js");


class Game {
    constructor(ctx) {
        this.bg = 'green';
        this.dim_x = 1000;
        this.dim_y = 600;
        this.ctx = ctx;
        this.ball = new Ball ([400,250]);
        this.hole = new Hole([780, 480]);
        this.dir = 0;
        this.pow = 0;
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

   
Game.prototype.inTheHole = function () {
    if (this.ball.pos === this.hole.pos) {
        return true;
    }
}

  
Game.prototype.step = function () {
    setInterval(() => this.ball.move(), 20);
    setInterval(() => this.draw(this.ctx), 20);
};

Game.prototype.handleClick = function(e) {
    setInterval(() => this.step(), 20);
    this.ball.swingPrep();
    // this.ball.stopMove();
};


Game.prototype.changeDir = function (x) {
    if (x === "right") {
        this.dir -= 0.01;

    };

    if (x === "left") {
        this.dir += 0.01;
    };

    console.log(this.dir);
};


  
  module.exports = Game;