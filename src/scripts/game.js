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
        this.ball = new Ball ([15,3]);
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

const canvasWidth = this.dim_x;
const canvasHeight = this.dim_y;

// Set a restitution, a lower value will lose more energy when colliding
const restitution = 0.90;

Game.prototype.detectEdgeCollisions = function () {
    let ball = this.ball; 

    // Check for left and right
    if (ball.pos[0] < ball.radius) {
        ball.vel[0] = Math.abs(ball.vel[0]) * restitution;
        ball.pos[0] = ball.radius;
    } else if (ball.pos[0] > canvasWidth - ball.radius) {
        ball.vel[0] = -Math.abs(ball.vel[0]) * restitution;
        ball.pos[0] = canvasWidth - ball.radius;
    }   
    // Check for bottom and top
    if (ball.pos[1] < ball.radius) {
        ball.vel[1] = Math.abs(ball.vel[1]) * restitution;
        ball.pos[1] = ball.radius;
    } else if (ball.pos[1] > canvasHeight - ball.radius) {
        ball.pos[1] = -Math.abs(ball.vel[1]) * restitution;
        ball.pos[1] = canvasHeight - ball.radius;
    }
}
   
Game.prototype.inTheHole = function () {
    if (this.ball.pos === this.hole.pos) {
        return true;
    }
}

Game.prototype.isOutOfBounds = function isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > this.dim_x) || (pos[1] > this.dim_y);
};
  
Game.prototype.step = function () {
    setInterval(() => this.ball.move(), 20);
    setInterval(() => this.draw(this.ctx), 20);
};

Game.prototype.handleClick = function(e) {
    setInterval(() => this.step(), 20);
    this.ball.swingPrep();
    // this.ball.stopMove();
    console.log('handleclickcheck')
};


/* 
  get function created to make sure ball is in hole class;
*/

//   Game.prototype.inTheHole = function () {

//   }
  
  module.exports = Game;