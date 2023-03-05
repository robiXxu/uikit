import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button/Button";
import { Tooltip } from "./Tooltip";

export default {
  component: Tooltip,
  argTypes: {
    content: { control: { type: "text" } },
    direction: {
      control: { type: "radio" },
      options: [
        "top",
        "bottom",
        "left",
        "right",
      ]
    },
  },
  args: {
    content: "Tooltip Text Content",
    children: Button({label: "Testing Tooltip"}),
    direction: "top"
  },
  decorators: [
    (Story, content) => <div className="w-full h-full flex justify-center my-14"><Story direction={content.args.direction} content={content.args.content} /></div>
  ]
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};
