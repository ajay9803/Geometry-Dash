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

let spike22 = new Spike(9850, aboveGround - 300);
let spike23 = new Spike(10250 + 50, aboveGround - 200);

let spike24 = new Spike(10750 + 100 + 240 * 5, aboveGround - 420 - 50);

let spike25 = new Spike(14750, aboveGround - 100);
let spike26 = new Spike(14800, aboveGround - 100);
let spike27 = new Spike(14850, aboveGround - 100);
let spike28 = new Spike(14900, aboveGround - 100);
let spike29 = new Spike(14950, aboveGround - 100);
let spike30 = new Spike(15000, aboveGround - 100);

// Adding five more spikes
let spike31 = new Spike(15050, aboveGround - 100);
let spike32 = new Spike(15100, aboveGround - 100);
let spike33 = new Spike(15150, aboveGround - 100);
let spike34 = new Spike(15200, aboveGround - 100);
let spike35 = new Spike(15250, aboveGround - 100);

let spike36 = new Spike(14750, aboveGround - 600, true);
let spike37 = new Spike(14800, aboveGround - 600, true);
let spike38 = new Spike(14850, aboveGround - 600, true);
let spike39 = new Spike(14900, aboveGround - 600, true);
let spike40 = new Spike(14950, aboveGround - 600, true);
let spike41 = new Spike(15000, aboveGround - 600, true);

// Adding five more reversed spikes
let spike42 = new Spike(15050, aboveGround - 600, true);
let spike43 = new Spike(15100, aboveGround - 600, true);
let spike44 = new Spike(15150, aboveGround - 600, true);
let spike45 = new Spike(15200, aboveGround - 600, true);
let spike46 = new Spike(15250, aboveGround - 600, true);

let spike47 = new Spike(16050, aboveGround - 100);
let spike48 = new Spike(16050, aboveGround - 100);
let spike49 = new Spike(16100, aboveGround - 100);
let spike50 = new Spike(16150, aboveGround - 100);
let spike51 = new Spike(16200, aboveGround - 100);

let spike52 = new Spike(16550, aboveGround - 600, true);
let spike53 = new Spike(16600, aboveGround - 600, true);
let spike54 = new Spike(16650, aboveGround - 600, true);
let spike55 = new Spike(16700, aboveGround - 600, true);
let spike56 = new Spike(16750, aboveGround - 600, true);

let spike57 = new Spike(16700, aboveGround - 100);
let spike58 = new Spike(16750, aboveGround - 100);
let spike59 = new Spike(16800, aboveGround - 100);
let spike60 = new Spike(16850, aboveGround - 100);
let spike61 = new Spike(16900, aboveGround - 100);
let spike62 = new Spike(16950, aboveGround - 100);

let spike63 = new Spike(17000, aboveGround - 100);
let spike64 = new Spike(17050, aboveGround - 100);
let spike65 = new Spike(17100, aboveGround - 100);
let spike66 = new Spike(17150, aboveGround - 100);
let spike67 = new Spike(17200, aboveGround - 100);
let spike68 = new Spike(17250, aboveGround - 100);

let spike69 = new Spike(17450, aboveGround - 600, true);

let spike70 = new Spike(17500, aboveGround - 600, true);

let spike71 = new Spike(17550, aboveGround - 600, true);

let spike72 = new Spike(17600, aboveGround - 600, true);

let spike73 = new Spike(17650, aboveGround - 600, true);

let spike74 = new Spike(17700, aboveGround - 600, true);

let spike75 = new Spike(17800, aboveGround - 600, true);

let spike76 = new Spike(17850, aboveGround - 600, true);

let spike77 = new Spike(17900, aboveGround - 600, true);

let spike78 = new Spike(17950, aboveGround - 600, true);

let spike79 = new Spike(18000, aboveGround - 600, true);

let spike80 = new Spike(18050, aboveGround - 600, true);

let spike81 = new Spike(18100, aboveGround - 600, true);

let spike82 = new Spike(18150, aboveGround - 600, true);

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
  spike25,
  spike26,
  spike27,
  spike28,
  spike29,
  spike30,
  spike31,
  spike32,
  spike33,
  spike34,
  spike35,
  spike36,
  spike37,
  spike38,
  spike39,
  spike40,
  spike41,
  spike42,
  spike43,
  spike44,
  spike45,
  spike46,
  spike47,
  spike48,
  spike49,
  spike50,
  spike51,
  spike52,
  spike53,
  spike54,
  spike55,
  spike56,
  spike57,
  spike58,
  spike59,
  spike60,
  spike61,
  spike62,
  spike63,
  spike64,
  spike65,
  spike66,
  spike67,
  spike68,
  spike69,
  spike70,
  spike71,
  spike72,
  spike73,
  spike74,
  spike75,
  spike76,
  spike77,
  spike78,
  spike79,
  spike80,
  spike81,
  spike82,
];

export default spikes;
