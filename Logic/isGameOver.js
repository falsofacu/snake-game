const isGameOver = (snakeHead, snakeBody) => {
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

  if (selfColition) return true;
  
  //Else check Head colition with level
  if (
    snakeHead.x - snakeHead.radius + grace < 0
    || snakeHead.y - snakeHead.radius + grace < 0
    || snakeHead.x + snakeHead.radius - grace > canvas.width
    || snakeHead.y + snakeHead.radius - grace > canvas.height
    ) {
      return true;
  }
  
  return false;    
}