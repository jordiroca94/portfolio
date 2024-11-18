export const yearsPassedSince = (dateString: string) => {
  const currentDate = new Date();

  const startDate = new Date(dateString);

  const differenceInMilliseconds: number =
    currentDate.getTime() - startDate.getTime();

  const millisecondsInAYear: number = 1000 * 60 * 60 * 24 * 365.25;
  const yearsPassed: number = differenceInMilliseconds / millisecondsInAYear;
  return Math.trunc(yearsPassed);
};
