import React from "react";
import { Button } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    width: { control: "number" },
    height: { control: "number" },
    borderRadius: { control: "number" },
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "button",
  },
};
