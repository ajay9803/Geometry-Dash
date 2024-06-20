import ThePlatform from "../models/platform";

export let aboveGround = window.innerHeight - 6 - 150;

// The platforms

// let platform0 = new ThePlatform(500, aboveGround - 50, 500, 50, "black");

let platform1 = new ThePlatform(
  2050,
  window.innerHeight - 6 - 150 - 50,
  50,
  50,
  "black"
);

let platform2 = new ThePlatform(
  2050 + 250,
  window.innerHeight - 6 - 150 - 100,
  50,
  100,
  "black"
);

let platform3 = new ThePlatform(
  2050 + 250 + 250,
  window.innerHeight - 6 - 150 - 150,
  50,
  150,
  "black"
);

let platform4 = new ThePlatform(3500, aboveGround - 50, 500, 50, "blue");
let platform5 = new ThePlatform(4200, aboveGround - 50, 500, 50, "purple");

let platform6 = new ThePlatform(4900, aboveGround - 100, 480, 100, "purple");

let platform7 = new ThePlatform(5550, aboveGround - 100 - 50, 70, 20, "gray");
let platform8 = new ThePlatform(
  5550 + 240,
  aboveGround - 180 - 50,
  70,
  20,
  "gray"
); // 5550 + 262
let platform9 = new ThePlatform(
  5550 + 240 * 2,
  aboveGround - 240 - 50,
  70,
  20,
  "gray"
); // 5812 + 262
let platform10 = new ThePlatform(
  5550 + 240 * 3,
  aboveGround - 300 - 50,
  70,
  20,
  "gray"
); // 6074 + 262
let platform11 = new ThePlatform(
  5550 + 240 * 4,
  aboveGround - 360 - 50,
  70,
  20,
  "gray"
); // 6336 + 262

let platform12 = new ThePlatform(6750, aboveGround - 400, 150, 100, "red");
let platform13 = new ThePlatform(6900, aboveGround - 400, 1200, 400, "orange");

let platform14 = new ThePlatform(7130, aboveGround - 480, 50, 20, "red");
let platform15 = new ThePlatform(7215, aboveGround - 480, 50, 20, "red");

let platform16 = new ThePlatform(7730, aboveGround - 480, 50, 20, "red");
let platform17 = new ThePlatform(7815, aboveGround - 480, 50, 20, "red");

let platform18 = new ThePlatform(8100, aboveGround - 350, 600, 350, "blue");
let platform19 = new ThePlatform(8700, aboveGround - 400, 450, 400, "yellow");

let platform20 = new ThePlatform(8290, aboveGround - 450, 50, 20, "orange");
let platform21 = new ThePlatform(
  8290 + 60,
  aboveGround - 450,
  50,
  20,
  "orange"
); // 8350 + 50 + 10
let platform22 = new ThePlatform(
  8290 + 120,
  aboveGround - 450,
  50,
  20,
  "orange"
); // 8350 + 2 * 50 + 2 * 10
let platform23 = new ThePlatform(
  8290 + 180,
  aboveGround - 450,
  50,
  20,
  "orange"
); // 8350 + 3 * 50 + 3 * 10

let platform24 = new ThePlatform(9150, aboveGround - 300, 400, 300, "black");

// Downwards now

let platform25 = new ThePlatform(9700, aboveGround - 300, 50, 20, "pink");
let platform26 = new ThePlatform(9750, aboveGround - 300, 50, 20, "pink");
let platform27 = new ThePlatform(9800, aboveGround - 300, 50, 20, "pink");
let platform28 = new ThePlatform(9850, aboveGround - 300, 50, 20, "pink");

let platform30 = new ThePlatform(10000 + 50, aboveGround - 200, 50, 20, "blue");
let platform31 = new ThePlatform(10050 + 50, aboveGround - 200, 50, 20, "blue");
let platform32 = new ThePlatform(10100 + 50, aboveGround - 200, 50, 20, "blue");
let platform33 = new ThePlatform(10150 + 50, aboveGround - 200, 50, 20, "blue");
let platform34 = new ThePlatform(10200 + 50, aboveGround - 200, 50, 20, "blue");
let platform29 = new ThePlatform(10250 + 50, aboveGround - 200, 50, 20, "pink");

let platform35 = new ThePlatform(
  10300 + 200,
  aboveGround - 100,
  50,
  20,
  "blue"
);
let platform36 = new ThePlatform(
  10350 + 200,
  aboveGround - 100,
  50,
  20,
  "blue"
);
let platform37 = new ThePlatform(
  10400 + 200,
  aboveGround - 100,
  50,
  20,
  "blue"
);
let platform38 = new ThePlatform(
  10450 + 200,
  aboveGround - 100,
  50,
  20,
  "blue"
);
// let platform39 = new ThePlatform(10500 + 100, aboveGround - 100, 50, 20, "blue");

let platform40 = new ThePlatform(
  10740 + 100,
  aboveGround - 100 - 50,
  70,
  20,
  "gray"
);
let platform41 = new ThePlatform(
  10740 + 100 + 240,
  aboveGround - 180 - 50,
  70,
  20,
  "gray"
); // 5550 + 262
let platform42 = new ThePlatform(
  10740 + 100 + 240 * 2,
  aboveGround - 240 - 50,
  70,
  20,
  "gray"
); // 5812 + 262
let platform43 = new ThePlatform(
  10740 + 100 + 240 * 3,
  aboveGround - 300 - 50,
  70,
  20,
  "gray"
); // 6074 + 262
let platform44 = new ThePlatform(
  10740 + 100 + 240 * 4,
  aboveGround - 360 - 50,
  70,
  20,
  "gray"
);
let platform45 = new ThePlatform(
  10740 + 100 + 240 * 5,
  aboveGround - 420 - 50,
  70,
  20,
  "gray"
);

let platform46 = new ThePlatform(11900, aboveGround - 300, 100, 50, "gray");
let platform47 = new ThePlatform(12000, aboveGround - 300, 1700, 300, "purple");

let platform48 = new ThePlatform(13700, aboveGround - 100, 5470, 100, "red");
let platform49 = new ThePlatform(13700, aboveGround - 700, 5470, 100, "red");

let platform50 = new ThePlatform(14700, aboveGround - 150, 50, 50, "blue");
let platform51 = new ThePlatform(15300, aboveGround - 150, 50, 50, "blue");

let platform52 = new ThePlatform(14700, aboveGround - 600, 50, 50, "pink");
let platform53 = new ThePlatform(15300, aboveGround - 600, 50, 50, "pink");

let platform54 = new ThePlatform(16000, aboveGround - 250, 50, 150, "pink");
let platform55 = new ThePlatform(16500, aboveGround - 600, 50, 150, "pink");

let platform56 = new ThePlatform(16700, aboveGround - 150, 50, 50, "black");
let platform57 = new ThePlatform(17000, aboveGround - 200, 50, 100, "black");
let platform58 = new ThePlatform(17300, aboveGround - 250, 50, 150, "black");

let platform59 = new ThePlatform(17750, aboveGround - 600, 50, 150, "black");

let platform60 = new ThePlatform(18300, aboveGround - 250, 870, 150, "blue");
let platform61 = new ThePlatform(18300, aboveGround - 600, 870, 150, "blue");

let platform62 = new ThePlatform(19170, aboveGround - 150, 600, 150, "blue");
let platform63 = new ThePlatform(19770, aboveGround - 50, 400, 50, "blue");
let platform64 = new ThePlatform(20370, aboveGround - 100, 50, 100, "yellow");
let platform65 = new ThePlatform(
  20370 + 240,
  aboveGround - 150,
  50,
  150,
  "yellow"
);
let platform66 = new ThePlatform(
  20370 + 220 * 2,
  aboveGround - 50,
  50,
  50,
  "yellow"
);

let platform67 = new ThePlatform(
  20370 + 220 * 2,
  aboveGround - 300,
  50,
  100,
  "yellow"
);

let platform68 = new ThePlatform(
  20370 + 220 * 3,
  aboveGround - 100,
  300,
  100,
  "yellow"
);

let platform69 = new ThePlatform(
  20370 + 220 * 3,
  aboveGround - 350,
  50,
  100,
  "yellow"
);

let platform70 = new ThePlatform(21570, aboveGround - 150, 50, 150, "blue");
let platform71 = new ThePlatform(
  21570 + 240,
  aboveGround - 200,
  50,
  200,
  "blue"
);

let platform72 = new ThePlatform(
  21570 + 240 * 2,
  aboveGround - 250,
  50,
  250,
  "blue"
);

let platform73 = new ThePlatform(
  21570 + 240 * 3,
  aboveGround - 300,
  50,
  300,
  "blue"
);

let platform74 = new ThePlatform(
  21570 + 240 * 4,
  aboveGround - 350,
  50,
  350,
  "blue"
);

let platform75 = new ThePlatform(
  21570 + 240 * 5,
  aboveGround - 400,
  50,
  400,
  "blue"
);

let platform76 = new ThePlatform(
  21570 + 240 * 6,
  aboveGround - 450,
  50,
  450,
  "blue"
);

let platform78 = new ThePlatform(23060, aboveGround - 450, 50, 20, "red");

let platform79 = new ThePlatform(23060 + 150, aboveGround - 400, 50, 20, "red");
let platform80 = new ThePlatform(
  23060 + 150 + 50,
  aboveGround - 400,
  50,
  20,
  "red"
);

let platform81 = new ThePlatform(
  23060 + 150 + 50 + 150,
  aboveGround - 300,
  50,
  20,
  "red"
);

let platform82 = new ThePlatform(
  23060 + 150 + 50 + 150 + 50,
  aboveGround - 300,
  50,
  20,
  "red"
);

let platform83 = new ThePlatform(
  23060 + 150 + 50 + 400,
  aboveGround - 200,
  50,
  20,
  "red"
);

let platform84 = new ThePlatform(
  23060 + 150 + 50 + 400 + 50,
  aboveGround - 200,
  50,
  20,
  "red"
);

let platform85 = new ThePlatform(
  23710 - 50,
  aboveGround - 180,
  100,
  180,
  "yellow"
);

let platform86 = new ThePlatform(
  23710 - 50 + 200,
  aboveGround - 100,
  50,
  20,
  "blue"
);

let platform87 = new ThePlatform(25000, aboveGround - 50, 50, 50, "purple");

let platform87d = new ThePlatform(25050, aboveGround - 50, 50, 50, "purple");

let platform90 = new ThePlatform(
  25400 + 100,
  aboveGround - 50,
  50,
  50,
  "purple"
);
let platform91 = new ThePlatform(
  25450 + 100,
  aboveGround - 50,
  50,
  50,
  "purple"
);

let platform94 = new ThePlatform(
  25750 + 220,
  aboveGround - 200,
  50,
  20,
  "purple"
);

let platform95 = new ThePlatform(
  25800 + 220,
  aboveGround - 200,
  50,
  20,
  "purple"
);

let platform92 = new ThePlatform(25750, aboveGround - 100, 50, 20, "purple");

let platform93 = new ThePlatform(25800, aboveGround - 100, 50, 20, "purple");

let platform96 = new ThePlatform(26200, aboveGround - 50, 50, 50, "brown");

let platform97 = new ThePlatform(26250, aboveGround - 50, 50, 50, "brown");

let platform98 = new ThePlatform(26300, aboveGround - 50, 50, 50, "brown");

let platforms = [
  platform1,
  platform2,
  platform3,
  platform4,
  platform5,
  platform6,
  platform7,
  platform8,
  platform9,
  platform10,
  platform11,
  platform12,
  platform13,
  platform14,
  platform15,
  platform16,
  platform17,
  platform18,
  platform19,
  platform20,
  platform21,
  platform22,
  platform23,
  platform24,
  platform25,
  platform26,
  platform27,
  platform28,
  platform29,
  platform30,
  platform31,
  platform32,
  platform33,
  platform34,
  platform35,
  platform36,
  platform37,
  platform38,
  platform40,
  platform41,
  platform42,
  platform43,
  platform44,
  platform45,
  platform46,
  platform47,
  platform48,
  platform49,
  platform50,
  platform51,
  platform52,
  platform53,
  platform54,
  platform55,
  platform56,
  platform57,
  platform58,
  platform59,
  platform60,
  platform61,
  platform62,
  platform63,
  platform64,
  platform65,
  platform66,
  platform67,
  platform68,
  platform69,
  platform70,
  platform71,
  platform72,
  platform73,
  platform74,
  platform75,
  platform76,
  platform78,
  platform79,
  platform80,
  platform81,
  platform82,
  platform83,
  platform84,
  platform85,
  platform86,
  platform87,
  platform87d,
  platform90,
  platform91,
  platform92,
  platform93,
  platform94,
  platform95,
  platform96,
  platform97,
  platform98,
];

platforms.forEach((platform) => {
  if (platform.h === 20) {
    platform.isSlab = true;
  }
});

export default platforms;
