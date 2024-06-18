import { MENU_GROUND_HEIGHT } from "../constants/height_constants";
import Ground from "../models/ground";
import { GROUND_SPACING } from "../constants/height_constants";
import Background from "../models/background";
import Square from "../models/player";
import spikes from "./spikes";
import platforms from "./platforms";

export let canvasCor = {
  x: 0,
  y: 0,
};

// Variables to pause and resume the game
let pause: boolean = false;
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
let theSquare = new Square(
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

// Create grounds dynamically up to ground 8
for (let i = 0; i <= 8 * 20; i++) {
  let ground = new Ground(
    i * GROUND_SPACING, // x position
    level1Canvas.height - MENU_GROUND_HEIGHT, // y position
    MENU_GROUND_HEIGHT, // width
    MENU_GROUND_HEIGHT // height
  );
  grounds.push(ground);
}

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
  level1Ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
  level1Ctx.fillRect(
    canvasCor.x,
    canvasCor.y,
    level1Canvas.width,
    level1Canvas.height
  );

  // Update spikes
  spikes.forEach((spike) => {
    const isColliding = spike.checkCollisionWithSquare(
      theSquare.x,
      theSquare.y,
      50
    );
    if (isColliding) {
      theSquare.color = "orange";
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

  // Update square's position
  theSquare.update();
};

animate();

// Key down event listener
addEventListener("keydown", ({ code }) => {
  // Jump
  if (code === "Space" || code === "ArrowUp") {
    if (theSquare.shouldJump) {
      theSquare.dy -= 15;
      theSquare.gravity = 1;
      theSquare.shouldJump = false; // Disable jump while in the air
    }
  }

  // Pause the game
  if (code === "Enter") {
    pause = !pause;
    if (pause) {
      movingSpeed = 0; // Stop movement
    } else {
      movingSpeed = 9; // Resume movement
    }
  }
});
