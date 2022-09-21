function GameView(game, gameStats, gameCtx, statsCtx) {
    this.gameCtx = gameCtx;
    this.statsCtx = statsCtx;
    this.game = game;
    this.ball = this.game.ball
    this.gameStats = gameStats;
  }
  
GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
    const el = document.getElementById("game");
    el.addEventListener("click", e => {
        this.game.handleClick(e);
    });
    
    document.body.addEventListener("keydown", e => {
        this.ball.changeDir(e);
        this.ball.changePow(e);
        this.game.handleClick(e);
        // this.restart(e);
    });
};


GameView.prototype.start = function start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
    this.game.draw(this.gameCtx);
    this.gameStats.draw(this.statsCtx);

};


GameView.prototype.animate = function animate(time) {
    const timeDelta = time - this.lastTime;

    // this.game.step(timeDelta);
    this.game.draw(this.gameCtx);
    this.gameStats.draw(this.statsCtx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
};

// GameView.prototype.restart = function (e) {
//     e.preventDefault();
//     console.log('restart')
//     switch (e.key) {
//       case "r":
//       case "R":
//         this.start();
//         break;
//     };
// }


/* CONTROLS */



module.exports = GameView;
  