import Particle from "../models/particle";
import { particles, theSquare } from "../scripts/level1";

const explodePlayer: () => void = () => {
    for (let k = 0; k < 15; k++) {
      const vx = (Math.random() - 0.5) * 3;
      const vy = (Math.random() - 0.5) * 7;
      const r = Math.random() * 10;
      particles.push(
        new Particle(theSquare.x, theSquare.y, vx, vy, r, "#CC0118")
      );
    }
}

export default explodePlayer;