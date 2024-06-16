import { GROUND_HEIGHT } from "../constants/height_constants";
import ThePlatform from "../models/platform";

// The ground
let ground = new ThePlatform(0, 600, 9000, 400, "green");

// The platforms
let platform1 = new ThePlatform(2050, GROUND_HEIGHT + 50, 50, 50, "blue");

let platform2 = new ThePlatform(2280, GROUND_HEIGHT, 50, 100, "red");
let platform3 = new ThePlatform(2510, GROUND_HEIGHT - 50, 50, 150, "yellow");

let platform4 = new ThePlatform(3500, GROUND_HEIGHT + 50, 500, 50, "blue");
let platform5 = new ThePlatform(4200, GROUND_HEIGHT + 50, 500, 50, "purple");

let platform6 = new ThePlatform(4900, GROUND_HEIGHT, 480, 100, "purple");

let platform7 = new ThePlatform(5550, GROUND_HEIGHT - 100, 70, 20, "gray");
let platform8 = new ThePlatform(5812 - 2, GROUND_HEIGHT - 180, 70, 20, "gray"); // 5550 + 262
let platform9 = new ThePlatform(6074 - 2, GROUND_HEIGHT - 240, 70, 20, "gray"); // 5812 + 262
let platform10 = new ThePlatform(6336 - 2, GROUND_HEIGHT - 300, 70, 20, "gray"); // 6074 + 262
let platform11 = new ThePlatform(6598 - 2, GROUND_HEIGHT - 360, 70, 20, "gray"); // 6336 + 262

let platform12 = new ThePlatform(6750, GROUND_HEIGHT - 400, 150, 100, "purple");
let platform13 = new ThePlatform(
  6900,
  GROUND_HEIGHT - 400,
  1200,
  500,
  "purple"
);

let platform14 = new ThePlatform(7130, GROUND_HEIGHT - 480, 50, 20, "red");
let platform15 = new ThePlatform(7215, GROUND_HEIGHT - 480, 50, 20, "red");

let platform16 = new ThePlatform(7730, GROUND_HEIGHT - 480, 50, 20, "red");
let platform17 = new ThePlatform(7815, GROUND_HEIGHT - 480, 50, 20, "red");

let platform18 = new ThePlatform(8110, GROUND_HEIGHT - 350, 600, 500, "pink");
let platform19 = new ThePlatform(8710, GROUND_HEIGHT - 400, 400, 500, "purple");

let platform20 = new ThePlatform(8290, GROUND_HEIGHT - 450, 50, 20, "orange");
let platform21 = new ThePlatform(
  8290 + 60,
  GROUND_HEIGHT - 450,
  50,
  20,
  "orange"
); // 8350 + 50 + 10
let platform22 = new ThePlatform(
  8290 + 120,
  GROUND_HEIGHT - 450,
  50,
  20,
  "orange"
); // 8350 + 2 * 50 + 2 * 10
let platform23 = new ThePlatform(
  8290 + 180,
  GROUND_HEIGHT - 450,
  50,
  20,
  "orange"
); // 8350 + 3 * 50 + 3 * 10

let platform24 = new ThePlatform(9110, GROUND_HEIGHT - 300, 400, 500, "indigo");

let platforms = [
  ground,
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
];

export default platforms;
