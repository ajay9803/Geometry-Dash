import { MENU_GROUND_HEIGHT } from "../constants/height_constants";
import { GRAVITYSTATE } from "../enums/gravity_state";
import { saveAttempts } from "../utilities/attempts";
import {
  endParticles,
  level1Canvas,
  level1Ctx,
  particles,
  setMovingSpeed,
  theSquare,
} from "./level1";
import { isMusicCheckboxChecked } from "./gameplay_events";
import { canvasCor } from "../variables/gameplay_variables";
import { backgroundAudio } from "./menu";
import { saveProgressForToday } from "../utilities/progress_utility";

let resetGameInterval: any = null;

export const resetGame = (milliseconds: number, movingSpeed: number) => {
  if (resetGameInterval !== null) {
    clearInterval(resetGameInterval);
  } else {
    setTimeout(() => {
      if (theSquare.isDead) {
        // Save number of attempts to Local storage
        saveAttempts();
        let gameProgressPercentage = Math.floor(
          (canvasCor.x / 42000) * 100 >= 100 ? 100 : (canvasCor.x / 42000) * 100
        );

        // Save progress to an array of today's progress
        saveProgressForToday(gameProgressPercentage);
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
      theSquare.gravity = 1;
      theSquare.gravityState = GRAVITYSTATE.NORMAL;

      // Clear particles
      particles.length = 0;
      endParticles.length = 0;

      // Restart the background audio if necessary
      if (isMusicCheckboxChecked) {
        backgroundAudio.play();
      }

      setMovingSpeed(movingSpeed);
    }, milliseconds);
  }
};

