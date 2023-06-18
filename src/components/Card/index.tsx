import React from "react";
import { Title } from "../Title";
import { Button } from "../Button";

import * as Styled from "./styles";

interface CardProps {
  nameImg?: string;
  title?: string;
  description?: string;
  descriptionImage?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  nameImg,
  title = "",
  description,
  descriptionImage,
  onClick,
}) => {
  return (
    <Styled.BodyCard>
      <Styled.WrapperCard>
        <Styled.Image src={nameImg} alt="Not found img" />
        {descriptionImage && (
          <Styled.DescriptionImage>{descriptionImage}</Styled.DescriptionImage>
        )}
        <Styled.TitleCard>
          {title && <Title tagOfTitle="h6" description={title} />}
        </Styled.TitleCard>
        {description && (
          <Styled.DescriptionCard>{description}</Styled.DescriptionCard>
        )}
        <Styled.ButtonCard>
          {title && (
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
          )}
        </Styled.ButtonCard>
      </Styled.WrapperCard>
    </Styled.BodyCard>
  );
};
