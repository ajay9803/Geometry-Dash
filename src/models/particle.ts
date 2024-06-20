import { level1Ctx } from "../scripts/level1";
export interface IParticle {
  xpose: number;
  ypose: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
  opacity: number;
  draw: (img: string) => void;
  updatePosition: () => void;
}
export default class Particle implements IParticle {
  xpose: number;
  ypose: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
  opacity: number;
  constructor(
    xpose: number,
    ypose: number,
    dx: number,
    dy: number,
    radius: number,
    color: string
  ) {
    this.radius = radius;
    this.xpose = xpose;
    this.ypose = ypose;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
    this.opacity = 1;
  }
  draw(): void {
    level1Ctx.save();
    level1Ctx.globalAlpha = this.opacity;
    level1Ctx.fillStyle = "blue";
    level1Ctx.fillRect(this.xpose, this.ypose, this.radius, this.radius);
    level1Ctx.restore();
  }
  updatePosition(
    opacityChangeRate: number = 0.01,
    sizeChangeRate: number = 0.05
  ): void {
    this.ypose += this.dy;
    this.xpose += this.dx;
    this.opacity -= opacityChangeRate;
    this.radius -= sizeChangeRate;
    this.draw();
  }
}
