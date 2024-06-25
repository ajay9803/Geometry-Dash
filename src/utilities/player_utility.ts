// Utility function to retrieve customized character
export const getCustomization = () => {
  const playerImageId = localStorage.getItem("selectedPlayerImage") || "cube-1"; // Default to cube-1 if none selected
  const playerImageSrc = `assets/sprites/cubes/${playerImageId}.png`;

  const playerBackgroundColor =
    localStorage.getItem("selectedPlayerColor") || "red"; // Default color

  return { playerImageSrc, playerBackgroundColor };
};
