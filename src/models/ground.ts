import basicGround from "/assets/sprites/grounds/groundSquare_01_001-hd.png";
import { level1Ctx } from "../scripts/level1";

// Basic ground - image
let theGround = new Image();
theGround.src = basicGround;

class Ground {
  x: number; // X-position 
  y: number; // Y-position 
  height: number;
  width: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  update: () => void = () => {
    this.draw();
  };

  draw: () => void = () => {
    // Draw the ground image
    level1Ctx.drawImage(theGround, this.x, this.y, this.width, this.height);
  };

  // Check collision with a square and update the square's state
  checkCollisionWithSquare = (theSquare: any): void => {
    // Check if the square is landing on top of the platform
    if (
      theSquare.y + theSquare.h <= this.y && // Square is above the platform
      theSquare.y + theSquare.h + theSquare.dy >= this.y && // Square is moving down to collide with the platform
      theSquare.x + theSquare.w >= this.x && // Right side of the square hits the left side of the platform
      theSquare.x <= this.x + this.width // Left side of the square hits the right side of the platform
    ) {
      theSquare.dy = 0; // Stop the downward movement
      theSquare.shouldJump = true; // Allow the square to jump again
    }
  };
}

export default Ground;
