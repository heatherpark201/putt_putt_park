# Putt Putt Park <img src="assets/myLogo.png" width="80">

## [Link to live version](https://heatherpark201.github.io/putt_putt_park/) 

## Technologies
- Vanilla JS
- HTML/CSS

## Development
**Incorporate friction and collision methods**
- Apply physics calculations to affect the velocity of the ball as it rolls naturally or is in a collision

```javascript

function decellerate (ball pos, vel) {
  const regFriction = 0.9998 // customizable number to increase or decrease decelleration
  const collFriction = 0.9 // customizable number to increase or decrease decelleration post collision
  let x = current_pos[0];
  let y = current_pos[1];
  let vx = vel[0];
  let vy = vel[1];

    if (this.inCollision(obstaclePos, obstacleRad)) {
        vel = [(-vx * collFriction), vy] 
        return this.vel = vel;
    } 
    if (x <= 0 || x >= 800 - this.radius) {
        vel = [(-vx * collFriction), vy] //vx friction
        return this.vel = vel;
    } 
    if (y <= 0 || y >= 500 - this.radius) { 
        vel = [vx, (-vy * collFriction)] //vy friction
        return this.vel = vel;
    }

    if (vx !== 0 || vy!== 0) {  
        [vx, vy] = [(vx * regFriction) , (vy * regFriction)]; //both friction
        if (Math.abs(vx) < .015 && Math.abs(vy) < .015) {
            [vx, vy] = [0, 0];
            this.isMoving = false;
            this.pow = 0;
        } 
    }
 
  this.vel = [vx, vy];
}
```
**Incorporate physics to determine the direction and speed of the ball**
- Apply physics calculations to affect the velocity of the ball as it rolls naturally or is in a collision


``` javascript
function swingPrep () {
  let pow_num = (this.pow / 100) * 0.5

  if (this.isMoving) {
    return;
  }

  this.isMoving = true;
  let vel = (
    [(pow_num * Math.cos(this.dir)),
    (pow_num * Math.sin(this.dir))]
  );
 
  this.vel = vel;
}; 

```

## Instructions
Putt the ball into the hole with the fewest amount of strokes as possible

Utilize the arrow keys for the following functions: 
- ↔ control the direction of the arrow which manipulates the velocity function
- SPACE hold down the spacebar to load the power which manipulates the velocity function 
- Z hold down to deload the amonut of power
- ↑ or ↵  putt the ball and shoot!


## TODO's / Future Features
- Add additional obstacles and levels to the game
- Implement different style courses and adapt the collision functions
- Implement sprites and sound effects
- Allow user's to implement their information to keep score and apply customizable features (i.e. ball color, course, etc)