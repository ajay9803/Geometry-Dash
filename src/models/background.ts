import basicGround from "../assets/sprites/backgrounds/game_bg_01_001-hd.png";
import { BACKGROUND_SPEED } from "../constants/speed_constants";
import { canvas } from "../main";
// import { menuCtx } from "../scripts/menu";

import { canvasCor, level1Ctx } from "../scripts/level1";

let theGround = new Image();
theGround.src = basicGround;

class Background {
  x: number;
  y: number;
  height: number;
  width: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }

  update: () => void = () => {
    this.draw();
    // this.x -= BACKGROUND_SPEED;
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
