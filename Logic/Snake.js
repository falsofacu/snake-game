class SnakeHead {
  constructor ([x, y], radius, color, strokeColor) {
    this.type = "head";
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.strokeColor = strokeColor;
    this.color = color;
    this.speed = initialSpeed;
    this.directionRad = initialDirectionRad; 
    this.targetDirectionRad = initialDirectionRad;
    this.rotationSpeed = initialRotationSpeed;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = this.strokeColor;
    ctx.fillStyle = this.color;
    ctx.stroke();
    ctx.fill();
  }

  update() {
    //Input
    if (keyboard.a) {
      this.targetDirectionRad -= this.rotationSpeed;
    } else if (keyboard.d) {
      this.targetDirectionRad += this.rotationSpeed;
    }
    //Gradual change
    const delta = this.targetDirectionRad - this.directionRad;
    if (Math.abs(delta) > this.rotationSpeed) {
      this.directionRad += Math.sign(delta) * this.rotationSpeed;
    }
    //Directional movement
    this.x += Math.cos(this.directionRad) * this.speed;
    this.y += Math.sin(this.directionRad) * this.speed;
  }
}

class SnakeBody {
  constructor (prevSegment) {
    this.type = "body";
    this.prevSegment = prevSegment;
    this.radius = prevSegment.radius;
    this.directionRad = prevSegment.directionRad;
    this.distance = 2.3 * this.radius;
    this.x = this.prevSegment.x - Math.cos(this.directionRad) * this.distance;
    this.y = this.prevSegment.y - Math.sin(this.directionRad) * this.distance;
    this.strokeColor = strokeColor;
    this.color = `rgb(${bodyRed}, ${bodyGreen}, ${bodyBlue})`;
    //Darken global color for next body
    bodyRed += colorDarkenStep;
    bodyGreen += colorDarkenStep;
    bodyBlue += colorDarkenStep;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = this.strokeColor;
    ctx.fillStyle = this.color;
    ctx.stroke();
    ctx.fill();
  }

  update() {
    //Delayed change
    const deltaX = this.prevSegment.x - this.x;
    const deltaY = this.prevSegment.y - this.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const directionX = deltaX / distance;
    const directionY = deltaY / distance;

    this.x = this.prevSegment.x - directionX * this.distance;
    this.y = this.prevSegment.y - directionY * this.distance;
    this.directionRad = Math.atan2(directionY, directionX);
  }
}