const Util = require("./utils");
const Game = require("./game.js")
const Wall = require("./wall.js")
const Hole = require("./hole.js")

class Ball {
    constructor(pos, game) {
        this.pos = pos ||= [20,15] ;
        this.radius = 6;
        this.vel = [25,3];
        this.color = 'white';
        this.game = game;
        this.wall = wall;
        this.isMoving = false;
        this.inCollision = false;
    };
};


Ball.prototype.draw = function draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0],this.pos[1], this.radius, 0, 2 * Math.PI, true);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
};

Ball.prototype.swing = function () {
  if (!this.isMoving) {

  }
}

// Ball.prototype.manageVel = function () {
//     if (Math.abs(velX) < .1 && Math.abs(velY) < .1) {
//         [velX, velY] = [0, 0];
//         this.isMoving = false;
//     } else {
//         this.isMoving = true;
//         return [18,3];
//     }

// }


Ball.prototype.collideWith = function collideWith(wall) {
    if (this.ball instanceof this.wall) {
      [velX, velY] = [velX / -1.5, velY / -1.5];
      return true;
    } else if (this.ball instanceof Hole) {
      this.remove();
      // otherObject.remove();
      return true;
    }
    return false;
  };

Ball.prototype.isCollidedWith = function isCollidedWith(wall) {
    const centerDist = Util.dist(this.pos, wall.pos);
    return centerDist < (this.radius + wall.radius);
  };

// Ball.prototype.checkWalls = function () {
//     const [x, y] = this.pos;
//     for (let i = 0; i < walls.length; i++) {
//       const wall = level.walls[i];
//       const [x1, y1, width, height] = wall.dimensions;

//       const x2 = width + x1;
//       const y2 = height + y1;

//       if ((y >= y1 && y <= y2) && (x >= x1 && x <= x2)) {
//         this.inCollision = true;
// }

Ball.prototype.move = function move(delta = 0) {
    [velX,velY] = this.vel;
    if (this.ball.isCollidedWith(wall)) {
      this.ball.collideWith(wall);
    }

    this.decellerate(velX, velY);
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
    console.log(this.isMoving);
    return this.pos;

};


Ball.prototype.decellerate = function (velX, velY) {

    if (velX !== 0 || velY !== 0) {
      [velX, velY] = [velX / 1.02, velY / 1.02];
      if (Math.abs(velX) < .1 && Math.abs(velY) < .1) {
        [velX, velY] = [0, 0];
        this.isMoving = false;
      }

    this.vel = [velX, velY];
    }
};




Ball.prototype.stopMove = function () {
    this.pos = [this.pos[0] + 0, this.pos[1] + 0];
    return this.pos;
};


Ball.prototype.step = function() {
    setInterval(() => this.move(), 20);
    // console.log(this.isMoving)
    setInterval(() => this.draw(this.game.ctx), 20);
};


module.exports = Ball;
