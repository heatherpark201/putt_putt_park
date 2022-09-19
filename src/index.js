

const Game = require("./scripts/game.js");
const GameView = require("./scripts/game_view.js");
const Ball = require("./scripts/ball.js");
const Hole = require("./scripts/hole.js")

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById('game');
  const ctx = canvasEl.getContext("2d");
  const test = new Game ('green', 1000, 600, ctx);
  const ball = new Ball ([20, 15], test);
  const hole = new Hole([780, 480]);
  const view = new GameView (test,ball, hole, ctx);
  view.start();
  // test.step();
  
});

