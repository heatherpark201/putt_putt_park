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
  
  //power interior ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
  const ball = this.ball;
  const fill = ball.pow * 2;
  ctx.beginPath();
  ctx.fillStyle = "pink";
  ctx.rect(0,300, 100, fill);
  ctx.fill();
  ctx.stroke();
  
  //power exterior
  ctx.beginPath();
  ctx.rect(0,300, 100, 300);
  ctx.stroke();
  
}


module.exports = Power;