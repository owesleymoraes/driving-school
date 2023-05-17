import React from "react";
import { Header } from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ["item 1", "item 2", "item 3", "item 4", "item 5"],
  },
};
