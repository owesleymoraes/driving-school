import React from "react";
import { HomePage } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Home-Page",
  component: HomePage,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHomePage: React.FC = () => {
  return <HomePage />;
};
