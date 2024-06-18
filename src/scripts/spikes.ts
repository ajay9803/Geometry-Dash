// The spikes

import MidSpike from "../models/spikes/mid_spike";
import Spike from "../models/spikes/spike";
import { aboveGround } from "./platforms";

let spike0 = new Spike(900, window.innerHeight - 6 - 150);

let spike1 = new MidSpike(1200, window.innerHeight - 6 - 150);
let spike2 = new Spike(1250, window.innerHeight - 6 - 150);

let spike5 = new Spike(3200 - 40, window.innerHeight - 6 - 150);
let spike6 = new Spike(3250 - 40, window.innerHeight - 6 - 150);

let spike7 = new Spike(4425, aboveGround - 50);

let spike8 = new Spike(6900 + 200, aboveGround - 400);
let spike9 = new Spike(6950 + 200, aboveGround - 400);
let spike10 = new Spike(7000 + 200, aboveGround - 400);
let spike11 = new Spike(7050 + 200, aboveGround - 400);

let spike12 = new Spike(6900 + 200 + 600, aboveGround - 400);
let spike13 = new Spike(6950 + 200 + 600, aboveGround - 400);
let spike14 = new Spike(7000 + 200 + 600, aboveGround - 400);
let spike15 = new Spike(7050 + 200 + 600, aboveGround - 400);

let spike16 = new Spike(8290, aboveGround - 450);
let spike17 = new Spike(8290 + 60, aboveGround - 450);
let spike18 = new Spike(8290 + 120, aboveGround - 450);
let spike19 = new Spike(8290 + 180, aboveGround - 450);

let spike20 = new Spike(9100, aboveGround - 400);

let spike21 = new Spike(9150, aboveGround - 300);

let spike22 = new Spike(9900, aboveGround - 300);
let spike23 = new Spike(10200, aboveGround - 200);

let spike24 = new Spike(10750 + 240 * 5, aboveGround - 420 - 50);

let spikes = [
  spike0,
  spike1,
  spike2,
  spike5,
  spike6,
  spike7,
  spike8,
  spike9,
  spike10,
  spike11,
  spike12,
  spike13,
  spike14,
  spike15,
  spike16,
  spike17,
  spike18,
  spike19,
  spike20,
  spike21,
  spike22,
  spike23,
  spike24,
];

export default spikes;
