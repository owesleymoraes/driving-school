import React, { InputHTMLAttributes } from "react";
import * as Styled from "./style";

interface ButtonProps extends InputHTMLAttributes<ButtonProps> {
  color?: string;
  width?: number;
  height?: number;
  children: string;
  isDisabled?: boolean;
  borderRadius?: number;
  backgroundColor?: string;
  marginTop?: number;
  marginBottom?: number;

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
  isDisabled,
 
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
         
        }}
        onClick={onClick}
      >
        {children}
      </Styled.Button>
    </Styled.ButtonContainer>
  );
};
