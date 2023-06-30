const canvas = document.getElementById("game");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');
ctx.globalCompositeOperation = "multiply";

// Canvas options
canvas.width = 750;
canvas.height = 495;
ctx.lineWidth = 3;

// Keyboard
const keyboard = {
  a: false,
  d: false
};

// Game vars
let paused = true;
let losed = false;
let points = 0;
let level = 0;

//* LOGIC OPTIONS
//Snake options
const maxSnakeLength = 12;
const initialBodyLength = 3;
const initialSpeed = 2;
const initialDirectionRad = -(Math.PI / 2);
const initialRotationSpeed = 0.06;
const grace = 5;

//* VISUAL OPTIONS
//Snake
const strokeColor = "#000";
const bodyStrokeColor = "#FFF";
const headFillColor = "#FFF";
const colorDarkenStep = -10;
const circleRadius = 13;
const initialPosition = [((canvas.width / 2)), ((canvas.height / 2))];
let bodyRed = 245;
let bodyGreen = 245;
let bodyBlue = 245;
//Food
const foodFillColor = "#000";
const foodStrokeColor = "#FFF";

// Handlers
const handleKeyDown = (event) => {
  // Only run once
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

//Snake making
let snakeHead1 = new SnakeHead(initialPosition, circleRadius, headFillColor, strokeColor);
let snakeBody1 = [];

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

//Food
const food = new Food(circleRadius);

//Game Loop

function animate() {
  if (paused) {
    requestAnimationFrame(animate);
    console.log("paused");
  }
  else {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
      losed = isGameOver(snakeHead1, snakeBody1); 
    }
    else {
      const gameOverElem = document.getElementById("game-over-menu");
      gameOverElem.style.display = "block";
    }
  }
}

animate();