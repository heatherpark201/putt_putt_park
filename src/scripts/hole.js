class Hole {
    constructor(pos) {
        this.pos = pos;
        this.radius = 8;
        this.color = 'black';
    };
};

Hole.prototype.draw = function draw(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
};


module.exports = Hole;