import { MENU_GROUND_HEIGHT } from "../constants/height_constants";
import Ground from "../models/ground";
import { GROUND_SPACING } from "../constants/height_constants";
import Background from "../models/background";
import Square from "../models/player";
import spikes from "./spikes";
import platforms from "./platforms";
import { portals } from "./portals";
import Particle from "../models/particle";
import { showPauseMenu } from "./pause";
import { attemptCount,  } from "../utilities/attempts";

import player from "/assets/sprites/cubes/cube-5.png";

import { coins } from "./coins";
import { setEventListeners } from "./gameplay_events";
import { propellers } from "./propeller";

let playerImage = new Image();
playerImage.src = player;

let themeValue = 255;
let themeColor = `rgba(0, 0, ${themeValue})`;
let opacityValue = 0.5;

export let canvasCor = {
  x: 0,
  y: 0,
};

// Variables to pause and resume the game
export let pause: boolean = false;

export let setPause = (value: boolean) => {
  pause = value;
};
// export let movingSpeed = 50;
export let movingSpeed = 0;

export const setMovingSpeed = (speed: number) => {
  movingSpeed = speed;
};

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
  player,
  false,
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

export const setPlayer = (player: Square) => {
  theSquare = player;
};

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
for (let i = 0; i <= 290; i++) {
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
      // theSquare.isDead = true;
      // if (theSquare.isDead) {
      theSquare.removePlayer();

      // }
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

  coins.forEach((coin) => {
    coin.draw();
    coin.collidesWith(theSquare);
  });

  propellers.forEach((propeller) => {
    propeller.draw();
    propeller.checkCollision();
  });

  // Update square's position
  if (!theSquare.isDead) {
    theSquare.update();
  }

  particles.forEach((particle, index) => {
    if (particle.radius <= 0) {
      particles.splice(index, 1);
    } else {
      if (particles.length <= 250) {
        particle.updatePosition();
      }
    }
  });

  level1Ctx.save();
  level1Ctx.fillStyle = "white";
  level1Ctx.font = "bold 50px Lacquer";
  level1Ctx.fillText(`Attempt ${attemptCount}`, 200, canvasCor.y + 100);
  level1Ctx.restore();

  if (pause) {
    showPauseMenu();
  }
};

animate();

setEventListeners();
