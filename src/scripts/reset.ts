import { MENU_GROUND_HEIGHT } from "../constants/height_constants";
import { SPEED } from "../constants/speed_constants";
import { GRAVITYSTATE } from "../enums/gravity_state";
import { saveAttempts } from "../utilities/attempts";
import {
  canvasCor,
  level1Canvas,
  level1Ctx,
  particles,
  setMovingSpeed,
  theSquare,
} from "./level1";
import { backgroundAudio } from "./menu";
import { isCheckboxChecked } from "./gameplay_events";

let resetGameInterval: any = null;

export const resetGame = (milliseconds: number, movingSpeed: number) => {
  if (resetGameInterval !== null) {
    clearInterval(resetGameInterval);
  } else {
    setTimeout(() => {
      if (theSquare.isDead) {
        saveAttempts();
        let gameProgressPercentage = Math.floor(
          (canvasCor.x / 37000) * 100 >= 100 ? 100 : (canvasCor.x / 37000) * 100
        );
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

      // Restart the background audio if necessary
      if (isCheckboxChecked) {
        backgroundAudio.currentTime = 0;
        backgroundAudio.play();
      }

      setMovingSpeed(movingSpeed);
    }, milliseconds);
  }
};

function saveProgressForToday(progress: number) {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Retrieve existing progress data from localStorage, or initialize an empty object
  let progressDataString = localStorage.getItem("gameProgressData");
  let progressData = progressDataString ? JSON.parse(progressDataString) : {};

  // Ensure there's an array for today's progress
  if (!progressData[today]) {
    progressData[today] = [];
  }

  // Append the new progress as an object to today's list
  progressData[today].push({ progress: progress });

  // Save the updated progress data back to localStorage
  localStorage.setItem("gameProgressData", JSON.stringify(progressData));
}

export function getTodayProgress(): Array<{ progress: number }> {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Retrieve existing progress data from localStorage
  const progressDataString = localStorage.getItem("gameProgressData");
  const progressData = progressDataString ? JSON.parse(progressDataString) : {};

  // Return today's progress list, or an empty array if there's none
  return progressData[today] || [];
}

export function getTopThreeProgresses(progresses: any[]) {
  // Sort the progresses in descending order by progress value
  progresses.sort((a, b) => b.progress - a.progress);

  // Return the top 3 progresses
  return progresses.slice(0, 7);
}
