const Ball = require("./ball.js");
const Utils = require("./utils.js");
const Arrow = require("./arrow.js")
const Power = require("./power.js");

const FIRSTHOLE = [780,480];

class Hole {
    constructor(game) {
        this.pos = FIRSTHOLE;
        this.radius = 15;
        this.color = 'black';
        this.game = game;
    };
};


// const wins = document.querySelector(".winScreen");

Hole.prototype.draw = function draw(ctx) {
  if (this.game.ballInHole) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(this.pos[0],this.pos[1], 6, 0, 2 * Math.PI, true);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fill();
    
    // wins.style.display = "block !important";


  } else {  
    
    
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
  };
};


module.exports = Hole;
