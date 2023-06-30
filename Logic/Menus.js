const handleStartButton = () => {
  const startMenuElem = document.getElementById("start-menu");
  startMenuElem.style.display = "none";
  paused = false;
}

const handleGameOverButton = () => {
  const gameOverElem = document.getElementById("game-over-menu");
  gameOverElem.style.display = "none";

  //Reset game state
  bodyRed = 225;
  bodyGreen = 225;
  bodyBlue = 225;
  snakeHead1 = new SnakeHead(initialPosition, circleRadius, headFillColor, strokeColor);
  snakeBody1 = [];
  initialBody();
  paused = false;
  losed = false; 
}