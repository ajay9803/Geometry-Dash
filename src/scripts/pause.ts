import {
  canvasCor,
  gameProgress,
  isCheckboxChecked,
  level1Canvas,
  level1Ctx,
} from "./level1";

import resumeButtonImage from "../assets/sprites/buttons/resume-button.png";
import starIconImage from "../assets/sprites/icons/the-star.png";

let resumeButton = new Image();
resumeButton.src = resumeButtonImage;

let starIcon = new Image();
starIcon.src = starIconImage;

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

  level1Ctx.fillStyle = "white";
  level1Ctx.font = "bold 30px Lacquer";
  level1Ctx.fillText(
    "STEREO MADNESS",
    canvasCor.x + level1Canvas.width / 2 - 116,
    canvasCor.y + 100
  );

  level1Ctx.fillStyle = "white";
  level1Ctx.font = "25px Lacquer";
  level1Ctx.fillText(
    "NORMAL MODE",
    canvasCor.x + level1Canvas.width / 2 - 85,
    canvasCor.y + 150
  );

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

  let gameProgressPercentage = (gameProgress / 120) * 100;

  level1Ctx.fillStyle = "green";
  level1Ctx.fillRect(
    canvasCor.x + level1Canvas.width / 2 - 225,
    canvasCor.y + 200,
    (gameProgressPercentage / 100) * 450,
    50
    // 25
  );
  level1Ctx.fill();

  level1Ctx.fillStyle = "white";
  level1Ctx.font = "bold 30px Lacquer";
  level1Ctx.fillText(
    `${Math.floor(gameProgressPercentage)} %`,
    canvasCor.x + level1Canvas.width / 2 - 20,
    canvasCor.y + 232
  );

  // Resume Button
  level1Ctx.drawImage(
    resumeButton,
    canvasCor.x + level1Canvas.width / 2 - 72.5,
    canvasCor.y + 300,
    145,
    145
  );

  level1Ctx.fillStyle = "white";
  level1Ctx.font = "bold 30px Lacquer";
  level1Ctx.fillText(
    "Music",
    canvasCor.x + level1Canvas.width * 0.2,
    canvasCor.y + 372.5
  );

  level1Ctx.fillStyle = "gray";
  level1Ctx.fillRect(
    canvasCor.x + level1Canvas.width * 0.2 + 100,
    canvasCor.y + 372.5 - 25 - 5,
    50,
    50
  );

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

  level1Ctx.restore();
};
