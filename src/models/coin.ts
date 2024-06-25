import coin from "/assets/sprites/coins/coin.png";
import { setCollectedCoinsCount } from "../scripts/coins";

import { coins, level1Ctx } from "../scripts/level1";
import Square from "./player";
import coinAudio from "/assets/audios/collect-coin.mp3";
import { isCheckboxChecked } from "../scripts/gameplay_events";

let coinImage = new Image();
coinImage.src = coin;

export let collectCoinAudio = new Audio();
collectCoinAudio.src = coinAudio;

export default class Coin {
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
    if (this.frame % 5 == 0) {
      this.srcX = (this.srcX + 1) % 6;
    }
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

  collidesWith: (theSquare: Square) => void = (theSquare: Square) => {
    let collided =
      this.x < theSquare.x + theSquare.w &&
      this.x + this.w > theSquare.x &&
      this.y < theSquare.y + theSquare.h &&
      this.y + this.h > theSquare.y;
    if (collided) {
      coins.shift();
      setCollectedCoinsCount(1);
      if(isCheckboxChecked) {
        collectCoinAudio.play();
      }
    }
  };
}
