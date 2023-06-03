import React from "react";
import { Title } from "../Title";
import { Button } from "../Button";

import * as Styled from "./styles";

interface CardProps {
  nameImg?: "walletCar" | "walletMotor" | "walletCarMotor";
  title?: string;
  description?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  nameImg,
  description,
  title = "Título",

  onClick,
}) => {
  return (
    <Styled.BodyCard>
      <Styled.WrapperCard>
        <Styled.Image src={nameImg} alt="Not found img" />
        <Styled.TitleCard>
          <Title tagOfTitle="h6" description={title} />
        </Styled.TitleCard>
        <Styled.DescriptionCard>{description}</Styled.DescriptionCard>
        <Styled.ButtonCard>
          <Button
            color="#ffc107"
            borderRadius={8}
            width={100}
            height={32}
            fontSize={12}
            backgroundColor="transparent"
            onClick={() => onClick}
          >
            Saiba mais
          </Button>
        </Styled.ButtonCard>
      </Styled.WrapperCard>
    </Styled.BodyCard>
  );
};
