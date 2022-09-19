function GameView(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }
  
  GameView.MOVES = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
  };
  
//   GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
//     const ball = this.ball;
  
//     Object.keys(GameView.MOVES).forEach(function(k)  {
//       const move = GameView.MOVES[k];
//       key(k, function () { ship.power(move); });
//     });
  
//     key("space", function () { ship.fireBullet(); });
//   };
  
//   GameView.prototype.start = function start() {
   
//   };
  
//   GameView.prototype.animate = function animate(time) {
  
//   };
  
  module.exports = GameView;
  