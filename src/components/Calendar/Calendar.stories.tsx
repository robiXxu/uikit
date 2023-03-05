import { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "./Calendar";
import { generateRandomData } from "./utils";

export default {
  component: Calendar,
  args: {
    data: generateRandomData(2023),
  },
} as Meta<typeof Calendar>;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};
