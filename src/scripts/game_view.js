function GameView(game, ball, hole, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.ball = ball;
    this.hole = hole;
  }
  
    GameView.MOVES = {
        w: [0, -1],
        a: [-1, 0],
        s: [0, 1],
        d: [1, 0], 
    };

    // GameView.prototype.bindKeyHandlers = function () {
    //     addEventListener('click', (e) => {

    //     });


    // }
    // handleClick(e) {
        // this.game.playMove(e.target.getAttribute("data-square"))
    //     this.makeMove((e.target.getAttribute("data-square")))
    //   }
    
    //   makeMove(square) {
    //     let ele = document.querySelector(`[data-square="${square}"]`);
    //     if (this.xMoves.includes(square) || this.oMoves.includes(square)) {
    //       alert('Invalid move loser')
    //       return
    //     }
    //     ele.textContent= this.currentPlayer ? "X" : "O";
    //     if (this.currentPlayer) {
    //       this.xMoves.push(square)
    //       this.currentPlayer = false;
    //     } else {
    //       this.oMoves.push(square)
    //       this.currentPlayer = true;
    //     };
    //     console.log(this.xMoves, 'this is x moves')
    //     console.log(this.oMoves, 'this is o moves')
    //   }
  
    GameView.prototype.start = function start() {
        this.lastTime = 0;
        requestAnimationFrame(this.animate.bind(this));
        this.game.draw(this.ctx);
    };



    GameView.prototype.animate = function animate(time) {
        const timeDelta = time - this.lastTime;

        this.game.step(timeDelta);
        this.game.draw(this.ctx);
        this.lastTime = time;

        requestAnimationFrame(this.animate.bind(this));
    };

  

  

  module.exports = GameView;
  