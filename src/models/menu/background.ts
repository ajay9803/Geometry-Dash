import { BACKGROUND_SPEED } from "../../constants/speed_constants";
import { menuCtx } from "../../scripts/menu";
import basicBackground from "/assets/sprites/backgrounds/game_bg_01_001-hd.png";

// Background Image
let theBackground = new Image();
theBackground.src = basicBackground;

class MenuBackground {
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
    this.draw();
    this.x -= BACKGROUND_SPEED;
  };

  draw: () => void = () => {
    menuCtx.drawImage(theBackground, this.x, this.y, this.width, this.height);
  };
}

export default MenuBackground;
