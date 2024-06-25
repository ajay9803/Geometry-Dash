import { level1Ctx } from "../scripts/level1";

class EndWall {
  x: number;
  y: number;
  h: number;
  w: number;

  constructor(x: number, y: number, w: number, h: number) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  draw: () => void = () => {
    level1Ctx.strokeStyle = 'white';
    level1Ctx.fillStyle = 'red';
    level1Ctx.fillRect(this.x, this.y, this.w, this.h);
    level1Ctx.stroke();
  };
}

export default EndWall;