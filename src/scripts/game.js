const Ball = require("./ball.js");
const Utils = require("./utils.js");
const Hole = require("./hole.js")
const Arrow = require("./arrow.js")
const Power = require("./power.js");
const GameStats = require("./game_stats.js")


class Game {
    constructor(ctx) {
        this.dim_x = 1000;
        this.dim_y = 600;
        this.ctx = ctx;
        this.ball = new Ball(this);
        this.hole = new Hole(this);
        this.arrow = new Arrow(this.ball);
    };
};


Game.prototype.allObjects = function allObjects() {
    return [].concat(this.ball, this.hole, this.arrow);
  };


Game.prototype.draw = function draw(ctx) {
    this.ctx = ctx;
    ctx.fillStyle = 'pink';
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
    e.preventDefault();
  switch (e.key) {
    case "ArrowUp":
        setInterval(() => this.step(), 20);
        this.ball.swingPrep();
  };
};
    

  module.exports = Game;