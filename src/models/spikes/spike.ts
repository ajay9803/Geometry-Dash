import { ctx } from "../../main";

class Spike {
  x: number;
  y: number;
  currentColor: string;
  intervalId: any;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.currentColor = "black"; // Initial color

    // Start the interval to toggle the color
    this.intervalId = setInterval(() => {
      this.currentColor = this.currentColor === "black" ? "red" : "black";
    }, 500);
  }

  draw: () => void = () => {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + 25, this.y - 50);
    ctx.lineTo(this.x + 50, this.y);
    ctx.closePath();
    ctx.strokeStyle = "purple";
    ctx.stroke();

    // Use the current color
    ctx.fillStyle = this.currentColor;
    ctx.fill();
  };

  // Add a method to clear the interval when the spike is no longer needed
  clearInterval: () => void = () => {
    clearInterval(this.intervalId);
  };

  // Method to check collision with a square
  checkCollisionWithSquare(sx: number, sy: number, sSize: number): boolean {
    // Define the bounding box for the Spike
    const spikeLeft = this.x;
    const spikeRight = this.x + 50;
    const spikeTop = this.y - 60;
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

export default Spike;
