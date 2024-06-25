export const saveProgressForToday = (progress: number) => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Retrieve existing progress data from localStorage, or initialize an empty object
  let progressDataString = localStorage.getItem("gameProgressData");
  let progressData = progressDataString ? JSON.parse(progressDataString) : {};

  // Ensure there's an array for today's progress
  if (!progressData[today]) {
    progressData[today] = [];
  }

  // Append the new progress as an object to today's list
  progressData[today].push({ progress: progress });

  // Save the updated progress data back to localStorage
  localStorage.setItem("gameProgressData", JSON.stringify(progressData));
};

export const getTodayProgress = (): Array<{ progress: number }> => {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Retrieve existing progress data from localStorage
  const progressDataString = localStorage.getItem("gameProgressData");
  const progressData = progressDataString ? JSON.parse(progressDataString) : {};

  // Return today's progress list, or an empty array if there's none
  return progressData[today] || [];
};

export const getTopSevenProgresses = (progresses: any[]) => {
  // Sort the progresses in descending order by progress value
  progresses.sort((a, b) => b.progress - a.progress);

  // Return the top 7 progresses
  return progresses.slice(0, 7);
};
