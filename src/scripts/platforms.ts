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

let platform12 = new ThePlatform(
  6750,
  aboveGround - 400,
  150,
  100,
  "red",
  false
);
let platform13 = new ThePlatform(
  6900,
  aboveGround - 400,
  1200,
  400,
  "orange",
  false
);

let platform14 = new ThePlatform(7130, aboveGround - 480, 50, 20, "red", false);
let platform15 = new ThePlatform(7215, aboveGround - 480, 50, 20, "red", false);

let platform16 = new ThePlatform(7730, aboveGround - 480, 50, 20, "red", false);
let platform17 = new ThePlatform(7815, aboveGround - 480, 50, 20, "red", false);

let platform18 = new ThePlatform(
  8100,
  aboveGround - 350,
  600,
  350,
  "blue",
  false
);
let platform19 = new ThePlatform(
  8700,
  aboveGround - 400,
  450,
  400,
  "yellow",
  false
);

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
  20370 + 220 * 2 - 50,
  aboveGround - 50,
  150,
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

let platform99 = new ThePlatform(27400, aboveGround - 50, 50, 50, "pink");

let platform100 = new ThePlatform(
  27400 + 240,
  aboveGround - 100,
  50,
  100,
  "pink"
);

let platform101 = new ThePlatform(
  27400 + 240 * 2,
  aboveGround - 150,
  50,
  150,
  "pink"
);

let platform102 = new ThePlatform(
  27400 + 240 * 3,
  aboveGround - 200,
  50,
  200,
  "pink"
);
let platform103 = new ThePlatform(
  27450 + 240 * 3,
  aboveGround - 200,
  50,
  20,
  "pink"
);
let platform104 = new ThePlatform(
  27600 + 240 * 3,
  aboveGround - 150,
  50,
  20,
  "pink"
);
let platform105 = new ThePlatform(
  27750 + 240 * 3,
  aboveGround - 100,
  50,
  20,
  "pink"
);
let platform106 = new ThePlatform(
  27900 + 240 * 3,
  aboveGround - 50,
  50,
  20,
  "pink",
  false
);

let platform107 = new ThePlatform(
  29400,
  aboveGround - 150 - 20,
  50,
  50,
  "pink"
);
let platform108 = new ThePlatform(
  29450,
  aboveGround - 150 - 20,
  50,
  50,
  "pink"
);
let platform109 = new ThePlatform(
  29500,
  aboveGround - 150 - 20,
  50,
  50,
  "pink"
);
let platform110 = new ThePlatform(
  29550,
  aboveGround - 150 - 20,
  50,
  50,
  "pink"
);
let platform111 = new ThePlatform(29850, aboveGround - 50, 50, 50, "blue");
let platform112 = new ThePlatform(
  30100,
  aboveGround - 70,
  50,
  20,
  "pink",
  false
);
let platform113 = new ThePlatform(
  30150,
  aboveGround - 70,
  50,
  20,
  "pink",
  false
);
let platform114 = new ThePlatform(
  30200,
  aboveGround - 70,
  50,
  20,
  "pink",
  false
);
let platform115 = new ThePlatform(
  30250,
  aboveGround - 70,
  50,
  20,
  "pink",
  false
);
let platform116 = new ThePlatform(
  30250 + 240,
  aboveGround - 100,
  50,
  20,
  "pink"
);
let platform117 = new ThePlatform(
  30250 + 240 * 2,
  aboveGround - 150,
  50,
  20,
  "pink"
);
let platform118 = new ThePlatform(
  30250 + 240 * 3,
  aboveGround - 200,
  50,
  20,
  "pink"
);
let platform119 = new ThePlatform(
  30250 + 240 * 4,
  aboveGround - 250,
  50,
  20,
  "pink"
);
let platform120 = new ThePlatform(
  30300 + 240 * 4,
  aboveGround - 250,
  50,
  20,
  "pink"
);
let platform121 = new ThePlatform(
  30350 + 240 * 4,
  aboveGround - 250,
  50,
  20,
  "pink"
);

let platform122 = new ThePlatform(
  31400 + 50,
  aboveGround - 350,
  50,
  50,
  "pink"
);
let platform123 = new ThePlatform(31400, aboveGround - 200, 50, 50, "pink");
let platform124 = new ThePlatform(
  31500 + 50,
  aboveGround - 300,
  50,
  50,
  "pink"
);

let platform125 = new ThePlatform(31500, aboveGround - 150, 50, 50, "pink");
let platform126 = new ThePlatform(
  31600 + 50,
  aboveGround - 250,
  50,
  50,
  "pink"
);
let platform127 = new ThePlatform(31600, aboveGround - 100, 50, 50, "pink");
let platform128 = new ThePlatform(
  31700 + 50,
  aboveGround - 200,
  50,
  50,
  "pink",
  false
);
let platform129 = new ThePlatform(31700, aboveGround - 50, 50, 50, "pink");
// let platform130 = new ThePlatform(32100, aboveGround - 100, 50, 20, "pink");
let platform131 = new ThePlatform(
  32150 + 150,
  aboveGround - 150,
  50,
  20,
  "pink"
);
let platform132 = new ThePlatform(
  32200 + 150,
  aboveGround - 150,
  50,
  20,
  "pink"
);
let platform133 = new ThePlatform(
  32250 + 150,
  aboveGround - 150,
  50,
  20,
  "pink"
);

let platform134 = new ThePlatform(
  32300 + 240,
  aboveGround - 100,
  50,
  20,
  "pink"
);
let platform135 = new ThePlatform(
  32350 + 240,
  aboveGround - 100,
  50,
  20,
  "pink"
);
let platform136 = new ThePlatform(
  32400 + 240,
  aboveGround - 100,
  50,
  20,
  "pink"
);
let platform137 = new ThePlatform(32750, aboveGround - 50, 50, 50, "red");
let platform138 = new ThePlatform(32750, aboveGround - 100, 50, 50, "red");
let platform139 = new ThePlatform(
  32750,
  aboveGround - 150,
  50,
  50,
  "red",
  false
);

let platform140 = new ThePlatform(32750, aboveGround - 450, 50, 50, "red");
let platform141 = new ThePlatform(32750, aboveGround - 500, 50, 50, "red");
let platform142 = new ThePlatform(32750, aboveGround - 550, 50, 50, "red");

//portal starts
let platform143 = new ThePlatform(34000, aboveGround - 50, 50, 50, "red");
let platform144 = new ThePlatform(34050, aboveGround - 50, 400, 50, "blue");
let platform145 = new ThePlatform(34450, aboveGround - 50, 50, 50, "red");
let platform146 = new ThePlatform(34050, aboveGround - 100, 50, 50, "red");
let platform147 = new ThePlatform(34100, aboveGround - 100, 300, 50, "blue");
let platform148 = new ThePlatform(34400, aboveGround - 100, 50, 50, "red");
let platform149 = new ThePlatform(34100, aboveGround - 150, 300, 50, "red");
let platform150 = new ThePlatform(34000, aboveGround - 550, 50, 50, "red");
let platform151 = new ThePlatform(34050, aboveGround - 550, 400, 50, "blue");
let platform152 = new ThePlatform(34450, aboveGround - 550, 50, 50, "red");
let platform153 = new ThePlatform(
  34050,
  aboveGround - 500,
  50,
  50,
  "red",
  false
);
let platform154 = new ThePlatform(
  34100,
  aboveGround - 500,
  300,
  50,
  "blue",
  false
);
let platform155 = new ThePlatform(
  34400,
  aboveGround - 500,
  50,
  50,
  "red",
  false
);
let platform156 = new ThePlatform(34100, aboveGround - 450, 300, 50, "red");
let platform157 = new ThePlatform(35500, aboveGround - 50, 50, 50, "red");
let platform158 = new ThePlatform(35550, aboveGround - 50, 400, 50, "blue");
let platform159 = new ThePlatform(35950, aboveGround - 50, 50, 50, "red");
let platform160 = new ThePlatform(35550, aboveGround - 100, 50, 50, "red");
let platform161 = new ThePlatform(35600, aboveGround - 100, 300, 50, "blue");
let platform162 = new ThePlatform(35900, aboveGround - 100, 50, 50, "red");
let platform163 = new ThePlatform(35600, aboveGround - 150, 300, 50, "red");
let platform164 = new ThePlatform(35600, aboveGround - 450, 300, 50, "red");
let platform165 = new ThePlatform(
  35900,
  aboveGround - 500,
  50,
  50,
  "red",
  false
);
let platform166 = new ThePlatform(
  35550,
  aboveGround - 500,
  50,
  50,
  "red",
  false
);
// let platform167 = new ThePlatform(35950, aboveGround - 550, 50, 50, "red");
// let platform167 = new ThePlatform(36500, aboveGround - 100, 50, 20, "red");
// let platform168 = new ThePlatform(36550, aboveGround - 100, 50, 20, "red");
// let platform169 = new ThePlatform(36600, aboveGround - 100, 50, 20, "red");
let platform167 = new ThePlatform(36740, aboveGround - 200, 5000, 200, "red");
let platform168 = new ThePlatform(36740, aboveGround - 550, 5000, 150, "red");
let platform169 = new ThePlatform(37200, aboveGround - 400, 100, 50, "red");
let platform170 = new ThePlatform(38800, aboveGround - 250, 50, 50, "red");
let platform171 = new ThePlatform(
  39000,
  aboveGround - 400,
  50,
  50,
  "red",
  false
);
let platform172 = new ThePlatform(39350, aboveGround - 250, 750, 50, "red");
let platform173 = new ThePlatform(39800, aboveGround - 300, 200, 50, "red");
let platform174 = new ThePlatform(40650, aboveGround - 220, 200, 20, "yellow");
let platform175 = new ThePlatform(40950, aboveGround - 400, 400, 20, "yellow");
// let platform153 = new ThePlatform(34980, aboveGround - 100, 50, 20, "pink");

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
  platform99,
  platform100,
  platform101,
  platform102,
  platform103,
  platform104,
  platform105,
  platform106,
  platform107,
  platform108,
  platform109,
  platform110,
  platform111,
  platform112,
  platform113,
  platform114,
  platform115,
  platform116,
  platform117,
  platform118,
  platform119,
  platform120,
  platform121,
  platform122,
  platform123,
  platform124,
  platform125,
  platform126,
  platform127,
  platform128,
  platform129,
  // platform130,
  platform131,
  platform132,
  platform133,
  platform134,
  platform135,
  platform136,
  platform137,
  platform138,
  platform139,
  platform140,
  platform141,
  platform142,
  platform143,
  platform144,
  platform145,
  platform146,
  platform147,
  platform148,
  platform149,
  platform150,
  platform151,
  platform152,
  platform153,
  platform154,
  platform155,
  platform156,
  platform157,
  platform158,
  platform159,
  platform160,
  platform161,
  platform162,
  platform163,
  platform164,
  platform165,
  platform166,
  platform167,
  platform168,
  platform169,
  platform170,
  platform171,
  platform172,
  platform173,
  platform174,
  platform175,
];

platforms.forEach((platform) => {
  if (platform.h === 20) {
    platform.isSlab = true;
  }
});

platforms.forEach((platform) => {
  if (platform.w <= 70) {
    platform.showLight = true;
  }
});

export default platforms;
