import Game from './game.js';

class Wall extends Game {
  constructor(dimensions) {
    super();
    this.dimensions = dimensions; // array of dimensions
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(...this.dimensions);
    ctx.fillStyle = "white";
    ctx.fill();
  }

}

export default Wall;