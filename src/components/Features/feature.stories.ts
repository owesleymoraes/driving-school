import React from "react";
import { Feature } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Feature",
  component: Feature,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Feature>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Vendas",
    children: "Algum texto"
  },
};
