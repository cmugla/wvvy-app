export const weeksBetween = () => {
  const now = new Date();
  const then = new Date('September 23, 2018 11:00:00');
  return Math.ceil((now - then) / (7 * 24 * 60 * 60 * 1000))
};

export const getEpNumber = () => {
  const diff = weeksBetween();

  // Show is paused for two weeks!
  if(diff === 15 || diff === 16 || diff === 17) {
    return 15
  }

  return diff - 2;
}
