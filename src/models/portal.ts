import { level1Ctx } from "../scripts/level1";
import Square from "../models/player"; // Import Square class
import { GRAVITYSTATE } from "../enums/gravity_state";
import Particle from "./particle";
import { GOLD } from "../constants/color_constants";

// Portal class to create multiple gravity state
class Portal {
  image: HTMLImageElement;
  x: number;
  y: number;
  w: number;
  h: number;
  toGravityState: GRAVITYSTATE;
  isStartPortal: boolean;
  particles: Particle[];

  constructor(
    image: HTMLImageElement,
    x: number, // X-position
    y: number, // Y-position
    w: number,
    h: number,
    toGravityState: GRAVITYSTATE,
    isStartPortal: boolean = true
  ) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.toGravityState = toGravityState;
    this.isStartPortal = isStartPortal; // check to toggle gravity states
    this.particles = [];
  }

  draw = (): void => {
    level1Ctx.drawImage(this.image, this.x, this.y, this.w, this.h);

    for (let k = 0; k < 1; k++) {
      const vx = (Math.random() - 0.5) * 2;
      const vy = (Math.random() - 0.5) * 2;
      const r = Math.random() * 10;
      if (this.isStartPortal) {
        this.particles.push(
          new Particle(this.x, this.y + this.h / 2, vx, vy, r, GOLD)
        );
      } else {
        this.particles.push(
          new Particle(this.x + this.w, this.y + this.h / 2, vx, vy, r, GOLD)
        );
      }
    }

    this.particles.forEach((particle, index) => {
      if (particle.opacity <= 0) {
        this.particles.splice(index, 1);
      } else {
        particle.updatePosition(0.02);
      }
    });
  };

  // Collision detection method
  checkCollisionWithSquare = (square: Square): void => {
    // AABB collision detection
    let hasCollided =
      this.x < square.x + square.w && // Check if the portal's left edge is to the left of the square's right edge
      this.x + this.w > square.x && // Check if the portal's right edge is to the right of the square's left edge
      this.y < square.y + square.h && // Check if the portal's top edge is above the square's bottom edge
      this.y + this.h > square.y; // Check if the portal's bottom edge is below the square's top edge
    if (hasCollided) {
      if (this.isStartPortal) {
        square.gravityState = this.toGravityState;

        // Change the gravity when in free gravity state 
        square.gravity = 0.5;
      } else {
        square.gravityState = this.toGravityState;
        // Change the gravity when in normal gravity state
        square.gravity = 1;
      }
    }
  };
}

export default Portal;
