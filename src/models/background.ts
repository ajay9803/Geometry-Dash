import basicGround from "/assets/sprites/backgrounds/game_bg_01_001-hd.png";

import { canvasCor, level1Ctx } from "../scripts/level1";

// Gameplay ground - image
let theGround = new Image();
theGround.src = basicGround;

class Background {
  x: number; // X-position
  y: number; // Y-position
  height: number;
  width: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  update: () => void = () => {
    // Draw static background
    this.draw();
  };

  draw: () => void = () => {
    level1Ctx.drawImage(
      theGround,
      canvasCor.x,
      canvasCor.y,
      this.width,
      this.height
    );
  };
}

export default Background;
