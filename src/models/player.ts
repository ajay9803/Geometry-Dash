import { canvas, ctx } from "../main";

class Square {
  x: number;
  y: number;
  w: number;
  h: number;
  dx: number;
  dy: number;
  color: string;
  shouldJump: boolean;
  tails: PlayerTail[];

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    dx: number,
    dy: number,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.shouldJump = false;

    // Initialize tails relative to the square's position
    this.tails = [
      new PlayerTail(this.x - 15, this.y + 5, 10),
      new PlayerTail(this.x - 15, this.y + 20, 10),
      new PlayerTail(this.x - 15, this.y + 35, 10),
    ];
  }

  // Draw the square and its tails
  draw = (): void => {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);

    this.tails.forEach((tail) => {
      tail.draw();
    });
  };

  // Keep check of the square's mid position
  trackMidPosition: () => void = () => {
    if (this.x < 200) {
      this.dx = 3;
    } else {
      this.dx = 0;
    }
  };

  // Update square's position and its tails' positions
  update = (): void => {
    if (this.dy > 0) {
      this.shouldJump = false;
    }

    this.trackMidPosition();

    // Update square's position
    this.y += this.dy;
    this.x += this.dx;

    // Check if the square hits the bottom of the canvas
    if (this.y + this.h + this.dy > canvas.height) {
      this.dy = 0;
      this.shouldJump = true;
    } else {
      this.dy += 1; // Simulate gravity
    }

    // Draw the square and its tails
    this.draw();
  };
}

export default Square;

export class PlayerTail {
  x: number;
  y: number;
  size: number;

  constructor(x: number, y: number, size: number) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  // Draw the tail
  draw: () => void = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.size, this.size);
  };
}
