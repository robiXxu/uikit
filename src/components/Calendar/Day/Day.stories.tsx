import { Meta, StoryObj } from "@storybook/react";
import { Day } from "./Day";

export default {
  component: Day,
  argTypes: {
    size: { control: { type: "number" } },
    count: { control: { type: "number" } },
    data: { control: { type: "object" } }
  },
  args: {
    size: 30, 
  },
} as Meta<typeof Day>;

type Story = StoryObj<typeof Day>;

export const Default: Story = {};
