import { MENU_GROUND_HEIGHT } from "../constants/height_constants";
import { GROUND_SPACING } from "../constants/height_constants";
import { WHITE } from "../constants/color_constants";

import playButtonImage from "../assets/sprites/buttons/play-button.png";
import MenuGround from "../models/menu/ground";
import MenuBackground from "../models/menu/background";

import backgroundMusic from "../assets/audios/zilly.mp3";
import { setMovingSpeed } from "./level1";

// Background Music
export let backgroundAudio = new Audio(backgroundMusic);
backgroundAudio.loop = true;

let playButton = new Image();
playButton.src = playButtonImage;

export const menuCanvas = document.getElementById("menu-canvas") as HTMLCanvasElement;

// Set the dimension for the canvas
menuCanvas.width = window.innerWidth - 5;
menuCanvas.height = window.innerHeight - 5;

export let menuCtx = menuCanvas.getContext("2d") as CanvasRenderingContext2D;

let backgrounds: MenuBackground[] = [];

for (let i = 0; i < 2; i++) {
  let background = new MenuBackground(
    i * menuCanvas.width,
    0,
    menuCanvas.width,
    menuCanvas.height
  );
  backgrounds.push(background);
}

let grounds: MenuGround[] = [];

// Create grounds dynamically up to ground 8
for (let i = 0; i <= 8; i++) {
  let ground = new MenuGround(
    i * GROUND_SPACING, // x position
    menuCanvas.height - MENU_GROUND_HEIGHT, // y position
    MENU_GROUND_HEIGHT, // width
    MENU_GROUND_HEIGHT // height
  );
  grounds.push(ground);
}

const animate = () => {
  // Handle infinite backgrounds
  backgrounds.forEach((background) => {
    background.update();

    if (background.x + menuCanvas.width <= 0) {
      background.x = 1 * menuCanvas.width;
    }
  });

  // Handle infinite - grounds
  grounds.forEach((ground) => {
    ground.update();

    if (ground.x + GROUND_SPACING <= 0) {
      ground.x = 8 * GROUND_SPACING;
    }
  });

  // Fill up half-transparent color
  menuCtx.fillStyle = "rgba(0, 0, 255, 0.5)";
  menuCtx.fillRect(0, 0, menuCanvas.width, menuCanvas.height);

  // Draw up defining line
  menuCtx.moveTo(0, menuCanvas.height - MENU_GROUND_HEIGHT - 1);
  menuCtx.lineTo(menuCanvas.width, menuCanvas.height - MENU_GROUND_HEIGHT - 1);
  menuCtx.strokeStyle = WHITE;
  menuCtx.lineWidth = 1;
  menuCtx.stroke();

  // Run an infinite animation loop
  requestAnimationFrame(animate);
};

animate();

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Select the button using its ID
  const playButton = document.getElementById("play-button") as HTMLDivElement;

  const menuCanvas = document.getElementById("menu-canvas") as HTMLCanvasElement;
  const levelOneCanvas = document.getElementById("level-one-canvas") as HTMLCanvasElement;
  const menuButtons = document.getElementById('menu-buttons') as HTMLDivElement;

  // Add a click event listener to the button
  playButton.addEventListener("click", () => {
    console.log('this running again');
    backgroundAudio.play();
    menuCanvas.style.display = 'none';
    levelOneCanvas.style.display = 'block';
    menuButtons.style.display = 'none';
    setMovingSpeed();
  });
});
