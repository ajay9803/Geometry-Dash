export let collectedCoinsCount = 0;

export const setCollectedCoinsCount: (count: number) => void = (
  count: number
) => {
  collectedCoinsCount += count;
};
