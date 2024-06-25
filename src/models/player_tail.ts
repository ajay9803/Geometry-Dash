import { level1Ctx } from "../scripts/level1";

// TailParticle class to create square-shaped tail particles
export default class TailParticle {
  xposi: number;
  yposi: number;
  size: number;
  dx: number;
  dy: number;
  color: string;
  opacity: number;

  constructor(
    xposi: number,
    yposi: number,
    size: number,
    dx: number,
    dy: number,
    color: string
  ) {
    this.xposi = xposi;
    this.yposi = yposi;
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
    level1Ctx.fillRect(this.xposi, this.yposi, this.size, this.size);
    level1Ctx.restore();
  }

  // Update particle position, shrink and fade out
  updatePosition(): void {
    this.yposi += this.dy;
    this.xposi += this.dx;
    this.size *= 0.95; // Shrink size
    this.opacity -= 0.05; // Reduce opacity
    this.draw();
  }
}
