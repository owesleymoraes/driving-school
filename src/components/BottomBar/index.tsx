import React from "react";
import * as Styled from "./style";

interface BottomBarProps {
  colorBar: string;
}

export const BottomBar: React.FC<BottomBarProps> = ({ colorBar }) => {
  return (
    <>
      <Styled.BottomBar colorBar={colorBar} />
    </>
  );
};
