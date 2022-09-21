const Ball = require("./ball.js");
const Utils = require("./utils.js");
const Hole = require("./hole.js")
const Arrow = require("./arrow.js")
const Power = require("./power.js");
const GameStats = require("./game_stats.js")
const Caddy = require("./caddy.js")



class Game {
    constructor(ctx) {
        this.dim_x = 800;
        this.dim_y = 500;
        this.ctx = ctx;
        this.ball = new Ball(this);
        this.hole = new Hole(this);
        this.arrow = new Arrow(this.ball);
        this.caddy = new Caddy(this);
        this.strokes = 0;
        this.ballInHole = false;

    };
};


Game.prototype.allObjects = function allObjects() {
    return [].concat(this.hole,this.ball, this.arrow);
  };


Game.prototype.draw = function draw(ctx) {
    this.ctx = ctx;
    ctx.fillStyle = '#006400';
    ctx.fillRect(0,0,800,500 );

    const rows = this.dim_x /10; 
    const cols = this.dim_y /10;

    ctx.fillStyle = '#FFF8DC';
    for (let y = 0; y < cols; y++) {
        for (let x = 0; x < rows; x++) {
            if (x % 2 === 0 && y % 2 === 1 || x % 2 === 1 && y % 2 === 0 ) {
                ctx.fillRect((x * 100),(y*100),100, 100);
            }
        }
    }


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
    case "Enter":
        setInterval(() => this.step(), 20);
        this.ball.swingPrep();
        this.strokes += 1;
  };
};
    

  module.exports = Game;