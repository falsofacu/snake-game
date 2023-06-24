const canvas = document.getElementById("game");
/** @type {CanvasRenderingContext2D} */
const c = canvas.getContext('2d');

//Canvas options
canvas.width = 600;
canvas.height = 400;

//Keyboard
const keyboard = {
  a: false,
  d: false
};

//Game vars
let losed = false;

//Handlers
const handleKeyDown = (event) => {
  //Only once
  if (event.repeat) return;

  switch(event.key.toUpperCase()) {
    case "A":
      keyboard.a = true;
      break;
    case "D":
      keyboard.d = true;
      break;
    default:
      break;
  }
}

const handleKeyUp = (event) => {
  switch(event.key.toUpperCase()) {
    case "A":
      keyboard.a = false;
      break;
    case "D":
      keyboard.d = false;
      break;
    default:
      break;
  }
}

//Events
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

//Food
const food = new Food();

//Snake making
const snakeHead1 = new SnakeHead(300, 200);
const snakeBody1 = [];

const initialBodyLength = 3;
const initialBody = () => {
  for (let i = 0; i < initialBodyLength; i++) {
    let newSnakeBody;
    if (i === 0) {
      newSnakeBody = new SnakeBody(snakeHead1);
      snakeBody1.push(newSnakeBody);
    }
    else {
      newSnakeBody = new SnakeBody(snakeBody1[i-1]);
      snakeBody1.push(newSnakeBody);
    }
  }
}
initialBody();

//Game Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  if (!losed) {
    snakeHead1.draw();
    snakeHead1.update();
    for (let i = 0; i < snakeBody1.length; i++) {
      snakeBody1[i].draw();
      snakeBody1[i].update();
    }
    food.draw();
    food.update(snakeHead1, snakeBody1);
    //Check if losed
    losed = loseUpdate(snakeHead1, snakeBody1);
  }
  else {
    //TODO: Add lose things
  }

}
animate();