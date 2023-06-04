import React from "react";
import * as Styled from "./style";
import { BottomBar } from "../BottomBar";

interface TitleProps {
  description: React.ReactElement | string;
  tagOfTitle?: string;
  withBottomBar?: boolean;
}

export const Title: React.FC<TitleProps> = ({
  description,
  tagOfTitle,
  withBottomBar = true,
}) => {
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

      case "h6":
        return Styled.H6;

      default:
        return Styled.H1;
    }
  };

  const HeadingComponent = getTypeTitle(tagOfTitle!);

  return (
    <>
      <HeadingComponent>{description}</HeadingComponent>
      {withBottomBar && <BottomBar colorBar="orange" />}
    </>
  );
};
