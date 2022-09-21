
const Util = require("./utils.js");
const Ball = require("./ball.js");
const GameView = require('./game_view.js')

class Arrow {
  constructor(ball) {
    this.ball = ball;
    this.pos = this.ball.pos;
    this.dir = this.ball.dir;
  };
};

Arrow.prototype.draw = function (ctx) {
  const ball = this.ball;
  if(ball && !ball.isMoving) {
    const [x, y] = ball.pos;
    const dir = ball.dir

    ctx.beginPath();
    canvasArrow(ctx, x, y, dir);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.lineWidth = 1;
  };
}

function canvasArrow(ctx, fromx, fromy, theta) {
  const toy = 50 * Math.sin(theta) + fromy;
  const tox = 50 * Math.cos(theta) + fromx;
  var headlen = 10;
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.moveTo(tox, toy);
  ctx.lineTo(tox-headlen*Math.cos(theta-Math.PI/6),toy-headlen*Math.sin(theta-Math.PI/6));
  ctx.moveTo(tox, toy);
  ctx.lineTo(tox-headlen*Math.cos(theta+Math.PI/6),toy-headlen*Math.sin(theta+Math.PI/6));
};


module.exports = Arrow;
