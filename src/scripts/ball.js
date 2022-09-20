const Util = require("./utils");
const Game = require("./game.js")
const Hole = require("./hole.js")

class Ball {
  constructor(pos, game) {
    this.pos = pos;
    this.radius = 6;
    this.vel = [5,5];
    this.color = 'white';
    this.game = game;
    this.isMoving = true;
    this.inCollision = true;
    // this.speed = speed ||= 15;
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
  pos = this.pos;
  
  // [velX,velY] = this.vel;
  this.decellerate(pos, vel);
  pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
  // // console.log(this.isMoving);
  console.log(pos);
  this.pos = pos;
  return this.pos;
};

// function checkCanvas(pos, vel) {
//   let pos = this.pos;
//   let vel = this.vel;
//   let x = pos[0]
//   let y = pos[1]
//   let vx = vel[0];
//   let vy = vel[1];

//   if (x <= 0 || x >= 1000) {
//     vel = [-vx, vy]
//   } 
//   if (y <= 0 || y >= 600) {
//     vel = [vx, -vy]
//   }

//   return vel; 

  
// }

Ball.prototype.decellerate = function (current_pos, vel) {
  let x = current_pos[0]
  let y = current_pos[1]
  let vx = vel[0];
  let vy = vel[1];

  if (x <= 0 || x >= 1000) {
    vel = [-vx, vy]
  } 
  if (y <= 0 || y >= 600) {
    vel = [vx, -vy]
  }

  this.vel = vel;

  if (velX !== 0 || velY !== 0) {
    [velX, velY] = [velX / 1.02, velY / 1.02];
    if (Math.abs(velX) < .1 && Math.abs(velY) < .1) {
      [velX, velY] = [0, 0];
      this.isMoving = false;
    }

  this.vel = [velX, velY];
}

    // //top left [0,0]
    // //top right [1000,0]
    // //bottom left [0,600]
    // //Right bottom [1000, 600]    15,6   15 - 6 = 9 
    
    // if (pos[0] - this.radius <= 0) {
    //   console.log('test1')
    //   this.vel[0] = -Math.abs(this.vel[0]) * restitution;
    //   pos[0] = this.radius;
    // } //right
    // this.vel = this.vel;
    // this.pos = pos;

    // if (pos[0] + this.radius >= canvasWidth) {    
    //   this.vel[0] = -Math.abs(this.vel[0]) * restitution;
    //   pos[0] = canvasWidth - this.radius;
    //   console.log('test')
    // }   

    // this.vel = this.vel;
    // this.pos = pos;
    // // Check for bottom and top
    // if (pos[1]- this.radius <= 0) { 3 - 6 
    //   this.vel[1] = -Math.abs(this.vel[1]) * restitution; 
    //   pos[1] = this.radius;
    //   console.log(pos) //909.6691308436681, 6
  
    // } 

    // this.vel = this.vel;
    // this.pos = pos;

    // if (pos[1] -this.radius >= canvasHeight) {
    //   this.vel[1] = -Math.abs(this.vel[1]) * restitution;
    //   pos[1] = canvasHeight - this.radius;
    //   console.log('test3')
    // }

    // this.vel = this.vel;
    // this.pos = pos;
  
    // console.log(this.vel)
  



Ball.prototype.edgeCollision = function (vx,vy) {
  const restitution = 5;
  const canvasWidth = 1000;
  const canvasHeight = 600;
  
  // console.log(canvasWidth);
  // console.log(canvasHeight);



  if (this.pos[0] - this.radius <= 0) {
    console.log('test1')
    this.vel[0] = -Math.abs(this.vel[0]) * restitution;
    this.pos[0] = this.radius;
  } //right
  if (this.pos[0] + this.radius >= canvasWidth) {
    this.vel[0] = -Math.abs(this.vel[0]) * restitution;
    this.pos[0] = canvasWidth - this.radius;
    console.log('test')
  }   
  // Check for bottom and top
  if (this.pos[1]- this.radius <= 0) {
    this.vel[1] = -Math.abs(this.vel[1]) * restitution; 
    this.pos[1] = this.radius;
    console.log(this.pos) //909.6691308436681, 6

  } 
  if (this.pos[1] -this.radius >= canvasHeight) {
    this.vel[1] = -Math.abs(this.vel[1]) * restitution;
    this.pos[1] = canvasHeight - this.radius;
    console.log('test3')
  }

  // console.log(this.vel)
  
}




Ball.prototype.stopMove = function () {
    return this.pos;
};


// Ball.prototype.step = function() {
//     setInterval(() => this.move(), 20);
//     console.log('step')
//     setInterval(() => this.draw(Game.ctx), 20);
// };


module.exports = Ball;
