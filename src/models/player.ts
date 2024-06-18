// import { canvas, ctx } from "../main";

import { GRAVITYSTATE } from "../enums/gravity_state";
import {
  canvasCor,
  level1Canvas,
  level1Ctx,
  movingSpeed,
} from "../scripts/level1";

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
  }

  // Draw the square and its tails
  draw = (): void => {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
  };

  // Keep check of the square's mid position
  // trackMidPosition: () => void = () => {
  //   if (this.x < 200) {
  //     this.dx = 3;
  //   } else {
  //     this.dx = 0;
  //   }
  // };

  // Update square's position and its tails' positions
  update = (): void => {
    if (this.dy > 0) {
      this.shouldJump = false;
    }

    // this.trackMidPosition();

    // Update square's position
    this.y += this.dy;
    this.x += movingSpeed;

    let translateX = -movingSpeed;
    let translateY = 0;

    canvasCor.x += movingSpeed;

    if (this.gravityState === GRAVITYSTATE.NORMAL) {
      if (this.y < level1Canvas.height / 4 + this.offsetY) {
        console.log("Go up");
        translateY = 2.5;
        canvasCor.y -= 2.5;
        this.offsetY -= 2.5;
      } else if (this.y > level1Canvas.height * 0.7 + this.offsetY) {
        console.log("Go up");
        translateY = -5.5;
        canvasCor.y += 5.5;
        this.offsetY += 5.5;
      }
    }

    if (this.gravityState === GRAVITYSTATE.FREE) {
    
    }

    level1Ctx.translate(translateX, translateY);

    // Check if the square hits the bottom of the canvas
    if (this.y + this.h + this.dy > this.canvas.height) {
      this.dy = 0;
      this.shouldJump = true;
    } else {
      this.dy += this.gravity; // Simulate gravity
    }

    // Draw the square and its tails
    this.draw();
  };
}

export default Square;
