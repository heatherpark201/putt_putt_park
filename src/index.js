
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




const Game = require("./scripts/game.js");
const GameView = require("./scripts/game_view.js");

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById('game');
  const ctx = canvasEl.getContext("2d");
  const test = new Game ('green', 1000, 600);
  const view = new GameView (test, ctx);
  const print = view.start();
  console.log(print);
});

