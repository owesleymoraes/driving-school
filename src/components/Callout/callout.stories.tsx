import React from "react";
import { Callout } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Callout",
  component: Callout,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCallout: React.FC = () => {
  return (
    <Callout>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus
      voluptatem blanditiis, quibusdam veniam non, et impedit nulla, cumque
      dolorem corporis vel iste eligendi explicabo distinctio delectus officia.
      Eaque, dolore?
    </Callout>
  );
};
