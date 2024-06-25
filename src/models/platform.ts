import { level1Ctx } from "../scripts/level1";
import theImage from "/assets/sprites/grounds/the-test (1).png";

let image = new Image();
image.src = theImage;

class ThePlatform {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
  showSlabLight: boolean;
  isSlab: boolean;
  showLight: boolean;

  // Properties for the pulsating circle
  circleRadius: number;
  circleGrowing: boolean;
  maxRadius: number;
  minRadius: number;
  circleGrowthRate: number;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
    showSlabLight: boolean = true,
    isSlab: boolean = false,
    showLight: boolean = false
  ) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.showSlabLight = showSlabLight;
    this.isSlab = isSlab;
    this.showLight = showLight;

    // Initialize circle properties
    this.circleRadius = 5;
    this.circleGrowing = true;
    this.maxRadius = 15;
    this.minRadius = 5;
    this.circleGrowthRate = 0.5;
  }

  // Update the circle's radius
  updateCircle = (): void => {
    if (this.circleGrowing) {
      this.circleRadius += this.circleGrowthRate;
      if (this.circleRadius >= this.maxRadius) {
        this.circleGrowing = false;
      }
    } else {
      this.circleRadius -= this.circleGrowthRate;
      if (this.circleRadius <= this.minRadius) {
        this.circleGrowing = true;
      }
    }
  };

  // Draw the platform and optionally the pulsating circle
  draw = (): void => {
    level1Ctx.save();

    // if (this.isSlab) {
    // Draw slab platform with gradient fill
    let gradient = level1Ctx.createLinearGradient(
      this.x,
      this.y,
      this.x,
      this.y + this.h
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, "purple");

    level1Ctx.fillStyle = gradient;
    level1Ctx.fillRect(this.x, this.y, this.w, this.h);
    level1Ctx.strokeStyle = "white";
    level1Ctx.lineWidth = 3;
    level1Ctx.strokeRect(this.x, this.y, this.w, this.h);
    // } else {
    //   // Draw non-slab platform with image pattern fill
    //   let pattern = level1Ctx.createPattern(image, "repeat");
    //   if (pattern) {
    //     level1Ctx.fillStyle = pattern;
    //     level1Ctx.fillRect(this.x, this.y, this.w, this.h);
    //   }

    //   level1Ctx.strokeStyle = "white";
    //   level1Ctx.lineWidth = 3;
    //   level1Ctx.strokeRect(this.x, this.y, this.w, this.h);

    //   level1Ctx.globalAlpha = 0.5;
    //   level1Ctx.fillStyle = "rgba(0, 0, 255, 1)";
    //   level1Ctx.fillRect(this.x, this.y, this.w, this.h);
    //   level1Ctx.globalAlpha = 1.0;
    // }

    if (this.showLight && this.showSlabLight) {
      const lineStartX = this.x + this.w / 2;
      const lineStartY = this.isSlab ? this.y + this.h + 3 : this.y - 3;
      const circleCenterY = this.isSlab ? lineStartY + 30 : lineStartY - 30;

      // Draw the white vertical line
      level1Ctx.beginPath();
      level1Ctx.moveTo(lineStartX, lineStartY);
      if (this.isSlab) {
        level1Ctx.lineTo(lineStartX, lineStartY + 20);
      } else {
        level1Ctx.lineTo(lineStartX, lineStartY - 20);
      }
      level1Ctx.strokeStyle = "white";
      level1Ctx.lineWidth = 5;
      level1Ctx.stroke();

      // Update and draw the pulsating circle
      this.updateCircle();
      level1Ctx.beginPath();
      level1Ctx.arc(
        lineStartX,
        circleCenterY,
        this.circleRadius,
        0,
        2 * Math.PI
      );
      level1Ctx.strokeStyle = "white";
      level1Ctx.fillStyle = "transparent";
      level1Ctx.stroke();
    }

    level1Ctx.restore();
  };

  // Check collision with a square and update the square's state
  checkCollisionWithSquare = (theSquare: any): void => {
    const squareBottom = theSquare.y + theSquare.h;
    const squareTop = theSquare.y;
    const squareRight = theSquare.x + theSquare.w;
    const squareLeft = theSquare.x;

    if (
      squareBottom < this.y && // Square is above the platform
      squareBottom + theSquare.dy + 10 >= this.y && // Within 5 pixels of the platform
      squareRight > this.x && // Square is horizontally over the platform
      squareLeft < this.x + this.w
    ) {
      theSquare.shouldJump = true; // Allow the square to jump
    }

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

    if (
      squareRight > this.x &&
      squareLeft < this.x &&
      squareBottom > this.y &&
      squareTop < this.y + this.h
    ) {
      theSquare.removePlayer();
      return;
    }

    if (
      squareLeft < this.x + this.w &&
      squareRight > this.x + this.w &&
      squareBottom > this.y &&
      squareTop < this.y + this.h
    ) {
      theSquare.removePlayer();
      return;
    }

    if (
      squareTop < this.y + this.h &&
      squareBottom > this.y + this.h &&
      squareRight > this.x &&
      squareLeft < this.x + this.w
    ) {
      theSquare.removePlayer();
      return;
    }
  };
}

export default ThePlatform;
