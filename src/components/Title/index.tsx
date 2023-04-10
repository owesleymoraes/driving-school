import React from "react";
import * as Styled from "./style";

interface TitleProps {
  description: React.ReactElement | string;
}

export const Title: React.FC<TitleProps> = ({ description }) => {
  return <Styled.Title>{description}</Styled.Title>;
};
