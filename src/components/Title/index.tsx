import React from "react";
import * as Styled from "./style";
import { BottomBar } from "../BottomBar";

interface TitleProps {
  description: React.ReactElement | string;
}

export const Title: React.FC<TitleProps> = ({ description }) => {
  return (
    <>
      <Styled.Title>{description}</Styled.Title>
      <BottomBar colorBar="orange" />
    </>
  );
};
