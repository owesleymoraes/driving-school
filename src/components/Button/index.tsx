import React from "react";
import * as Styled from "./style";

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Styled.ButtonContainer>
      <Styled.Button onClick={onClick}>{children}</Styled.Button>
    </Styled.ButtonContainer>
  );
};
