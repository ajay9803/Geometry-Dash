// import { ctx } from "../main";
import { GRAVITYSTATE } from "../enums/gravity_state";
import { level1Ctx } from "../scripts/level1";

class ThePlatform {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  moveDown: boolean;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    moveDown: boolean = false
  ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.moveDown = moveDown;
  }

  // Draw the platform
  draw = (): void => {
    // Create a linear gradient from top to bottom of the platform
    let gradient = level1Ctx.createLinearGradient(
      this.x,
      this.y,
      this.x,
      this.y + this.h
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, "purple"); // Gradient to a lighter color at the bottom

    // Fill the platform with the gradient
    level1Ctx.fillStyle = gradient;
    level1Ctx.fillRect(this.x, this.y, this.w, this.h);

    // Add a white stroke with width 3
    level1Ctx.lineWidth = 3;
    level1Ctx.strokeStyle = "white";
    level1Ctx.strokeRect(this.x, this.y, this.w, this.h);
  };

  // Check collision with a square and update the square's state
  checkCollisionWithSquare = (theSquare: any): void => {
    // Calculate the square's boundaries
    const squareBottom = theSquare.y + theSquare.h;
    const squareTop = theSquare.y;
    const squareRight = theSquare.x + theSquare.w;
    const squareLeft = theSquare.x;

    // Check if the square is landing on top of the platform
    if (
      squareBottom < this.y && // Square's bottom is above the platform's top
      squareBottom + theSquare.dy >= this.y && // Square is falling onto the platform
      squareRight > this.x && // Square's right side is to the right of the platform's left edge
      squareLeft < this.x + this.w // Square's left side is to the left of the platform's right edge
    ) {
      // if (theSquare.gravityState === GRAVITYSTATE.NORMAL) {
        // theSquare.y = this.y - theSquare.h; // Position the square on top of the platform
        theSquare.dy = 0; // Stop downward movement
        theSquare.shouldJump = true; // Allow jumping again
        return; // Exit the function to avoid further collision checks
      // }
      // if (theSquare.gravityState === GRAVITYSTATE.FREE) {
      //   theSquare.color = 'gold';
      // }
    }

    // Check collision with the left side of the platform
    if (
      squareRight > this.x && // Square's right side is to the right of the platform's left edge
      squareLeft < this.x && // Square's left side is to the left of the platform's left edge
      squareBottom > this.y && // Square's bottom is below the platform's top edge
      squareTop < this.y + this.h // Square's top is above the platform's bottom edge
    ) {
      theSquare.color = "orange"; // Change color to indicate collision
      // No position adjustment to allow continuous movement
      return; // Exit the function
    }

    // Check collision with the right side of the platform
    if (
      squareLeft < this.x + this.w && // Square's left side is to the left of the platform's right edge
      squareRight > this.x + this.w && // Square's right side is to the right of the platform's right edge
      squareBottom > this.y && // Square's bottom is below the platform's top edge
      squareTop < this.y + this.h // Square's top is above the platform's bottom edge
    ) {
      theSquare.color = "orange"; // Change color to indicate collision
      // No position adjustment to allow continuous movement
      return; // Exit the function
    }

    // Check collision with the bottom of the platform
    if (
      squareTop < this.y + this.h && // Square's top is above the platform's bottom edge
      squareBottom > this.y + this.h && // Square's bottom is below the platform's bottom edge
      squareRight > this.x && // Square's right side is to the right of the platform's left edge
      squareLeft < this.x + this.w // Square's left side is to the left of the platform's right edge
    ) {
      theSquare.color = "orange"; // Change color to indicate collision
      // No position adjustment to allow continuous movement
      return; // Exit the function
    }
  };
}

export default ThePlatform;
