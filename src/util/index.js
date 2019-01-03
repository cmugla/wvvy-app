const weeksBetween = (d1, d2) => Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));

export const getEpNumber = () => {
  const now = new Date()
  const startDate = new Date('September 23, 2018 11:00:00');
  return weeksBetween(startDate, now);
}
