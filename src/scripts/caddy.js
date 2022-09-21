const Game = require("./game.js")

class Caddy {
  constructor(game) {
    this.game = game;
    this.strokes = this.game.strokes;
  };
};

Caddy.prototype.draw = function(ctx) {
    const game = this.game;
    const strokeCount = game.strokes;

    ctx.beginPath();
    ctx.fillStyle = "#FAF0E6";
    ctx.rect(250, 390, 200,100);
    ctx.fill();
    ctx.stroke();
//(72,250, 400, 250)- board rect dimensions px
    ctx.beginPath();
    ctx.font = "22px Segoe UI";
    ctx.textAlign = "bottom";
    ctx.fillStyle = "black";
    ctx.fillText("Total Strokes:", 280, 380);

    ctx.beginPath();
    ctx.font = "30px Segoe UI";
    ctx.textAlign = "bottom";
    ctx.fillStyle = "brown";
    ctx.fillText(strokeCount, 350, 450);

  
}

module.exports = Caddy;

