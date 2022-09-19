
// document.addEventListener("DOMContentLoaded", () => {
//   const canvas = document.querySelector(".game");
//   console.log(canvas);

//   const ctx = canvas.getContext("2d");
//     ctx.fillStyle = "green";
//     ctx.fillRect(0, 0, 500, 500);

//     ctx.beginPath();
//     ctx.arc(100,100,10,0, 2 * Math.PI, true);
//     ctx.strokeStyle = 'white';
//     ctx.lineWidth = 1;
//     ctx.stroke();
//     ctz.fillStyle = 'white';
//     ctx.fill();
// });


const Game = require("./scripts/game");
// const GameView = require("./scripts/game_view");

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();

  console.log(game);
  // new GameView(game, ctx).start();
});

