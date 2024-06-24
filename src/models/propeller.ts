import { level1Ctx, theSquare } from "../scripts/level1";
import Particle from "./particle";

class Propeller {
  x: number;
  y: number;
  color: string;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw(): void {
    // Draw the propeller
    level1Ctx.beginPath();
    level1Ctx.moveTo(this.x, this.y); // Move to the starting point on the right side of the circle
    level1Ctx.quadraticCurveTo(
      this.x + 25,
      this.y - 30, // Control point at the top of the circle
      this.x + 50,
      this.y // Ending point at the left side of the circle
    );
    level1Ctx.lineWidth = 5;
    level1Ctx.strokeStyle = "white";
    level1Ctx.stroke();
    level1Ctx.fillStyle = this.color;
    level1Ctx.fill();
    level1Ctx.closePath();

    level1Ctx.strokeStyle = "white";
    level1Ctx.lineWidth = 1;
    level1Ctx.moveTo(this.x, this.y - 15);
    level1Ctx.lineTo(this.x, this.y - 45);
    level1Ctx.stroke();

    level1Ctx.strokeStyle = "white";
    level1Ctx.lineWidth = 1;
    level1Ctx.moveTo(this.x + 12.5, this.y - 25);
    level1Ctx.lineTo(this.x + 12.5, this.y - 75);
    level1Ctx.stroke();

    level1Ctx.strokeStyle = "white";
    level1Ctx.lineWidth = 1;
    level1Ctx.moveTo(this.x + 25, this.y - 35);
    level1Ctx.lineTo(this.x + 25, this.y - 95);
    level1Ctx.stroke();

     level1Ctx.strokeStyle = "white";
     level1Ctx.lineWidth = 1;
     level1Ctx.moveTo(this.x + 37.5, this.y - 25);
     level1Ctx.lineTo(this.x + 37.5, this.y - 75);
     level1Ctx.stroke();

    level1Ctx.strokeStyle = "white";
    level1Ctx.lineWidth = 1;
    level1Ctx.moveTo(this.x + 50, this.y - 15);
    level1Ctx.lineTo(this.x + 50, this.y - 45);
    level1Ctx.stroke();
  }

  checkCollision(): void {
    // Calculate distance between the propeller center and the square center
    const dx = this.x - (theSquare.x + theSquare.w / 2);
    const dy = this.y - (theSquare.y + theSquare.h / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Check if the distance is less than the sum of their radii for collision
    if (distance < theSquare.w + Math.max(theSquare.w, theSquare.h) / 2) {
      theSquare.dy -= 25;
    }
  }
}

export default Propeller;
