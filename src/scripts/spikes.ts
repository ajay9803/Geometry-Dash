// The spikes

import { GROUND_HEIGHT } from "../constants/height_constants";
import MidSpike from "../models/spikes/mid_spike";
import Spike from "../models/spikes/spike";

let spike0 = new Spike(500, 600);

let spike1 = new MidSpike(1200, 600);
let spike2 = new Spike(1250, 600);

let spike3 = new Spike(1950, 600);
let spike4 = new Spike(2000, 600);

// let spike5 = new Spike(2800, 600);
// let spike6 = new Spike(2850, 600);

let spike7 = new Spike(4425, GROUND_HEIGHT + 50);

let spike8 = new Spike(6900 + 200, GROUND_HEIGHT - 400);
let spike9 = new Spike(6950 + 200, GROUND_HEIGHT - 400);
let spike10 = new Spike(7000 + 200, GROUND_HEIGHT - 400);
let spike11 = new Spike(7050 + 200, GROUND_HEIGHT - 400);

let spike12 = new Spike(6900 + 200 + 600, GROUND_HEIGHT - 400);
let spike13 = new Spike(6950 + 200 + 600, GROUND_HEIGHT - 400);
let spike14 = new Spike(7000 + 200 + 600, GROUND_HEIGHT - 400);
let spike15 = new Spike(7050 + 200 + 600, GROUND_HEIGHT - 400);

let spike16 = new Spike(8290 - 5, GROUND_HEIGHT - 450);
let spike17 = new Spike(8290 + 60 - 5, GROUND_HEIGHT - 450);
let spike18 = new Spike(8290 + 120 - 5, GROUND_HEIGHT - 450);
let spike19 = new Spike(8290 + 180 - 5, GROUND_HEIGHT - 450);

let spike20 = new Spike(9060, GROUND_HEIGHT - 400);

let spike21 = new Spike(9110, GROUND_HEIGHT - 300);

let spikes = [
  spike0,
  spike1,
  spike2,
  spike3,
  spike4,
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
];

export default spikes;
