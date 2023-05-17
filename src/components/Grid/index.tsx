import React from "react";
import * as Styled from "./styles";

export interface GridProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Grid: React.FC<GridProps> = ({ children }) => {
  return <Styled.ContainerGrid>{children}</Styled.ContainerGrid>;
};
