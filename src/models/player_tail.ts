import { level1Ctx } from "../scripts/level1";

// TailParticle class to create square-shaped tail particles
export default class TailParticle {
  xpose: number;
  ypose: number;
  size: number;
  dx: number;
  dy: number;
  color: string;
  opacity: number;

  constructor(
    xpose: number,
    ypose: number,
    size: number,
    dx: number,
    dy: number,
    color: string
  ) {
    this.xpose = xpose;
    this.ypose = ypose;
    this.size = size;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.opacity = 1;
  }

  // Draw the particle as a square
  draw(): void {
    level1Ctx.save();
    level1Ctx.globalAlpha = this.opacity;
    level1Ctx.fillStyle = this.color;
    level1Ctx.fillRect(this.xpose, this.ypose, this.size, this.size);
    level1Ctx.restore();
  }

  // Update particle position, shrink and fade out
  updatePosition(): void {
    this.ypose += this.dy;
    this.xpose += this.dx;
    this.size *= 0.95; // Shrink size
    this.opacity -= 0.05; // Reduce opacity
    this.draw();
  }
}
