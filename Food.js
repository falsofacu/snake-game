let points = 0;

class Food {
  constructor() {
    this.radius = 10;
    this.x = Math.random() * (canvasWidth - (this.radius * 4)) + this.radius * 2; 
    this.y = Math.random() * (canvasHeight - (this.radius * 4)) + this.radius * 2; 
    this.points = 10 + level;
  }

  addBody(snakeBody) {
    let newSnakeBody = new SnakeBody(snakeBody[snakeBody.length - 1]);
    snakeBody.push(newSnakeBody);
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "#F0F";
    c.stroke();
  }

  update(snakeHead, snakeBody) {
    //Snake touches food
    if (
      snakeHead.x - this.x < this.radius * 1.8
      && snakeHead.x - this.x > -this.radius * 1.8
      && snakeHead.y - this.y < this.radius * 1.8
      && snakeHead.y - this.y > -this.radius * 1.8
      ) {
        this.x = Math.random() * (canvasWidth - (this.radius * 2)) + this.radius; 
        this.y = Math.random() * (canvasHeight - (this.radius * 2)) + this.radius;
        levelUp(snakeHead, snakeBody);
        this.addBody(snakeBody);
        points += 10 + level;
        console.log(points);
    }
  }
}
