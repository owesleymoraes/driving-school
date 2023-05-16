import React from "react";
import { Feature } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import {
  FaCar,
  FaKey,
  FaMapMarkedAlt,
  FaAccessibleIcon,
  FaMapMarkerAlt,
} from "react-icons/fa";

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
    children: "Algum texto",
    icon: <FaCar />,
  },
};

export const WithGrid: React.FC = () => {
  return (
    <div>
      <Feature icon={<FaCar />} title="Maior e melhor frota">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quod
          similique aperiam amet quaerat error repudiandae dolorum.
        </p>
      </Feature>
      <Feature icon={<FaKey />} title="Habilitação mais rápido">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quod
          similique aperiam amet quaerat error repudiandae dolorum.
        </p>
      </Feature>
      <Feature icon={<FaMapMarkerAlt />} title="Excelente localização">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quod
          similique aperiam amet quaerat error repudiandae dolorum.
        </p>
      </Feature>
      <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quod
          similique aperiam amet quaerat error repudiandae dolorum.
        </p>
      </Feature>
    </div>
  );
};
