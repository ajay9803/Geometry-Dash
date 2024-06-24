import Coin from "../models/coin";
import { aboveGround } from "./platforms";

export let coins: Coin[] = [];

let coin1 = new Coin(20370 + 220 * 3, aboveGround - 82 - 120, 82, 82);
let coin2 = new Coin(31700 + 30, aboveGround - 300, 82, 82);

coins = [coin1, coin2];

export let collectedCoinsCount = 0;

export const setCollectedCoinsCount: (count: number) => void = (
  count: number
) => {
  collectedCoinsCount += count;
};
