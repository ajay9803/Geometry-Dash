import { level1Ctx } from "../../scripts/level1";

// Particle class for portals
export default class PortalParticle {
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

  draw(): void {
    level1Ctx.save();
    level1Ctx.globalAlpha = this.opacity;
    level1Ctx.fillStyle = this.color;
    level1Ctx.fillRect(this.xposi, this.yposi, this.size, this.size);
    level1Ctx.restore();
  }

  // Update particle's position with their horizontal / vertical velocities and Update opacity / size values
  updatePosition(): void {
    this.yposi += this.dy;
    this.xposi += this.dx;
    this.opacity -= 0.02;
    this.size -= 0.2;
    if (this.size < 0) this.size = 0; // Prevent size from becoming negative
    this.draw();
  }
}
