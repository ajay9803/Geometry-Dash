import { theSquare } from "../level1";
import { menuCanvas } from "../menu";

export const ListenForCustomizeButtonClick = (mainBody: HTMLDivElement) => {
  const title = document.getElementById("title-img") as HTMLImageElement;

  // Select the button using its ID
  const playButton = document.getElementById("play-button") as HTMLDivElement;
  const customizeButton = document.getElementById(
    "customize-button"
  ) as HTMLDivElement;
  const randomButton = document.getElementById(
    "random-button"
  ) as HTMLDivElement;

  const leaderboardButton = document.getElementById(
    "leaderboard-button"
  ) as HTMLDivElement;

  const instructionsButton = document.getElementById(
    "instructions-button"
  ) as HTMLButtonElement;

  customizeButton.addEventListener("click", () => {
    title.style.display = "none";
    playButton.style.display = "none";
    customizeButton.style.display = "none";
    randomButton.style.display = "none";
    leaderboardButton.style.display = "none";
    instructionsButton.style.display = "none";

    menuCanvas.style.display = "none";
    mainBody.style.justifyContent = "start";
    mainBody.style.alignItems = "start";
    mainBody.style.background =
      "linear-gradient(to right, transparent, #787878)";

    const customizeWrapper = document.createElement("div");
    customizeWrapper.classList.add("customize-wrapper");

    mainBody.appendChild(customizeWrapper);

    const closeButton = document.createElement("img");
    closeButton.src = "assets/sprites/icons/cross-icon.png"; // Replace with the path to your image
    closeButton.alt = "Close"; // Replace with a description for accessibility
    closeButton.classList.add("cross-image");

    customizeWrapper.appendChild(closeButton);

    const selectedPlayerImage = document.createElement("img");
    selectedPlayerImage.id = "selected-player"; // Set an ID for easy access later
    selectedPlayerImage.classList.add("selected-player-image");
    customizeWrapper.appendChild(selectedPlayerImage);

    const line = document.createElement("div");
    line.classList.add("separator-line");
    customizeWrapper.appendChild(line);

    // Create a color picker input
    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.id = "color-picker";
    colorPicker.value = "#ff0000"; // Default value (red)
    customizeWrapper.appendChild(colorPicker);

    // Update background color of selected player image when color is picked
    colorPicker.addEventListener("input", () => {
      const selectedColor = colorPicker.value;
      theSquare.color = selectedColor;
      (selectedPlayerImage as HTMLImageElement).style.backgroundColor =
        selectedColor;

      // Save the selected color to local storage
      localStorage.setItem("selectedPlayerColor", selectedColor);
    });

    // Create a flexbox container for the images
    const flexContainer = document.createElement("div");
    flexContainer.classList.add("flex-container");

    // Create and append 8 player images to the flexbox container
    for (let i = 0; i < 9; i++) {
      const playerImg = document.createElement("img");
      playerImg.id = `cube-${i + 1}`;
      playerImg.src = `assets/sprites/cubes/cube-${i + 1}.png`; // Use modulo to loop through available images
      playerImg.alt = `Player ${i + 1}`;
      playerImg.classList.add("player-image");
      flexContainer.appendChild(playerImg);

      playerImg.onclick = () => {
        // Reset border for all player images
        const allPlayerImages = document.querySelectorAll(".player-image");
        allPlayerImages.forEach((img) => {
          (img as HTMLImageElement).style.border = "none";
        });

        // Set border for the selected image
        (playerImg as HTMLImageElement).style.border = "2px dotted blue";

        // Update the selected player image
        (selectedPlayerImage as HTMLImageElement).src = playerImg.src;
        selectedPlayerImage.id = playerImg.id;

        // Save selected player image to local storage
        localStorage.setItem("selectedPlayerImage", playerImg.id);
      };
    }

    // Append the flexbox container to the main body
    customizeWrapper.appendChild(flexContainer);

    // Retrieve the saved player image and color from local storage (if any)
    const savedPlayerId = localStorage.getItem("selectedPlayerImage");
    const savedPlayerColor = localStorage.getItem("selectedPlayerColor");

    if (savedPlayerId) {
      const savedPlayerImage = document.getElementById(
        savedPlayerId
      ) as HTMLImageElement;
      if (savedPlayerImage) {
        (selectedPlayerImage as HTMLImageElement).src = savedPlayerImage.src;
        selectedPlayerImage.id = savedPlayerImage.id;
        savedPlayerImage.style.border = "2px dotted blue";
      }
    } else {
      // Default selection if nothing is saved
      (selectedPlayerImage as HTMLImageElement).src =
        "assets/sprites/cubes/cube-1.png";
      selectedPlayerImage.id = "cube-1";
    }

    if (savedPlayerColor) {
      (selectedPlayerImage as HTMLImageElement).style.backgroundColor =
        savedPlayerColor;
      colorPicker.value = savedPlayerColor; // Set the color picker to the saved color
    } else {
      // Default color if nothing is saved
      (selectedPlayerImage as HTMLImageElement).style.backgroundColor =
        "#ff0000"; // Red
      colorPicker.value = "#ff0000"; // Red
    }

    closeButton.onclick = () => {
      mainBody.removeChild(customizeWrapper);

      menuCanvas.style.display = "block";
      title.style.display = "block";
      playButton.style.display = "block";
      customizeButton.style.display = "block";
      randomButton.style.display = "block";
      leaderboardButton.style.display = "block";
      instructionsButton.style.display = "block";
    };
  });
};
