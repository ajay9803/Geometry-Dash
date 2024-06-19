import { level1Ctx, movingSpeed } from "../scripts/level1";
import thePortal from "../assets/sprites/portals/portal-1.png";
import Square from "../models/player"; // Import Square class
import { GRAVITYSTATE } from "../enums/gravity_state";

let portalImage = new Image();
portalImage.src = thePortal;

class Portal {
  // image: HTMLImageElement;
  x: number;
  y: number;
  w: number;
  h: number;
  toGravityState: GRAVITYSTATE;
  isStartPortal: boolean;

  constructor(
    // image: HTMLImageElement,
    x: number,
    y: number,
    w: number,
    h: number,
    toGravityState: GRAVITYSTATE,
    isStartPortal: boolean = true
  ) {
    // this.image = image;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.toGravityState = toGravityState;
    this.isStartPortal = isStartPortal;
  }

  draw = (): void => {
    level1Ctx.drawImage(portalImage, this.x, this.y, this.w, this.h);
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
        square.color = "purple";
        square.gravityState = this.toGravityState;
        square.dy = 1;
        square.gravity = 0.5;
      } else {
        square.color = "blue";
        square.gravityState = this.toGravityState;
        square.gravity = 1;
      }
    }
  };
}

export default Portal;
