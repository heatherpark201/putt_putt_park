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
  ctx.font = "17px Segoe UI";
  ctx.textAlign = "bottom";
  ctx.fillStyle = "black";
  ctx.fillText("M",460, 190);

  ctx.beginPath();
  ctx.font = "17px Segoe UI";
  ctx.textAlign = "bottom";
  ctx.fillStyle = "black";
  ctx.fillText("A",460, 207);

  ctx.beginPath();
  ctx.font = "17px Segoe UI";
  ctx.textAlign = "bottom";
  ctx.fillStyle = "black";
  ctx.fillText("X",460, 225);

  ctx.beginPath();
  ctx.font = "18px Segoe UI";
  ctx.textAlign = "top";
  ctx.fillStyle = "black";
  ctx.fillText("POWER",13, 195);  
    //difference 20px from METER
  ctx.beginPath();
  ctx.font = "18px Segoe UI";
  ctx.textAlign = "top";
  ctx.fillStyle = "black";
  ctx.fillText("METER",14, 215);
  
  //total canvas is 500px 300px
  //game stats is 484px 235px  16px 65px
  const ball = this.ball;
  const fill = ball.pow * 4;
  ctx.beginPath();
  ctx.fillStyle = '#FF6347';
  ctx.rect(84,170, fill, 60);
  ctx.fill();
  ctx.stroke();
  
  //power exterior
  ctx.beginPath();
  ctx.strokeStyle= "tan ";
  ctx.rect(84,170, 400, 60);
  ctx.stroke();
  
}




module.exports = Power;