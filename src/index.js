

const Game = require("./scripts/game.js");
const GameView = require("./scripts/game_view.js");
const Ball = require("./scripts/ball.js");
const Hole = require("./scripts/hole.js");
const GameStats = require("./scripts/game_stats.js");

document.addEventListener("DOMContentLoaded", () => {
  const canvasGame = document.getElementById('game');
  const ctxGame = canvasGame.getContext("2d");
  const canvasGameStats = document.getElementById('gameStats');
  const ctxGameStats = canvasGameStats.getContext("2d");
  const game = new Game (ctxGame);
  const gameStats = new GameStats (game, ctxGameStats);
  
  const view = new GameView (game, gameStats, ctxGame, ctxGameStats);
  view.start();
;
  
});

