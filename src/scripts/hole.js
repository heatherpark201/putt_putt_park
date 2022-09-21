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
    };
};

Hole.prototype.draw = function draw(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};


module.exports = Hole;