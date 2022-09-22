const Game = require("./game.js")





class Caddy {
  constructor(game) {
    this.game = game;
    this.strokes = this.game.strokes;
    this.date = 'Thursday, 9/22/22';
  };
};

Caddy.prototype.dateTranslate = function () {
    const today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
  
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

Caddy.prototype.draw = function(ctx) {
  const game = this.game;
    const strokeCount = game.strokes;

    ctx.beginPath();
    ctx.fillStyle = 'beige';
    ctx.rect(270,20, 213,135);
    ctx.fill();
    ctx.strokeStyle = "gray";
    ctx.stroke();

    ctx.beginPath();
    ctx.font = "15px Segoe UI";
    ctx.textAlign = "top";
    ctx.fillStyle = "black";
    ctx.fillText("Today's Date:", 275, 45);  

    ctx.beginPath();
    ctx.font = "14px Segoe UI";
    ctx.textAlign = "bottom";
    ctx.fillStyle = "black";
    ctx.fillText(this.date, 374, 45);


//(72,250, 400, 250)- board rect dimensions px

    ctx.beginPath();
    ctx.font = "18px Segoe UI";
    ctx.textAlign = "top";
    ctx.fillStyle = "black";
    ctx.fillText("TOTAL",13, 115);  

    //difference 20px from METER
    ctx.beginPath();
    ctx.font = "16px Segoe UI";
    ctx.textAlign = "top";
    ctx.fillStyle = "black";
    ctx.fillText("STROKES",12, 134);

    ctx.beginPath();
    ctx.font = "50px Segoe UI";
    ctx.textAlign = "bottom";
    ctx.fillStyle = "black";
    ctx.fillText(strokeCount,98, 135);




  
}

module.exports = Caddy;

