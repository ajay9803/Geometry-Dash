import { canvasCor, level1Canvas, level1Ctx } from "./level1";

import resumeButtonImage from "../assets/sprites/buttons/resume-button.png";
import starIconImage from "../assets/sprites/icons/the-star.png";
import menuIconImage from "../assets/sprites/icons/menu-icon.png";
import { isCheckboxChecked } from "./gameplay_events";

let resumeButton = new Image();
resumeButton.src = resumeButtonImage;

let starIcon = new Image();
starIcon.src = starIconImage;

let menuIcon = new Image();
menuIcon.src = menuIconImage;

export const showPauseMenu = () => {
  level1Ctx.save();
  level1Ctx.fillStyle = "black";
  level1Ctx.globalAlpha = 0.55;
  level1Ctx.fillRect(
    canvasCor.x,
    canvasCor.y,
    level1Canvas.width,
    level1Canvas.height
  );
  level1Ctx.restore();

  level1Ctx.save();
  level1Ctx.fillStyle = "white";
  level1Ctx.font = "bold 30px Lacquer";
  level1Ctx.fillText(
    "STEREO MADNESS",
    canvasCor.x + level1Canvas.width / 2 - 116,
    canvasCor.y + 100
  );
  level1Ctx.restore();

  level1Ctx.save();
  level1Ctx.fillStyle = "white";
  level1Ctx.font = "25px Lacquer";
  level1Ctx.fillText(
    "NORMAL MODE",
    canvasCor.x + level1Canvas.width / 2 - 85,
    canvasCor.y + 150
  );
  level1Ctx.restore();

  level1Ctx.save();
  level1Ctx.strokeStyle = "white";
  level1Ctx.lineWidth = 4;
  level1Ctx.fillStyle = "black";
  level1Ctx.fillRect(
    canvasCor.x + level1Canvas.width / 2 - 225,
    canvasCor.y + 200,
    450,
    50
  );

  level1Ctx.stroke();
  level1Ctx.restore();

  let gameProgressPercentage =
    (canvasCor.x / 37000) * 100 >= 100 ? 100 : (canvasCor.x / 42000) * 100;

  if ((gameProgressPercentage / 100) * 450 > 450) {
  }
  level1Ctx.save();
  level1Ctx.fillStyle = "green";
  level1Ctx.fillRect(
    canvasCor.x + level1Canvas.width / 2 - 225,
    canvasCor.y + 200,
    (gameProgressPercentage / 100) * 450,
    50
    // 25
  );
  level1Ctx.fill();
  level1Ctx.restore();

  level1Ctx.save();
  level1Ctx.fillStyle = "white";
  level1Ctx.font = "bold 30px Lacquer";
  level1Ctx.fillText(
    `${Math.floor(gameProgressPercentage)} %`,
    canvasCor.x + level1Canvas.width / 2 - 20,
    canvasCor.y + 232
  );
  level1Ctx.restore();

  // Resume Button
  level1Ctx.drawImage(
    resumeButton,
    canvasCor.x + level1Canvas.width / 2 - 72.5,
    canvasCor.y + 300,
    145,
    145
  );

  level1Ctx.save();
  level1Ctx.fillStyle = "white";
  level1Ctx.font = "bold 30px Lacquer";
  level1Ctx.fillText(
    "Music",
    canvasCor.x + level1Canvas.width * 0.2,
    canvasCor.y + 372.5
  );
  level1Ctx.restore();

  level1Ctx.save();
  level1Ctx.fillStyle = "gray";
  level1Ctx.fillRect(
    canvasCor.x + level1Canvas.width * 0.2 + 100,
    canvasCor.y + 372.5 - 25 - 5,
    50,
    50
  );
  level1Ctx.restore();

  // Music Checkbox
  level1Ctx.strokeStyle = "black"; // Set border color
  level1Ctx.lineWidth = 2; // Set border width
  level1Ctx.strokeRect(
    canvasCor.x + level1Canvas.width * 0.2 + 100,
    canvasCor.y + 372.5 - 25 - 5,
    50,
    50
  );

  if (isCheckboxChecked) {
    level1Ctx.drawImage(
      starIcon,
      canvasCor.x + level1Canvas.width * 0.2 + 100 + 5,
      canvasCor.y + 372.5 - 25,
      40,
      40
    );
  }

  level1Ctx.drawImage(
    menuIcon,
    canvasCor.x + level1Canvas.width * 0.6 + 100,
    canvasCor.y + 372.5 - 25 - 20,
    90,
    90
  );

  level1Ctx.restore();
};

// Function to open the menu
export function openMenu() {
  const menuCanvas = document.getElementById(
    "menu-canvas"
  ) as HTMLCanvasElement;
  const levelOneCanvas = document.getElementById(
    "level-one-canvas"
  ) as HTMLCanvasElement;
  const titleImg = document.getElementById("title-img") as HTMLDivElement;
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
  ) as HTMLElement;

  const mainBody = document.getElementById("main") as HTMLDivElement;

  // Display the menu canvas and hide other elements
  menuCanvas.style.display = "block";
  levelOneCanvas.style.display = "none";
  titleImg.style.display = "block";
  playButton.style.display = "block";
  customizeButton.style.display = "block";
  randomButton.style.display = "block";
  leaderboardButton.style.display = "block";
  instructionsButton.style.display = "block";

  mainBody.style.justifyContent = "center";
  mainBody.style.alignItems = "center";
  mainBody.style.background = "linear-gradient(to right, transparent, #787878)";
}
