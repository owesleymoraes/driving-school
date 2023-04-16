import React, { InputHTMLAttributes } from "react";
import * as Styled from "./style";

interface ButtonProps extends InputHTMLAttributes<ButtonProps> {
  children: string;

  color?: string;
  width?: number;
  height?: number;
  borderRadius?: number;
  backgroundColor?: string;

  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  backgroundColor = "#ffc107",
  borderRadius,
  width = 120,
  height = 48,
  color = "#212121",
}) => {
  return (
    <Styled.ButtonContainer>
      <Styled.Button
        style={{ backgroundColor, width, height, borderRadius, color }}
        onClick={onClick}
      >
        {children}
      </Styled.Button>
    </Styled.ButtonContainer>
  );
};
