import React from "react";
import * as Styled from "./styles";

interface ContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};
