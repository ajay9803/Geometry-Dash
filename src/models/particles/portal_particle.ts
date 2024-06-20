import { level1Ctx } from "../../scripts/level1";

export default class PortalParticle {
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

  draw(): void {
    level1Ctx.save();
    level1Ctx.globalAlpha = this.opacity;
    level1Ctx.fillStyle = this.color;
    level1Ctx.fillRect(this.xpose, this.ypose, this.size, this.size);
    level1Ctx.restore();
  }

  updatePosition(): void {
    this.ypose += this.dy;
    this.xpose += this.dx;
    this.opacity -= 0.02; // Adjust fading rate if needed
    this.size -= 0.2; // Adjust size reduction rate if needed
    if (this.size < 0) this.size = 0; // Prevent size from becoming negative
    this.draw();
  }
}
