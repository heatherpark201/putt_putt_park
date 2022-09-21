const Util = require("./utils");
const Game = require("./game.js")
const Hole = require("./hole.js")
const Arrow = require("./arrow.js")


class Power {
  constructor(ball) {
    this.ball = ball;
    this.pow = this.ball.pow
  };
};


Power.prototype.draw = function(ctx) {
ctx.beginPath();
ctx.font = "30px Segoe UI";
ctx.textAlign = "bottom";
ctx.fillStyle = "pink";
ctx.fillText("Power:", 100,100);

//power interior
const ball = this.ball;
const fill = ball.pow;
ctx.beginPath();
ctx.fillStyle = "red";
ctx.rect(550, 435, fill, 30);
ctx.fill();
ctx.stroke();

//power exterior
ctx.beginPath();
ctx.rect(550, 435, 120, 30);
ctx.stroke();
}



module.exports = Power;