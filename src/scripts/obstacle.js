const Util = require("./utils");
const Game = require("./game.js")
const Hole = require("./hole.js")
const Arrow = require("./arrow.js")

const START = [390, 260]

class Obstacle {
    constructor(game) {
      this.game = game;
      this.pos = START;
      this.radius = 25;
      this.vel = [0.3,0.3]
    };
  };
  
  
Obstacle.prototype.draw = function(ctx) {

    ctx.beginPath();
    ctx.arc(this.pos[0],this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = 'orange';
    ctx.fill();
};



  
  
// Obstacle.prototype.move = function move(delta = 0) {
//     pos = this.pos;
//     vel = this.vel; 



  
//     this.decellerate(pos, vel);
//     pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
//     this.pos = pos;
//     return this.pos;
   
//   };
  
  
// Obstacle.prototype.decellerate = function (current_pos, vel) {
    // const regFriction = 0.9998
    // const collFriction = 0.9
//     let x = current_pos[0]
//     let y = current_pos[1]
//     let vx = vel[0];
//     let vy = vel[1];
//   // 
//     if (x <= 0 || x >= 800 - this.radius) {
//       vel = [-vx, vy] //vx friction
//       return this.vel = vel;
//       // 
//     } 
//     if (y <= 0 || y >= 500 - this.radius) { 
//       vel = [vx, (-vy)] //vy friction
//       return this.vel = vel;
//     }
//   // 
//     if (vx !== 0 || vy!== 0) {  
//       [vx, vy] = [(vx) , (vy)]; //both friction
//       if (Math.abs(vx) < .015 && Math.abs(vy) < .015) {
//         [vx, vy] = [0, 0];
//       } 
//     }
//   // 
//     this.vel = [vx, vy];
//   }

  
  module.exports = Obstacle;