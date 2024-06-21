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

export const menuCanvas = document.getElementById(
  "menu-canvas"
) as HTMLCanvasElement;

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
  // Main body
  const mainBody = document.getElementById("main") as HTMLDivElement;

  // Select the button using its ID
  const playButton = document.getElementById("play-button") as HTMLDivElement;
  const customizeButton = document.getElementById(
    "customize-button"
  ) as HTMLDivElement;
  const randomButton = document.getElementById(
    "random-button"
  ) as HTMLDivElement;

  const menuCanvas = document.getElementById(
    "menu-canvas"
  ) as HTMLCanvasElement;
  const levelOneCanvas = document.getElementById(
    "level-one-canvas"
  ) as HTMLCanvasElement;
  const menuButtons = document.getElementById("menu-buttons") as HTMLDivElement;

  // Add a click event listener to the button
  playButton.addEventListener("click", () => {
    console.log("this running again");
    backgroundAudio.play();
    menuCanvas.style.display = "none";
    levelOneCanvas.style.display = "block";
    menuButtons.style.display = "none";
    setMovingSpeed();
  });

  customizeButton.addEventListener("click", () => {
    playButton.style.display = "none";
    customizeButton.style.display = "none";
    randomButton.style.display = "none";
    menuCanvas.style.display = "none";
    mainBody.style.justifyContent = "start";
    mainBody.style.alignItems = "start";
    mainBody.style.background =
      "linear-gradient(to right, transparent, #787878)";

    const customizeWrapper = document.createElement("div");
    customizeWrapper.classList.add("customize-wrapper");

    mainBody.appendChild(customizeWrapper);

    const img = document.createElement("img");
    img.src = "assets/sprites/icons/cross-icon.png"; // Replace with the path to your image
    img.alt = "Description of the image"; // Replace with a description for accessibility
    img.classList.add("cross-image");

    customizeWrapper.appendChild(img);

    const selectedPlayerImage = document.createElement('img');
    selectedPlayerImage.src = 'assets/sprites/cubes/cube-1.png'
    selectedPlayerImage.classList.add('selected-player-image');

    customizeWrapper.appendChild(selectedPlayerImage);

    const line = document.createElement("div");
    line.classList.add("separator-line");

    customizeWrapper.appendChild(line);

    // Create a flexbox container for the images
    const flexContainer = document.createElement("div");
    flexContainer.classList.add("flex-container");

    // Create and append 8 player images to the flexbox container
    for (let i = 0; i < 8; i++) {
      const playerImg = document.createElement("img");
      playerImg.src = `assets/sprites/cubes/cube-${i + 1}.png`; // Use modulo to loop through available images
      playerImg.alt = `Player ${i + 1}`;
      playerImg.classList.add("player-image");
      flexContainer.appendChild(playerImg);
    }

    // Append the flexbox container to the main body
    customizeWrapper.appendChild(flexContainer);
  });
});
