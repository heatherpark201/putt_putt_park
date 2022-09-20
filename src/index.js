

const Game = require("./scripts/game.js");
const GameView = require("./scripts/game_view.js");
const Ball = require("./scripts/ball.js");
const Hole = require("./scripts/hole.js")

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById('game');
  const ctx = canvasEl.getContext("2d");
  const test = new Game (ctx);
  const view = new GameView (test, ctx);
  view.start();
  // test.step();
  
});

