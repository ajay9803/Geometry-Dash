// import spikies from "../../assets/sprites/spikes/spikies.png";

// const spikiesImage = new Image();
// spikiesImage.src = spikies;

// class Spikies {
//   x: number;
//   y: number;
//   w: number;
//   h: number;

//   constructor(x: number, y: number, w: number, h: number) {
//     this.x = x;
//     this.y = y;
//     this.w = w;
//     this.h = h;
//   }

//   draw: () => void = () => {
//     ctx.drawImage(spikiesImage, this.x, this.y, this.w, this.h);
//   };

//   // Method to check collision with a square
//   checkCollisionWithSquare(sx: number, sy: number, sSize: number): boolean {
//     // Define the bounding box for the Spike
//     const spikeLeft = this.x;
//     const spikeRight = this.x + 50;
//     const spikeTop = this.y - 30;
//     const spikeBottom = this.y;

//     // Define the bounding box for the square
//     const squareLeft = sx;
//     const squareRight = sx + sSize;
//     const squareTop = sy;
//     const squareBottom = sy + sSize;

//     // Check if the bounding boxes overlap
//     const isColliding = !(
//       spikeRight < squareLeft ||
//       spikeLeft > squareRight ||
//       spikeBottom < squareTop ||
//       spikeTop > squareBottom
//     );

//     return isColliding;
//   }
// }

// export default Spikies;
