const Ball = require("./ball.js");
const Utils = require("./utils.js");
const Hole = require("./hole.js")
// const Putter = require("./putter.js");


class Game {
    constructor(bg, dim_x, dim_y, ctx) {
        this.bg = bg;
        this.dim_x = dim_x;
        this.dim_y = dim_y;
        this.ctx = ctx;
        this.ball = new Ball ();
        this.hole = new Hole([780, 480]);
    };
};


Game.prototype.allObjects = function allObjects() {
    return [].concat(this.ball, this.hole);
  };


Game.prototype.draw = function draw(ctx) {
    this.ctx = ctx;
    ctx.fillStyle = this.bg;
    ctx.fillRect(0,0, this.dim_x, this.dim_y);

    this.allObjects().forEach(function(object) {
        object.draw(ctx);
    });
};



Game.prototype.checkCollisions = function () {
    for (let i = 0; i < wall.length; i++) {
        const border = wall[i];
        if (this.ball.isCollidedWith(border)) {
            const collision = this.ball.collideWith(border);
            if (collision) return;
        };
    };
};

// checkWalls() {
//     const [x, y] = this.pos;
//     for (let i = 0; i < level.walls.length; i++) {
//       const wall = level.walls[i];
//       const [x1, y1, width, height] = wall.dimensions;

//       const x2 = width + x1;
//       const y2 = height + y1;

//       if ((y >= y1 && y <= y2) && (x >= x1 && x <= x2)) {
//         this.inObstacle = true;


Game.prototype.isOutOfBounds = function isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > this.dim_x) || (pos[1] > this.dim_y);
};
  
Game.prototype.step = function () {
    setInterval(() => this.ball.move(), 20);
    setInterval(() => this.draw(this.ctx), 20);
};

Game.prototype.handleClick = function(e) {
    this.step();
};


/* 
  get function created to make sure ball is in hole class;
*/

//   Game.prototype.inTheHole = function () {

//   }
  
  module.exports = Game;