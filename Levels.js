let level = 0;
const grace = 3;

const loseUpdate = (snakeHead, snakeBody) => {
  //Check Head colition with Body
  let selfColition = false;
  snakeBody.map((elem) => {
    if (
      snakeHead.x - elem.x < snakeHead.radius + elem.radius - grace
      && snakeHead.x - elem.x > -(snakeHead.radius + elem.radius - grace)
      && snakeHead.y - elem.y < snakeHead.radius + elem.radius - grace
      && snakeHead.y - elem.y > -(snakeHead.radius + elem.radius - grace)
      ) {
      selfColition = true;
    }
  })
  if (selfColition) {
    return true;
  }
  //Else check Head colition with level
  if (
    snakeHead.x - snakeHead.radius + grace < 0
    || snakeHead.y - snakeHead.radius + grace < 0
    || snakeHead.x + snakeHead.radius - grace > canvasWidth
    || snakeHead.y + snakeHead.radius - grace > canvasHeight
    ) {
      return true;
  }
  return false;    
}

const levelUp = (snakeHead, snakeBody) => {
  if (snakeBody.length >= 12) {
    for (let i = 0; i < 10; i++) {
      snakeBody.pop();
    }
    level += 1;
    snakeHead.speed += 0.5;
    snakeHead.rotationSpeed += 0.015;
  }
}