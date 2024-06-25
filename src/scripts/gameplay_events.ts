import { SPEED } from "../constants/speed_constants";
import { GRAVITYSTATE } from "../enums/gravity_state";
import { collectCoinAudio } from "../models/coin";
import { canvasCor, pause, setPause } from "../variables/gameplay_variables";
import { level1Canvas, setMovingSpeed, theSquare } from "./level1";
import { backgroundAudio } from "./menu";
import { openMenu } from "./pause";
import { resetGame } from "./reset";

// Track the state of the checkbox (checked or unchecked)
export let isMusicCheckboxChecked = true;

// Event listeners for space and arrow up
export const setEventListeners = () => {
  // Key down event listener
  addEventListener("keydown", ({ code }) => {
    // Jump
    if (code === "Space" || code === "ArrowUp") {
      if (theSquare.gravityState === GRAVITYSTATE.NORMAL) {
        // First Jump Logic
        if (
          theSquare.shouldJump &&
          theSquare.jumpCount > 0 &&
          !theSquare.hasJumpedOnce
        ) {
          theSquare.dy -= 15;

          // Mark that the player has jumped once
          theSquare.hasJumpedOnce = true;

          // Decrease jump count only for the first jump
          theSquare.jumpCount--;

          if (theSquare.jumpCount === 0) {
            theSquare.shouldJump = false; // Disable jump while in the air
          }
        }
      }
    }

    if (theSquare.gravityState === GRAVITYSTATE.FREE) {
      theSquare.shouldJump = true;
      theSquare.dy -= 6;
    }

    if (code === "ShiftRight") {
      if (
        localStorage.getItem("selectedPlayerImage") === "cube-9" &&
        theSquare.hasJumpedOnce
      ) {
        // Second Jump Logic

        theSquare.dy -= 15;

        // After the second jump, reset the ability to jump until landed
        theSquare.hasJumpedOnce = false; // Reset this flag as the second jump is performed
        theSquare.jumpCount--; // Decrement jump count for the second jump

        theSquare.shouldJump = false; // Disable further jumps in the air
      }
    }

    // A method or event listener should handle the landing logic to reset the jump state

    // Pause the game
    if (code === "Enter") {
      setPause(!pause);
      if (pause) {
        setMovingSpeed(0); // Stop movement
      } else {
        setMovingSpeed(9); // Resume movement
      }
    }

    // For debugging
    if (code === "ArrowLeft") {
      theSquare.color = "blue";
      setMovingSpeed(-9);
    }
  });

  // Track mouse position and hover state
  let mouseX = 0;
  let mouseY = 0;

  // Variables for resume button's dimensions and position
  const buttonWidth = 145;
  const buttonHeight = 145;
  let buttonX = canvasCor.x + level1Canvas.width / 2 - buttonWidth / 2;
  let buttonY = canvasCor.y + 300;

  // Track mouse position and hover state for the resume button
  let isHoveringOverResume = false;

  // Update mouse tracking for resume button hover
  level1Canvas.addEventListener("mousemove", (e) => {
    const rect = level1Canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    // Check if mouse is over the resume button
    isHoveringOverResume =
      mouseX >= buttonX &&
      mouseX <= buttonX + buttonWidth &&
      mouseY >= buttonY &&
      mouseY <= buttonY + buttonHeight;
    // Optionally, change cursor style when hovering over the button
    level1Canvas.style.cursor =
      isHoveringOverResume || isHoveringOverCheckbox || isHoveringOverMenuIcon
        ? "pointer"
        : "default";
  });

  // Add event listener for mouse clicks on the resume button
  level1Canvas.addEventListener("click", () => {
    if (isHoveringOverResume && pause) {
      // Resume the game if the resume button is clicked
      setPause(false);
      setMovingSpeed(SPEED); // Replace SPEED with your actual speed value
    }
  });

  // Define the dimensions and position for the checkbox
  const checkboxSize = 50;
  const checkboxX = canvasCor.x + level1Canvas.width * 0.2 + 100;
  const checkboxY = canvasCor.y + 372.5 - 25 - 5;

  // Track mouse position and hover state for the checkbox
  let isHoveringOverCheckbox = false;

  // Update mouse tracking for checkbox hover
  level1Canvas.addEventListener("mousemove", (e) => {
    const rect = level1Canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    // Check if mouse is over the checkbox
    isHoveringOverCheckbox =
      mouseX >= checkboxX &&
      mouseX <= checkboxX + checkboxSize &&
      mouseY >= checkboxY &&
      mouseY <= checkboxY + checkboxSize;
  });

  // Add event listener for mouse clicks on the checkbox
  level1Canvas.addEventListener("click", () => {
    if (isHoveringOverCheckbox && pause) {
      // Toggle the checkbox state
      isMusicCheckboxChecked = !isMusicCheckboxChecked;

      if (isMusicCheckboxChecked) {
        backgroundAudio.play();
      } else {
        backgroundAudio.pause();
        collectCoinAudio.pause();
      }
    }
  });

  // The menu button
  // Coordinates and dimensions for the menu icon
  const menuIconWidth = 90;
  const menuIconHeight = 90;
  const menuIconX = canvasCor.x + level1Canvas.width * 0.6 + 100;
  const menuIconY = canvasCor.y + 372.5 - 25 - 20;

  let isHoveringOverMenuIcon = false;

  // Add event listener to track mouse movements
  level1Canvas.addEventListener("mousemove", (e) => {
    const rect = level1Canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    // Check if mouse is over the menu icon
    isHoveringOverMenuIcon =
      mouseX >= menuIconX &&
      mouseX <= menuIconX + menuIconWidth &&
      mouseY >= menuIconY &&
      mouseY <= menuIconY + menuIconHeight;
  });

  // Add event listener menu icon click
  level1Canvas.addEventListener("click", () => {
    if (isHoveringOverMenuIcon) {
      // Open Menu and Reset the game
      theSquare.isDead = true;
      resetGame(1, 0);
      openMenu();
      setMovingSpeed(0);
      setPause(false);
    }
  });
};
