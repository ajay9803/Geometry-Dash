import { GRAVITYSTATE } from "../enums/gravity_state";
import {
  level1Canvas,
  level1Ctx,
  movingSpeed,
  setMovingSpeed,
  theSquare,
} from "../scripts/level1";
import { resetGame } from "../scripts/reset";
import explodePlayer, {
  showGameCompletionAnimation,
} from "../utilities/collisions";
import TailParticle from "./player_tail";

import planeImage from "../assets/sprites/cubes/plane-img.png";
import { SPEED } from "../constants/speed_constants";
import { openMenu } from "../scripts/pause";
import levelCompletionAud from "../assets/audios/level-complete.mp3";
import { isMusicCheckboxChecked } from "../scripts/gameplay_events";
import { backgroundAudio } from "../scripts/menu";
import { getCustomization } from "../utilities/player_utility";
import { canvasCor } from "../variables/gameplay_variables";

let levelCompletionAudio = new Audio();
levelCompletionAudio.src = levelCompletionAud;

// Retrieve the selected player image and background color
const { playerImageSrc } = getCustomization();

export let playerImage = new Image();
playerImage.src = playerImageSrc;

let playerPlaneImage = new Image();
playerPlaneImage.src = planeImage;

class Square {
  imgSrc: string;
  isDead: boolean;
  jumpCount: number;
  x: number;
  y: number;
  w: number;
  h: number;
  dx: number;
  dy: number;
  color: string;
  shouldJump: boolean;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  gravity: number;
  offsetY: number;
  gravityState: GRAVITYSTATE;
  tailParticles1: TailParticle[]; // Array to hold the first tail particles
  tailParticles2: TailParticle[]; // Array to hold the second tail particles
  tailParticles3: TailParticle[]; // Array to hold the third tail particles
  particleTimer: number; // Timer to control particle creation

  constructor(
    imgSrc: string,
    isDead: boolean,
    x: number,
    y: number,
    w: number,
    h: number,
    dx: number,
    dy: number,
    color: string,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    gravity: number,
    offsetY: number = 0,
    gravityState: GRAVITYSTATE = GRAVITYSTATE.NORMAL
  ) {
    this.imgSrc = imgSrc;
    this.isDead = isDead;

    this.jumpCount = 1;
    // localStorage.getItem("selectedPlayerImage") === "cube-4" ? 1 : 1;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dx = dx;
    this.dy = dy;
    this.color = color; // Use the stored background color
    this.shouldJump = false;
    this.canvas = canvas;
    this.ctx = ctx;
    this.gravity = gravity;
    this.offsetY = offsetY;
    this.gravityState = gravityState;
    this.tailParticles1 = []; // Initialize the first tail particles array
    this.tailParticles2 = []; // Initialize the second tail particles array
    this.tailParticles3 = []; // Initialize the third tail particles array
    this.particleTimer = 0; // Initialize the timer for particle creation

    // Set the initial image
    this.updateImage(imgSrc);
    this.updateColor(color);
  }

  // Remove player on collision with obstacles
  removePlayer: () => void = () => {
    this.isDead = true;
    explodePlayer();
    resetGame(500, SPEED);
  };

  // Update image on character customization
  updateImage(newImageSrc: string) {
    this.imgSrc = newImageSrc;
    playerImage.src = newImageSrc;
    playerImage.onload = () => {
      this.draw();
    };
  }

  // Update character color on color customization
  updateColor(newColor: string) {
    this.color = newColor;
  }

  draw(): void {
    this.tailParticles1.forEach((particle) => particle.draw());
    this.tailParticles2.forEach((particle) => particle.draw());
    this.tailParticles3.forEach((particle) => particle.draw());

    // Draw the player image on top

    if (this.gravityState === GRAVITYSTATE.FREE) {
      this.ctx.save();
      this.ctx.drawImage(
        playerPlaneImage,
        this.x,
        this.y,
        this.w + this.w,
        this.h + 10
      );

      this.ctx.restore();
    } else {
      this.ctx.save();

      // Draw the square with a background color
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, this.y, this.w, this.h); // Fill with background color
      this.ctx.drawImage(playerImage, this.x, this.y, this.w, this.h);
      this.ctx.restore();
    }
  }

  update(): void {
    let gameProgressPercentage = (canvasCor.x / 42000) * 100;
    if (gameProgressPercentage >= 100) {
      gameProgressPercentage = 100;
    }

    if (this.dy > 0) {
      this.shouldJump = false;
    }

    // If the game is complete, stop movement
    if (gameProgressPercentage < 100) {
      this.y += this.dy;
      this.x += movingSpeed;
      canvasCor.x += movingSpeed;

      let translateX = -movingSpeed;
      let translateY = 0;

      // translate the canvas vertically based on the player's movement
      if (this.gravityState === GRAVITYSTATE.NORMAL) {
        if (this.y < level1Canvas.height / 4 + this.offsetY) {
          translateY = 2.5;
          canvasCor.y -= 2.5;
          this.offsetY -= 2.5;
        } else if (this.y > level1Canvas.height * 0.7 + this.offsetY) {
          translateY = -5.5;
          canvasCor.y += 5.5;
          this.offsetY += 5.5;
        }
      }

      if (this.gravityState === GRAVITYSTATE.FREE) {
        // Behavior for free gravity state
      }

      level1Ctx.translate(translateX, translateY);

      // Gravity effect
      if (this.y + this.h + this.dy > this.canvas.height) {
        this.dy = 0;
        this.shouldJump = true;
      } else {
        this.dy += this.gravity; // Simulate gravity
      }

      // Update tail particles and draw the square
    } else {
      if (isMusicCheckboxChecked) {
        // Play completion audio on level completion
        backgroundAudio.pause();
        levelCompletionAudio.play();
      }

      // Show level completion animation
      showGameCompletionAnimation();

      // Show level completion message
      level1Ctx.save();
      level1Ctx.fillStyle = "white";
      level1Ctx.font = "bold 50px Lacquer";
      level1Ctx.fillText(`Level Completed`, 42300, canvasCor.y + 100);
      level1Ctx.restore();
      // Stop the square's movement
      this.dy = 0;
      this.shouldJump = false;
      setTimeout(() => {
        theSquare.isDead = true;
        resetGame(1, 0);
        openMenu();
        setMovingSpeed(0);
        if (isMusicCheckboxChecked) {
          levelCompletionAudio.play();
        }

        // setPause(false);
      }, 3000);
    }

    this.updateTailParticles();
    this.draw();
  }

  updateTailParticles(): void {
    // Control the particle creation rate
    this.particleTimer++;
    if (this.particleTimer >= 3) {
      // Adjust this value to control spacing
      this.particleTimer = 0;

      // Size of the tail particles, adjust as needed
      const tailSize = this.w / 5;

      // Create new tail particles at the square's position, slightly offset for each tail
      const tailParticle1 = new TailParticle(
        this.x + this.w / 2 - tailSize / 2,
        this.y + this.h / 2 - tailSize / 2,
        tailSize,
        -0.5, // Slight horizontal movement for effect
        0,
        this.color
      );
      const tailParticle2 = new TailParticle(
        this.x + this.w / 2 - tailSize / 2,
        this.y + this.h / 2 - tailSize / 2 - tailSize, // Offset above
        tailSize,
        -0.5, // Slight horizontal movement for effect
        0,
        this.color
      );
      const tailParticle3 = new TailParticle(
        this.x + this.w / 2 - tailSize / 2,
        this.y + this.h / 2 - tailSize / 2 + tailSize, // Offset below
        tailSize,
        -0.5, // Slight horizontal movement for effect
        0,
        this.color
      );

      // Add particles to their respective tail arrays
      if (this.gravityState === GRAVITYSTATE.NORMAL) {
        this.tailParticles1.push(tailParticle1);
        this.tailParticles2.push(tailParticle2);
      }

      this.tailParticles3.push(tailParticle3);

      // Limit the number of particles to control the tail length
      if (this.tailParticles1.length > 30) {
        // Longer tail with more particles
        this.tailParticles1.shift(); // Remove the oldest particle
      }
      if (this.tailParticles2.length > 30) {
        this.tailParticles2.shift();
      }
      if (this.tailParticles3.length > 30) {
        this.tailParticles3.shift();
      }
    }

    // Update tail particles
    this.tailParticles1.forEach((particle) => particle.updatePosition());
    this.tailParticles2.forEach((particle) => particle.updatePosition());
    this.tailParticles3.forEach((particle) => particle.updatePosition());

    // Remove particles that are fully faded out or too small
    this.tailParticles1 = this.tailParticles1.filter(
      (particle) => particle.opacity > 0.1 && particle.size > 1
    );
    this.tailParticles2 = this.tailParticles2.filter(
      (particle) => particle.opacity > 0.1 && particle.size > 1
    );
    this.tailParticles3 = this.tailParticles3.filter(
      (particle) => particle.opacity > 0.1 && particle.size > 1
    );
  }
}

export default Square;
