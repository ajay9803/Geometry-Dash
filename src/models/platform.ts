import { level1Ctx } from "../scripts/level1";
import theImage from "../assets/sprites/grounds/the-test (1).png";
import explodePlayer from "../utilities/collisions";

let image = new Image();
image.src = theImage;

class ThePlatform {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  moveDown: boolean;
  isSlab: boolean;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    moveDown: boolean = false,
    isSlab: boolean = false
  ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.moveDown = moveDown;
    this.isSlab = isSlab;
  }

  // Draw the platform
  draw = (): void => {
    level1Ctx.save();

    // if (this.isSlab) {
      // Draw as a slab with a gradient fill
      // Create a gradient from the top to the bottom of the platform
      let gradient = level1Ctx.createLinearGradient(
        this.x,
        this.y,
        this.x,
        this.y + this.h
      );
      gradient.addColorStop(0, 'black');
      gradient.addColorStop(1, "purple"); // Gradient to a different color at the bottom

      // Fill the platform with the gradient
      level1Ctx.fillStyle = gradient;
      level1Ctx.fillRect(this.x, this.y, this.w, this.h);

      // Add a white stroke with width 3
      level1Ctx.lineWidth = 3;
      level1Ctx.strokeStyle = "white";
      level1Ctx.strokeRect(this.x, this.y, this.w, this.h);
    // } else {
    //   // Draw with the image pattern
    //   // Create a pattern from the image
    //   let pattern = level1Ctx.createPattern(image, "repeat");
    //   if (pattern) {
    //     level1Ctx.fillStyle = pattern;
    //     level1Ctx.fillRect(this.x, this.y, this.w, this.h);
    //   }

    //   // Add a white stroke with width 3
    //   level1Ctx.lineWidth = 3;
    //   level1Ctx.strokeStyle = "white";
    //   level1Ctx.strokeRect(this.x, this.y, this.w, this.h);

    //   // Apply a semi-transparent blue overlay
    //   level1Ctx.globalAlpha = 0.5; // Set transparency to 50%
    //   level1Ctx.fillStyle = "rgba(0, 0, 255, 1)"; // Blue color with full opacity in the rgba format
    //   level1Ctx.fillRect(this.x, this.y, this.w, this.h); // Apply the overlay

    //   // Reset the global alpha to default (opaque)
    //   level1Ctx.globalAlpha = 1.0;
    // }

    level1Ctx.restore();
  };

  // Check collision with a square and update the square's state
  checkCollisionWithSquare = (theSquare: any): void => {
    const squareBottom = theSquare.y + theSquare.h;
    const squareTop = theSquare.y;
    const squareRight = theSquare.x + theSquare.w;
    const squareLeft = theSquare.x;

    // Check if the square is landing on top of the platform
    if (
      squareBottom < this.y &&
      squareBottom + theSquare.dy >= this.y &&
      squareRight > this.x &&
      squareLeft < this.x + this.w
    ) {
      theSquare.dy = 0;
      theSquare.shouldJump = true;
      return;
    }

    // Check collision with the left side of the platform
    if (
      squareRight > this.x &&
      squareLeft < this.x &&
      squareBottom > this.y &&
      squareTop < this.y + this.h
    ) {
      theSquare.color = "orange";
      explodePlayer();
      return;
    }

    // Check collision with the right side of the platform
    if (
      squareLeft < this.x + this.w &&
      squareRight > this.x + this.w &&
      squareBottom > this.y &&
      squareTop < this.y + this.h
    ) {
      theSquare.color = "orange";
      explodePlayer();
      return;
    }

    // Check collision with the bottom of the platform
    if (
      squareTop < this.y + this.h &&
      squareBottom > this.y + this.h &&
      squareRight > this.x &&
      squareLeft < this.x + this.w
    ) {
      theSquare.color = "orange";
      explodePlayer();
      return;
    }
  };
}

export default ThePlatform;
