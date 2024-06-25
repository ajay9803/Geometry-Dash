import { GRAVITYSTATE } from "../enums/gravity_state";
import Portal from "../models/portal";
import { aboveGround } from "./platforms";
import startPortal from "/assets/sprites/portals/portal-2.png";
import endPortal from "/assets/sprites/portals/portal-1.png";
import gravityPortal from "/assets/sprites/portals/reverse-gravity-portal.png";

let endPortalImage = new Image();
endPortalImage.src = endPortal;

let startPortalImage = new Image();
startPortalImage.src = startPortal;

let gravityPortalImage = new Image();
gravityPortalImage.src = gravityPortal;

let portal1 = new Portal(
  startPortalImage,
  13550,
  aboveGround - 500,
  336 / 2,
  388 / 2,
  GRAVITYSTATE.FREE
);

let portal2 = new Portal(
  endPortalImage,
  18900,
  aboveGround - 445,
  336 / 2,
  388 / 2,
  GRAVITYSTATE.NORMAL,
  false
);

let portal3 = new Portal(
  startPortalImage,
  32675,
  aboveGround - 375,
  336 / 2,
  388 / 2,
  GRAVITYSTATE.FREE
);

let portal4 = new Portal(
  endPortalImage,
  40100,
  aboveGround - 385,
  336 / 2,
  388 / 2,
  GRAVITYSTATE.NORMAL,
  false
);
let portal5 = new Portal(
  gravityPortalImage,
  40860,
  aboveGround - 395,
  336 / 3,
  388 / 2,
  GRAVITYSTATE.REVERSE,
  true
);

let portal6 = new Portal(
  gravityPortalImage,
  41350,
  aboveGround - 395,
  336 / 3,
  388 / 2,
  GRAVITYSTATE.NORMAL,
  false
);

export const portals: Portal[] = [
  portal1,
  portal2,
  portal3,
  portal4,
  portal5,
  portal6,
];
