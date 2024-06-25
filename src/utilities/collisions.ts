import Particle from "../models/particle";
import { endParticles, endWall, particles, theSquare } from "../scripts/level1";

// Animating particles on explosion ( collision with obstacles )
const explodePlayer: () => void = () => {
  for (let k = 0; k < 8; k++) {
    const vx = (Math.random() - 0.5) * 8;
    const vy = (Math.random() - 0.5) * 7;
    const r = Math.random() * 10;
    particles.push(
      new Particle(theSquare.x, theSquare.y, vx, vy, r, "#CC0118")
    );
  }
};

export default explodePlayer;

// Animating particles on level completion
export const showGameCompletionAnimation: () => void = () => {
  for (let k = 0; k < 8; k++) {
    const vx = (Math.random() - 0.5) * 8;
    const vy = (Math.random() - 0.5) * 7;
    const r = Math.random() * 10;
    endParticles.push(
      new Particle(endWall.x - 15, endWall.y + 370, vx, vy, r, theSquare.color)
    );
  }
};
