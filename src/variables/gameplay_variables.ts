import Coin from "../models/coin";
import { aboveGround } from "../scripts/platforms";

let coin1 = new Coin(20370 + 220 * 3, aboveGround - 82 - 120, 82, 82);
let coin2 = new Coin(31700 + 30, aboveGround - 300, 82, 82);
let coin3 = new Coin(41650, aboveGround - 300, 82, 82);

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

// Math.abs(squareBottom - this.y - 10) <= theSquare.dy &&

// let portalConfigurations = [
//   {
//     image: startPortalImage,
//     x: 13550,
//     y: aboveGround - 500,
//     w: 336 / 2,
//     h: 388 / 2,
//     gravityState: GRAVITYSTATE.FREE,
//     isStartPortal: true,
//   },
//   {
//     image: startPortalImage,
//     x: 13550,
//     y: aboveGround - 500,
//     w: 336 / 2,
//     h: 388 / 2,
//     gravityState: GRAVITYSTATE.FREE,
//     isStartPortal: false,
//   },
//   {
//     image: startPortalImage,
//     x: 32675,
//     y: aboveGround - 375,
//     w: 336 / 2,
//     h: 388 / 2,
//     gravityState: GRAVITYSTATE.FREE,
//     isStartPortal: true,
//   },
//   {
//     image: endPortalImage,
//     x: 40100,
//     y: aboveGround - 385,
//     w: 336 / 2,
//     h: 388 / 2,
//     gravityState: GRAVITYSTATE.NORMAL,
//     isStartPortal: false,
//   },
//   {
//     image: gravityPortalImage,
//     x: 40860,
//     y: aboveGround - 395,
//     w: 336 / 3,
//     h: 388 / 2,
//     gravityState: GRAVITYSTATE.REVERSE,
//     isStartPortal: true,
//   },
//   {
//     image: gravityPortalImage,
//     x: 41350,
//     y: aboveGround - 395,
//     w: 336 / 3,
//     h: 388 / 2,
//     gravityState: GRAVITYSTATE.NORMAL,
//     isStartPortal: false,
//   },
// ];

