export const ListenForInstructionButtonClick = (
  mainBody: HTMLDivElement,
  instructionsButton: HTMLButtonElement,
  isInstructionsBoardOpen: boolean
) => {
  instructionsButton.addEventListener("click", () => {
    if (isInstructionsBoardOpen) {
      return;
    }
    isInstructionsBoardOpen = !isInstructionsBoardOpen;
    let instructionsBoard = document.createElement("div");

    instructionsBoard.classList.add("instructions-board");
    mainBody.appendChild(instructionsBoard);

    let closeButton = document.createElement("img");
    closeButton.src = "assets/sprites/icons/cross-icon.png";
    closeButton.alt = "close";
    closeButton.classList.add("leaderboard-cross-image");

    closeButton.addEventListener("click", () => {
      isInstructionsBoardOpen = !isInstructionsBoardOpen;
      mainBody.removeChild(instructionsBoard);
    });

    instructionsBoard.appendChild(closeButton);

    // Append the instructions to the board
    const jumpInstructions = document.createElement("p");
    jumpInstructions.innerHTML =
      "Use <strong>Space</strong> or <strong>Arrow Up</strong> key to jump.";
    instructionsBoard.appendChild(jumpInstructions);

    const continuousJumpInstructions = document.createElement("p");
    continuousJumpInstructions.innerHTML =
      "Hold <strong>Space</strong> or <strong>Arrow Up</strong> key for continuous jumps.";
    instructionsBoard.appendChild(continuousJumpInstructions);
  });
};
