import coin from "/assets/sprites/coins/coin.png";
import { setCollectedCoinsCount } from "../scripts/coins";

import { coins, level1Ctx } from "../scripts/level1";
import Square from "./player";
import coinAudio from "/assets/audios/collect-coin.mp3";
import { isCheckboxChecked } from "../scripts/gameplay_events";
import { COIN_WIDTH } from "../constants/size_constants";

// Coin Sprite Image
let coinImage = new Image();
coinImage.src = coin;

// Audio for collecting coin
export let collectCoinAudio = new Audio();
collectCoinAudio.src = coinAudio;

// Initial starting X/Y position within the sprite
let initialXY = {
  x: 91,
  y: 191,
};

export default class Coin {
  x: number; // X-position
  y: number; // Y-position
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
    // Increment frame value
    this.frame++;

    // Set the fixed width of the coin
    let imgWidth = COIN_WIDTH;

    // Control speed of the rotating coin
    if (this.frame % 5 == 0) {
      this.srcX = (this.srcX + 1) % 6;
    }
    level1Ctx.drawImage(
      coinImage,
      initialXY.x + this.srcX * imgWidth,
      initialXY.y,
      this.w,
      this.h,
      this.x,
      this.y,
      this.w,
      this.h
    );
  };

  // Check collision with square
  collidesWith: (theSquare: Square) => void = (theSquare: Square) => {
    let collided =
      this.x < theSquare.x + theSquare.w &&
      this.x + this.w > theSquare.x &&
      this.y < theSquare.y + theSquare.h &&
      this.y + this.h > theSquare.y;
    if (collided) {
      // Remove collected coin
      coins.shift();

      // Increment collected coin count
      setCollectedCoinsCount(1);

      // Play audio only if the audio-play is on
      if (isCheckboxChecked) {
        collectCoinAudio.play();
      }
    }
  };
}
