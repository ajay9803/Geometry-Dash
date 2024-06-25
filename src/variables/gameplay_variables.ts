import Coin from "../models/coin";
import { aboveGround } from "../scripts/platforms";

let coin1 = new Coin(20370 + 220 * 3, aboveGround - 82 - 120, 82, 82);
let coin2 = new Coin(31700 + 30, aboveGround - 300, 82, 82);
let coin3 = new Coin(41500, aboveGround - 300, 82, 82);

// Coins to be collected
export let coins = [coin1, coin2, coin3];

let themeValue = 255;
export let themeColor = `rgba(0, 0, ${themeValue})`;
export let opacityValue = 0.5;

export let canvasCor = {
  x: 0,
  y: 0,
};

// Variables to pause and resume the game
export let pause: boolean = false;

export let setPause = (value: boolean) => {
  pause = value;
};
