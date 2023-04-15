import React from "react";
import { BottomBar } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "BottomBar",
  component: BottomBar,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof BottomBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    colorBar: "orange"
  },
};
