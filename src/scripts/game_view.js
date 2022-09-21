function GameView(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.ball = this.game.ball
  }
  


GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
    const el = document.getElementById("game");
    el.addEventListener("click", e => {
        this.game.handleClick(e);
    });
    
    document.body.addEventListener("keydown", e => {
        this.ball.changeDir(e);
        this.ball.changePow(e);
    });
};





GameView.prototype.start = function start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
    this.game.draw(this.ctx);
};



GameView.prototype.animate = function animate(time) {
    const timeDelta = time - this.lastTime;

    // this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
};

/* CONTROLS */



module.exports = GameView;
  