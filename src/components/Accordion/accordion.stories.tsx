import React from "react";
import { Accordion } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultAccordion: React.FC = () => {
  return (
    <Accordion title="Como eu renovo minha CNH ?">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
      voluptas architecto. Hic, blanditiis necessitatibus atque.
    </Accordion>
  );
};
