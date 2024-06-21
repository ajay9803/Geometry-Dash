import { MENU_GROUND_HEIGHT } from "../constants/height_constants";
import Ground from "../models/ground";
import { GROUND_SPACING } from "../constants/height_constants";
import Background from "../models/background";
import Square from "../models/player";
import spikes from "./spikes";
import platforms from "./platforms";
import { portals } from "./portals";
import { GRAVITYSTATE } from "../enums/gravity_state";
import Particle from "../models/particle";
import explodePlayer from "../utilities/collisions";
import { showPauseMenu } from "./pause";
import backgroundMusic from "../assets/audios/zilly.mp3";

// Background Music 
let backgroundAudio = new Audio(backgroundMusic);
backgroundAudio.loop = true;

let themeValue = 255;
let themeColor = `rgba(0, 0, ${themeValue})`;
let opacityValue = 0.5;

export let gameProgress = 0;

export let canvasCor = {
  x: 0,
  y: 0,
};

// Variables to pause and resume the game
let pause: boolean = false;
// export let movingSpeed = 50;
export let movingSpeed = 9;

// The canvas element
export const level1Canvas = document.getElementById(
  "level-one-canvas"
) as HTMLCanvasElement;

// Set the dimension for the canvas
level1Canvas.width = window.innerWidth - 5;
level1Canvas.height = window.innerHeight - 5;

// Export context2D
export let level1Ctx = level1Canvas.getContext(
  "2d"
) as CanvasRenderingContext2D;

// The player
export let theSquare = new Square(
  400,
  level1Canvas.height - MENU_GROUND_HEIGHT - 100,
  50,
  50,
  0,
  0,
  "blue",
  level1Canvas,
  level1Ctx,
  1
);

let backgrounds: Background[] = [];

// Initialize backgrounds
for (let i = 0; i < 2 * 20; i++) {
  let background = new Background(
    i * level1Canvas.width,
    0,
    level1Canvas.width,
    level1Canvas.height
  );
  backgrounds.push(background);
}

let grounds: Ground[] = [];

export let particles: Particle[] = [];

// Create grounds dynamically up to ground 8
for (let i = 0; i <= 8 * 30; i++) {
  let ground = new Ground(
    i * GROUND_SPACING, // x position
    level1Canvas.height - MENU_GROUND_HEIGHT, // y position
    MENU_GROUND_HEIGHT, // width
    MENU_GROUND_HEIGHT // height
  );
  grounds.push(ground);
}

// backgroundAudio
//   .play()
//   .catch((e) => console.log("Error playing background music:", e));

const animate = () => {
  level1Ctx.clearRect(
    canvasCor.x,
    canvasCor.y,
    level1Canvas.width,
    level1Canvas.height
  );

  // Run an infinite animation loop
  requestAnimationFrame(animate);

  // Handle infinite backgrounds
  backgrounds.forEach((background) => {
    background.update();

    if (background.x + level1Canvas.width <= 0) {
      background.x = 1 * level1Canvas.width;
    }
  });

  // Handle infinite grounds
  grounds.forEach((ground) => {
    ground.update();

    if (ground.x + GROUND_SPACING <= 0) {
      ground.x = 9 * GROUND_SPACING;
    }
    ground.checkCollisionWithSquare(theSquare);
  });

  // Draw semi-transparent background
  level1Ctx.save();
  level1Ctx.fillStyle = themeColor;
  level1Ctx.globalAlpha = opacityValue;
  level1Ctx.fillRect(
    canvasCor.x,
    canvasCor.y,
    level1Canvas.width,
    level1Canvas.height
  );
  level1Ctx.restore();

  // Update spikes
  spikes.forEach((spike) => {
    const isColliding = spike.checkCollisionWithSquare(
      theSquare.x,
      theSquare.y,
      50
    );
    if (isColliding) {
      theSquare.color = "orange";
      explodePlayer();
    }
    spike.draw();
  });

  // Update platforms
  platforms.forEach((platform) => {
    // Check collision with square and adjust position
    platform.checkCollisionWithSquare(theSquare);

    // Draw the platform
    platform.draw();
  });

  portals.forEach((portal) => {
    portal.draw();
    portal.checkCollisionWithSquare(theSquare);
  });

  // Separator between ground and the game-env
  level1Ctx.save();
  level1Ctx.strokeStyle = "white";
  level1Ctx.lineWidth = 2;
  level1Ctx.beginPath();
  level1Ctx.moveTo(canvasCor.x, level1Canvas.height - MENU_GROUND_HEIGHT); // Adjust the x position based on canvasCor.x
  level1Ctx.lineTo(
    canvasCor.x + level1Canvas.width,
    level1Canvas.height - MENU_GROUND_HEIGHT
  ); // Adjust the x position based on canvasCor.x and add canvas width
  level1Ctx.stroke();
  level1Ctx.restore();

  // Update square's position
  theSquare.update();

  particles.forEach((particle, index) => {
    if (particle.radius <= 0) {
      particles.splice(index, 1);
    } else {
      particle.updatePosition();
    }
  });

  if (pause) {
    showPauseMenu();
  }
};

animate();

// Key down event listener
addEventListener("keydown", ({ code }) => {
  // Jump
  if (code === "Space" || code === "ArrowUp") {
    if (theSquare.gravityState === GRAVITYSTATE.NORMAL) {
      if (theSquare.shouldJump) {
        theSquare.dy -= 15;
        theSquare.gravity = 1;
        theSquare.shouldJump = false; // Disable jump while in the air
      }
    }

    if (theSquare.gravityState === GRAVITYSTATE.FREE) {
      theSquare.shouldJump = true;
      theSquare.dy -= 6;
    }
  }

  // Pause the game
  if (code === "Enter") {
    pause = !pause;
    if (pause) {
      clearInterval(gameProgressInterval);
      console.log(gameProgress);
      movingSpeed = 0; // Stop movement
    } else {
      movingSpeed = 9; // Resume movement
      gameProgressInterval = setInterval(() => {
        gameProgress += 1;
      }, 1000);
    }
  }

  if (code === "ArrowLeft") {
    theSquare.color = "blue";
    movingSpeed = -10;
  }
});

let gameProgressInterval = setInterval(() => {
  gameProgress += 1;
}, 1000);

// The Resume Button
// Variables for resume button's dimensions and position
const buttonWidth = 145;
const buttonHeight = 145;
let buttonX = canvasCor.x + level1Canvas.width / 2 - buttonWidth / 2;
let buttonY = canvasCor.y + 300;

// Track mouse position and hover state
let mouseX = 0;
let mouseY = 0;
let isHoveringOverResume = false;

// Add event listener to track mouse movements
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
});

// Add event listener for mouse clicks
level1Canvas.addEventListener("click", () => {
  if (isHoveringOverResume && pause) {
    // Resume the game if the resume button is clicked
    pause = false;
    movingSpeed = 9; // Resume movement
    gameProgressInterval = setInterval(() => {
      gameProgress += 1;
    }, 1000);
  }
});

// Define the dimensions and position for the checkbox
const checkboxSize = 50;
const checkboxX = canvasCor.x + level1Canvas.width * 0.2 + 100;
const checkboxY = canvasCor.y + 372.5 - 25 - 5;

// Track the state of the checkbox (checked or unchecked)
export let isCheckboxChecked = false;

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
    isCheckboxChecked = !isCheckboxChecked;

    if (isCheckboxChecked) {
      backgroundAudio.play();
    } else {
      backgroundAudio.pause();
    }
    
    // (Optional) Perform additional actions when checkbox state changes
    console.log(`Checkbox state: ${isCheckboxChecked ? "Checked" : "Unchecked"}`);
  }
});