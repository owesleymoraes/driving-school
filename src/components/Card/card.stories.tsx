import React from "react";
import { Card } from ".";
import type { Meta, StoryObj } from "@storybook/react";
import walletCarMotor from "../../assets/wallet-car-moto.jpg";

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultFooter: React.FC = () => {
  return (
    <Card
      nameImg={walletCarMotor as any}
      title="1ª Habilitação Carro e Moto"
      description="Melhor preço para habitação carro e moto."
      onClick={() => {}}
    />
  );
};
