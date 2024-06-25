import {
  getTodayProgress,
  getTopSevenProgresses,
} from "../../utilities/progress_utility";
import { collectedCoinsCount } from "../coins";

export const ListenForLeaderboardButtonClick = (
  mainBody: HTMLDivElement,
  leaderboardButton: HTMLDivElement,
  isLeaderboardOpen: boolean
) => {
  leaderboardButton.addEventListener("click", () => {
    if (isLeaderboardOpen) {
      return;
    }
    isLeaderboardOpen = !isLeaderboardOpen;
    let leaderboard = document.createElement("div");

    leaderboard.classList.add("leaderboard");
    mainBody.appendChild(leaderboard);

    let leaderboardTitle = document.createElement("h1") as HTMLHeadingElement;
    leaderboardTitle.innerHTML = "Today's Leaderboard";
    leaderboardTitle.classList.add("leaderboard-title");

    leaderboard.appendChild(leaderboardTitle);

    let coinsCollectedText = document.createElement("h1") as HTMLHeadingElement;
    coinsCollectedText.innerHTML = `Coins Collected: ${collectedCoinsCount}`;
    coinsCollectedText.classList.add("leaderboard-title");

    leaderboard.appendChild(coinsCollectedText);

    const closeButton = document.createElement("img");
    closeButton.src = "assets/sprites/icons/cross-icon.png"; // Replace with the path to your image
    closeButton.alt = "Close"; // Replace with a description for accessibility
    closeButton.classList.add("leaderboard-cross-image");

    closeButton.addEventListener("click", () => {
      isLeaderboardOpen = !isLeaderboardOpen;
      leaderboard.style.display = "none";
    });

    leaderboard.appendChild(closeButton);

    let mainWrapper = document.createElement("div");
    mainWrapper.classList.add("main-wrapper");
    leaderboard.appendChild(mainWrapper);

    let progressBarsWrapper = document.createElement("div");
    progressBarsWrapper.classList.add("progress-bars-wrapper");
    mainWrapper.appendChild(progressBarsWrapper);

    let progresses = getTodayProgress();
    let topProgresses = getTopSevenProgresses(progresses);

    if (topProgresses.length === 0) {
      let progressText = document.createElement("h1");
      progressText.innerHTML = 'You have no progress for today';

      leaderboard.appendChild(progressText);
    }

    topProgresses.forEach((progress) => {
      let progressbar = document.createElement("div");
      progressbar.classList.add("progressbar");
      progressbar.style.width = "10%";
      progressbar.style.height = `${(progress["progress"] / 100) * 200}px`;
      progressbar.style.backgroundColor = "purple";
      progressBarsWrapper.appendChild(progressbar);
    });

    let progressValues = document.createElement("div");
    progressValues.classList.add("progress-values");

    topProgresses.forEach((progress) => {
      let text = document.createElement("h3");
      text.innerHTML = Math.floor(progress["progress"]).toString() + "%";
      progressValues.appendChild(text);
    });
    mainWrapper.appendChild(progressValues);
  });
};
