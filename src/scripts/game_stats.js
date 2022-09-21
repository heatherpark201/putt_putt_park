const Ball = require("./ball.js");
const Utils = require("./utils.js");
const Hole = require("./hole.js")
const Arrow = require("./arrow.js")
const Power = require("./power.js");
const GameView = require('./game_view.js');
const Caddy = require('./caddy.js')

function GameStats(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.ball = this.game.ball
    this.power = new Power(this.ball);
    this.caddy = this.game.caddy;
};
  



GameStats.prototype.allObjects = function allObjects() {
    return [].concat(this.power, this.caddy);
};


GameStats.prototype.draw = function draw(ctx) {
    this.ctx = ctx;
    ctx.fillStyle = 'beige';
    ctx.fillRect(0,0, 300, 500);

    this.allObjects().forEach(function(object) {
        object.draw(ctx);
    });
};

module.exports = GameStats;