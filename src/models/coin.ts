import coin from "../assets/sprites/coins/coin.png";
import { level1Ctx } from "../scripts/level1";

let coinImage = new Image();
coinImage.src = coin;

let frame = 1;

class Coin {
  x: number;
  y: number;
  h: number;
  w: number;
  frame: number;
  srcX: number;

  constructor(x: number, y: number, h: number, w: number) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.frame = 0;
    this.srcX = 0;
  }

  draw: () => void = () => {
    this.frame++;
    let imgWidth = 82;
    if (this.frame % 6 == 0) {
      console.log(this.frame);

      this.srcX = (this.srcX + 1) % 6;
    }
    console.log(this.srcX);
    level1Ctx.drawImage(
      coinImage,
      91 + this.srcX * imgWidth,
      191,
      this.w,
      this.h,
      this.x,
      this.y,
      this.w,
      this.h
    );
  };
}

export default Coin;
