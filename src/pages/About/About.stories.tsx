import React from "react";
import { About } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "About-Page",
  component: About,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof About>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultAboutPage: React.FC = () => {
  return <About />;
};
