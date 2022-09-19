function GameView(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }
  
//   GameView.MOVES = {
//     w: [0, -1],
//     a: [-1, 0],
//     s: [0, 1],
//     d: [1, 0],
//   };

//   GameView.prototypebindKeyHandlers() {
//     const putter = this.putter;
//     document.addEventListener("keydown",
//       e => {
//         this.changeTheta(e);
//         this.changeVelocity(e);
//         this.restart(e);
//     });
  
  
  GameView.prototype.start = function start() {
    // this.lastTime = 0;
    // requestAnimationFrame(this.animate.bind(this));
    this.game.draw(this.ctx);
  };

  GameView.prototype.animate = function animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }

  

  module.exports = GameView;
  