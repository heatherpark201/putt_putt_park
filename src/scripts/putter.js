
// const MovingO = require("./moving_object");
const Util = require("./utils.js");
const Ball = require("./ball.js");
const GameView = require('./game_view.js')


function Putter(options) {
  options.radius = ball.RADIUS;
  options.vel = options.vel || [0, 0];

};

Ball.RADIUS = 15;





module.exports = Putter;
