const Util = require("./utils");

class Ball {
    constructor(pos, vel, radius, color) {
        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
    };
};

Ball.prototype.draw = function draw(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};


Ball.prototype.collideWith = function collideWith(collision) {
  };

Ball.prototype.isCollidedWith = function isCollidedWith(collision) {
  const centerDist = Util.dist(this.pos, collision.pos);
  return centerDist < (this.radius + collision.radius);
};


const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
Ball.prototype.move = function move(timeDelta) {
  const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA, 
      offsetX = this.vel[0] * velocityScale,
      offsetY = this.vel[1] * velocityScale;

  this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

  return this.pos;
};


module.exports = Ball;
