class SnakeHead {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.speed = 2;
    this.directionRad = 0; 
    this.targetDirectionRad = 0;
    this.rotationSpeed = 0.06;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "#FFF";
    c.stroke();
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
    this.prevSegment = prevSegment;
    this.radius = prevSegment.radius;
    this.directionRad = prevSegment.directionRad;
    this.distance = 2.5 * this.radius;
    this.x = this.prevSegment.x - Math.cos(this.directionRad) * this.distance;
    this.y = this.prevSegment.y - Math.sin(this.directionRad) * this.distance;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "#F00";
    c.stroke();
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