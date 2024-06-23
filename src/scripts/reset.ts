import { MENU_GROUND_HEIGHT } from "../constants/height_constants";
import { GRAVITYSTATE } from "../enums/gravity_state";
import { saveAttempts } from "../utilities/attempts";
import {
  canvasCor,
  gameProgress,
  isCheckboxChecked,
  level1Canvas,
  level1Ctx,
  particles,
  setGameProgress,
  setMovingSpeed,
  theSquare,
} from "./level1";
import { backgroundAudio } from "./menu";

let resetGameInterval = null;

export const resetGame = (milliseconds: number) => {
  if (resetGameInterval !== null) {
    clearInterval(resetGameInterval);
  } else {
    setTimeout(() => {
      if (theSquare.isDead) {
        saveAttempts();
      }
      // Reset the canvas translation
      canvasCor.x = 0;
      canvasCor.y = 0;
      level1Ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset any transformations

      theSquare.isDead = false;
      theSquare.x = 400;
      theSquare.y = level1Canvas.height - MENU_GROUND_HEIGHT - 50;
      theSquare.dx = 0;
      theSquare.dy = 0;
      theSquare.offsetY = 0;
      theSquare.gravityState = GRAVITYSTATE.NORMAL;

      // Clear particles
      particles.length = 0;

      // Reset game progress
      setGameProgress(0);

      // Restart the background audio if necessary
      if (isCheckboxChecked) {
        backgroundAudio.currentTime = 0;
        backgroundAudio.play();
      }

      console.log("Game has been reset.");

      setMovingSpeed();
    }, milliseconds);
  }
};
