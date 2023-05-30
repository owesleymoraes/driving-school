import React, { InputHTMLAttributes } from "react";
import * as Styled from "./style";

interface ButtonProps extends InputHTMLAttributes<ButtonProps> {
  color?: string;
  width?: number;
  height?: number;
  children: string;
  fontSize?: number;
  marginTop?: number;
  isDisabled?: boolean;
  borderRadius?: number;
  marginBottom?: number;
  backgroundColor?: string;

  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  width = 120,
  height = 48,
  fontSize = 16,
  isDisabled,
  borderRadius,
  color = "#212121",
  backgroundColor = "#ffc107",

  onClick,
}) => {
  return (
    <Styled.ButtonContainer>
      <Styled.Button
        disabled={isDisabled}
        style={{
          backgroundColor,
          width,
          height,
          borderRadius,
          color,
          fontSize,
        }}
        onClick={onClick}
      >
        {children}
      </Styled.Button>
    </Styled.ButtonContainer>
  );
};
