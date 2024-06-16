import { canvas, ctx } from "../main";

class Ground {
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;

  constructor(x: number, y: number, w: number, h: number, color: string) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  draw: () => void = () => {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };

  update: () => void = () => {
    if (this.x) {
      ctx.fillRect(canvas.width, this.y, this.w, this.h);
    }
  };
}

export default Ground;
