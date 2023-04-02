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
    title: "Ganhe sua limberdade para ir e vir",
    children: (
      <ul>
        <li>item da lista</li>
        <li>item da lista</li>
        <li>item da lista</li>
        <li>item da lista</li>
      </ul>
    ),
  },
};
