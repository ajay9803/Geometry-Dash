// Collected coin count

export let collectedCoinsCount = 0;

// increment of the coin count
export const setCollectedCoinsCount: (count: number) => void = (
  count: number
) => {
  collectedCoinsCount += count;
};
