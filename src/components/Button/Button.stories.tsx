import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

export default {
  component: Button,
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
  args: {
    label: "Button",
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
