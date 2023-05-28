import React from "react";
import * as Styled from "./style";
import { BottomBar } from "../BottomBar";

interface TitleProps {
  description: React.ReactElement | string;
  tagOfTitle?: string;
}

export const Title: React.FC<TitleProps> = ({ description, tagOfTitle }) => {
  const getTypeTitle = (tagSize: string) => {
    switch (tagSize) {
      case "h1":
        return Styled.H1;

      case "h2":
        return Styled.H2;

      case "h3":
        return Styled.H3;

      case "h4":
        return Styled.H4;

      case "h5":
        return Styled.H5;

      default:
        return Styled.H1;
    }
  };

  const HeadingComponent = getTypeTitle(tagOfTitle!);

  return (
    <>
      <HeadingComponent>{description}</HeadingComponent>
      <BottomBar colorBar="orange" />
    </>
  );
};
