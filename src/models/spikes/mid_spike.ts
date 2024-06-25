import { level1Ctx } from "../../scripts/level1";

class MidSpike {
  x: number;
  y: number;
  currentColor: string;
  intervalId: any;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.currentColor = "black"; // Initial color
  }

  draw: () => void = () => {
    // Begin the path
    level1Ctx.beginPath();
    level1Ctx.moveTo(this.x, this.y);
    level1Ctx.lineTo(this.x + 25, this.y - 30);
    level1Ctx.lineTo(this.x + 50, this.y);
    level1Ctx.closePath();

    // Set line properties
    level1Ctx.lineWidth = 3;
    level1Ctx.strokeStyle = "white";
    level1Ctx.stroke();

    // Create a linear gradient from top to bottom
    let gradient = level1Ctx.createLinearGradient(
      this.x,
      this.y - 30,
      this.x,
      this.y
    );
    gradient.addColorStop(0, "black"); // Start color (top)
    gradient.addColorStop(1, "blue"); // End color (bottom)

    // Use the gradient for filling the shape
    level1Ctx.fillStyle = gradient;
    level1Ctx.fill();
  };

  // Method to check collision with a square
  checkCollisionWithSquare(sx: number, sy: number, sSize: number): boolean {
    // Define the bounding box for the Spike
    const spikeLeft = this.x;
    const spikeRight = this.x + 50;
    const spikeTop = this.y - 30;
    const spikeBottom = this.y;

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

export default MidSpike;
