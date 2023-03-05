
import { Meta, StoryObj } from "@storybook/react";
import { Legend } from './Legend';

export default {
  component: Legend,
  argTypes: {
    size: { control: { type: "number" } }
  },
  args: {
    size: 30,
  },
  // this is wild .... come back to this.
  // decorators: [
  //   (Story, context) => <Story size={context.args.size} />
  // ],
} as Meta<typeof Legend>;

type Story = StoryObj<typeof Legend>;

export const Default: Story = {};
