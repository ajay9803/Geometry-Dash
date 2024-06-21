// Initialize or get the number of attempts from local storage
export const getAttempts = () => {
  const attempts = localStorage.getItem("attempts");
  return attempts ? parseInt(attempts, 10) : 1;
};

export let attemptCount = getAttempts();

// Save the number of attempts to local storage
export const saveAttempts = () => {
  attemptCount += 1;
  localStorage.setItem("attempts", attemptCount.toString());
};
