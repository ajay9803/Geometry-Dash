import { WHITE } from "../constants/color_constants";
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
    level1Ctx.fillStyle = WHITE;
    level1Ctx.fillRect(this.x, this.y, this.w, this.h);
  };
}

export default EndWall;