class Food {
  constructor(radius) {
    this.radius = radius;
    this.x = Math.random() * (canvas.width - (this.radius * 4)) + this.radius * 2; 
    this.y = Math.random() * (canvas.height - (this.radius * 4)) + this.radius * 2;
    this.color = foodFillColor;
    this.strokeColor = foodStrokeColor;
    this.points = 10 + level;
  }

  addBody(snakeBody) {
    let newSnakeBody = new SnakeBody(snakeBody[snakeBody.length - 1]);
    snakeBody.push(newSnakeBody);
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = this.strokeColor;
    ctx.fillStyle = this.color;
    ctx.stroke();
    ctx.fill();
  }

  update(snakeHead, snakeBody) {
    //If snake touches food
    if (
      snakeHead.x - this.x < this.radius * 2
      && snakeHead.x - this.x > -this.radius * 2
      && snakeHead.y - this.y < this.radius * 2
      && snakeHead.y - this.y > -this.radius * 2
      ) {
        this.x = Math.random() * (canvas.width - (this.radius * 2)) + this.radius; 
        this.y = Math.random() * (canvas.height - (this.radius * 2)) + this.radius;
        this.addBody(snakeBody);
        levelUp(snakeHead, snakeBody);
        points += 10 + level;
    }
  }
}
