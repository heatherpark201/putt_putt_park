const Ball = require("./ball.js");
const Utils = require("./utils.js");
const Hole = require("./hole.js")
const Arrow = require("./arrow.js")
const Power = require("./power.js");
const GameStats = require("./game_stats.js")
const Caddy = require("./caddy.js")



class Game {
    constructor(ctx) {
        this.dim_x = 1000;
        this.dim_y = 600;
        this.ctx = ctx;
        this.ball = new Ball(this);
        this.hole = new Hole(this);
        this.arrow = new Arrow(this.ball);
        this.caddy = new Caddy(this);
        this.strokes = 0;

    };
};


Game.prototype.allObjects = function allObjects() {
    return [].concat(this.hole,this.ball, this.arrow);
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
        this.strokes += 1;
  };
};
    

  module.exports = Game;