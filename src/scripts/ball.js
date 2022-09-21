const Util = require("./utils");
const Game = require("./game.js")
const Hole = require("./hole.js")
const Arrow = require("./arrow.js")

class Ball {
  constructor(pos, game) {
    this.pos = pos;
    this.radius = 6;
    this.vel = [0,0];
    this.color = 'white';
    this.game = game;
    this.isMoving = false;
    this.dir = 0;
    this.pow = 20;
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
  // const game = this.game;
  pos = this.pos;
  vel = this.vel; 
  
  
  
  if (this.inTheHole()) {
    console.log('you win!')
    return;
  }

  this.decellerate(pos, vel);
  pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  this.pos = pos;
  // console.log(this.pos)
  // console.log(this.vel)

  return this.pos;
};


Ball.prototype.decellerate = function (current_pos, vel) {
  const regFriction = 0.9998
  const collFriction = 0.9
  let x = current_pos[0]
  let y = current_pos[1]
  let vx = vel[0];
  let vy = vel[1];
// 
  if (x <= 0 || x >= 800 - this.radius) {
    vel = [(-vx * collFriction), vy] //vx friction
    return this.vel = vel;
    // 
  } 
  if (y <= 0 || y >= 500 - this.radius) { 
    vel = [vx, (-vy * collFriction)] //vy friction
    return this.vel = vel;
  }
// 
  if (vx !== 0 || vy!== 0) {  
    [vx, vy] = [(vx * regFriction) , (vy * regFriction)]; //both friction
    if (Math.abs(vx) < .015 && Math.abs(vy) < .015) {
      [vx, vy] = [0, 0];
      this.isMoving = false;
      this.pow = 0;
    } 
  }
// 
  this.vel = [vx, vy];
}


Ball.prototype.swingPrep = function () {

  // dir 0 - 6.3
  // pow ||= 20     // 0.5 = 100%

  let pow_num = (this.pow / 100) * 0.5

  if (this.isMoving) {
    return;
  }

  this.isMoving = true;
  let vel = (
    [(pow_num * Math.cos(this.dir)),
    (pow_num * Math.sin(this.dir))]
  );

  console.log(this.dir);
 
  this.vel = vel;
}; 

Ball.prototype.inTheHole = function () {

  if (this.pos === ([780, 480])) {
      return true;
  }
}



Ball.prototype.changeDir = function (e) {
  e.preventDefault();
  switch (e.key) {
    case "ArrowLeft":
      this.dir -= .01;
      break;
    case "ArrowRight":
      this.dir += .01;
      break;
  };

  // console.log(this.dir)
};

Ball.prototype.changePow = function (e) {
  e.preventDefault();
  switch (e.key) {
    // case "space":
    //   this.pow += 1;
    //   break;
    case " ":
      this.pow += 1;
      console.log(this.pow);
      break;
  };
}


Ball.prototype.stopMove = function () {
    this.vel = [0,0];
    return this.pos;
};



module.exports = Ball;
