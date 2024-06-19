import { GRAVITYSTATE } from "../enums/gravity_state";
import {
  canvasCor,
  level1Canvas,
  level1Ctx,
  movingSpeed,
} from "../scripts/level1";
import TailParticle from "./player_tail";

class Square {
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
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
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
  }

  draw(): void {
    // Draw the square
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);

    // Draw tail particles
    this.tailParticles1.forEach((particle) => particle.draw());
    this.tailParticles2.forEach((particle) => particle.draw());
    this.tailParticles3.forEach((particle) => particle.draw());
  }

  update(): void {
    if (this.dy > 0) {
      this.shouldJump = false;
    }

    // Update square's position
    this.y += this.dy;
    this.x += movingSpeed;

    let translateX = -movingSpeed;
    let translateY = 0;

    canvasCor.x += movingSpeed;

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
      this.tailParticles1.push(tailParticle1);
      this.tailParticles2.push(tailParticle2);
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

    // Draw the square and its tails
    this.draw();
  }
}

export default Square;
