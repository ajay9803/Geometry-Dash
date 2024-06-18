import { GRAVITYSTATE } from "../enums/gravity_state";
import Portal from "../models/portal";
import { aboveGround } from "./platforms";

let portal1 = new Portal(
  13550,
  aboveGround - 500,
  336 / 2,
  388 / 2,
  GRAVITYSTATE.FREE
);

let portal2 = new Portal(
  18900,
  aboveGround - 450,
  336 / 2,
  388 / 2,
  GRAVITYSTATE.NORMAL
);

export const portals: Portal[] = [portal1, portal2];
