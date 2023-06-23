import React from "react";
import { CalloutBody } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { Callout } from "./components/Callout";

const meta = {
  title: "CalloutBody",
  component: CalloutBody,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CalloutBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCalloutBody: React.FC = () => {
  return (
    <CalloutBody
      nameButton="Matricular"
      title="Faça Sua matrícula agora mesmo"
      paragraph="  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
          doloremque molestias aspernatur architecto ducimus impedit nemo
          consequuntur minima delectus repudiandae, numquam repellat tempore
          commodi dicta. Praesentium voluptatibus esse commodi aperiam?"
    />
  );
};
