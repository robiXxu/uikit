import { colorRanges } from "./constants";
import { DayData } from "./interfaces";

export const getDayColor = (commitCount: number | undefined): string => {
  let colorIndex = commitCount ? Math.ceil(commitCount / 5) : 0;
  if (colorIndex > 7) {
    colorIndex = 7;
  }
  return colorRanges[colorIndex];
};

export const generateRandomData = (year: number): DayData[][] => {
  const start = new Date(year, 0, 1, 0, 0, 0, 0);
  const end = new Date(year, 11, 31, 23, 59, 59, 0);
  const data: DayData[] = [];
  const max = 36;
  for (let c = start; c.getTime() < end.getTime(); c.setDate(c.getDate() + 1)) {
    data.push({
      date: new Date(c),
      count: Math.floor(Math.random() * (max + 1)),
    });
  }
  const daysInWeek = 7;
  return Array(Math.ceil(data.length / daysInWeek))
    .fill([])
    .map((_, index) => index * daysInWeek)
    .map((s) => data.slice(s, s + daysInWeek));
};
