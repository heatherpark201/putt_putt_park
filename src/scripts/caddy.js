const Game = require("./game.js")

class Caddy {
  constructor(game) {
    this.game = game;
  };
};

Caddy.prototype.draw = function(ctx) {

    ctx.beginPath();
    ctx.font = "30px Segoe UI";
    ctx.textAlign = "bottom";
    ctx.fillStyle = "white";
    ctx.fillText("Strokes:", 200,200);
  
}

module.exports = Caddy;

