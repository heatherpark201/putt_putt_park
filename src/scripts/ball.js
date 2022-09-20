const Util = require("./utils");
const Game = require("./game.js")
const Hole = require("./hole.js")

class Ball {
  constructor(pos, game) {
    this.pos = pos;
    this.radius = 6;
    this.vel = [0,0];
    this.color = 'white';
    this.game = game;
    this.isMoving = false;
    this.speed = 15;
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

Ball.prototype.swingPrep = function (dir, pow) {
  dir ||= 1     // 0 - 6.3
  pow ||= 100     // 0.5 = 100%

  let pow_num = (pow / 100) * 0.5

  if (this.isMoving) {
    return;
  }

  this.isMoving = true;
  let vel = (
    [(pow_num * Math.cos(dir)),
    (pow_num * Math.sin(dir))]
  );
  console.log(vel)
  this.vel = vel;
}; 



Ball.prototype.move = function move(delta = 0) {
  pos = this.pos;
  vel = this.vel; 
  

  this.decellerate(pos, vel);
  pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  this.pos = pos;
  // console.log(this.pos)
  // console.log(this.vel)
  return this.pos;
};



Ball.prototype.decellerate = function (current_pos, vel) {
  // let max_friction =
  let x = current_pos[0]
  let y = current_pos[1]
  let vx = vel[0];
  let vy = vel[1];
// 
  if (x <= 0 || x >= 800) {
    vel = [(-vx * 0.97), vy] //vx friction
    return this.vel = vel;
    // 
  } 
  if (y <= 0 || y >= 544) { 
    vel = [vx, (-vy * 0.97)] //vy friction
    return this.vel = vel;
  }
// 
  if (vx !== 0 || vy!== 0) {  
    [vx, vy] = [(vx * 0.9998) , (vy * 0.9998)]; //both friction
    if (Math.abs(vx) < .017 && Math.abs(vy) < .017) {
      [vx, vy] = [0, 0];
      this.isMoving = false;
    } 
  }
// 
  this.vel = [vx, vy];
}


Ball.prototype.stopMove = function () {
    this.vel = [0,0];
    return this.pos;
};



module.exports = Ball;
