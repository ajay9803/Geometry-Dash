import { level1Ctx } from "../../scripts/level1";

class Spike {
  x: number;
  y: number;
  currentColor: string;
  isReverse: boolean;

  constructor(x: number, y: number, isReverse: boolean = false) {
    this.x = x;
    this.y = y;
    this.currentColor = "black"; // Initial color
    this.isReverse = isReverse;
  }

  draw = (): void => {
    if (this.isReverse) {
      // Draw the spike pointing upwards (reversed)
      level1Ctx.beginPath();
      level1Ctx.moveTo(this.x, this.y); // Bottom point
      level1Ctx.lineTo(this.x + 25, this.y + 50); // Top-left point
      level1Ctx.lineTo(this.x + 50, this.y); // Bottom-right point
      level1Ctx.closePath();

      // Set line properties
      level1Ctx.lineWidth = 3;
      level1Ctx.strokeStyle = "white";
      level1Ctx.stroke();

      // Create a linear gradient from bottom to top
      let gradient = level1Ctx.createLinearGradient(
        this.x,
        this.y + 50, // Start from bottom
        this.x,
        this.y // End at top
      );
      gradient.addColorStop(0, "purple"); // Start color (bottom)
      gradient.addColorStop(1, "black"); // End color (top)

      // Use the gradient for filling the shape
      level1Ctx.fillStyle = gradient;
      level1Ctx.fill();
    } else {
      // Draw the spike pointing downwards (normal)
      level1Ctx.beginPath();
      level1Ctx.moveTo(this.x, this.y); // Top point
      level1Ctx.lineTo(this.x + 25, this.y - 50); // Bottom-left point
      level1Ctx.lineTo(this.x + 50, this.y); // Bottom-right point
      level1Ctx.closePath();

      // Set line properties
      level1Ctx.lineWidth = 3;
      level1Ctx.strokeStyle = "white";
      level1Ctx.stroke();

      // Create a linear gradient from top to bottom
      let gradient = level1Ctx.createLinearGradient(
        this.x,
        this.y - 50, // Start from top
        this.x,
        this.y // End at bottom
      );
      gradient.addColorStop(0, "black"); // Start color (top)
      gradient.addColorStop(1, "purple"); // End color (bottom)

      // Use the gradient for filling the shape
      level1Ctx.fillStyle = gradient;
      level1Ctx.fill();
    }
  };

  // Method to check collision with a square
  checkCollisionWithSquare(sx: number, sy: number, sSize: number): boolean {
    let spikeLeft, spikeRight, spikeTop, spikeBottom;

    if (this.isReverse) {
      // Bounding box for the reversed spike (pointing upwards)
      spikeLeft = this.x;
      spikeRight = this.x + 50;
      spikeTop = this.y;
      spikeBottom = this.y + 50; // Extend 50 units downwards
    } else {
      // Bounding box for the normal spike (pointing downwards)
      spikeLeft = this.x;
      spikeRight = this.x + 50;
      spikeTop = this.y - 50; // Extend 50 units upwards
      spikeBottom = this.y;
    }

    // Define the bounding box for the square
    const squareLeft = sx;
    const squareRight = sx + sSize;
    const squareTop = sy;
    const squareBottom = sy + sSize;

    // Check if the bounding boxes overlap
    const isColliding = !(
      spikeRight < squareLeft ||
      spikeLeft > squareRight ||
      spikeBottom < squareTop ||
      spikeTop > squareBottom
    );

    return isColliding;
  }
}

export default Spike;
