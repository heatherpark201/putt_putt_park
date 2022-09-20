function GameView(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    // this.ball = ball;
    // this.hole = hole;
  }
  


    GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
        const el = document.getElementById("game");
        el.addEventListener("click", e => {
            this.game.handleClick(e);
    
        });

        
    };


// GameView.MOVES = {
//     w: [0, -1],
//     a: [-1, 0],
//     s: [0, 1],
//     d: [1, 0],
//   };
  
//   GameView.prototype.bindKeyHandlers = function bindKeyHandlers() {
//     const ball = this.ball;
  
//     Object.keys(GameView.MOVES).forEach(function(k)  {
//       const move = GameView.MOVES[k];
//       key(k, function () { ship.power(move); });
//     });
  
//     key("space", function () { this.game.step(); });
//   };

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

  

  

module.exports = GameView;
  