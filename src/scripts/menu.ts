import { MENU_GROUND_HEIGHT } from "../constants/height_constants";
import { GROUND_SPACING } from "../constants/height_constants";
import { WHITE } from "../constants/color_constants";

import playButtonImage from "/assets/sprites/buttons/play-button.png";
import MenuGround from "../models/menu/ground";
import MenuBackground from "../models/menu/background";

import backgroundMusic from "/assets/audios/zilly.mp3";
import { level1Canvas, level1Ctx, setMovingSpeed, setPlayer } from "./level1";
import Square from "../models/player";
import { SPEED } from "../constants/speed_constants";
import { getCustomization } from "../utilities/player_utility";

import { ListenForInstructionButtonClick } from "./menu_events/instructions_button_events";
import { ListenForLeaderboardButtonClick } from "./menu_events/leaderboard_button_events";
import { ListenForCustomizeButtonClick } from "./menu_events/customize_button_events";

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
  let isInstructionsBoardOpen = false;
  let isLeaderboardOpen = false;
  // Main body
  const mainBody = document.getElementById("main") as HTMLDivElement;

  const title = document.getElementById("title-img") as HTMLImageElement;

  // Select the button using its ID
  const playButton = document.getElementById("play-button") as HTMLDivElement;
  const customizeButton = document.getElementById(
    "customize-button"
  ) as HTMLDivElement;
  const randomButton = document.getElementById(
    "random-button"
  ) as HTMLDivElement;

  const leaderboardButton = document.getElementById(
    "leaderboard-button"
  ) as HTMLDivElement;

  const instructionsButton = document.getElementById(
    "instructions-button"
  ) as HTMLButtonElement;

  ListenForInstructionButtonClick(
    mainBody,
    instructionsButton,
    isInstructionsBoardOpen
  );

  ListenForLeaderboardButtonClick(
    mainBody,
    leaderboardButton,
    isLeaderboardOpen
  );

  const menuCanvas = document.getElementById(
    "menu-canvas"
  ) as HTMLCanvasElement;
  const levelOneCanvas = document.getElementById(
    "level-one-canvas"
  ) as HTMLCanvasElement;

  // Add a click event listener to the button
  playButton.addEventListener("click", () => {
    let playerImage = new Image();
    const { playerImageSrc, playerBackgroundColor } = getCustomization();
    playerImage.src = playerImageSrc;

    // Initialize or update player with customizations
    const player = new Square(
      playerImageSrc,
      false,
      400,
      level1Canvas.height - MENU_GROUND_HEIGHT - 100,
      50,
      50,
      0,
      0,
      playerBackgroundColor,
      level1Canvas,
      level1Ctx,
      1
    );
    setPlayer(player);

    backgroundAudio.play();
    menuCanvas.style.display = "none";
    title.style.display = "none";
    levelOneCanvas.style.display = "block";
    playButton.style.display = "none";
    customizeButton.style.display = "none";
    randomButton.style.display = "none";
    leaderboardButton.style.display = "none";
    instructionsButton.style.display = "none";
    setMovingSpeed(SPEED);
  });

  ListenForCustomizeButtonClick(mainBody);

  // Retrieve and apply the saved player image and color when the page loads
  const applySavedPlayerImage = () => {
    const savedPlayerId = localStorage.getItem("selectedPlayerImage");
    const savedPlayerColor = localStorage.getItem("selectedPlayerColor");

    if (savedPlayerId) {
      const savedPlayerImage = document.getElementById(
        savedPlayerId
      ) as HTMLImageElement;
      if (savedPlayerImage) {
        // Apply the saved player's image and border (if necessary)
        const initialSelectedImage = document.getElementById(
          "selected-player"
        ) as HTMLImageElement;
        initialSelectedImage.src = savedPlayerImage.src;
        initialSelectedImage.id = savedPlayerImage.id;
        savedPlayerImage.style.border = "2px dotted blue";
      }
    }

    if (savedPlayerColor) {
      const initialSelectedImage = document.getElementById(
        "selected-player"
      ) as HTMLImageElement;
      initialSelectedImage.style.backgroundColor = savedPlayerColor;
    }
  };

  // Apply saved player image and color on initial load (outside of the customize button's click event)
  applySavedPlayerImage();
});
