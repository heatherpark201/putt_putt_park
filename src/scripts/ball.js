const Util = require("./utils");
const Game = require("./game.js")

class Ball {
    constructor(pos, game) {
        this.pos = pos;
        this.radius = 6;
        this.vel = [1,1];
        this.color = 'white';
        this.game = game;
    };
};

Ball.prototype.draw = function draw(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0],this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};





Ball.prototype.move = function move(delta = 0) {
    
//     const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
//   const velocityScale = delta / NORMAL_FRAME_TIME_DELTA,
//       offsetX = this.vel[0] * velocityScale,
//       offsetY = this.vel[1] * velocityScale;

//   this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  console.log('move ball test');
//   console.log(delta)
    console.log(this.pos)
  return this.pos;
};


Ball.prototype.step = function() {
    // setInterval(console.log('p',20), 20);

    setInterval(() => this.move(), 20);
    setInterval(() => this.draw(this.game.ctx), 20);
};

module.exports = Ball;
