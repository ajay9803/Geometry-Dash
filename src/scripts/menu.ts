// import { MENU_GROUND_HEIGHT } from "../constants/height_constants";
// import Ground from "../models/ground";
// import { GROUND_SPACING } from "../constants/height_constants";
// import Background from "../models/background";
// import { WHITE } from "../constants/color_constants";

// import playButtonImage from "../assets/sprites/buttons/play-button.png";

// let playButton = new Image();
// playButton.src = playButtonImage;

// const menuCanvas = document.getElementById("menu-canvas") as HTMLCanvasElement;

// export let menuCtx = menuCanvas.getContext("2d") as CanvasRenderingContext2D;

// let backgrounds: Background[] = [];

// for (let i = 0; i < 2; i++) {
//   let background = new Background(
//     i * menuCanvas.width,
//     0,
//     menuCanvas.width,
//     menuCanvas.height
//   );
//   backgrounds.push(background);
// }

// let grounds: Ground[] = [];

// // Create grounds dynamically up to ground 8
// for (let i = 0; i <= 8; i++) {
//   let ground = new Ground(
//     i * GROUND_SPACING, // x position
//     menuCanvas.height - MENU_GROUND_HEIGHT, // y position
//     MENU_GROUND_HEIGHT, // width
//     MENU_GROUND_HEIGHT // height
//   );
//   grounds.push(ground);
// }

// const animate = () => {
//   // Handle infinite backgrounds
//   backgrounds.forEach((background) => {
//     background.update();

//     if (background.x + menuCanvas.width <= 0) {
//       console.log("Background is out of view.");
//       background.x = 1 * menuCanvas.width;
//     }
//   });

//   // Handle infinite - grounds
//   grounds.forEach((ground) => {
//     ground.update();

//     if (ground.x + GROUND_SPACING <= 0) {
//       console.log("Ground is out of view.");
//       ground.x = 8 * GROUND_SPACING;
//     }
//   });

//   // Fill up half-transparent color
//   menuCtx.fillStyle = "rgba(0, 0, 255, 0.5)";
//   menuCtx.fillRect(0, 0, menuCanvas.width, menuCanvas.height);

//   // Draw up defining line
//   menuCtx.moveTo(0, menuCanvas.height - MENU_GROUND_HEIGHT - 1);
//   menuCtx.lineTo(menuCanvas.width, menuCanvas.height - MENU_GROUND_HEIGHT - 1);
//   menuCtx.strokeStyle = WHITE;
//   menuCtx.lineWidth = 1;
//   menuCtx.stroke();

//   // Run an infinite animation loop
//   requestAnimationFrame(animate);
// };

// animate();
