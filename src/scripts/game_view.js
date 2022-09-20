function GameView(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.ball = this.game.ball;
    // this.hole = hole;
  }
  


GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
    const el = document.getElementById("game");
    el.addEventListener("click", e => {
        console.log('test')
        this.game.handleClick(e);
    });
    
    document.body.addEventListener("keydown", e => {
        e.preventDefault();
        if (e.key === 'LeftArrow') { //left arrow
            this.game.changeDir("left")
        }
        if (e.key === 'RightArrow') { //right arrow
            this.game.changeDir("right")
        }
        this.game.changeDir(e);
    });
};

// document.getElementById("someid").addEventListener('click',someEventHander.bind(event,'param1','param2'), false)




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
  