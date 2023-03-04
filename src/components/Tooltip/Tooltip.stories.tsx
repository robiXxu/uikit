import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

export default {
  component: Tooltip,
  argTypes: {
    content: { control: { type: "text" } },
  },
  args: {
    content: "Some tooltip text",
  },
  decorators: [
    (Story, context) => (
      <Story content={context.args.content}>
        <div>WAFUD</div>
      </Story>
    ),
  ],
} as Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};
