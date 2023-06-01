import React from "react";
import { Footer } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultFooter: React.FC = () => {
  return <Footer />;
};
