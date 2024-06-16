import { ctx } from "../main";

class ThePlatform {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;

  constructor(x: number, y: number, w: number, h: number, color: string) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  // Draw the platform
  draw = (): void => {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };

  // Check collision with a square and update the square's state
  checkCollisionWithSquare = (theSquare: any): void => {
    // Check general collision
    if (
      (theSquare.y <= this.y + this.h && // Top of the square hits the bottom of the platform
        theSquare.y + theSquare.h - theSquare.dy >= this.y && // Bottom of the square hits the top of the platform
        theSquare.x + theSquare.w >= this.x && // Right side of the square hits the left side of the platform
        theSquare.x <= this.x + this.w) || // Left side of the square hits the right side of the platform
      theSquare.y <= 0 // Square hits the top boundary of the canvas
    ) {
      console.log("Collision detected with platform!");
      theSquare.color = "orange";
    }

    // Check if the square is landing on top of the platform
    if (
      theSquare.y + theSquare.h <= this.y && // Square is above the platform
      theSquare.y + theSquare.h + theSquare.dy >= this.y && // Square is moving down to collide with the platform
      theSquare.x + theSquare.w >= this.x && // Right side of the square hits the left side of the platform
      theSquare.x <= this.x + this.w // Left side of the square hits the right side of the platform
    ) {
      theSquare.dy = 0; // Stop the downward movement
      theSquare.shouldJump = true; // Allow the square to jump again
    }
  };
}

export default ThePlatform;
