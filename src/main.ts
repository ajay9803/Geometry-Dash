// import { SPEED } from "./constants/speed_constants";
import Square, { PlayerTail } from "./models/player";
import platforms from "./scripts/platforms";
import spikes from "./scripts/spikes";

let pause: boolean = false;
let movingSpeed = 8;

export const canvas = document.getElementById("canvas") as HTMLCanvasElement;
canvas.height = innerHeight - 6;
canvas.width = innerWidth - 6;

export const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

let theSquare = new Square(0, 500, 50, 50, 0, 0, "blue");

// animate the square

const animate = () => {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  requestAnimationFrame(animate);

  spikes.forEach((spike) => {
    const isColliding = spike.checkCollisionWithSquare(
      theSquare.x,
      theSquare.y,
      50
    );
    if (isColliding) {
      console.log("Collision detected with spike!");
      theSquare.color = "orange";
    }
  });

  spikes.forEach((spike) => {
    if (theSquare.y < canvas.height / 2) {
      spike.y += 2.5;
    }
    spike.draw();
    spike.x -= movingSpeed;
  });

  platforms.forEach((platform) => {
    if (theSquare.y < canvas.height / 2) {
      platform.y += 2.5;
    }
    platform.draw();
    platform.x -= movingSpeed;
  });

  theSquare.update();

  platforms.forEach((platform) => {
    platform.draw();
    platform.checkCollisionWithSquare(theSquare);
  });
};

animate();

// Create key down event listener
addEventListener("keydown", ({ code }) => {
  console.log(code);
  // Jump

  if (code === "Space" || code === "ArrowUp") {
    if (theSquare.shouldJump) {
      theSquare.dy -= 15;

      // Set jump status to false, while the square is jumping
      theSquare.shouldJump = false;
    }
  }

  // Pause the game
  if (code === "Enter") {
    pause = !pause;
    if (pause) {
      movingSpeed = 0;
    } else {
      movingSpeed = 8;
    }
  }
});

const restartLevel = () => {
  
}