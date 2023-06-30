const levelUp = (snakeHead, snakeBody) => {
  if (snakeBody.length >= maxSnakeLength) {
    for (let i = 0; i < (maxSnakeLength - initialBodyLength); i++) {
      snakeBody.pop();
    }
    level += 1;
    snakeHead.speed += 0.5;
    snakeHead.rotationSpeed += 0.015;
    bodyRed = 225;
    bodyGreen = 225;
    bodyBlue = 225;
  }
}