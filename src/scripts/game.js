const Ball = require("./ball.js");
const Utils = require("./utils.js");
const Hole = require("./hole.js")
const Arrow = require("./arrow.js")
const Power = require("./power.js");


class Game {
    constructor(ctx) {
        this.bg = 'green';
        this.dim_x = 1000;
        this.dim_y = 600;
        this.ctx = ctx;
        this.ball = new Ball ([15,15]);
        this.hole = new Hole([780, 480]);
        this.arrow = new Arrow(this.ball);
        this.power = new Power(this.ball);
    };
};


Game.prototype.allObjects = function allObjects() {
    return [].concat(this.ball, this.hole, this.arrow, this.power);
  };


Game.prototype.draw = function draw(ctx) {
    this.ctx = ctx;
    ctx.fillStyle = this.bg;
    ctx.fillRect(0,0, this.dim_x, this.dim_y);

    this.allObjects().forEach(function(object) {
        object.draw(ctx);
    });
};


  
Game.prototype.step = function () {
    setInterval(() => this.ball.move(), 20);
    setInterval(() => this.draw(this.ctx), 20);
};

Game.prototype.handleClick = function(e) {
    setInterval(() => this.step(), 20);
    this.ball.swingPrep();
    // this.ball.stopMove();
};


  module.exports = Game;