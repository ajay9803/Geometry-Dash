import { BACKGROUND_SPEED } from "../../constants/speed_constants";
import { menuCtx } from "../../scripts/menu";
import basicGround from "/assets/sprites/backgrounds/game_bg_01_001-hd.png";


let theGround = new Image();
theGround.src = basicGround;

class MenuBackground {
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
    this.x -= BACKGROUND_SPEED;
  };

  draw: () => void = () => {
    menuCtx.drawImage(
      theGround,
      this.x, this.y,
      this.width,
      this.height
    );
  };
}

export default MenuBackground;
