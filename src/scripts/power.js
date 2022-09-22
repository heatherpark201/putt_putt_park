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
  ctx.fillText("Test:",480, 190);

  ctx.beginPath();
  ctx.font = "22px Segoe UI";
  ctx.textAlign = "bottom";
  ctx.fillStyle = "black";
  ctx.fillText("Power:",90, 90);
  
  //total canvas is 500px 300px
  //game stats is 484px 235px  16px 65px
  const ball = this.ball;
  const fill = ball.pow * 2;
  ctx.beginPath();
  ctx.fillStyle = "blue";
  ctx.rect(84,170, fill, 60);
  ctx.fill();
  ctx.stroke();
  
  //power exterior
  ctx.beginPath();
  ctx.rect(84,170, 400, 60);
  ctx.stroke();
  
}


module.exports = Power;