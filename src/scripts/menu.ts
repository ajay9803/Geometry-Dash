import { MENU_GROUND_HEIGHT } from "../constants/height_constants";
import { GROUND_SPACING } from "../constants/height_constants";
import { WHITE } from "../constants/color_constants";

import playButtonImage from "/assets/sprites/buttons/play-button.png";
import MenuGround from "../models/menu/ground";
import MenuBackground from "../models/menu/background";

import backgroundMusic from "/assets/audios/zilly.mp3";
import {
  level1Canvas,
  level1Ctx,
  setMovingSpeed,
  setPlayer,
  theSquare,
} from "./level1";
import Square, { getCustomization } from "../models/player";
import { getTodayProgress, getTopThreeProgresses } from "./reset";
import { SPEED } from "../constants/speed_constants";
import { collectedCoinsCount } from "./coins";

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

  instructionsButton.addEventListener("click", () => {
    if (isInstructionsBoardOpen) {
      return;
    }
    isInstructionsBoardOpen = !isInstructionsBoardOpen;
    let instructionsBoard = document.createElement("div");

    instructionsBoard.classList.add("instructions-board");
    mainBody.appendChild(instructionsBoard);

    let closeButton = document.createElement("img");
    closeButton.src = "assets/sprites/icons/cross-icon.png";
    closeButton.alt = "close";
    closeButton.classList.add("leaderboard-cross-image");

    closeButton.addEventListener("click", () => {
      isInstructionsBoardOpen = !isInstructionsBoardOpen;
      mainBody.removeChild(instructionsBoard);
    });

    instructionsBoard.appendChild(closeButton);

    // Append the instructions to the board
    const jumpInstructions = document.createElement("p");
    jumpInstructions.innerHTML =
      "Use <strong>Space</strong> or <strong>Arrow Up</strong> key to jump.";
    instructionsBoard.appendChild(jumpInstructions);

    const continuousJumpInstructions = document.createElement("p");
    continuousJumpInstructions.innerHTML =
      "Hold <strong>Space</strong> or <strong>Arrow Up</strong> key for continuous jumps.";
    instructionsBoard.appendChild(continuousJumpInstructions);
  });

  leaderboardButton.addEventListener("click", () => {
    if (isLeaderboardOpen) {
      return;
    }
    isLeaderboardOpen = !isLeaderboardOpen;
    let leaderboard = document.createElement("div");
    // mainBody.removeChild(instructionsBoard);

    leaderboard.classList.add("leaderboard");
    mainBody.appendChild(leaderboard);

    let leaderboardTitle = document.createElement("h1") as HTMLHeadingElement;
    leaderboardTitle.innerHTML = "Today's Leaderboard";
    leaderboardTitle.classList.add("leaderboard-title");

    leaderboard.appendChild(leaderboardTitle);

    let coinsCollectedText = document.createElement("h1") as HTMLHeadingElement;
    coinsCollectedText.innerHTML = `Coins Collected: ${collectedCoinsCount}`;
    coinsCollectedText.classList.add("leaderboard-title");

    leaderboard.appendChild(coinsCollectedText);

    const closeButton = document.createElement("img");
    closeButton.src = "assets/sprites/icons/cross-icon.png"; // Replace with the path to your image
    closeButton.alt = "Close"; // Replace with a description for accessibility
    closeButton.classList.add("leaderboard-cross-image");

    closeButton.addEventListener("click", () => {
      isLeaderboardOpen = !isLeaderboardOpen;
      leaderboard.style.display = "none";
    });

    leaderboard.appendChild(closeButton);

    let mainWrapper = document.createElement("div");
    mainWrapper.classList.add("main-wrapper");
    leaderboard.appendChild(mainWrapper);

    let progressBarsWrapper = document.createElement("div");
    progressBarsWrapper.classList.add("progress-bars-wrapper");
    mainWrapper.appendChild(progressBarsWrapper);

    let progresses = getTodayProgress();
    let topProgresses = getTopThreeProgresses(progresses);

    topProgresses.forEach((progress) => {
      let progressbar = document.createElement("div");
      progressbar.classList.add("progressbar");
      progressbar.style.width = "10%";
      progressbar.style.height = `${(progress["progress"] / 100) * 200}px`;
      progressbar.style.backgroundColor = "purple";
      progressBarsWrapper.appendChild(progressbar);
    });

    let progressValues = document.createElement("div");
    progressValues.style.display = "flex";
    progressValues.style.justifyContent = "space-between";
    progressValues.classList.add("progress-values");

    topProgresses.forEach((progress) => {
      let text = document.createElement("h1");
      text.innerHTML = Math.floor(progress["progress"]).toString() + "%";
      progressValues.appendChild(text);
    });
    mainWrapper.appendChild(progressValues);
  });

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

  customizeButton.addEventListener("click", () => {
    title.style.display = "none";
    playButton.style.display = "none";
    customizeButton.style.display = "none";
    randomButton.style.display = "none";
    leaderboardButton.style.display = "none";
    instructionsButton.style.display = "none";

    menuCanvas.style.display = "none";
    mainBody.style.justifyContent = "start";
    mainBody.style.alignItems = "start";
    mainBody.style.background =
      "linear-gradient(to right, transparent, #787878)";

    const customizeWrapper = document.createElement("div");
    customizeWrapper.classList.add("customize-wrapper");

    mainBody.appendChild(customizeWrapper);

    const closeButton = document.createElement("img");
    closeButton.src = "assets/sprites/icons/cross-icon.png"; // Replace with the path to your image
    closeButton.alt = "Close"; // Replace with a description for accessibility
    closeButton.classList.add("cross-image");

    customizeWrapper.appendChild(closeButton);

    const selectedPlayerImage = document.createElement("img");
    selectedPlayerImage.id = "selected-player"; // Set an ID for easy access later
    selectedPlayerImage.classList.add("selected-player-image");
    customizeWrapper.appendChild(selectedPlayerImage);

    const line = document.createElement("div");
    line.classList.add("separator-line");
    customizeWrapper.appendChild(line);

    // Create a color picker input
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.id = "color-picker";
    colorPicker.value = "#ff0000"; // Default value (red)
    customizeWrapper.appendChild(colorPicker);

    // Update background color of selected player image when color is picked
    colorPicker.addEventListener("input", () => {
      const selectedColor = colorPicker.value;
      theSquare.color = selectedColor;
      (selectedPlayerImage as HTMLImageElement).style.backgroundColor =
        selectedColor;

      // Save the selected color to local storage
      localStorage.setItem("selectedPlayerColor", selectedColor);
    });

    // Create a flexbox container for the images
    const flexContainer = document.createElement("div");
    flexContainer.classList.add("flex-container");

    // Create and append 8 player images to the flexbox container
    for (let i = 0; i < 9; i++) {
      const playerImg = document.createElement("img");
      playerImg.id = `cube-${i + 1}`;
      playerImg.src = `assets/sprites/cubes/cube-${i + 1}.png`; // Use modulo to loop through available images
      playerImg.alt = `Player ${i + 1}`;
      playerImg.classList.add("player-image");
      flexContainer.appendChild(playerImg);

      playerImg.onclick = () => {
        // Reset border for all player images
        const allPlayerImages = document.querySelectorAll(".player-image");
        allPlayerImages.forEach((img) => {
          (img as HTMLImageElement).style.border = "none";
        });

        // Set border for the selected image
        (playerImg as HTMLImageElement).style.border = "2px dotted blue";

        // Update the selected player image
        (selectedPlayerImage as HTMLImageElement).src = playerImg.src;
        selectedPlayerImage.id = playerImg.id;

        // Save selected player image to local storage
        localStorage.setItem("selectedPlayerImage", playerImg.id);
      };
    }

    // Append the flexbox container to the main body
    customizeWrapper.appendChild(flexContainer);

    // Retrieve the saved player image and color from local storage (if any)
    const savedPlayerId = localStorage.getItem("selectedPlayerImage");
    const savedPlayerColor = localStorage.getItem("selectedPlayerColor");

    if (savedPlayerId) {
      const savedPlayerImage = document.getElementById(
        savedPlayerId
      ) as HTMLImageElement;
      if (savedPlayerImage) {
        (selectedPlayerImage as HTMLImageElement).src = savedPlayerImage.src;
        selectedPlayerImage.id = savedPlayerImage.id;
        savedPlayerImage.style.border = "2px dotted blue";
      }
    } else {
      // Default selection if nothing is saved
      (selectedPlayerImage as HTMLImageElement).src =
        "assets/sprites/cubes/cube-1.png";
      selectedPlayerImage.id = "cube-1";
    }

    if (savedPlayerColor) {
      (selectedPlayerImage as HTMLImageElement).style.backgroundColor =
        savedPlayerColor;
      colorPicker.value = savedPlayerColor; // Set the color picker to the saved color
    } else {
      // Default color if nothing is saved
      (selectedPlayerImage as HTMLImageElement).style.backgroundColor =
        "#ff0000"; // Red
      colorPicker.value = "#ff0000"; // Red
    }

    closeButton.onclick = () => {
      mainBody.removeChild(customizeWrapper);

      menuCanvas.style.display = "block";
      title.style.display = "block";
      playButton.style.display = "block";
      customizeButton.style.display = "block";
      randomButton.style.display = "block";
      leaderboardButton.style.display = "block";
      instructionsButton.style.display = "block";
    };
  });

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
