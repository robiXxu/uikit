import { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar";
import { DayData } from "./Day/Day";

const generateRandomData = (year: number): DayData[][] => {
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

export default {
  component: Calendar,
  args: {
    data: generateRandomData(2023),
  },
} as Meta<typeof Calendar>;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};
