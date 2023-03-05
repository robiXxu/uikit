export interface DayData {
  date: Date;
  count: number;
}

export interface CalendarData {
  data: DayData[][];
  size: number;
}
