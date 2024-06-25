import { GOLD } from "../constants/color_constants";
import { level1Ctx } from "../scripts/level1";
export interface IParticle {
  xposi: number; // X-position
  yposi: number; // y-position
  radius: number;
  dx: number;
  dy: number;
  color: string;
  opacity: number;
  draw: (img: string) => void;
  updatePosition: () => void;
}
export default class Particle implements IParticle {
  xposi: number;
  yposi: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
  opacity: number;
  constructor(
    xposi: number,
    yposi: number,
    dx: number,
    dy: number,
    radius: number,
    color: string
  ) {
    this.radius = radius;
    this.xposi = xposi;
    this.yposi = yposi;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
    this.opacity = 1;
  }
  draw(): void {
    level1Ctx.save();
    level1Ctx.globalAlpha = this.opacity;
    level1Ctx.fillStyle = GOLD;
    level1Ctx.fillRect(this.xposi, this.yposi, this.radius, this.radius);
    level1Ctx.restore();
  }

  updatePosition(
    opacityChangeRate: number = 0.01, // Rate for decreasing the opacity
    sizeChangeRate: number = 0.05 // Rate for decreasing the size of the particle
  ): void {
    this.yposi += this.dy;
    this.xposi += this.dx;
    this.opacity -= opacityChangeRate;
    this.radius -= sizeChangeRate;
    this.draw();
  }
}
