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
  ctx.font = "22px Segoe UI";
  ctx.textAlign = "bottom";
  ctx.fillStyle = "black";
  ctx.fillText("Power:",80, 340);
  
  //power interior ctx.fillRect(upperLeftCornerX,upperLeftCornerY,width,height);
  const ball = this.ball;
  const fill = ball.pow * 2;
  ctx.beginPath();
  ctx.fillStyle = "pink";
  ctx.rect(90,350, 80, fill);
  ctx.fill();
  ctx.stroke();
  
  //power exterior
  ctx.beginPath();
  ctx.rect(90,350, 80, 150);
  ctx.stroke();
  
}


module.exports = Power;