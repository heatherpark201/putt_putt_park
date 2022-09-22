const Util = require("./utils");
const Game = require("./game.js")
const Hole = require("./hole.js")
const Arrow = require("./arrow.js")

const BALLSTART = [15,15];
const FIRSTHOLE = [780,480];

class Ball {
  constructor(game) {
    this.pos = BALLSTART;
    this.radius = 6;
    this.vel = [0,0];
    this.color = 'hotpink';
    this.game = game;
    this.isMoving = false;
    this.dir = 0; 
    this.pow = 0; //set max power to 100. 
    this.hole = this.game.hole;
    this.obstacle = this.game.obstacle;
  };
};


Ball.prototype.draw = function draw(ctx) {
  if (this.game.ballInHole) {
    return;

  } else {
    ctx.beginPath();
    ctx.arc(this.pos[0],this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
  };

};


Ball.prototype.move = function move(delta = 0) {
  // const game = this.game;
  pos = this.pos;
  vel = this.vel; 
  obstaclePos = this.game.obstaclePos;
  
  
  
  if (this.inTheHole()) {
    this.game.ballInHole = true;
    return;
  }

  this.decellerate(pos, vel, obstaclePos, 25);
  pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  this.pos = pos;
  return this.pos;
 
};


Ball.prototype.decellerate = function (current_pos, vel, obstaclePos, obstacleRad) {
  const regFriction = 0.9998;
  const collFriction = 0.9;
  let x = current_pos[0];
  let y = current_pos[1];
  let vx = vel[0];
  let vy = vel[1];

// 

  if (this.inCollision(obstaclePos, obstacleRad)) {
    vel = [(-vx * collFriction), vy] //vx friction
    // console.log('test')
    return this.vel = vel;
  // 
} 
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
 
  this.vel = vel;
}; 


Ball.prototype.inTheHole = function () {
  const centerDist = Util.dist(this.pos, [780,480])

  return (centerDist < (this.radius + 15 - 8)) && (this.vel[0] < .1); 
};

Ball.prototype.inCollision = function (obstaclePos, obstacleRad) {
  const centerDist = Util.dist(this.pos, obstaclePos)
  
  return (centerDist < (this.radius + obstacleRad))


};

//[0.09491359571461301, 0.06493388444042907]

Ball.prototype.changeDir = function (e) {
  e.preventDefault();
  switch (e.key) {
    case "ArrowLeft":
      this.dir -= .05;
      break;
    case "ArrowRight":
      this.dir += .05;
      break;
  };

  // console.log(this.dir)
};

Ball.prototype.changePow = function (e) {
  const maxPow = 100;

  if (this.pow === maxPow) {
    return;
  }

  e.preventDefault();
  switch (e.key) {
    case "z":
    case "Z":
      this.pow -= 3;
      break;
    case " ":
      this.pow += 3;
      break;
  };

}


Ball.prototype.stopMove = function () {
    this.vel = [0,0];
    return this.pos;
};



module.exports = Ball;
