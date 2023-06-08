import React from "react";
import { AccordionGroup, accordionItems } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import { type } from "os";

const meta = {
  title: "AccordionGroup",
  component: AccordionGroup,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AccordionGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GroupAccordion: React.FC = () => {
  const itemsAccordion: accordionItems[] = [
    {
      titleAccordion: "Como eu renovo minha CNH ?",
      descriptionAccordion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,doloribus. Quasi quisquam harum ullam.",
    },
    {
      titleAccordion: "Como faço mudança de categoria",
      descriptionAccordion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,doloribus. Quasi quisquam harum ullam.",
    },
    {
      titleAccordion: "Fui multado e agora ?",
      descriptionAccordion:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,doloribus. Quasi quisquam harum ullam.",
    },
  ];

  return <AccordionGroup informationAccordion={itemsAccordion} />;
};
